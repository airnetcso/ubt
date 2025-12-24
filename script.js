// ================================
// DATA SOAL (40 SOAL)
// ================================

const questions = [

/* ========= LISTENING 1–20 ========= */

{
  id: 1,
  type: "listening",
  audio: "audio/q1.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "아침에 운동했어요.",
    "2": "학교에 가요.",
    "3": "커피예요.",
    "4": "친구예요."
  },
  answer: "1"
},

{
  id: 2,
  type: "listening",
  audio: "audio/q2.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "지금 열 시예요.",
    "2": "오늘이에요.",
    "3": "집이에요.",
    "4": "학생이에요."
  },
  answer: "1"
},

{
  id: 3,
  type: "listening",
  audio: "audio/q3.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "부산에 갔어요.",
    "2": "회사예요.",
    "3": "책이에요.",
    "4": "비싸요."
  },
  answer: "1"
},

{
  id: 4,
  type: "listening",
  audio: "audio/q4.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "날씨가 좋아요.",
    "2": "학교예요.",
    "3": "세 시예요.",
    "4": "학생이에요."
  },
  answer: "1"
},

{
  id: 5,
  type: "listening",
  audio: "audio/q5.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "아홉 시에 열어요.",
    "2": "집에서 해요.",
    "3": "혼자 가요.",
    "4": "비가 와요."
  },
  answer: "1"
},

{
  id: 6,
  type: "listening",
  audio: "audio/q6.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "김치찌개를 먹을 거예요.",
    "2": "책을 읽어요.",
    "3": "학교예요.",
    "4": "비싸요."
  },
  answer: "1"
},

{
  id: 7,
  type: "listening",
  audio: "audio/q7.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "네, 다 했어요.",
    "2": "아직 몰라요.",
    "3": "집에 가요.",
    "4": "커피예요."
  },
  answer: "1"
},

{
  id: 8,
  type: "listening",
  audio: "audio/q8.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "삼천 원이에요.",
    "2": "학생이에요.",
    "3": "오늘이에요.",
    "4": "가게예요."
  },
  answer: "1"
},

{
  id: 9,
  type: "listening",
  audio: "audio/q9.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "네, 좋아요.",
    "2": "학교예요.",
    "3": "열 시예요.",
    "4": "비가 와요."
  },
  answer: "1"
},

{
  id: 10,
  type: "listening",
  audio: "audio/q10.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "두 시에 시작해요.",
    "2": "학교에 가요.",
    "3": "커피예요.",
    "4": "친구예요."
  },
  answer: "1"
},

{
  id: 11,
  type: "listening",
  audio: "audio/q11.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "삼십 분쯤 걸려요.",
    "2": "버스로 가요.",
    "3": "집이에요.",
    "4": "학생이에요."
  },
  answer: "1"
},

{
  id: 12,
  type: "listening",
  audio: "audio/q12.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "불고기를 먹었어요.",
    "2": "학교에 갔어요.",
    "3": "책을 읽었어요.",
    "4": "비가 왔어요."
  },
  answer: "1"
},

{
  id: 13,
  type: "listening",
  audio: "audio/q13.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "사람이 많아요.",
    "2": "조용해요.",
    "3": "멀어요.",
    "4": "비싸요."
  },
  answer: "1"
},

{
  id: 14,
  type: "listening",
  audio: "audio/q14.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "아주 재미있어요.",
    "2": "너무 비싸요.",
    "3": "조금 멀어요.",
    "4": "사람이 많아요."
  },
  answer: "1"
},

{
  id: 15,
  type: "listening",
  audio: "audio/q15.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "도서관에 갈 거예요.",
    "2": "집이에요.",
    "3": "지금이에요.",
    "4": "커피예요."
  },
  answer: "1"
},

{
  id: 16,
  type: "listening",
  audio: "audio/q16.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "카페 앞에서 만나요.",
    "2": "열 시예요.",
    "3": "학생이에요.",
    "4": "혼자 가요."
  },
  answer: "1"
},

{
  id: 17,
  type: "listening",
  audio: "audio/q17.mp3",
  question: "질문을 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "샤워하고 출근해요.",
    "2": "책이에요.",
    "3": "회사예요.",
    "4": "비싸요."
  },
  answer: "1"
},

{
  id: 18,
  type: "listening",
  audio: "audio/q18.mp3",
  question: "대화를 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "여행 갈 거예요.",
    "2": "집에 있을 거예요.",
    "3": "일할 거예요.",
    "4": "운동할 거예요."
  },
  answer: "1"
},

