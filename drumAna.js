
function playSound(code) {
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);
    console.log(key);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
}

function keyDownHandler(e) {
    playSound(e.keyCode);
}

function clickHandler(e) {
    const code = this.dataset.key;
    playSound(code);
}

// Remove the playing class after the user hits a key
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

// Call functions
const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', clickHandler));

window.addEventListener('keydown', keyDownHandler);