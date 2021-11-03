const myQuestions = [
  {
    question: `Which of the following statements will throw an error?`,
    answers: {
      a: `var fun = function bar(){}`,
      b: `var fun = function bar{}`,
      c: `function fun(){}`,
      d: `function(){}`,
    },
    multi: true,
    correctAnswer: ['b', 'd'],
  },
  {
    question: 'JavaScript is ___________ language.',
    answers: {
      a: 'Programming',
      b: 'Application',
      c: 'None of These',
      d: 'Scripting',
    },
    multi: false,
    correctAnswer: 'd',
  },
  {
    question:
      'Which of the following is a valid type of function javascript supports?',
    answers: {
      a: 'name function',
      b: 'anonymous function',
      c: 'both of a and b',
      d: 'none of the above',
    },
    multi: false,
    correctAnswer: 'c',
  },
  {
    question:
      'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
    answers: {
      a: 'getIndex()',
      b: 'location()',
      c: 'indexOf()',
      d: 'getLocation()',
    },
    multi: false,
    correctAnswer: 'c',
  },
  {
    question: `Where is the correct place to insert a JavaScript?`,
    answers: {
      a: `The body section`,
      b: `The head section`,
      c: `None of above`,
    },
    multi: true,
    correctAnswer: ['a', 'b'],
  },
  {
    question: `How do you create a function in JavaScript?`,
    answers: {
      a: `function = myFunction()`,
      b: `function myFunction()`,
      c: `function:myFunction()`,
    },
    multi: false,
    correctAnswer: 'b',
  },
  {
    question: `How do you write "Hello World" in an alert box?`,
    answers: {
      a: `alertBox("Hello World");`,
      b: `msg("Hello World");`,
      c: `alert("Hello World");  `,
      d: `msgBox("Hello World");`,
    },
    multi: false,
    correctAnswer: 'c',
  },
  {
    question: `How do you call a function named "myFunction"?`,
    answers: {
      a: `call function myFunction()`,
      b: `myFunction()`,
      c: `call myFunction()`,
    },
    multi: false,
    correctAnswer: 'b',
  },
  {
    question: `How to write an IF statement in JavaScript?`,
    answers: {
      a: `if (i == 5)`,
      b: `if i = 5 then`,
      c: `if i = 5`,
      d: `if i == 5 then`,
    },
    multi: false,
    correctAnswer: 'a',
  },
  {
    question: `How does a WHILE loop start?`,
    answers: {
      a: `while i = 1 to 10`,
      b: `while (i <= 10)`,
      c: `while (i <= 10; i++)`,
    },
    multi: false,
    correctAnswer: 'b',
  },
  {
    question: `How does a FOR loop start?`,
    answers: {
      a: `for (i = 0; i <= 5)`,
      b: `for (i <= 5; i++)`,
      c: `for i = 1 to 5`,
      d: `for (i = 0; i <= 5; i++)`,
    },
    multi: false,
    correctAnswer: 'd',
  },
  {
    question: 'Which one of the following is valid data type of JavaScript',
    answers: {
      a: 'number',
      b: 'void',
      c: 'boolean',
      d: 'nothing',
    },
    multi: true,
    correctAnswer: ['a', 'c'],
  },
  {
    question: 'Which is faster between JavaScript and an ASP script?',
    answers: {
      a: 'JavaScript',
      b: 'ASP script',
    },
    multi: false,
    correctAnswer: 'a',
  },
  {
    question: 'Which company developed JavaScript?',
    answers: {
      a: 'Netscape',
      b: 'Apple',
      c: 'Microsoft',
    },
    multi: false,
    correctAnswer: 'a',
  },
  {
    question: `JavaScript is a ___ -side programming language.`,
    answers: {
      a: 'Client',
      b: 'Server',
      c: 'Both a and b',
    },
    multi: false,
    correctAnswer: 'c',
  },
  {
    question: `How can you add a comment in a JavaScript?`,
    answers: {
      a: `//This is a comment`,
      b: `"This is a comment"`,
      c: `'This is a comment'`,
    },
    multi: false,
    correctAnswer: 'a',
  },
  {
    question: `Which of the following will write the message “Hello DataFlair!” in an alert box?`,
    answers: {
      a: `alertBox(“Hello DataFlair!”);`,
      b: `alert(Hello DataFlair!);`,
      c: `msgAlert(“Hello DataFlair!”);`,
      d: `alert(“Hello DataFlair!”);`,
    },
    multi: false,
    correctAnswer: 'd',
  },
  {
    question: `How do you find the minimum of x and y using JavaScript?`,
    answers: {
      a: `min(x,y);`,
      b: `Math.min(x,y);`,
      c: `Math.min(xy);`,
      d: `min(xy);`,
    },
    multi: false,
    correctAnswer: 'b',
  },
  {
    question: `What is the correct way to write a JavaScript array?`,
    answers: {
      a: `var colors = ["red", "green", "blue"]`,
      b: `var colors = "red", "green", "blue"`,
      c: `var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")`,
      d: `var colors = (1:"red", 2:"green", 3:"blue")`,
    },
    multi: false,
    correctAnswer: 'a',
  },
  {
    question: `How do you round the number 7.25, to the nearest integer?`,
    answers: {
      a: `Math.rnd(7.25)`,
      b: `rnd(7.25)`,
      c: `round(7.25)`,
      d: `Math.round(7.25)`,
    },
    multi: false,
    correctAnswer: 'd',
  },
];
