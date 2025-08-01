const fact = document.getElementById('fact');
const entry = document.getElementById('entry');
const first_entry_button = document.getElementById('first_entry_button');
const name_button = document.getElementById('name');
const welcome = document.getElementById('first_welcome');
const taiwan = document.getElementById('taiwan');
const china = document.getElementById('china');
let i = 0;
const russia = document.getElementById('russia');
const to_unemployed = document.getElementById('to_unemployed');
const unemployed = document.getElementById('unemployed');
const feared_people = document.getElementById('feared_people');
const four_nation = document.getElementById('four_nation');
const last_next = document.getElementById('last_page');
const last_page = document.getElementById('sob_story');

first_entry_button.addEventListener('click', () => {
    welcome.remove();
    entry.style.display = 'inline-block';
});

name_button.addEventListener('click', () => {
    const name = document.getElementById('name_input').value;
    if (name === '') {
        document.getElementById('name_result').textContent =
          'WOW!!! You are so capable of becoming a detective; you already knew that real detectives never reveal their identities. However, since you responded to my command, you are now my good boy.';
    } else {
        document.getElementById('name_result').textContent =
          'Oh sh*t, you are so incapable of becoming a detective. Don’t you know that real detectives never reveal their identity? However, since you responded to my command, you are capable of becoming my good boy.';
    }
    name_button.remove();
    let new_button = document.createElement('button');
    new_button.id = 'start_screen_pass_button';
    new_button.textContent = 'Next';
    entry.appendChild(new_button);

    new_button.addEventListener('click', () => {
        entry.remove();
        fact.style.display = 'inline-block';
    });
});

const second_next = document.getElementById('second_next');
second_next.addEventListener('click', () => {
    fact.remove();
});

second_next.addEventListener('click', () => {
    four_nation.style.display = 'inline-block';
});

taiwan.addEventListener('click', () => {
    if (i === 0) {
        taiwan.textContent = 'China';
        i++;
    } else if (i === 1) {
        taiwan.remove();
        let chinaWidth = parseInt(getComputedStyle(china).width);
        china.style.width = (chinaWidth * 2) + "px";
    }
});

russia.addEventListener('click', () => {
    document.getElementById('russia_des').textContent =
      'Ever wondered how Russia got its name? Well, there was a vodka brand named Russia.';
});

to_unemployed.addEventListener('click', () => {
    unemployed.style.display = 'inline-block';
    four_nation.remove();
});

feared_people.addEventListener('click', () => {
    document.getElementById('people').style.display = 'inline-block';
});

last_next.addEventListener('click', () => {
    unemployed.remove();
    document.getElementById('people').remove();
    last_page.style.display = 'inline-block';
});
