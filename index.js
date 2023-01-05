let b1h = document.getElementById("b1h")
let b2h = document.getElementById("b2h")
let b3h = document.getElementById("b3h")
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let home = document.getElementById("home")
let guest = document.getElementById("guest")

let countHome = 0
let countGuest = 0

//Home functions
function addOneH() {
    countHome += 1
    homeScore.innerText = countHome
    if (countGuest < countHome) {
        homeScore.style.color = "green";
        guestScore.style.color = "#F94F6D";
    } else if (countGuest > countHome) {
        homeScore.style.color = "#F94F6D";
        guestScore.style.color = "green";
    } else {
        homeScore.style.color = "#F94F6D";
        guestScore.style.color = "#F94F6D";
    }
}

function addTwoH() {
    countHome += 2
    homeScore.innerText = countHome
    if (countGuest < countHome) {
        homeScore.style.color = "green";
        guestScore.style.color = "#F94F6D";
    } else if (countGuest > countHome) {
        homeScore.style.color = "#F94F6D";
        guestScore.style.color = "green";
    } else {
        homeScore.style.color = "#F94F6D";
        guestScore.style.color = "#F94F6D";
    }
}

function addThreeH() {
    countHome += 3
    homeScore.innerText = countHome
    if (countGuest < countHome) {
        homeScore.style.color = "green";
        guestScore.style.color = "#F94F6D";
    } else if (countGuest > countHome) {
        homeScore.style.color = "#F94F6D";
        guestScore.style.color = "green";
    } else {
        homeScore.style.color = "#F94F6D";
        guestScore.style.color = "#F94F6D";
    }
}

//Guest functions
function addOneG() {
    countGuest += 1
    guestScore.innerText = countGuest
    if (countGuest > countHome) {
        guestScore.style.color = "green";
        homeScore.style.color = "#F94F6D";
    } else if (countGuest < countHome) {
        guestScore.style.color = "#F94F6D";
        homeScore.style.color = "green";
    } else {
        guestScore.style.color = "#F94F6D";
        homeScore.style.color = "#F94F6D";
    }
}

function addTwoG() {
    countGuest += 2
    guestScore.innerText = countGuest
    if (countGuest > countHome) {
        guestScore.style.color = "green";
        homeScore.style.color = "#F94F6D";
    } else if (countGuest < countHome) {
        guestScore.style.color = "#F94F6D";
        homeScore.style.color = "green";
    } else {
        guestScore.style.color = "#F94F6D";
        homeScore.style.color = "#F94F6D";
    }
}

function addThreeG() {
    countGuest += 3
    guestScore.innerText = countGuest
    if (countGuest > countHome) {
        guestScore.style.color = "green";
        homeScore.style.color = "#F94F6D";
    } else if (countGuest < countHome) {
        guestScore.style.color = "#F94F6D";
        homeScore.style.color = "green";
    } else {
        guestScore.style.color = "#F94F6D";
        homeScore.style.color = "#F94F6D";
    }
}

// Restart game function

function restartGame() {
    guestScore.innerText = 0; 
    homeScore.innerText = 0;
    homeScore.style.color = "#F94F6D";
    guestScore.style.color = "#F94F6D";
    countHome = 0;
    countGuest = 0;
}