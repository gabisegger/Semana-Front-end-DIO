import { subscribeToHellfireClub } from './firebase/hellfire-club.js';

/* Play Music */
window.addEventListener('click', function() {
    const audio = document.getElementById('music');
    audio.play();
    audio.volume = 0.2;
})

/* Inverted World */
function switchTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    const theme = document.body.classList[0];
    const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

    const audio = document.getElementById('music');
    audio.src = `assets/musics/${music}`;
    audio.play();
    audio.volume = 0.2;
  }


/* Form */

const Name = document.getElementById('txtName');
const Email = document.getElementById('txtEmail');
const Level = document.getElementById('txtLevel');
const Character = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');

btnSubscribe.addEventListener('click', () => {
    const subscription = {
        name: Name.value,
        email: Email.value,
        level: Level.value,
        character: Character.value
    };

    /* Save to database */
    subscribeToHellfireClub(subscription);

});

