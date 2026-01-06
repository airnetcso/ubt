let questions = [];
let answered = JSON.parse(localStorage.getItem("answered") || "{}");
let currentIndex = 0;

const paket = localStorage.getItem("paket") || "1";
const soalURL = `https://airnetcso.github.io/ubt/soal/soal${paket}.json?v=7`; // versi cache killer

// GOOGLE SHEET URL
const SPREADSHEET_URL = "https://script.google.com/macros/s/AKfycbyfCZ5YNQHDLyKWatqj-diL8tXRRwXBKfJaaYMqcqoShABYy4Gx6QpexPOB_MkZwpIwLw/exec";

function sendScoreToSheet(username, paket, score) {
  console.log("🔥 MULAI KIRIM SKOR KE GOOGLE SHEET...");
  console.log("Username:", username);
  console.log("Paket:", paket);
  console.log("Skor:", score);

  const totalSoal = questions.length;
  const maxScore = totalSoal * 2.5;
  const persentase = Math.round((score / maxScore) * 100);

  const data = {
    username: username || "Anonymous",
    kodeSoal: "TRYOUT " + ("0" + paket).slice(-2),
    jenisAplikasi: "UBT",
    skor: score,
    persentase: persentase,
    catatan: ""
  };

  console.log("📤 Data dikirim:", data);

  // POST + fallback GET + no-cors = ANTI GAGAL TOTAL
  fetch(SPREADSHEET_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(() => console.log("✅ BERHASIL KIRIM VIA POST"))
  .catch(() => {
    console.log("⚠️ POST gagal, coba GET fallback...");
    const params = new URLSearchParams(data);
    fetch(SPREADSHEET_URL + "?" + params.toString(), { mode: "no-cors" })
      .then(() => console.log("✅ BERHASIL VIA GET FALLBACK"))
      .catch(() => console.log("❌ Gagal total, cek internet atau Apps Script"));
  });
}

// LOAD SOAL
async function loadSoal() {
  try {
    const res = await fetch(soalURL);
    if (!res.ok) throw new Error("Soal gagal dimuat");
    questions = await res.json();
    console.log("✅ Soal berhasil dimuat:", questions.length, "soal");
    buildGrid();
  } catch (e) {
    console.error("❌ Gagal load soal:", e);
    alert("Gagal memuat soal. Pastikan internet stabil.");
  }
}

// BUILD GRID, NAVIGASI, DLL SAMA PERSIS seperti sebelumnya (nggak aku potong biar aman)
function buildGrid() {
  const L = document.getElementById("listen");
  const R = document.getElementById("read");
  if (!L || !R) return;
  L.innerHTML = ""; R.innerHTML = "";

  questions.forEach(q => {
    const box = document.createElement("div");
    box.className = "qbox";
    box.textContent = q.id;
    if (answered[q.id]) box.classList.add("done");
    box.onclick = () => {
      localStorage.setItem("current", q.id);
      location.href = "question.html";
    };
    (q.type === "listening" ? L : R).appendChild(box);
  });
}

function loadQuestionPage() {
  const box = document.getElementById("questionBox");
  const ans = document.getElementById("answers");
  if (!box || !ans) return;

  const id = Number(localStorage.getItem("current")) || questions[0]?.id;
  const idx = questions.findIndex(q => q.id === id);
  currentIndex = idx < 0 ? 0 : idx;
  const q = questions[currentIndex];

  box.innerHTML = ""; ans.innerHTML = "";

  const h = document.createElement("h3");
  h.textContent = `${q.id}. ${q.question.split("\n\n")[0]}`;
  box.appendChild(h);

  if (q.question.includes("\n\n")) {
    const d = document.createElement("div");
    d.className = "dialog-box" + (q.id === 37 || q.id === 38 ? " dialog-center" : "");
    d.textContent = q.question.split("\n\n").slice(1).join("\n\n");
    box.appendChild(d);
  }

  if (q.audio) {
    const container = document.createElement("div");
    container.style.margin = "25px 0"; container.style.textAlign = "center";
    const audio = document.createElement("audio");
    audio.controls = true; audio.preload = "auto"; audio.src = q.audio;
    audio.style.width = "100%"; audio.style.maxWidth = "420px"; audio.style.margin = "0 auto";
    container.appendChild(audio); box.appendChild(container);
  }

  if (q.image) {
    const i = document.createElement("img");
    i.src = q.image; i.style.maxWidth = "100%"; i.style.margin = "20px auto"; i.style.display = "block";
    box.appendChild(i);
  }

  q.options.forEach((option, i) => {
    const b = document.createElement("button");
    b.textContent = i + 1;
    if (answered[q.id] === i + 1) b.classList.add("selected");

    b.onclick = () => {
      answered[q.id] = i + 1;
      localStorage.setItem("answered", JSON.stringify(answered));
      buildGrid(); loadQuestionPage();
    };

    const row = document.createElement("div");
    row.style.display = "flex"; row.style.alignItems = "center"; row.style.gap = "12px"; row.style.margin = "12px 0";
    row.appendChild(b);
    const text = document.createElement("span"); text.textContent = option;
    row.appendChild(text); ans.appendChild(row);
  });
}

function nextQuestion() { if (currentIndex + 1 < questions.length) { localStorage.setItem("current", questions[currentIndex + 1].id); loadQuestionPage(); } }
function prevQuestion() { if (currentIndex > 0) { localStorage.setItem("current", questions[currentIndex - 1].id); loadQuestionPage(); } }
function back() { localStorage.removeItem("time"); location.href = "dashboard.html"; }

let time = Number(localStorage.getItem("time")) || 50 * 60;
setInterval(() => {
  if (time <= 0) { finish(); return; }
  time--;
  localStorage.setItem("time", time);
  const t = document.getElementById("timerBox");
  if (t) t.textContent = `${String(Math.floor(time / 60)).padStart(2, "0")}:${String(time % 60).padStart(2, "0")}`;
}, 1000);

function manualSubmit() { if (confirm("Yakin submit sekarang?")) finish(); }

function calculateScore() {
  let correct = 0;
  questions.forEach(q => { if (answered[q.id] === q.answer) correct++; });
  return correct * 2.5;
}

function finish() {
  console.log("🎉 FINISH DIPANGGIL!");
  const score = calculateScore();
  console.log("🏆 SKOR AKHIR:", score);

  const user = localStorage.getItem("user");
  const results = JSON.parse(localStorage.getItem("results") || "[]");
  results.push({ name: user, paket, score, time: document.getElementById("timerBox")?.innerText || "00:00", date: new Date().toLocaleString("id-ID") });
  localStorage.setItem("results", JSON.stringify(results));

  sendScoreToSheet(user, paket, score); // PASTI MASUK SHEET

  localStorage.removeItem("login"); localStorage.removeItem("user"); localStorage.removeItem("paket");
  localStorage.removeItem("answered"); localStorage.removeItem("time"); localStorage.removeItem("current");

  alert(`Ujian selesai!\nNilai Anda: ${score}\nData sudah dikirim ke pusat!`);
  location.href = "index.html";
}

// INIT
window.onload = async () => {
  console.log("🚀 App mulai loading...");
  await loadSoal();
  if (document.getElementById("listen")) buildGrid();
  if (document.getElementById("questionBox")) loadQuestionPage();
};
