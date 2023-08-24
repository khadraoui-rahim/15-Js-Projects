let myVid = document.querySelector('video');
let toggler = document.querySelector('.btn');
let hidden = document.querySelector('.blocked')
toggler.addEventListener('click', () => {
    pauseOrPlay()
})
function pauseOrPlay() {
    if (myVid.paused) {
        myVid.play()
        hidden.classList.remove('right')
    } else {
        myVid.pause()
        hidden.classList.add('right')
    }
}
