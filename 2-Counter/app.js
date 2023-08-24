let dec = document.querySelector('.btn1')
let res = document.querySelector('.btn2')
let inc = document.querySelector('.btn3')
let counter = document.querySelector('.counter')
let count = 0
function doIt() {
    counter.innerHTML = count;
}
function color() {
    if (count > 0) {
        counter.style.color = 'green'
    } else if (count < 0) {
        counter.style.color = 'red'
    } else {
        counter.style.color = '#102a42'
    }
}
res.addEventListener('click', () => {
    count = 0;
    doIt()
    color()
})
dec.addEventListener('click', () => {
    count--;
    counter.style.color = 'red'
    doIt()
    color()
})
inc.addEventListener('click', () => {
    count++;
    doIt()
    color()
})
