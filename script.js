let questions = [],
    answered = JSON.parse(localStorage.getItem("answered") || "{}"),
    currentIndex = 0;

/* ================= LOAD SOAL (EMBED LANGSUNG) ================= */
function loadSoal(){
  // Semua 40 soal ditanam langsung di sini
  questions = [
    {
      "id": 1,
      "type": "listening",
      "question": "들은 것을 고르십시오.",
      "options": ["오리", "요리", "우리", "유리"],
      "answer": 2,
      "audio": "https://airnetcso.github.io/eps/audio/1.mp3"
    },
    {
      "id": 2,
      "type": "listening",
      "question": "들은 것을 고르십시오.",
      "options": ["세상", "대상", "배상", "해상"],
      "answer": 0,
      "audio": "https://airnetcso.github.io/eps/audio/2.mp3"
    },
    {
      "id": 3,
      "type": "listening",
      "question": "들은 것을 고르십시오.",
      "options": ["우산", "장화", "비옷", "장갑"],
      "answer": 1,
      "image": "https://airnetcso.github.io/eps/image/3.jpg",
      "audio": "https://airnetcso.github.io/eps/audio/3.mp3"
    },
    {
      "id": 4,
      "type": "listening",
      "question": "들은 것을 고르십시오.",
      "options": ["양치질", "밥 먹기", "TV 보기", "전화하기"],
      "answer": 0,
      "image": "https://airnetcso.github.io/eps/image/4.jpg",
      "audio": "https://airnetcso.github.io/eps/audio/4.mp3"
    },
    {
      "id": 5,
      "type": "listening",
      "question": "이것은 무엇입니까?",
      "options": ["벽돌", "나무", "철", "유리"],
      "answer": 0,
      "image": "https://airnetcso.github.io/eps/image/5.jpg",
      "audio": "https://airnetcso.github.io/eps/audio/5.mp3"
    },
    {
      "id": 6,
      "type": "listening",
      "question": "여기는 어디입니까?",
      "options": ["횡단보도", "버스 정류장", "지하철", "택시"],
      "answer": 0,
      "image": "https://airnetcso.github.io/eps/image/6.jpg",
      "audio": "https://airnetcso.github.io/eps/audio/6.mp3"
    },
    {
      "id": 7,
      "type": "listening",
      "question": "이 사람은 무엇을 하고 있습니까?",
      "options": ["책 읽기", "공부하기", "쓰기", "말하기"],
      "answer": 0,
      "image": "https://airnetcso.github.io/eps/image/7.jpg",
      "audio": "https://airnetcso.github.io/eps/audio/7.mp3"
    },
    {
      "id": 8,
      "type": "listening",
      "question": "양복이 얼마나 있습니까?",
      "options": ["하나", "둘", "셋", "넷"],
      "answer": 2,
      "image": "https://airnetcso.github.io/eps/image/8.jpg",
      "audio": "https://airnetcso.github.io/eps/audio/8.mp3"
    },
    {
      "id": 9,
      "type": "listening",
      "question": "인형 가게는 어디에 있습니까?",
      "options": ["왼쪽", "오른쪽", "앞", "뒤"],
      "answer": 1,
      "image": "https://airnetcso.github.io/eps/image/9.jpg",
      "audio": "https://airnetcso.github.io/eps/audio/9.mp3"
    },
    {
      "id": 10,
      "type": "listening",
      "question": "다음에 알맞은 대답을 고르십시오.",
      "options": ["저의 형은 키가 커요.", "모님하도 동생이 있어요.", "저는 캄보디아에서 왔어요.", "제 여동생은 스무 살이에요."],
      "answer": 2,
      "audio": "https://airnetcso.github.io/eps/audio/10.mp3"
    },
    {
      "id": 11,
      "type": "listening",
      "question": "다음에 알맞은 대답을 고르십시오.",
      "options": ["그러면 제가 옷을 갤게요.", "세제를 너무 많이 쓰면 안 돼요.", "비가 올 때는 빨래를 널지 마세요.", "손으로 하는 것이 더 깨끗한 것 같아요."],
      "answer": 1,
      "audio": "https://airnetcso.github.io/eps/audio/11.mp3"
    },
    {
      "id": 12,
      "type": "listening",
      "question": "다음에 알맞은 대답을 고르십시오.",
      "options": ["지금 회사에 계세요.", "성실하고 부지런하세요.", "저에게 소개 좀 해 주세요.", "사장님이 추천해 주셨어요."],
      "answer": 1,
      "audio": "https://airnetcso.github.io/eps/audio/12.mp3"
    },
    {
      "id": 13,
      "type": "listening",
      "question": "다음에 알맞은 대답을 고르십시오.",
      "options": ["네, 알겠습니다.", "죄송합니다.", "괜찮아요.", "좋아요."],
      "answer": 0,
      "audio": "https://airnetcso.github.io/eps/audio/13.mp3"
    },
    {
      "id": 14,
      "type": "listening",
      "question": "들은 것을 고르십시오.",
      "options": ["지하철", "버스", "택시", "기차"],
      "answer": 0,
      "audio": "https://airnetcso.github.io/eps/audio/14.mp3"
    },
    {
      "id": 15,
      "type": "listening",
      "question": "이 사람은 무슨 일을 합니까?",
      "options": ["의사", "선생님", "경찰", "소방관"],
      "answer": 1,
      "image": "https://airnetcso.github.io/eps/image/15.jpg",
      "audio": "https://airnetcso.github.io/eps/audio/15.mp3"
    },
    {
      "id": 16,
      "type": "listening",
      "question": "이 물건은 얼마입니까?",
      "options": ["천 원", "이천 원", "삼천 원", "사천 원"],
      "answer": 2,
      "audio": "https://airnetcso.github.io/eps/audio/16.mp3"
    },
    {
      "id": 17,
      "type": "listening",
      "question": "다음에 알맞은 것을 고르십시오.",
      "options": ["아침", "점심", "저녁", "밤"],
      "answer": 1,
      "audio": "https://airnetcso.github.io/eps/audio/17.mp3"
    },
    {
      "id": 18,
      "type": "listening",
      "question": "어디가 아픕니까?",
      "options": ["머리", "배", "손", "발"],
      "answer": 1,
      "image": "https://airnetcso.github.io/eps/image/18.jpg",
      "audio": "https://airnetcso.github.io/eps/audio/18.mp3"
    },
    {
      "id": 19,
      "type": "listening",
      "question": "이 사람은 어디에 갑니까?",
      "options": ["학교", "병원", "은행", "우체국"],
      "answer": 2,
      "audio": "https://airnetcso.github.io/eps/audio/19.mp3"
    },
    {
      "id": 20,
      "type": "listening",
      "question": "다음에 알맞은 대답을 고르십시오.",
      "options": ["감사합니다.", "미안합니다.", "축하합니다.", "안녕하세요."],
      "answer": 0,
      "audio": "https://airnetcso.github.io/eps/audio/20.mp3"
    },
    {
      "id": 21,
      "type": "reading",
      "question": "빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
      "options": ["하지만", "그리고", "그래서", "그러나"],
      "answer": 3
    },
    {
      "id": 22,
      "type": "reading",
      "question": "다음에서 알맞은 것을 고르십시오.",
      "options": ["교환", "예금", "환불", "환전"],
      "answer": 3
    },
    {
      "id": 23,
      "type": "reading",
      "question": "빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
      "options": ["제발", "엄청", "확실히", "설마"],
      "answer": 2
    },
    {
      "id": 24,
      "type": "reading",
      "question": "빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
      "options": ["포장해 줍니다.", "수거해 갑니다.", "배달해 줍니다.", "팔아 줍니다."],
      "answer": 2
    },
    {
      "id": 25,
      "type": "reading",
      "question": "다음 질문에 답하십시오. 이 표지는 무슨 뜻입니까 ?",
      "options": ["독성 위험", "폭발 위험", "감전 위험", "저온 위험"],
      "answer": 0
    },
    {
      "id": 26,
      "type": "reading",
      "question": "다음 안내문의 설명으로 맞는 것은 무엇입니까?",
      "image": "https://airnetcso.github.io/eps/image/26.jpg",
      "options": ["주간 근무를 해야 합니다.", "주말에도 일을 해야 합니다.", "이력서는 이메일로 보냅니다.", "연장 근무도 해야 합니다."],
      "answer": 3
    },
    {
      "id": 27,
      "type": "reading",
      "question": "다음 그래프에 맞는 것은 고르십시오.",
      "options": ["인건비를 줄이기 위해서 쓰는 비율이 1위로 많다.", "국내 근로자를 얻기 못해서 쓰는 비율이 반 이상입니다.", "지시를 잘 따르다는 의미로 쓰는 비율이 제일 적다.", "긴 시간 일 시킬 수 있어서 쓰는 비율이 제일 많다."],
      "answer": 0
    },
    {
      "id": 28,
      "type": "reading",
      "question": "이 사람의 지위는 무엇입니까 ?",
      "options": ["박성현입니다.", "공장장입니다.", "태성입니다.", "전문가입니다."],
      "answer": 1
    },
    {
      "id": 29,
      "type": "reading",
      "question": "빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
      "options": ["떨어질", "끼일", "부딪힐", "감길"],
      "answer": 2
    },
    {
      "id": 30,
      "type": "reading",
      "question": "빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
      "options": ["가러", "가면", "가지만", "가도록"],
      "answer": 3
    },
    {
      "id": 31,
      "type": "reading",
      "question": "다음 설명에 알맞은 어휘를 고르십시오.",
      "options": ["폐업", "휴업", "영업", "개업"],
      "answer": 2
    },
    {
      "id": 32,
      "type": "reading",
      "question": "다음 설명에 알맞은 어휘를 고르십시오.",
      "options": ["회식", "제사", "생일 잔치", "집들이"],
      "answer": 0
    },
    {
      "id": 33,
      "type": "reading",
      "question": "다음 글을 읽고 내용과 같은 것을 고르십시오.",
      "options": ["기본 시급과 연장 시급은 비슷합니다.", "휴일 시급은 기본 시급보다 적습니다.", "열 시 넘게 일하면 시급 수당이 제일 많습니다.", "총 여덟 시간은 시급이 제일 많습니다."],
      "answer": 0
    },
    {
      "id": 34,
      "type": "reading",
      "question": "다음 글을 읽고 내용과 같은 것을 고르십시오.",
      "options": ["현금으로만 탈 수 있어서 힘듭니다.", "아침 일찍과 밤 늦게까지 탈 수 있습니다.", "호선 색깔은 비슷해서 환승하기가 힘듵니다.", "다른 교통보다 요금이 비쌉니다."],
      "answer": 1
    },
    {
      "id": 35,
      "type": "reading",
      "question": "다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
      "options": ["수습 기간", "계약 기간", "근무 시간", "근로 조건"],
      "answer": 3
    },
    {
      "id": 36,
      "type": "reading",
      "question": "다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
      "options": ["백일", "돌", "제사", "폐백"],
      "answer": 0
    },
    {
      "id": 37,
      "type": "reading",
      "question": "다음 질문에 답하십시오. 다음 단어와 관계있는 것은 무엇입니까?",
      "options": ["축제", "교통", "여행", "회식"],
      "answer": 1
    },
    {
      "id": 38,
      "type": "reading",
      "question": "다음 질문에 답하십시오. 다음 단어의 반대되는 어휘를 고르십시오.",
      "options": ["건조하다", "말리다", "젖다", "맞다"],
      "answer": 2
    },
    {
      "id": 39,
      "type": "reading",
      "question": "다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
      "options": ["전기밥솥", "도마", "뚝배기", "프라이팬"],
      "answer": 0
    },
    {
      "id": 40,
      "type": "reading",
      "question": "다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
      "options": ["박수를 치고 있습니다.", "악수를 하고 있습니다.", "인사를 하고 있습니다.", "고개를 숙이고 있습니다."],
      "answer": 2
    }
  ];

  // Langsung build grid & load halaman soal kalau perlu
  buildGrid();
  loadQuestionPage();
}

