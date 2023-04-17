let randomNumber = generateRandomNumber();
var score = 10;
var highScore = 0;


document.querySelector(".check").addEventListener("click", function () {
    if (document.querySelector("#currentnumber").value != "") {
        var userGuess = Number(document.querySelector("#currentnumber").value);
        checkGuess(userGuess);
    } else {
        document.querySelector(".message").textContent = "Please write a number!";
    }
});

document.querySelector(".again").addEventListener("click", function () {
    initGame();
});

function initGame() {
    score = 10;
    randomNumber = generateRandomNumber();
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "You can guess now";
    var element = document.querySelector(".game-details-box");
    element.classList.remove("right-correct");
    element.classList.add("right");
    addCheckButton();
}



function generateRandomNumber() {
    return Math.floor(Math.random() * 29 + 1);
}

function checkGuess(userGuess) {
    if (userGuess === randomNumber) {
        handleScore("correct");
    } else if (userGuess < randomNumber) {
        handleScore("low");
    } else {
        handleScore("high");
    }
}


function handleScore(action) {
    switch (action) {
        case "correct":
            document.querySelector(".message").textContent = "Currect Number!";
            handleCOrrectGuess();
            break;
        case "high":
            if (score > 1) {
                document.querySelector(".message").textContent = "Too High!";
                score--;
                document.querySelector(".score").textContent = score;
            } else {
                document.querySelector(".message").textContent = "You lost the Game!";
                score--;
                document.querySelector(".score").textContent = score;
                removeCheckButton();
            }
            break;

        case "low":
            if (score > 1) {
                document.querySelector(".message").textContent = "Too Low!";
                score--
                document.querySelector(".score").textContent = score;
            } else {
                document.querySelector(".message").textContent = "You lost the Game!";
                score--;
                document.querySelector(".score").textContent = score;
                removeCheckButton();
            }
            break;
    }
}

function handleCOrrectGuess() {
    var element = document.querySelector(".right");
    element.classList.remove("right");
    element.classList.add("right-correct");
    handleHighScore();
    removeCheckButton();
}


function handleHighScore() {
    if (highScore < score) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
    }
}

function removeCheckButton() {
    document.querySelector(".check").classList.add("non-display-element");
}

function addCheckButton() {
    document.querySelector(".check").classList.remove("non-display-element");
}