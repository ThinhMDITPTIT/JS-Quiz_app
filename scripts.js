// Generate Quiz Array Objects
const quizs = [];
// Create the array contain multi quiz Objects
for (let i = 0; i < myQuestions.length; i++) {
  if (!myQuestions[i].multi) {
    let newObj = new SingleChoiceQuestion(
      myQuestions[i].question,
      myQuestions[i].answers,
      myQuestions[i].multi,
      myQuestions[i].correctAnswer
    );
    quizs.push(newObj);
  } else {
    let newObj = new MultiChoiceQuestion(
      myQuestions[i].question,
      myQuestions[i].answers,
      myQuestions[i].multi,
      myQuestions[i].correctAnswer
    );
    quizs.push(newObj);
  }
}

// Create List of Quizs
let quizItem = new ListQuiz(quizs);

// Create view of page
let contentPage = document.querySelector('div.container');
let content = `
  <h1 class="text-center">JavaScript Online Quiz</h1>
  <div class="sub-title text-right"><p id="quizNumber"></p></div>
  <div class="quiz-content"></div>
  <div id="btn-group" class="text-center">
    <button id="btnPrevious" class="button">Previous Question</button>
    <button id="btnNextSubmit" class="button">Next Question</button>
  </div>
  <h2 id="totalScore"></h2>
`;
contentPage.innerHTML = content;

// Traversing DOM
let subTitle = document.getElementById('quizNumber');
let quizContent = document.querySelector('.quiz-content');
let btnGroup = document.getElementById('btn-group');
let btnPrevious = document.getElementById('btnPrevious');
let btnNextSubmit = document.getElementById('btnNextSubmit');
let totalScore = document.getElementById('totalScore');

// Function to Generate View of current Quiz
function generateQuizView() {
  let quizQuestion = `
        <h3>Question ${quizItem.currentIndex + 1}: ${
    quizItem.currentQuiz.question
  }</h3>
    `;
  let currentQuizContent = quizQuestion;
  let quizAnswers = [];

  // Push answers to quizAnswers[]
  for (let answerKey in quizItem.currentQuiz.answers) {
    // Check the type of current Quiz Object
    if (quizItem.currentQuiz instanceof SingleChoiceQuestion) {
      quizAnswers.push(
        `
          <div class="answers-question">
          <input 
            id="answer${quizItem.currentIndex + answerKey}" 
            type="radio" name="question${quizItem.currentIndex}" 
            value="${answerKey}"
            ${
              answerKey == quizItem.tickedAnswer[quizItem.currentIndex]
                ? 'checked'
                : ''
            }
          >
          <label 
            for="answer${quizItem.currentIndex + answerKey}">${answerKey} : ${
          quizItem.currentQuiz.answers[answerKey]
        }</label>
          </div>
        `
      );
    } else {
      quizAnswers.push(
        `
          <div class="answers-question">
            <input 
              id="answer${quizItem.currentIndex + answerKey}" 
              type="checkbox" name="question${quizItem.currentIndex}" 
              value="${answerKey}"
              ${
                quizItem.tickedAnswer[quizItem.currentIndex] &&
                quizItem.tickedAnswer[quizItem.currentIndex].indexOf(
                  answerKey
                ) != -1
                  ? 'checked'
                  : ''
              }
            >
            <label 
              for="answer${quizItem.currentIndex + answerKey}">${answerKey} : ${
          quizItem.currentQuiz.answers[answerKey]
        }</label>
          </div>
        `
      );
    }
  }

  // Join question & answers concepts
  for (let i = 0; i < quizAnswers.length; i++) {
    currentQuizContent += quizAnswers[i];
  }

  // Change view current index of total Quiz
  quizContent.innerHTML = currentQuizContent;
  subTitle.innerHTML = `Question ${quizItem.currentIndex + 1} of ${
    quizs.length
  }`;

  // Check previous btn
  if (quizItem.currentIndex <= 0) {
    btnPrevious.disabled = true;
  } else {
    btnPrevious.disabled = false;
  }

  // Check next btn
  if (quizItem.currentIndex == quizs.length - 1) {
    btnNextSubmit.innerHTML = 'Submit';
  } else {
    btnNextSubmit.innerHTML = 'Next Question';
  }
}

// Generate first Quiz View
generateQuizView();

// Add Event Handler for Button Group using Event Delegation
btnGroup.addEventListener('click', function (event) {
  let ele = event.target;
  if (ele.matches('#btnPrevious')) {
    quizItem.previousQuestion();
    generateQuizView();
    return;
  }
  if (ele.matches('#btnNextSubmit')) {
    if (btnNextSubmit.innerHTML === 'Submit') {
      quizItem.nextQuestion();
      return;
    } else {
      quizItem.nextQuestion();
      generateQuizView();
      return;
    }
  }
});
