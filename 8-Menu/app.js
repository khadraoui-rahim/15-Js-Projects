let data = [
    {
        name: 'Buttermilk Pancakes',
        price: '$15.99',
        info: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        url: 'url(Images/item-1.jpeg)',
        type: 'Breakfast'
    },
    {
        name: 'Diner Double',
        price: '$13.99',
        info: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        url: 'url(Images/item-2.jpeg)',
        type: 'lunch'
    },
    {
        name: 'Godzilla Milkshake',
        price: '$6.99',
        info: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        url: 'url(Images/item-3.jpeg)',
        type: 'Shakes'
    },
    {
        name: 'Country Delight',
        price: '$20.99',
        info: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
        url: 'url(Images/item-4.jpeg)',
        type: 'Breakfast'
    },
    {
        name: 'Egg Attack',
        price: '$22.99',
        info: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        url: 'url(Images/item-5.jpeg)',
        type: 'lunch'
    },
    {
        name: 'Oreo Dream',
        price: '$18.99',
        info: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        url: 'url(Images/item-6.jpeg)',
        type: 'Shakes'
    },
    {
        name: 'Bacon Overflow',
        price: '$8.99',
        info: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        url: 'url(Images/item-7.jpeg)',
        type: 'Breakfast'
    },
    {
        name: 'American Classic',
        price: '$12.99',
        info: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        url: 'url(Images/item-8.jpeg)',
        type: 'lunch'
    },
    {
        name: 'Quarantine Buddy',
        price: '$16.99',
        info: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        url: 'url(Images/item-9.jpeg)',
        type: 'Shakes'
    },
    {
        name: 'Steak Dinner',
        price: '$39.99',
        info: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        url: 'url(Images/item-10.jpeg)',
        type: 'Dinner'
    }
]
document.createElement('p')
const panel = document.querySelector('.menu')
function addMenu(data) {
    let card = document.createElement('div')
    let image = document.createElement('div')
    let info = document.createElement('div')
    let infoH2 = document.createElement('h2')
    let infoH2Name = document.createElement('span')
    let infoH2Price = document.createElement('span')
    let infoPara = document.createElement('p')
    panel.append(card)
    card.append(image)
    card.append(info)
    info.append(infoH2)
    infoH2.append(infoH2Name)
    infoH2.append(infoH2Price)
    info.append(infoPara)
    card.classList.add('menuCard')
    image.classList.add('image')
    info.classList.add('info')
    infoH2Name.classList.add('name')
    infoH2Price.classList.add('price')

    infoH2Name.innerHTML = data.name;
    image.style.backgroundImage = data.url;
    infoH2Price.innerHTML = data.price;
    infoPara.innerHTML = data.info;
    card.classList.add(data.type)
}
for (dat of data) {
    addMenu(dat);
}
const cards = document.querySelectorAll('.menuCard')
function showType(typeOf) {
    let show = data.filter(dat => {
        return dat.type == typeOf;
    })
    panel.innerHTML = '';
    for (let dat of show) {
        addMenu(dat)
    }
}

document.querySelector('#All').addEventListener('click', () => {
    panel.innerHTML = ''
    for (dat of data) {
        addMenu(dat);
    }
})

document.querySelector('#Breakfast').addEventListener('click', () => {
    showType('Breakfast');
})

document.querySelector('#lunch').addEventListener('click', () => {
    showType('lunch');
})

document.querySelector('#shakes').addEventListener('click', () => {
    showType('Shakes');
})

document.querySelector('#dinner').addEventListener('click', () => {
    showType('Dinner');
})