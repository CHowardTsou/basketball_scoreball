let homeScore = 0;
let guestScore = 0;
document.getElementById("homeScore").textContent = homeScore;
document.getElementById("guestScore").textContent = homeScore;
let homeScoreEl = document.getElementById("homeScore");
let guestScoreEl = document.getElementById("guestScore");

// home score adding
function homeAddOne() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    compareScore();
}

function homeAddTwo() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    compareScore();
}

function homeAddThree() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    compareScore();
}

// guest score adding
function guestAddOne() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
    compareScore();
}

function guestAddTwo() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    compareScore();
}

function guestAddThree() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    compareScore();
}

// compare score when button is clicked
function compareScore() {
    // reset score first, if score is same then don't show
    document.getElementById("homeLeading").textContent = ""
    document.getElementById("guestLeading").textContent = "";

    if(homeScore > guestScore){
        document.getElementById("homeLeading").textContent = "Leading"
    }
    if(homeScore < guestScore) {
        document.getElementById("guestLeading").textContent = "Guest Leading";
    }
    
}

function reset(){
    homeScore = 0;
    guestScore = 0;
    document.getElementById("homeScore").textContent = homeScore;
    document.getElementById("guestScore").textContent = homeScore;
    document.getElementById("homeLeading").textContent = ""
    document.getElementById("guestLeading").textContent = "";
}