{
  id: 19,
  type: "listening",
  audio: "audio/q19.mp3",
  question: "대화를 듣고 알맞은 답을 고르세요.",
  options: {
    "1": "축구를 좋아해요.",
    "2": "요리를 좋아해요.",
    "3": "책을 좋아해요.",
    "4": "영화를 좋아해요."
  },
  answer: "1"
},

{
  id: 20,
  type: "listening",
  audio: "audio/q20.mp3",
  question: "다음을 듣고 내용과 맞는 것을 고르세요.",
  options: {
    "1": "민수는 피곤하지만 저녁을 먹을 거예요.",
    "2": "민수는 바로 집에 갈 거예요.",
    "3": "지은은 혼자 먹을 거예요.",
    "4": "식당이 멀어요."
  },
  answer: "1"
},

/* ========= READING 21–40 ========= */

{
  id: 21,
  type: "reading",
  question: "저는 매일 아침 일찍 일어납니다.",
  options: {
    "1": "아침에 일어나요.",
    "2": "밤에 일어나요.",
    "3": "아침에 자요.",
    "4": "집에 있어요."
  },
  answer: "1"
},

{
  id: 22,
  type: "reading",
  image: "images/study.jpg",
  question: "이 사람은 무엇을 하고 있어요?",
  options: {
    "1": "공부해요.",
    "2": "요리해요.",
    "3": "운동해요.",
    "4": "잠자요."
  },
  answer: "1"
},

{
  id: 23,
  type: "reading",
  image: "images/bus.jpg",
  question: "그림을 보고 알맞은 것을 고르세요.",
  options: {
    "1": "버스를 타요.",
    "2": "걸어가요.",
    "3": "택시예요.",
    "4": "비행기예요."
  },
  answer: "1"
},

{
  id: 24,
  type: "reading",
  question: "도서관에 가요. 왜 가요?",
  options: {
    "1": "공부하려고 가요.",
    "2": "밥 먹으러 가요.",
    "3": "운동하러 가요.",
    "4": "잠자러 가요."
  },
  answer: "1"
},

{
  id: 25,
  type: "reading",
  question: "커피 마실래요?",
  options: {
    "1": "네, 좋아요.",
    "2": "학교예요.",
    "3": "책이에요.",
    "4": "어제예요."
  },
  answer: "1"
},

{
  id: 26,
  type: "reading",
  question: "영화를 봤어요.",
  options: {
    "1": "재미있었어요.",
    "2": "멀어요.",
    "3": "비싸요.",
    "4": "학생이에요."
  },
  answer: "1"
},

{
  id: 27,
  type: "reading",
  question: "매일 한국어를 공부해요.",
  options: {
    "1": "공부해요.",
    "2": "운동해요.",
    "3": "요리해요.",
    "4": "자요."
  },
  answer: "1"
},

{
  id: 28,
  type: "reading",
  question: "주말에 친구를 만나요.",
  options: {
    "1": "친구와 만나요.",
    "2": "혼자 있어요.",
    "3": "일해요.",
    "4": "잠자요."
  },
  answer: "1"
},

{
  id: 29,
  type: "reading",
  question: "내일 비가 와요.",
  options: {
    "1": "우산이 필요해요.",
    "2": "반팔 입어요.",
    "3": "눈이 와요.",
    "4": "더워요."
  },
  answer: "1"
},

{
  id: 30,
  type: "reading",
  question: "한국 음식이 어때요?",
  options: {
    "1": "맛있어요.",
    "2": "멀어요.",
    "3": "비싸요.",
    "4": "바빠요."
  },
  answer: "1"
},

{
  id: 31,
  type: "reading",
  question: "아침에 일찍 일어나요.",
  options: {
    "1": "부지런해요.",
    "2": "피곤해요.",
    "3": "졸려요.",
    "4": "바빠요."
  },
  answer: "1"
},

{
  id: 32,
  type: "reading",
  question: "지금 몇 시예요?",
  options: {
    "1": "열한 시예요.",
    "2": "학교예요.",
    "3": "학생이에요.",
    "4": "친구예요."
  },
  answer: "1"
},

{
  id: 33,
  type: "reading",
  question: "버스를 타고 회사에 가요.",
  options: {
    "1": "회사에 가요.",
    "2": "집에 가요.",
    "3": "학교예요.",
    "4": "여행이에요."
  },
  answer: "1"
},

{
  id: 34,
  type: "reading",
  question: "이 가게는 싸요.",
  options: {
    "1": "가격이 낮아요.",
    "2": "가격이 높아요.",
    "3": "사람이 없어요.",
    "4": "멀어요."
  },
  answer: "1"
},

