const req = document.getElementById("req");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const arrowImg = document.getElementById("arrow");
const baitImg = document.getElementById("bait");
const leftContainer = document.getElementById("left-container");
const insult = document.getElementById("insult");
const backBtn = document.getElementById("back");
const main = document.getElementById("main");
const rightContainer = document.getElementById("right-container");
const propose = document.getElementById("propose");
const main2 = document.getElementById("main2");
const ilu2Btn = document.getElementById("ilu-2");
const container = document.getElementById("container");
const end = document.getElementById("end");

leftBtn.addEventListener('click', ()=> {
    container.style.display = 'none';
    leftContainer.style.display = 'flex';
}
)
backBtn.addEventListener('click', ()=>{
    container.style.display = 'flex';
    leftContainer.style.display = 'none';
})
rightBtn.addEventListener('click', ()=>{
    container.style.display = 'none';
    rightContainer.style.display = 'flex';
})
ilu2Btn.addEventListener('click', ()=>{
    rightContainer.style.display = 'none';
    end.style.display = 'flex';
})
