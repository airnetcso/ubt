let questions = [];
let answered = JSON.parse(localStorage.getItem("answered") || "{}");
let currentIndex = 0;
const PAKET_FOLDER = "soal/";

async function loadSoal() {
  const paket = localStorage.getItem("paketSoal") || "1";
  const url = `${PAKET_FOLDER}soal-paket${paket}.json`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Gagal memuat soal-paket${paket}.json`);
    questions = await res.json();

    const title = document.querySelector("title");
    if (title) title.textContent = `UBT - Paket ${paket}`;

    buildGrid();
    if (document.getElementById("questionBox")) loadQuestionPage();
  } catch (err) {
    console.error(err);
    alert("Error load soal: " + err.message + "\nPastikan file soal-paket" + localStorage.getItem("paketSoal") + ".json ada di folder soal/");
  }
}

function buildGrid() {
  const L = document.getElementById("listen");
  const R = document.getElementById("read");
  if (!L || !R) return;

  L.innerHTML = "";
  R.innerHTML = "";

  questions.forEach(q => {
    const box = document.createElement("div");
    box.className = "qbox";
    box.textContent = q.id;

    if (answered[q.id] !== undefined) {
      box.classList.add("done");
    }

    box.onclick = () => {
      localStorage.setItem("current", q.id);
      location.href = "question.html";
    };

    q.type === "listening" ? L.appendChild(box) : R.appendChild(box);
  });
}

function loadQuestionPage() {
  const qArea = document.getElementById("questionBox");
  const ansDiv = document.getElementById("answers");
  if (!qArea || !ansDiv) return;

  const id = Number(localStorage.getItem("current"));
  const idx = questions.findIndex(q => q.id === id);
  if (idx < 0) return;

  currentIndex = idx;
  const q = questions[idx];

  qArea.innerHTML = "";
  ansDiv.innerHTML = "";

  // Judul soal
  const parts = q.question.split("\n\n");
  const title = document.createElement("h3");
  title.textContent = q.id + ". " + parts[0];
  qArea.appendChild(title);

  // Dialog/bacaan
  if (parts[1]) {
    const dialog = document.createElement("div");
    dialog.className = "dialog-box";
    dialog.textContent = parts.slice(1).join("\n\n");
    qArea.appendChild(dialog);
  }

  // AUDIO DIPINDAH KE ATAS (sebelum gambar)
  if (q.audio) {
    const audio = document.createElement("audio");
    audio.src = q.audio;
    audio.controls = true;
    audio.style.width = "100%";
    qArea.appendChild(audio);
  }

  // GAMBAR (setelah audio)
  if (q.image) {
    const img = document.createElement("img");
    img.src = q.image;
    img.alt = "Gambar soal " + q.id;
    qArea.appendChild(img);
  }

  // Pilihan jawaban
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = i + 1;
    if (answered[q.id] === i + 1) btn.classList.add("selected");

    btn.onclick = () => {
      answered[q.id] = i + 1;
      localStorage.setItem("answered", JSON.stringify(answered));
      ansDiv.querySelectorAll("button").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    };

    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.gap = "10px";
    row.appendChild(btn);
    row.appendChild(document.createTextNode(opt));
    ansDiv.appendChild(row);
  });
}

function nextQuestion() {
  if (currentIndex + 1 < questions.length) {
    localStorage.setItem("current", questions[currentIndex + 1].id);
    loadQuestionPage();
  } else {
    alert("Ini soal terakhir");
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    localStorage.setItem("current", questions[currentIndex - 1].id);
    loadQuestionPage();
  } else {
    alert("Ini soal pertama");
  }
}

function back() {
  location.href = "dashboard.html";
}

// Timer 50 menit
let time = 50 * 60;
setInterval(() => {
  time--;
  const m = String(Math.floor(time / 60)).padStart(2, "0");
  const s = String(time % 60).padStart(2, "0");
  const t = document.getElementById("timerBox");
  if (t) t.textContent = `${m}:${s}`;
  if (time <= 0) autoSubmit();
}, 1000);

function calculateScore() {
  let score = 0;
  questions.forEach(q => {
    if (answered[q.id] === q.answer) score += 2.5;
  });
  return score;
}

function submitExam() {
  const score = calculateScore();
  const paket = localStorage.getItem("paketSoal");
  const user = localStorage.getItem("user");
  const waktu = document.getElementById("timerBox")?.textContent || "00:00";
  const tanggal = new Date().toLocaleString("id-ID");

  alert(`🎉 Selesai Paket ${paket}!\nNilai: ${score.toFixed(1)}/100\n${score >= 70 ? "✅ LULUS! Bisa lanjut paket berikutnya" : "📚 Belum lulus (minimal 70)"}`);

  let results = JSON.parse(localStorage.getItem("results") || "[]");
  results.push({
    user: user,
    paket: paket,
    score: score.toFixed(1),
    time: waktu,
    date: tanggal,
    totalQuestions: questions.length,
    answeredCount: Object.keys(answered).length,
    status: score >= 70 ? "LULUS" : "BELUM"
  });
  localStorage.setItem("results", JSON.stringify(results));

  localStorage.removeItem("answered");
  localStorage.removeItem("current");

  location.href = "index.html";
}

function autoSubmit() {
  alert("⏰ Waktu habis!");
  submitExam();
}

function manualSubmit() {
  if (confirm("Yakin submit sekarang? Progress akan tersimpan.")) {
    submitExam();
  }
}

window.onload = loadSoal;