{
  id: 35,
  type: "reading",
  question: "지금 비가 와요.",
  options: {
    "1": "우산을 써요.",
    "2": "눈이 와요.",
    "3": "더워요.",
    "4": "건조해요."
  },
  answer: "1"
},

{
  id: 36,
  type: "reading",
  question: "오늘은 월요일이에요.",
  options: {
    "1": "평일이에요.",
    "2": "주말이에요.",
    "3": "공휴일이에요.",
    "4": "방학이에요."
  },
  answer: "1"
},

{
  id: 37,
  type: "reading",
  question: "회사원이 아침에 출근해요.",
  options: {
    "1": "회사에 가요.",
    "2": "집에 가요.",
    "3": "학교예요.",
    "4": "여행해요."
  },
  answer: "1"
},

{
  id: 38,
  type: "reading",
  question: `
민수는 회사원입니다.
아침에 지하철을 타고 회사에 갑니다.
`,
  options: {
    "1": "민수는 회사에 가요.",
    "2": "민수는 학생이에요.",
    "3": "민수는 집에 있어요.",
    "4": "민수는 여행해요."
  },
  answer: "1"
},

{
  id: 39,
  type: "reading",
  question: `
지은은 주말마다 친구를 만납니다.
이번 주말에는 영화를 볼 거예요.
`,
  options: {
    "1": "지은은 친구를 만나요.",
    "2": "지은은 혼자 있어요.",
    "3": "지은은 일해요.",
    "4": "지은은 공부해요."
  },
  answer: "1"
},

{
  id: 40,
  type: "reading",
  question: `
한국어 공부는 쉽지 않지만
매일 연습하면 실력이 늘어요.
`,
  options: {
    "1": "연습이 중요해요.",
    "2": "공부할 필요 없어요.",
    "3": "아주 쉬워요.",
    "4": "금방 포기해요."
  },
  answer: "1"
}

];


// =====================
// CBT LOGIC
// =====================
let current = null;
let answers = {};

const qNumber = document.getElementById("questionNumber");
const qText = document.getElementById("questionText");
const qImg = document.getElementById("questionImage");
const optionsDiv = document.getElementById("options");
const audioArea = document.getElementById("audioArea");
const audioPlayer = document.getElementById("audioPlayer");

// BUAT KOTAK SOAL
function generateBoxes() {
  questions.forEach(q => {
    const box = document.createElement("div");
    box.className = `q-box ${q.type}`;
    box.textContent = q.id;
    box.dataset.id = q.id;

    box.onclick = () => loadQuestion(q.id);

    document.getElementById(q.type).appendChild(box);
  });
}

// LOAD SOAL
function loadQuestion(id) {
  current = questions.find(q => q.id === id);

  // reset active
  document.querySelectorAll(".q-box")
    .forEach(b => b.classList.remove("active"));

  // tandai opened + active
  const box = document.querySelector(`.q-box[data-id="${id}"]`);
  if(box){
    box.classList.add("opened");
    box.classList.add("active");
  }

  qNumber.textContent = `Soal ${current.id}`;
  qText.innerHTML = current.question;

  // image
  if(current.image){
    qImg.src = current.image;
    qImg.style.display = "block";
  } else {
    qImg.style.display = "none";
  }

  // audio
  if(current.type === "listening"){
    audioArea.style.display = "block";
    audioPlayer.src = current.audio;
    audioPlayer.play().catch(()=>{});
  } else {
    audioArea.style.display = "none";
    audioPlayer.pause();
  }

  // options
  optionsDiv.innerHTML = "";
  Object.keys(current.options).forEach(key => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = `${key}. ${current.options[key]}`;

    if(answers[current.id] === key)
      div.classList.add("selected");

    div.onclick = () => {
      answers[current.id] = key;
      loadQuestion(current.id);
    };

    optionsDiv.appendChild(div);
  });
}

// SUBMIT + SIMPAN NILAI
function submitExam(){
  let correct = 0;
  questions.forEach(q=>{
    if(answers[q.id] === q.answer) correct++;
  });

  const score = correct * 2.5;
  const user = localStorage.getItem("cbt_user");

  let history = JSON.parse(localStorage.getItem("cbt_results")) || [];
  history.push({
    user,
    score,
    correct,
    total: questions.length,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("cbt_results", JSON.stringify(history));
  localStorage.removeItem("cbt_login");

  alert(`Peserta: ${user}\nNilai: ${score}`);
}

// INIT
generateBoxes();
