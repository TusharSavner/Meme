const container = document.getElementById('container');
const intro = document.getElementById('intro');
const intro_h = document.getElementById('intro_h');
const ok = document.getElementById('ok');

const after_defate = document.getElementById('after_defate');
const pfp = document.getElementById('pfp');
const pfp_h = document.getElementById('pfp_h');
const pfp_options = document.getElementById('pfp_options');
const first_pfp = document.getElementById('first_pfp');
const second_pfp = document.getElementById('second_pfp');
const third_pfp = document.getElementById('third_pfp');
const forth_pfp = document.getElementById('forth_pfp');
const fifth_pfp = document.getElementById('fifth_pfp');
const sixth_pfp = document.getElementById('sixth_pfp');

const quiz = document.getElementById('quiz');

const q1 = document.getElementById('q1');
const q1_text = document.getElementById('q1_text');
const q1_yes = document.getElementById('q1_yes');
const q1_no = document.getElementById('q1_no');
const r1 = document.getElementById('r1');
const r1_text = document.getElementById('r1_text');
const q1_next = document.getElementById('q1_next');

const q2 = document.getElementById('q2');
const q2_text = document.getElementById('q2_text');
const q2_yes = document.getElementById('q2_yes');
const q2_no = document.getElementById('q2_no');
const r2 = document.getElementById('r2');
const r2_text = document.getElementById('r2_text');
const q2_next = document.getElementById('q2_next');

const q3 = document.getElementById('q3');
const q3_text = document.getElementById('q3_text');
const q3_yes = document.getElementById('q3_yes');
const q3_no = document.getElementById('q3_no');
const r3 = document.getElementById('r3');
const r3_text = document.getElementById('r3_text');
const q3_next = document.getElementById('q3_next');
const donald_trump = document.getElementById('donald_trump');

const q4 = document.getElementById('q4');
const q4_text = document.getElementById('q4_text');
const q4_yes = document.getElementById('q4_yes');
const q4_no = document.getElementById('q4_no');
const r4 = document.getElementById('r4');
const r4_text = document.getElementById('r4_text');
const q4_next = document.getElementById('q4_next');

const q5 = document.getElementById('q5');
const q5_text = document.getElementById('q5_text');
const q5_yes = document.getElementById('q5_yes');
const q5_no = document.getElementById('q5_no');
const r5 = document.getElementById('r5');
const r5_text = document.getElementById('r5_text');
const q5_next = document.getElementById('q5_next');

const q6 = document.getElementById('q6');
const q6_text = document.getElementById('q6_text');
const q6_yes = document.getElementById('q6_yes');
const q6_no = document.getElementById('q6_no');
const r6 = document.getElementById('r6');
const r6_text = document.getElementById('r6_text');
const q6_next = document.getElementById('q6_next');
const space = document.getElementById('space');

const q7_yes = document.getElementById('q7_yes');
const q7_no = document.getElementById('q7_no');

const scoreboard = document.getElementById('scoreboard');
const you = document.getElementById('you');
const you_pfp = document.getElementById('you_pfp');
const you_score = document.getElementById('you_score');
const me = document.getElementById('me');
const me_pfp = document.getElementById('me_pfp');
const me_score = document.getElementById('me_score');

const defated = document.getElementById('defated');
const defated_text = document.getElementById('defated_text');
const defated_q = document.getElementById('defated_q');
const if_yes = document.getElementById('if_yes');
const yes_text = document.getElementById('yes_text');
const if_no = document.getElementById('if_no');
const no_text = document.getElementById('no_text');

const pfp_warnings = document.getElementById('pfp_warnings');

ok.addEventListener('click', function(){
    pfp.style.display = 'flex';
    intro.remove()
})

first_pfp.addEventListener('click', function(){
    first_pfp.remove();
    pfp_warnings.textContent = `Hey! Move your hands off my pfp.`
});
second_pfp.addEventListener('click', function(){
    second_pfp.remove();
    pfp_warnings.textContent = `ABRA! KADABRA!!`
});
third_pfp.addEventListener('click', function(){
    third_pfp.remove();
    pfp_warnings.textContent = `Come on, you’re not even a bit cool.`
});
forth_pfp.addEventListener('click', function(){
    forth_pfp.remove();
    pfp_warnings.textContent = `Sorry, but it’s taken by my non-existent girlfriend.`
});
fifth_pfp.addEventListener('click', function(){
    fifth_pfp.remove();
    alert("FBI: We are watching you, motherf*cker.")
});
sixth_pfp.addEventListener('click', function(){
    sixth_pfp.textContent = `WTF! Is this really your choice?`
    pfp.remove();
    scoreboard.style.display = 'flex';
    q1.style.display = 'flex';
});

ok.addEventListener('click', function(){});


q1_yes.addEventListener('click', function(){
    alert("God: My child, please don't lie.")
});
q1_no.addEventListener('click', function(){
    q1.remove()
    r1.style.display = 'flex';
    me_score.textContent = `My Score: 01`
});
q1_next.addEventListener('click', function(){
    r1.remove();
    q2.style.display = 'flex';
});

q2_yes.addEventListener('click', function(){
    q2_yes.textContent = 'Actually, no one can be that messed up. I’m lying too.';
    q2_yes.style.height = '50px';
});
q2_no.addEventListener('click', function(){
    q2.remove()
    r2.style.display = 'flex';
    me_score.textContent = `My Score: 02`
});
q2_next.addEventListener('click', function(){
    r2.remove();
    q3.style.display = 'flex';
});

q3_yes.addEventListener('click', function(){
    alert("FBI: Motherf*cker!!! We already warned you.")
});
q3_no.addEventListener('click', function(){
    q3.remove()
    r3.style.display = 'flex';
    me_score.textContent = `My Score: 03`
});
q3_next.addEventListener('click', function(){
    r3.remove();
    q4.style.display = 'flex';
});


q4_yes.addEventListener('click', function(){
    alert("Ice-Cream Lover: If you do, then why the hell don’t you post?? I’m the only one who does.")
});
q4_no.addEventListener('click', function(){
    q4.remove()
    r4.style.display = 'flex';
    me_score.textContent = `My Score: 04`
});
q4_next.addEventListener('click', function(){
    r4.remove();
    q5.style.display = 'flex';
});


q5_yes.addEventListener('click', function(){
    alert('Einstein: Then repeat the theory of general relativity.')
});
q5_no.addEventListener('click', function(){
    q5.remove()
    r5.style.display = 'flex';
    me_score.textContent = `My Score: 05`
});
q5_next.addEventListener('click', function(){
    r5.remove();
    q6.style.display = 'flex';
});


q6_yes.addEventListener('click', function(){
    alert("NASA: No, you never did.")
});
q6_no.addEventListener('click', function(){
    q6.remove()
    r6.style.display = 'flex';
    me_score.textContent = `My Score: 06`
});
q6_next.addEventListener('click', function(){
    r6.remove();
    after_defate.style.display = 'flex';
    defated.style.display = 'flex';
    scoreboard.remove();
});

no_text.addEventListener('click', function(){

})

q7_yes.addEventListener('click', function(){
    if_no.remove();
    defated.remove();
    if_yes.style.display = 'inline-block';
    if_yes.style.display = "flex";
});
q7_no.addEventListener('click', function(){
    if_no.style.display = 'inline-block';
});

function forget() {
    alert('Actually, I forgot to add the exit code, so please exit it yourself.')
}
