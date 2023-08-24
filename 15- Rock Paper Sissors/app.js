let user = {
    score: 0,
    panel: document.querySelector('.user'),
    play: null,
    playShow: document.querySelector('.userPlay')
    , live: document.querySelector('#userResults')
}
let computer = {
    score: 0,
    panel: document.querySelector('.comp'),
    play: null,
    playShow: document.querySelector('.compPlay')
    , live: document.querySelector('#computerResults')
}
let game = {
    userBeats: document.querySelector('.beats-losses'),
    status: document.querySelector('.status'),
    notes: document.querySelector('.game-notes')
}

let choices = ['rock', 'paper', 'scissors']
let images = ['images/rock.png', 'images/hand.png', 'images/scissors.png']
let choiceIndex = null;
let moves = document.querySelectorAll('.move')
let gameStatus = true;
let userWon = true;
// setInterval(() => {
//     gameNotes.classList.toggle('flash')
// }, 1000)
function removeAllColor() {
    user.playShow.classList.remove('green')
    user.playShow.classList.remove('red')
    game.status.classList.remove('red')
    game.status.classList.remove('green')
    computer.playShow.classList.remove('green')
    computer.playShow.classList.remove('red')
}
function addRemoveColor(color1, color2) {
    user.playShow.classList.add(color1)
    game.status.classList.add(color1)
    computer.playShow.classList.add(color2)
}
function addpoints() {
    removeAllColor();
    if (userWon === true) {
        user.score++;
        user.panel.innerHTML = user.score;
        addRemoveColor('green', 'red')
    } else if (userWon === false) {
        computer.score++;
        computer.panel.innerHTML = computer.score;
        addRemoveColor('red', 'green')
    }
}
function StatusEdit(beats, statusus) {
    game.userBeats.innerHTML = beats;
    game.status.innerHTML = statusus;
}
function possiblities(case1, case2) {
    if (computer.play === case1) {
        StatusEdit('losses', 'You Lose')
        userWon = false;
        addpoints()
    } else if (computer.play === case2) {
        StatusEdit('Wins', 'You Win')
        userWon = true;
        addpoints()
    }
}
function randomChoice() {
    let choice = Math.floor(Math.random() * 3)
    return choice
}
function logic() {
    computer.play = randomChoice();
    user.playShow.innerHTML = choices[user.play];
    computer.playShow.innerHTML = choices[computer.play];
    if (user.play === computer.play) {
        StatusEdit('draws', 'its a draw')
        addpoints()
        userWon = 32;
    } else {
        switch (user.play) {
            case 0: possiblities(1, 2); break
            case 1: possiblities(2, 0); break
            case 2: possiblities(0, 1); break
        }
    }
    GUI()
}

function GUI() {
    user.live.classList.remove('green-bd')
    computer.live.classList.remove('red-bd')
    user.live.classList.remove('red-bd')
    computer.live.classList.remove('green-bd')
    user.live.children[0].setAttribute('src', images[user.play])
    computer.live.children[0].setAttribute('src', images[computer.play])
    if (userWon == true) {
        user.live.classList.add('green-bd')
        computer.live.classList.add('red-bd')
    } else if (userWon == false) {
        user.live.classList.add('red-bd')
        computer.live.classList.add('green-bd')
    } else {
        user.live.classList.remove('green-bd')
        computer.live.classList.remove('red-bd')
        user.live.classList.remove('red-bd')
        computer.live.classList.remove('green-bd')
    }
}
for (let move of moves) {
    move.addEventListener('click', function () {
        user.play = parseInt(this.id);
        logic()
    })
}