const words = [
  "apple",
  "banana",
  "orange",
  "mango",
  "strawberry",
  "grape",
  "pineapple",
  "blueberry",
  "raspberry",
  "blackberry",
  "kiwi",
  "watermelon",
  "cantaloupe",
  "honeydew",
  "papaya",
  "guava",
  "lychee",
  "dragonfruit",
  "passionfruit",
  "grapefruit",
  "lime",
  "lemon",
  "cherry",
  "peach",
  "nectarine",
  "apricot",
  "plum",
  "pomegranate",
  "fig",
  "date",
  "persimmon",
  "tangerine",
  "clementine",
  "kumquat",
  "durian",
  "jackfruit",
  "starfruit",
  "avocado",
  "coconut",
  "cranberry",
  "currant",
  "gooseberry",
  "elderberry",
  "quince",
  "pear",
  "acai",
  "sapodilla",
  "soursop",
  "mulberry",
  "boysenberry",
  "loganberry",
  "jambolan",
  "salak",
  "rambutan",
  "longan",
  "pomelo",
];

let selectedWord = "";
let guessedWord = [];
let incorrectGuesses = 6;

const wordElement = document.getElementById("word");
const lettersElement = document.getElementById("letters");
const messageElement = document.getElementById("message");
const playAgainButton = document.getElementById("playAgain");
const keyboard = document.getElementById("keyboard");

function newGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
  guessedWord = Array(selectedWord.length).fill("_");
  incorrectGuesses = 6;

  updateDisplay();
}

function updateDisplay() {
  wordElement.innerHTML = guessedWord.join(" ");
  lettersElement.innerHTML = generateAlphabetButtons();
  messageElement.innerHTML = "";
  playAgainButton.style.display = "none";
}

function generateAlphabetButtons() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let buttonsHTML = "";

  for (let letter of alphabet) {
    buttonsHTML += `<button onclick="guess('${letter}')">${letter}</button>`;
  }

  return buttonsHTML;
}

function guess(letter) {
  letter = letter.toUpperCase();

  if (selectedWord.includes(letter)) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        guessedWord[i] = letter.toLowerCase();
      }
    }
  } else {
    incorrectGuesses--;
  }

  updateDisplay(); // Add this line to update the display after a guess
  checkGameStatus();
}

function checkGameStatus() {
  if (!guessedWord.includes("_")) {
    messageElement.innerHTML = "Congratulations! You guessed the word!";
    playAgainButton.style.display = "block";
  } else if (incorrectGuesses === 0) {
    messageElement.innerHTML = `Game Over. The correct word was "${selectedWord.toLowerCase()}".`;
    playAgainButton.style.display = "block";
  } else {
    updateDisplay();
  }
}

function resetGame() {
  newGame();
}

// Initial game setup
newGame();
