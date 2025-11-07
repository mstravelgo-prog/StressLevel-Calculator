const questions = [
  "Do you feel nervous before exams or tests?",
  "Do you worry about not finishing your homework on time?",
  "Do you get upset if you get lower marks than your friends?",
  "Do you feel tired even after a full night’s sleep?",
  "Do you find it hard to focus on your lessons in class?",
  "Do you feel anxious when your teacher calls your name?",
  "Do you get angry quickly when things don’t go your way?",
  "Do you feel that school work is too much for you?",
  "Do you feel sad when you think about your marks?",
  "Do you get worried about what your teachers think of you?",
  "Do you feel uncomfortable speaking in front of the class?",
  "Do you feel like you don’t have enough time to play or relax?",
  "Do you get nervous before a class presentation or speech?",
  "Do you feel pressure from your parents to get better marks?",
  "Do you find it difficult to make new friends at school?",
  "Do you feel like your classmates treat you unfairly?",
  "Do you feel stressed when you forget to bring homework?",
  "Do you often feel sleepy or bored during class?",
  "Do you feel afraid of being punished by your teacher?",
  "Do you worry too much about what your friends think of you?",
  "Do you get angry when your siblings disturb you while studying?",
  "Do you feel that your parents don’t understand your problems?",
  "Do you feel nervous before a sports event or competition?",
  "Do you worry when your teacher gives surprise tests?",
  "Do you feel bad when your parents compare you with others?",
  "Do you find it difficult to concentrate while studying at home?",
  "Do you feel sad if your friends don’t include you in games?",
  "Do you worry about completing your school projects on time?",
  "Do you feel afraid of asking doubts in class?",
  "Do you feel upset when you get scolded at school?",
  "Do you get irritated easily when you have too much homework?",
  "Do you feel you don’t get enough rest after school?",
  "Do you feel you have no one to talk to when you’re upset?",
  "Do you feel nervous when meeting new students?",
  "Do you get upset when someone makes fun of you?",
  "Do you feel shy talking to teachers or elders?",
  "Do you feel your friends don’t listen to your ideas?",
  "Do you feel bad when someone ignores you in school?",
  "Do you get angry when your plans change suddenly?",
  "Do you feel tired after doing homework or studying for long?",
  "Do you feel afraid of making mistakes in front of others?",
  "Do you get nervous before your report card day?",
  "Do you feel your teachers give too much work?",
  "Do you feel anxious when exams are near?",
  "Do you feel bad if you can’t answer a question in class?",
  "Do you feel bored or restless during study time?",
  "Do you get upset when your parents argue?",
  "Do you feel sad when you’re left out of group activities?",
  "Do you find it hard to balance study and play time?",
  "Do you feel like crying when you are scolded or shouted at?"
];

// Shuffle questions randomly
let shuffled = questions.sort(() => 0.5 - Math.random());
let currentIndex = 0;
let totalScore = 0;

const questionElement = document.getElementById("question");
const buttons = document.querySelectorAll(".option");
const progress = document.getElementById("progress");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const resultText = document.getElementById("result-text");
const restartBtn = document.getElementById("restart");

function loadQuestion() {
  if (currentIndex < 10) {
    questionElement.textContent = shuffled[currentIndex];
    progress.textContent = `Question ${currentIndex + 1} of 10`;
  } else {
    showResult();
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    totalScore += parseInt(btn.dataset.value);
    currentIndex++;
    loadQuestion();
  });
});

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  let avg = totalScore / 10;
  let message = "";

  if (avg <= 1.5) {
    message = "🟢 <b>Very Low Stress</b><br><br>You’re relaxed and positive! Keep enjoying school, hobbies, and spending time with family and friends. Continue balancing study and play — great job!";
  } else if (avg <= 2) {
    message = "🟡 <b>Low Stress</b><br><br>You handle most situations calmly. Sometimes school or homework may feel heavy, but you manage well. Keep talking to parents or teachers if anything feels too much.";
  } else if (avg <= 2.5) {
    message = "🟠 <b>Moderate Stress</b><br><br>You might feel a little pressure from school or home, and that’s okay. Try taking small breaks, listening to music, or going for a walk when things feel hard.";
  } else if (avg <= 3) {
    message = "🟣 <b>High Stress</b><br><br>It seems you’re feeling quite pressured. Remember, it’s okay to ask for help — from teachers, parents, or friends. Try relaxing activities like drawing, reading, or deep breathing.";
  } else if (avg <= 3.5) {
    message = "🔴 <b>Very High Stress</b><br><br>You may be struggling with studies or emotions. Please talk to someone you trust. It’s important to rest, get enough sleep, and not compare yourself to others.";
  } else {
    message = "⚫ <b>Extreme Stress</b><br><br>You're carrying a lot inside. Don’t keep it to yourself — talk to a teacher, counselor, or parent. You deserve peace and support. Remember: you’re not alone.";
  }

  resultText.innerHTML = message;
}

restartBtn.addEventListener("click", () => {
  totalScore = 0;
  currentIndex = 0;
  shuffled = questions.sort(() => 0.5 - Math.random());
  quizBox.classList.remove("hidden");
  resultBox.classList.add("hidden");
  loadQuestion();
});

loadQuestion();
