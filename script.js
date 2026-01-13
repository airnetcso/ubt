let questions = [];
let answered = JSON.parse(localStorage.getItem("answered") || "{}");
let currentIndex = 0;

const paket = localStorage.getItem("paket") || "1";
const soalURL = `https://airnetcso.github.io/ubt/soal/soal${paket}.json?v=13`;

const SPREADSHEET_URL = "https://script.google.com/macros/s/AKfycbzxyVIlsyLswlfnQG618eeUZgN83dd2jfCjU0r7LsNHM3A6NNiibuCIb5e3CNs9J1vVhQ/exec";

function sendScoreToSheet(username, paket, score) {
  // ... fungsi send skor lu tetep sama persis ...
  // (kode POST no-cors lu di sini, gue skip biar pendek, copy dari versi lu)
}

async function loadSoal() {
  // ... fungsi loadSoal lu tetep sama ...
}

function buildGrid() {
  // ... tetep sama ...
}

function loadQuestionPage() {
  // ... tetep sama ...
}

function nextQuestion() { /* tetep sama */ }
function prevQuestion() { /* tetep sama */ }
function back() { /* tetep sama */ }

// Timer lu tetep sama
let time = Number(localStorage.getItem("time")) || 50 * 60;
setInterval(() => {
  // ... timer countdown tetep ...
}, 1000);

function manualSubmit() { /* tetep sama */ }

function calculateScore() { /* tetep sama */ }

function finish() { /* tetep sama */ }

// === TAMBAHAN LANDSCAPE FORCE (baru) ===
async function forceLandscape() {
  if (screen.orientation && screen.orientation.lock) {
    try {
      await screen.orientation.lock("landscape-primary");
      console.log("Locked to landscape!");
    } catch (err) {
      console.warn("Orientation lock gagal:", err);
    }
  }
}

// Panggil di semua page yang butuh (dashboard & question)
window.addEventListener('load', () => {
  forceLandscape();
  // panggil fungsi load lu yang lain
  if (document.getElementById("listen")) {
    loadSoal().then(buildGrid);
  }
  if (document.getElementById("questionBox")) {
    loadSoal().then(loadQuestionPage);
  }
});

window.addEventListener('orientationchange', forceLandscape);
