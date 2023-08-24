let section = document.querySelector('section');
let btn = document.querySelector('button')
let exit = document.querySelector('svg')
btn.addEventListener('click', () => {
    section.classList.remove('hide');
})
exit.addEventListener('click', () => {
    section.classList.add('hide');
})