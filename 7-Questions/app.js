let boxes = document.querySelectorAll('.box')
let toggle = document.querySelectorAll('svg')
let shown = [];
for (let i = 0; i <= 2; i++) {
    shown[i] = false
    toggle[i].addEventListener('click', () => {
        if (shown[i] == false) {
            boxes[i].classList.add('expand')
            shown[i] = true
        }
        else {
            boxes[i].classList.remove('expand')
            shown[i] = false
        }
    })
}
