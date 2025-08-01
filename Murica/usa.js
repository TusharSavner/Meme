const q1_no = document.getElementById('q1_no');
const q1_yes = document.getElementById('q1_yes');
const q2 = document.getElementById('q2');
const q2_no = document.getElementById('q2_no');
const q2_yes = document.getElementById('q2_yes');
const q3 = document.getElementById('q3');
const q3_no = document.getElementById('q3_no');
const q3_yes = document.getElementById('q3_yes');
const q4 = document.getElementById('q4');
const q4_yes = document.getElementById('q4_yes');
const q5 = document.getElementById('q5');
const q5_yes = document.getElementById('q5_yes');
const q5_no = document.getElementById('q5_no');
const freedom2 = document.getElementById('freedom2');

q1_no.addEventListener('click', () => {
    q1_no.textContent = 'Yes';
    document.getElementById('q1_result').textContent = 'We knew you love America.';
    q2.style.display = 'inline-block';
});

q1_yes.addEventListener('click', () => {
    document.getElementById('q1_result').textContent = 'We knew you love America.';
    q2.style.display = 'block';
});

q2_no.addEventListener('click', () => {
    q2_no.remove();
});

q2_yes.addEventListener('click', () => {
    q3.style.display = 'block';
    document.getElementById('q2_result').textContent = 'Good, that is just a small sacrifice for your nation. Ever thought of contributing even more >>';
});

q3_no.addEventListener('click', () => {
    q3_no.textContent = "Doesn't work";
});

q3_yes.addEventListener('click', () => {
    document.getElementById('q3_result').textContent = 'Because guns taste better than bread.';
    q4.style.display = 'block';
});

q4_yes.addEventListener('click', () => {
    document.getElementById('q4_result').textContent = "That's patriotism, my boy.";
    q5.style.display = 'block';
    setTimeout(() => {
        q5_yes.remove();
        q5_no.remove();
        document.getElementById('q5_result').textContent = "We think you absolutely want freedom, as you already said 'yes' to all of our questions.";
        freedom2.style.display = 'block';
    }, 500);
});
