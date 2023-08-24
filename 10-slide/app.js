// Declaring Variables
const nav = document.querySelector('#navbar');


// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************
function scorllNigger(names) {
    let homebtn = document.querySelector(`#${names}btn`)
    homebtn.addEventListener('click', () => scrollNigga(`${names}`))
}
function scrollNigga(name) {
    let home = document.querySelector(`#${name}`)
    let scrollPos = home.offsetTop - 80 - window.scrollY
    window.scrollBy(0, scrollPos)
}
scorllNigger('home')
scorllNigger('about')
scorllNigger('services')
scorllNigger('tours')

// ********** fixed navbar ************
function check() {
    let stats = nav.getBoundingClientRect()
    if (window.scrollY > stats.height) {
        nav.classList.add('stick')
    } else {
        nav.classList.remove('stick')
    }
}
document.addEventListener('scroll', () => {
    check()
})

// ********** smooth scroll ************
// select linksA

array.filter(() => {

})