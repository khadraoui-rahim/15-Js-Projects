const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let divday = document.querySelector('#day')
let divhour = document.querySelector('#hour')
let divmin = document.querySelector('#min')
let divsecond = document.querySelector('#second')
let giveAwayTime = new Date("August 19, 2023 23:15:30")
let tag = document.querySelector('h2')
tag.innerHTML = (`Giveaway End on ${weekdays[giveAwayTime.getDay() - 1]} ${giveAwayTime.getDate()} ${months[giveAwayTime.getMonth() - 1]} 20${giveAwayTime.getYear().toString().slice(1)} 11:30am `)

let date = 0;
let monthDate = 8;
setInterval(() => {
    date = new Date()
    start = new Date(giveAwayTime - date);
    divday.innerHTML = start.getDate()
    divhour.innerHTML = start.getHours()
    divmin.innerHTML = start.getMinutes()
    divsecond.innerHTML = start.getSeconds()
    if ((giveAwayTime - date) == 0) {
        monthDate++;
        let randomnum = 1;
        if (monthDate > 12 || monthDate < 1)
            switch (monthDate) {
                case 1, 3, 5, 7, 8, 10, 12: randomnum = randomNum(31); break;
                case 2, 4, 6, 9, 11: randomnum = randomNum(30); break;
                case 2: randomnum = randomNum(28); break;
            }
        giveAwayTime = new Date(`${months[monthDate - 1]} ${randomnum}, ${date.getYear()} 23:15:30`)
        tag.innerHTML = (`Giveaway End on ${weekdays[giveAwayTime.getDay() - 1]} ${randomnum} ${months[monthDate - 1]} ${date.getYear()} 11:30am `)
    }
}, 1000)
function randomNum(i) {
    let randomnum = Math.floor(Math.random() * i + 1)
    return randomnum
}