
// Allow the user to play a sound everytime they press a key
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    // If keyCode doesn't belong to any sound, stops function
    if (!audio) return;

    // Allows to play everytime you hit a key
    audio.currentTime = 0;
    audio.play();

    // Adds the class playing to key
    key.classList.add('playing');
}

// Remove the playing class after the user hits a key
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

// Call functions
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
