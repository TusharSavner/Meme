const ground = document.getElementById('ground');
const groundWidth = ground.clientWidth;
const groundHeight = ground.clientHeight;

let bet = 10;
let totalBet = 0;
let gain = 0;
let boxCount = 0;
let gameActive = true; 

document.getElementById('bet').textContent = `Next Bet : $${bet.toFixed(2)}`;
document.getElementById('gain').textContent = `Total Gain : $${gain.toFixed(2)}`;
document.getElementById('totalBet').textContent = `TotalBet : $${totalBet.toFixed(2)}`;

function isColliding(div1, div2) {
    const r1 = div1.getBoundingClientRect();
    const r2 = div2.getBoundingClientRect();

    return !(
        r1.top > r2.bottom ||
        r1.bottom < r2.top ||
        r1.left > r2.right ||
        r1.right < r2.left
    );
}

function checkCollisions(newThing) {
    const allThings = document.querySelectorAll('.thing');
    for (let t of allThings) {
        if (t !== newThing && isColliding(t, newThing)) {
            return true;
        }
    }
    return false;
}

function gameOver() {
    gameActive = false;

    const lostAmount = gain; 
    gain = 0;

    // Delay the Game Over screen by 1 second
    setTimeout(() => {
        document.getElementById('finalGain').textContent = 
            `You could have withdrawn $${lostAmount.toFixed(2)} but you lost it all 💔`;

        document.getElementById('gameOver').style.display = "flex";

        document.getElementById('gain').textContent = `Gain : $0.00`;
    }, 1000);
}

function restartGame() {
    // Reset values
    bet = 10;
    totalBet = 0;
    gain = 0;
    boxCount = 0;
    gameActive = true;

    // Remove all spawned things
    document.querySelectorAll('.thing').forEach(el => el.remove());

    // Hide Game Over screen
    document.getElementById("gameOver").style.display = "none";

    // Reset stats
    document.getElementById('bet').textContent = `Next Bet : $${bet.toFixed(2)}`;
    document.getElementById('gain').textContent = `Total Gain : $${gain.toFixed(2)}`;
    document.getElementById('totalBet').textContent = `TotalBet : $${totalBet.toFixed(2)}`;

    document.getElementById("startScreen").style.display = "none";
}

window.addEventListener("DOMContentLoaded", () => {
    const restartGameBtn = document.getElementById("restartGame");
    if (restartGameBtn) {
        restartGameBtn.addEventListener("click", restartGame);
    }
});

function spawn(e) {
    if (!gameActive) return; 

    if (e.key === ' ') {
        const thing = document.createElement('div');
        thing.classList.add('thing');
        ground.appendChild(thing);

        const thingWidth = thing.offsetWidth;
        const thingHeight = thing.offsetHeight;

        const xPos = Math.random() * (groundWidth - thingWidth);
        const yPos = Math.random() * (groundHeight - thingHeight);

        thing.style.top = `${yPos}px`;
        thing.style.left = `${xPos}px`;

        // Check for collisions
        if (checkCollisions(thing)) {
            gameOver();
            return;
        }

        // Update bets and gains
        totalBet += bet;
        boxCount++;

        let payout = 0;
        if (boxCount === 1) {
            payout = 2.21; 
            gain += payout;
        } else {
            payout = 0.45 * bet + (0.3 * boxCount);
            if (Math.random() < 0.1) {
                payout += bet * 3; 
            }
            gain += payout;
        }

        const lastBet = bet;
        const lastGain = payout; 
        bet = Math.max(0.1, bet * 0.75);

        document.getElementById('bet').textContent = `Next Bet : $${bet.toFixed(2)}`;
        document.getElementById('gain').textContent = `Total Gain : $${gain.toFixed(2)}`;
        document.getElementById('totalBet').textContent = `TotalBet : $${totalBet.toFixed(2)}`;

        spawnFloatingText(`$-${lastBet.toFixed(2)}`, xPos , yPos + 60, "bet");
        spawnFloatingText(`$+${lastGain.toFixed(2)}`, xPos, yPos, "gain");
    }
}

function spawnFloatingText(text, x, y, type) {
    const floatText = document.createElement("div");
    floatText.className = `floating-text ${type}`;
    floatText.textContent = text;
    
    floatText.style.left = x + "px";
    floatText.style.top = y + "px";

    document.getElementById("ground").appendChild(floatText);

    console.log("Spawned floating text:", text, "at", x, y); 

    setTimeout(() => floatText.remove(), 5000);
}

document.addEventListener("keydown", (e) => {
    if (!gameActive) return; 
    if (e.key === "Enter") {
        document.getElementById("withdrawMessage").innerHTML = 
          `Are you sure you want to withdraw <b>$${gain.toFixed(2)}</b> 
           after betting <b>$${totalBet.toFixed(2)}</b>?<br>
           You can still place your next bet at <b>$${bet.toFixed(2)}</b>!`;

        document.getElementById("withdrawScreen").style.display = "flex";
    }
});

document.getElementById("confirmWithdraw").addEventListener("click", () => {
    alert(`You successfully withdrew $${gain.toFixed(2)} 🎉`);
    location.reload(); 
});

document.getElementById("continueBetting").addEventListener("click", () => {
    document.getElementById("withdrawScreen").style.display = "none";
});

document.addEventListener('keydown', spawn);

window.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.getElementById("startScreen");
  const startButton = document.getElementById("startButton");

  startButton.addEventListener("click", () => {
    startScreen.style.display = "none"; 
  });
});
