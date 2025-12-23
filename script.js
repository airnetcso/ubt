const soal = [];

// ===== LISTENING 1–20 =====
for (let i=1;i<=20;i++){
  soal.push({
    id:i,
    type:"audio",
    question:"듣고 알맞은 것을 고르세요. ("+i+")",
    options:["가다","오다","먹다","자다"],
    audio:"audio/listening_"+String(i).padStart(2,'0')+".mp3",
    image:null
  });
}

// ===== READING 21–40 =====
for (let i=21;i<=40;i++){
  soal.push({
    id:i,
    type:"text",
    question:"다음 문장을 읽고 맞는 것을 고르세요. ("+i+")",
    options:["예","아니요","모릅니다","괜찮아요"],
    image:null
  });
}

// ===== VARIABEL =====
let activeBox = null;
const answers = {}; // jawaban user
const scorePerQuestion = 2.5;

// ===== RENDER KOTAK =====
soal.forEach(q=>{
  const box=document.createElement('div');
  box.className='q-box '+(q.id<=20?'listening-box':'reading-box');
  box.textContent=q.id;

  box.onclick=()=>{
    if(activeBox){
      activeBox.classList.remove('active');
      activeBox.classList.add('opened');
    }
    box.classList.add('active');
    activeBox=box;
    showQuestion(q);
  };

  (q.id<=20?listening:reading).appendChild(box);
});

// ===== TAMPILKAN SOAL =====
function showQuestion(q){
  questionNumber.textContent="Soal "+q.id;
  questionText.textContent=q.question;
  options.innerHTML='';
  audioArea.style.display='none';
  questionImage.style.display='none';

  if(q.image){
    questionImage.src=q.image;
    questionImage.style.display='block';
  }

  if(q.type==='audio'){
    audioArea.style.display='block';
    audioPlayer.src=q.audio||"";
  }

  q.options.forEach(opt=>{
    const div=document.createElement('div');
    div.className='option';
    div.textContent=opt;
    div.onclick=()=>{
      document.querySelectorAll('.option').forEach(o=>o.classList.remove('selected'));
      div.classList.add('selected');
      answers[q.id]=opt;

      const box = q.id<=20 ? listening.children[q.id-1] : reading.children[q.id-21];
      box.classList.add('opened');
    };
    options.appendChild(div);
  });
}

// ===== TIMER 50 MENIT =====
let totalTime=50*60;
function updateTimer(){
  const min=Math.floor(totalTime/60);
  const sec=totalTime%60;
  timer.textContent=`Waktu tersisa: ${min}:${sec.toString().padStart(2,'0')}`;
  if(totalTime<=0){ clearInterval(timerInterval); submitExam(); }
  totalTime--;
}
const timerInterval=setInterval(updateTimer,1000);

// ===== SUBMIT =====
submitBtn.onclick=submitExam;
function submitExam(){
  clearInterval(timerInterval);
  let score=0;
  soal.forEach(q=>{
    const correct=q.options[0]; // default jawaban benar = opsi pertama
    if(answers[q.id] && answers[q.id]===correct) score+=scorePerQuestion;
  });
  alert(`Ujian selesai!\nNilai: ${score}`);
}

// ===== RESTART =====
restartBtn.onclick=()=>{
  if(confirm("Yakin ingin mengulang semua soal?")){
    location.reload();
  }
};

// ===== REVIEW =====
reviewBtn.onclick=()=>{
  let reviewText="Review Jawaban:\n";
  soal.forEach(q=>{
    reviewText+=`Soal ${q.id}: ${answers[q.id]||'Belum dijawab'}\n`;
  });
  alert(reviewText);
};
