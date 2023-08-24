function check(i) {
    if (i === 0) {
        if (index <= 0) {
            index = 0;
            prev.classList.add('hide')
        } else {
            next.classList.remove('hide')
        }
    } else if (i === 1) {
        if (index >= 3) {
            index = 3;
            next.classList.add('hide')
        } else {
            prev.classList.remove('hide')
        }
    }
}
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let imgs = document.querySelectorAll('.image')
let index = 0
let position = []
for (let i = 0; i <= 3; i++) {
    position[i] = -1000 * i;
}
check(0)

next.addEventListener('click', () => {
    index++;
    for (let img of imgs) {
        img.style.transform = `translateX(${position[index]}px )`
    }
    check(1)
})
prev.addEventListener('click', () => {
    index--;
    for (let img of imgs) {
        img.style.transform = `translateX(${position[index]}px )`
    }
    check(0)
})
