function hideClear() {
    let tabs = document.querySelectorAll('.tab')
    if (tabs.length == 0) {
        clear.disabled
        clear.classList.add('white')
    } else {
        clear.enabled
        clear.classList.remove('white')
    }
}

function showalert(color, text = 'hi') {
    let alert = document.querySelector('.hide')
    alert.classList.add('alert')
    alert.classList.add(`alert${color}`)
    alert.innerHTML = text
    setTimeout(() => {
        alert.classList.add('hide')
        alert.classList.remove('alert')
        alert.classList.remove(`alert${color}`)
    }, 1000)
}

function removeAllTabs() {
    let tabs = document.querySelectorAll('.tab')
    if (!(tabs.length == 0)) {
        for (let el of tabs) {
            el.remove()
        }
        showalert('Red', 'all elements have been removed')
        hideClear()
    }
}
function addTask(text) {
    if (normal == true) {
        if (text !== undefined) {
            let tab = document.createElement('div');
            tab.classList.add('tab');
            let span = document.createElement('span');
            span.innerHTML = text;
            let icons = document.createElement('div');
            icons.classList.add('icons');
            icons.innerHTML = iconsTEXT;
            clear.insertAdjacentElement('beforebegin', tab);
            tab.append(span);
            tab.append(icons);
            latest = tab;
        }
    } else {
        edited.children[0].innerHTML = text;
        edited.classList.remove('color')
        showalert('Green', 'Has Been Edited')
        normal = true
    }
}

let section = document.querySelector('section');
let clear = document.querySelector('.clear')
let iconsTEXT = `                <svg class='edit' xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
                    <path
                        d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                </svg>
                <svg class='delete' xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>`




section.addEventListener('mouseover', () => {
    section.classList.add('shadow')
})
section.addEventListener('mouseleave', () => {
    section.classList.remove('shadow')
})
let normal = true;
let latest = 0
let edited = 0

let form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault();
    let info = form.elements[0].value;
    form.elements[0].value = ''
    if (info !== '') {
        addTask(info)
        showalert('Green', 'a new task has been')
        latest.children[1].children[0].addEventListener('click', function () {
            normal = false;
            edited = this.parentElement.parentElement;
            edited.classList.add('color')

        })
        latest.children[1].children[1].addEventListener('click', function () {
            this.parentElement.parentElement.remove()
            showalert('Red', 'an element been removed')
            hideClear()
        })
    } hideClear()

})
clear.addEventListener('click', () => {
    removeAllTabs()
})
hideClear()