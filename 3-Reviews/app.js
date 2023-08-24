let images = [
    'url(images/person1.jpg)'
    , 'url(images/person2.jpg)'
    , 'url(images/person3.jpg)'
    , 'url(images/person4.jpg)'
]
let names = [
    'Susan Smith'
    , 'Anna Johnson'
    , 'Peter Jones'
    , 'Bill Anderson'
]
let titles = [
    'WEB DEVELOPER'
    , 'WEB DESIGNER'
    , 'INTERN'
    , 'THE BOSS'
]
let paragraphs =
    [
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
        , "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
        , "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
        , "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    ]
let img = document.querySelector('.main-img')
let Name = document.querySelector('#name')
let title = document.querySelector('#title')
let para = document.querySelector('#para')
let back = document.querySelector('#left')
let forward = document.querySelector('#right')
let btn = document.querySelector('button')
let num = 0;
function change(i) {
    img.style.backgroundImage = images[i];
    Name.innerHTML = names[i];
    title.innerHTML = titles[i];
    para.innerHTML = paragraphs[i];
}
back.addEventListener('click', () => {
    if (num == 0) {
        num = 3;
    } else {
        num--;
    }
    change(num);
})
forward.addEventListener('click', () => {
    if (num == 3) {
        num = 0;
    } else {
        num++;
    }
    change(num);
})
btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 4);
    num = random;
    change(random)
})
