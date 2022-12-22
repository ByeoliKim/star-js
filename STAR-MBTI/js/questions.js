import { questions } from './data.js'

const progressValueEl = document.querySelector('.progress .value');
const numberEl = document.querySelector('.number');
const questionEl = document.querySelector('.question');
const choice1El = document.querySelector('.choice1');
const choice2El = document.querySelector('.choice2');

let currentNumber = 0; // 현재 질문 번호
let mbti = ''; // MBTI 결과

// 화면에 질문을 랜더링하는 함수
const renderQuestion = () => {
  const question = questions[currentNumber]; //data.js 에서 가져온 배열 데이터
  numberEl.innerHTML = question.number; //질문 번호
  questionEl.innerHTML = question.question; // 질문 제목
  choice1El.innerHTML = question.choices[0].text; // 질문 선택지 1
  choice2El.innerHTML = question.choices[1].text; // 질문 선택지 2
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'; // 프로그래스바 영역
}

// 다음 질문으로 넘어가는 함수
const nextQuestion = (choiceNumber) => {
  // 더 이상 질문이 없으면, 결과 페이지를 보여줌
  if (currentNumber === questions.length - 1) {
    return showResultPage();
  }
  const question = questions[currentNumber];
  mbti = mbti + question.choices[choiceNumber].value;
  currentNumber = currentNumber + 1;
  renderQuestion();
}
// 결과 페이지로 이동
const showResultPage = () => {
  location.href = '/results.html?mbti=' + mbti;
}

// '답변1' 혹은 '답변2'를 클릭했을 때 동작하는 코드에요!
choice1El.addEventListener('click', () => { nextQuestion(0) });
choice2El.addEventListener('click', () => { nextQuestion(1) });

// 첫 번째 질문을 렌더링
renderQuestion();