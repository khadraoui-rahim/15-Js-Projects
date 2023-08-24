let toggle = document.querySelector('img')
let popup = document.querySelector('ul')
let nav = document.querySelector('nav')
let shown = false
toggle.addEventListener('click', () => {
    if (shown == false) {
        nav.classList.add('height')
        toggle.classList.add('rotate')
        shown = true
    } else {
        nav.classList.remove('height')
        toggle.classList.remove('rotate')
        shown = false
    }
})