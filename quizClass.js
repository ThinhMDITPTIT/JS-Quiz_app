// Create Abstract Class
class Quiz {
  // Protected properties
  _question;
  _answers;
  _multi;
  _correctAnswer;
  // Getter functions
  get question() {
    return this._question;
  }
  get answers() {
    return this._answers;
  }
  get multi() {
    return this._multi;
  }
  get correctAnswer() {
    return this._correctAnswer;
  }
  // Contructor just run only once when create the instance of class
  constructor(question, answers, multi, correctAnswer) {
    this._question = question;
    this._answers = answers;
    this._multi = multi;
    this._correctAnswer = correctAnswer;
  }
  // Abstract method
  isCorrectChoices() {}
}

// Inheritance and Polymorphism
class SingleChoiceQuestion extends Quiz {
  constructor(question, answers, multi, correctAnswer) {
    super(question, answers, multi, correctAnswer);
  }
  isCorrectChoices(choice) {
    return this.correctAnswer === choice;
  }
}

// Inheritance and Polymorphism
class MultiChoiceQuestion extends Quiz {
  constructor(question, answers, multi, correctAnswer) {
    super(question, answers, multi, correctAnswer);
  }
  isCorrectChoices(choice) {
    if (this.correctAnswer.indexOf(choice) !== -1) {
      return true;
    } else {
      return false;
    }
  }
}
