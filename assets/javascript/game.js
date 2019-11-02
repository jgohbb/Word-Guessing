// Create variables
var selectWords = ["amsterdam", "bangkok", "beijing", "boston", "brussels", "denver", "frankfurt", "london", "moscow", "paris", "perth", "seoul", "shanghai", "singapore", "sydney", "tokyo", "vancouver", "venice"];
var randomSelection = "";
var lettersOfWord = [];
var numBlanks = 0;
var blanksSuccess = [];
var wrongLetters = [];
var wins = 0;
var losses = 0;
var livesLeft = 12;
var cityImages = {
    "amsterdam": "assets/images/amsterdam.jpg",
    "bangkok": "assets/images/bangkok.jpg",
    "beijing": "assets/images/beijing.jpg",
    "boston": "assets/images/boston.jfif",
    "brussels": "assets/images/brussels.jpg",
    "denver": "assets/images/denver.jfif",
    "frankfurt": "assets/images/frankfurt.jpg",
    "london": "assets/images/london.jpeg",
    "moscow": "assets/images/moscow.jpg",
    "paris": "assets/images/paris.jpg",
    "perth": "assets/images/perth.jfif",
    "seoul": "assets/images/seoul.jpg",
    "shanghai": "assets/images/shanghai.jpg",
    "singapore": "assets/images/singapore.jpg",
    "sydney": "assets/images/sydney.jpg",
    "tokyo": "assets/images/tokyo.png",
    "vancouver": "assets/images/vancouver.jpg",
    "venice": "assets/images/venice.jpg",
}
var labels = {
    "amsterdam": "amsterdam",
    "bangkok": "bangkok",
    "beijing": "Beijing",
    "boston": "Boston",
    "brussels": "Brussels",
    "denver": "Denver",
    "frankfurt": "Frankfurt",
    "london": "london",
    "moscow": "Moscow",
    "paris": "Paris",
    "perth": "Perth",
    "seoul": "Seoul",
    "shanghai": "Shanghai",
    "singapore": "Singapore",
    "sydney": "Sydney",
    "tokyo": "Tokyo",
    "vancouver": "Vancouver",
    "Venice": "Venice",
}; /* labels or objects for further improvements to add interesting facts */

// Create functions
function startGame() {
        randomSelection = selectWords[Math.floor(Math.random() * selectWords.length)];
        lettersOfWord = randomSelection.split("");
        numBlanks = lettersOfWord.length;
        blanksSuccess = [];
        wrongLetters = [];
        livesLeft = 12;

    for (var i = 0; i < numBlanks; i++) {
    blanksSuccess.push("_ ");
    }
    document.getElementById("word-guess").innerHTML = blanksSuccess.join("  ");
    document.getElementById("remaining").innerHTML = livesLeft;
    document.getElementById("user-win").innerHTML = wins;
    document.getElementById("user-lose").innerHTML = losses;
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i); /* Eric's explaination - check&make sure letters in string can be both upper & lower case */
}

function checkLetters(letter) {
    var isLetterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (randomSelection[i] == letter) {
            isLetterInWord = true;
        }
    }

    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (randomSelection[i] == letter) {
            blanksSuccess[i] = letter;
            }
        }
    } 
    else{
        if(wrongLetters.length === 0) {
            wrongLetters.push(letter);
            livesLeft--;
        } else {
            if (wrongLetters.indexOf(letter) === -1) {
                wrongLetters.push(letter);
                livesLeft--;
            }
        }
    }
}

function gameComplete() {
        document.getElementById("remaining").innerHTML = livesLeft;
        document.getElementById("word-guess").innerHTML = blanksSuccess.join (" ");
        document.getElementById("letters-guessed").innerHTML = wrongLetters.join (" ");
    if (lettersOfWord.toString() == blanksSuccess.toString()) {
        wins++;
        document.getElementById("add-comment").innerHTML = "You got it! Now try again for another city:";
        document.getElementById("user-win").innerHTML = wins;
        //document.getElementById("labels").innerHTML = labels;
        //document.getElementById("target-image").innerHTML = '';
        document.getElementById("target-image").style.backgroundImage="url(" + cityImages[randomSelection] + ")"
       
        startGame();
    } else if (livesLeft <= 0) {
        losses++;
        document.getElementById("user-lose").innerHTML = losses;
        document.getElementById("add-comment").innerHTML = ("Sorry not this time, but try again.");
        startGame();
    }
}

startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode)
    .toLowerCase();
    isLetter(letterGuessed);
    if (isLetter(letterGuessed)) {
        checkLetters(letterGuessed);
    }
    gameComplete();
}

console.log(randomSelection);
console.log(randomSelection);
console.log(lettersOfWord);
console.log(numBlanks);
console.log(blanksSuccess);


