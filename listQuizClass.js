class ListQuiz {
  // Private properties
  #currentIndex = 0;
  #scores = [];
  #myQuestions;
  // Public property
  tickedAnswer = [];
  // Contructor just run only once when create the instance of class
  constructor(myQuestions) {
    this.#myQuestions = myQuestions;
  }
  // Getter functions
  get myQuestions() {
    return this.#myQuestions;
  }
  get currentIndex() {
    return this.#currentIndex;
  }
  get currentQuiz() {
    return this.#myQuestions[this.#currentIndex];
  }
  get scores() {
    return this.#scores;
  }

  // Calculate total score
  calculateScore() {
    // Check the type of current Quiz Object
    if (this.currentQuiz instanceof SingleChoiceQuestion) {
      let countTicked = 0;
      let radioGroup = document.getElementsByName(
        `question${this.currentIndex}`
      );
      for (let i = 0; i < radioGroup.length; i++) {
        if (radioGroup[i].checked) {
          this.tickedAnswer[this.currentIndex] = radioGroup[i].value;
          if (this.currentQuiz.isCorrectChoices(radioGroup[i].value)) {
            this.scores[this.currentIndex] = 1;
          } else {
            this.scores[this.currentIndex] = 0;
          }
          countTicked++;
        }
      }
      if (countTicked == 0) this.scores[this.currentIndex] = 0;
    } else {
      let checkboxGroup = document.getElementsByName(
        `question${this.currentIndex}`
      );
      let count = 0;
      this.tickedAnswer[this.currentIndex] = [];
      for (let i = 0; i < checkboxGroup.length; i++) {
        if (checkboxGroup[i].checked) {
          this.tickedAnswer[this.currentIndex].push(checkboxGroup[i].value);
          if (this.currentQuiz.isCorrectChoices(checkboxGroup[i].value)) {
            count++;
          }
        }
      }
      if (count == this.currentQuiz.correctAnswer.length)
        this.scores[this.currentIndex] = 1;
      else this.scores[this.currentIndex] = 0;
    }
  }

  // Control the Previous button
  previousQuestion() {
    this.calculateScore();
    if (this.currentIndex == 0) {
      this.#currentIndex = 0;
    } else {
      this.#currentIndex--;
    }
  }

  // Control the Next button
  nextQuestion() {
    this.calculateScore();
    if (this.currentIndex == this.myQuestions.length - 1) {
      this.#currentIndex = this.myQuestions.length - 1;
      this.submitQuiz();
    } else {
      this.#currentIndex++;
    }
  }

  // Control the Submit button
  submitQuiz() {
    var empty = false;
    let checkNull = this.tickedAnswer.filter(function (element) {
      return element != null;
    });
    for (let i = 0; i < this.tickedAnswer.length; i++) {
      if (
        typeof this.tickedAnswer[i] == 'object' &&
        this.tickedAnswer[i].length == 0
      ) {
        empty = true;
        break;
      }
    }
    // Check unticked question
    if (checkNull.length < this.myQuestions.length || empty == true) {
      alert('You might mark all quiz to submit!.');
    } else {
      let sum = 0;
      for (let i = 0; i < this.scores.length; i++) {
        sum += Number(this.scores[i]);
      }
      btnNextSubmit.disabled = true;
      btnPrevious.disabled = true;
      totalScore.innerHTML = `Total Score: ${sum}.`;
    }
  }
}