/* ================= GRID DASHBOARD ================= */
function buildGrid(){
  const L = document.getElementById("listen");
  const R = document.getElementById("read");
  if(!L || !R) return;
  L.innerHTML = "";
  R.innerHTML = "";
  questions.forEach(q=>{
    if(!q.id || !q.type) return;
    const box = document.createElement("div");
    box.className = "qbox";
    box.textContent = q.id;
    if(answered[q.id] !== undefined){
      box.classList.add("done");
    }
    box.onclick = ()=>{
      localStorage.setItem("current", q.id);
      location.href = "question.html";
    };
    if(q.type === "listening") L.appendChild(box);
    else R.appendChild(box);
  });
}

/* ================= HALAMAN SOAL ================= */
function loadQuestionPage(){
  const qArea = document.getElementById("questionBox");
  const ansDiv = document.getElementById("answers");
  if(!qArea || !ansDiv) return;
  const id = parseInt(localStorage.getItem("current"));
  if(!id) return;
  const idx = questions.findIndex(q=>q.id === id);
  if(idx < 0) return;
  const q = questions[idx];
  currentIndex = idx;
  qArea.innerHTML = "";
  ansDiv.innerHTML = "";
  const h = document.createElement("h3");
  h.textContent = q.id + ". " + q.question;
  qArea.appendChild(h);
  if(q.image){
    const img = document.createElement("img");
    img.src = q.image;
    img.style.maxWidth = "100%";
    img.style.marginBottom = "10px";
    qArea.appendChild(img);
  }
  if(q.audio){
    const aud = document.createElement("audio");
    aud.src = q.audio;
    aud.controls = true;
    aud.preload = "auto";
    let playCount = 0;
    const MAX_PLAY = 2;
    aud.addEventListener("play", () => {
      playCount++;
      if(playCount > MAX_PLAY){
        aud.pause();
        aud.currentTime = 0;
      }
    });
    aud.addEventListener("ended", () => {
      if(playCount >= MAX_PLAY){
        aud.controls = false;
        aud.style.opacity = "0.6";
      }
    });
    qArea.appendChild(aud);
  }
  q.options.forEach((opt,i)=>{
    const btn = document.createElement("button");
    btn.textContent = i+1;
    if(answered[q.id] === i){
      btn.classList.add("selected");
    }
    btn.onclick = ()=>{
      answered[q.id] = i;
      localStorage.setItem("answered", JSON.stringify(answered));
      ansDiv.querySelectorAll("button").forEach(b=>b.classList.remove("selected"));
      btn.classList.add("selected");
    };
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.gap = "10px";
    const txt = document.createElement("span");
    txt.textContent = opt;
    row.appendChild(btn);
    row.appendChild(txt);
    ansDiv.appendChild(row);
  });
}

