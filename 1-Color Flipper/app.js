let btn = document.querySelector('.btn')
let bg = document.querySelector('main')
let colorName = document.querySelector('.current-color')
let letters = ['A', 'B', 'C', 'D', 'E', 'F']
let hex = []
function randomHexColor() {
    hex = [];
    for (let i = 1; i <= 6; i++) {
        let random = Math.floor(Math.random() * 16)
        if (random <= 0 || random > 9) {
            switch (random) {
                case 10: random = letters[0]; break;
                case 11: random = letters[1]; break;
                case 12: random = letters[2]; break;
                case 13: random = letters[3]; break;
                case 14: random = letters[4]; break;
                case 15: random = letters[5]; break;
            }
        }
        hex.push(random);
    }
    let ranColor = `#${hex.join('')}`;
    return ranColor;
}
btn.addEventListener('click', () => {
    let color = randomHexColor();
    bg.style.backgroundColor = color;
    colorName.innerHTML = color;
})