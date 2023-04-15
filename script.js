function playSound(e) {
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`); //get audio based on data-key attribute
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if (!audio) {
        console.log("Not get")
        return;  //in the case audio not fetched otherwise it will show null
    }
    console.log(key);
    audio.currentTime = 0;   //rewind to the start
    audio.play();
    key.classList.add('playing');   //add a class to the element, there are also other functions like remove etc
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;   //skip if not transform
        console.log(e.propertyName);
        this.classList.remove('playing');  //remove the playing
    }

//getting all elements and adding transitionend property to them
    const keys = document.querySelectorAll('.key');
    keys.forEach((k) => k.addEventListener('transitionend', removeTransition));   //transitionend event listener
}


window.addEventListener('keydown', playSound);


