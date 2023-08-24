let toggle = document.querySelector('img')
let main = document.querySelector('main')
let shown = false
toggle.addEventListener('click', () => {
    if (shown == false) {
        main.classList.add('show')
        toggle.classList.add('rotate')
        shown = true
    } else {
        main.classList.remove('show')
        toggle.classList.remove('rotate')
        shown = false
    }
})