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

// ประกาศและกำหนดค่าตัวแปร
let selectedWord = "";
let guessedWord = [];
let incorrectGuesses = 6;

// รับ Element HTML โดยใช้ ID
const wordElement = document.getElementById("word");
const lettersElement = document.getElementById("letters");
const messageElement = document.getElementById("message");
const playAgainButton = document.getElementById("playAgain");
const keyboard = document.getElementById("keyboard");

// function เพื่อเริ่มเกมใหม่
function newGame() {
  // เลือกคำแบบสุ่มจาก array 'words' และแปลงเป็นตัวพิมพ์ใหญ่
  selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

  // กำหนดค่าเริ่มต้นให้กับ array 'guessedWord' ด้วยเครื่องหมาย _ ตามความยาวของ 'selectedWord'
  guessedWord = Array(selectedWord.length).fill("_");

  // กำหนดค่าเริ่มต้นให้ 'incorrectGuesses' เป็น 6
  incorrectGuesses = 6;

  // อัปเดตการแสดงผล
  updateDisplay();
}

// function เพื่ออัปเดตการแสดงผลของเกม
function updateDisplay() {
  // แสดงสถานะปัจจุบันของคำที่ทาย
  wordElement.innerHTML = guessedWord.join(" ");

  // สร้างและแสดงปุ่มสำหรับแต่ละตัวอักษรของ Alphabet
  lettersElement.innerHTML = generateAlphabetButtons();

  // ลบข้อความที่มีอยู่
  messageElement.innerHTML = "";

  // ซ่อนปุ่ม "Play again"
  playAgainButton.style.display = "none";
}

// Function สร้างปุ่มตัวอักษร
function generateAlphabetButtons() {
  // กำหนดตัวอักษร Alphabet
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let buttonsHTML = "";

  // สร้างปุ่มสำหรับแต่ละตัวอักษรและเชื่อมต่อฟังก์ชัน 'guess' กับ event onclick
  for (let letter of alphabet) {
    buttonsHTML += `<button onclick="guess('${letter}')">${letter}</button>`;
  }

  return buttonsHTML;
}

// function การทายตัวอักษร
function guess(letter) {
  // แปลงตัวอักษรที่ทายเป็นตัวพิมพ์ใหญ่
  letter = letter.toUpperCase();

  // ตรวจสอบว่าคำที่ถูกเลือกมีตัวอักษรที่ทายหรือไม่
  if (selectedWord.includes(letter)) {
    // อัปเดตคำที่ทายด้วยตัวอักษรที่ทายถูก
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        guessedWord[i] = letter.toLowerCase();
      }
    }
  } else {
    // ลดจำนวนครั้งที่ทายผิด
    incorrectGuesses--;
  }

  // อัปเดตการแสดงผลหลังจากการทาย
  updateDisplay();

  // ตรวจสอบสถานะของเกม
  checkGameStatus();
}

// ฟังก์ชันเพื่อตรวจสอบสถานะของเกม (ชนะ, ผิด, หรือดำเนินต่อ)
function checkGameStatus() {
  // ตรวจสอบว่าคำที่ทายเสร็จสมบูรณ์และถูกหรือไม่
  if (!guessedWord.includes("_")) {
    messageElement.innerHTML = "Congratulations! You've won!";
    playAgainButton.style.display = "block";
  } else if (incorrectGuesses === 0) {
    // แสดงคำที่ถูกต้องและจบเกมหากไม่มีครั้งที่ทายผิดเพิ่มเติม
    messageElement.innerHTML = `Game Over. The word was "${selectedWord.toLowerCase()}".`;
    playAgainButton.style.display = "block";
  } else {
    // อัปเดตการแสดงผลหากเกมยังคงดำเนินต่อ
    updateDisplay();
  }
}

// ฟังก์ชันเพื่อรีเซ็ตเกม
function resetGame() {
  newGame();
}

// เริ่มเกมใหม่เมื่อสคริปต์ทำงาน
newGame();