/* ================= NAV ================= */
function nextQuestion(){
  if(currentIndex + 1 < questions.length){
    localStorage.setItem("current", questions[currentIndex+1].id);
    loadQuestionPage();
  }else{
    alert("Ini soal terakhir");
  }
}
function prevQuestion(){
  if(currentIndex > 0){
    localStorage.setItem("current", questions[currentIndex-1].id);
    loadQuestionPage();
  }else{
    alert("Ini soal pertama");
  }
}
function back(){
  location.href = "dashboard.html";
}

/* ================= TIMER ================= */
let time = 50 * 60;
setInterval(()=>{
  time--;
  const m = String(Math.floor(time/60)).padStart(2,"0");
  const s = String(time%60).padStart(2,"0");
  const t = document.getElementById("timerBox");
  if(t) t.textContent = m + ":" + s;
  if(time <= 0) autoSubmit();
},1000);

/* ================= SCORE ================= */
function calculateScore(){
  let score = 0;
  questions.forEach(q=>{
    if(answered[q.id] === q.answer) score += 2.5;
  });
  return score;
}
function autoSubmit(){
  alert("Waktu habis! Nilai: " + calculateScore());
  finish();
}
function manualSubmit(){
  if(confirm("Submit sekarang?")){
    alert("Nilai: " + calculateScore());
    finish();
  }
}
function finish(){
  const name = localStorage.getItem("user") || "Siswa";
  const score = calculateScore();
  const timeUsed = (50*60 - time);
  const results = JSON.parse(localStorage.getItem("results") || "[]");
  results.push({
    name,
    score,
    time: Math.floor(timeUsed/60) + " menit",
    date: new Date().toLocaleString()
  });
  localStorage.setItem("results", JSON.stringify(results));
  localStorage.removeItem("answered");
  localStorage.removeItem("current");
  location.href = "index.html";
}

/* ================= INIT ================= */
window.onload = loadSoal;
