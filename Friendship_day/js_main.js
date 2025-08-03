const date = document.getElementById('date');
const intro = document.getElementById('intro');
const yes = document.getElementById('yes');
const no_reply = document.getElementById('No_reply');
const said_sorry = document.getElementById('said_sorry');
const sorry = document.getElementById('sorry');
const q_yes = document.getElementById('q_yes');
const q_no = document.getElementById('q_no');
const larry = document.getElementById('larry');
const another_sorry = document.getElementById('another_sorry');
const final = document.getElementById('final');
const love2 = document.getElementById('love2');
const final2 = document.getElementById('final2');
const happy = document.getElementById('happy');
const goodbye = document.getElementById('goodbye');
const bye = document.getElementById('bye');

date.addEventListener('click', ()=>{
    intro.remove();
    no_reply.style.display = 'inline-block';


})
yes.addEventListener('click', ()=>{
    yes.textContent = `No you don't know!!!, stfu!!!! and click "No" button, go by the script`;
})
sorry.addEventListener('click', ()=> {
    no_reply.remove();
    said_sorry.style.display = 'inline-block';
})
q_yes.addEventListener('click', ()=> {
    q_yes.textContent = `I am begging you, please go by the script, click the 'No' button`;
})

q_no.addEventListener('click', ()=> {
    said_sorry.remove();
    larry.style.display = 'inline-block';
})
another_sorry.addEventListener('click', ()=> {
    larry.remove();
    final.style.display = 'inline-block';
})
love2.addEventListener('click', ()=>{
    final.remove();
    final2.style.display = 'inline-block';
})
happy.addEventListener('click', ()=> {
    final2.remove();
    goodbye.style.display = 'inline-block'
})
bye.addEventListener('click', ()=>{
    
    window.location.href = "https://google.com";
})