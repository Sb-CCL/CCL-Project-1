const flashcards = [
  {
    question: "What are Parameters and Arguments?",
    answer:
      "Parameters are variables listed in the function definition. Arguments are actual values passed to the function when it is called.",
  },
  {
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language used for web developement.",
  },
];

let arrQuestions = 0;

// For loop that loops through the flashcards objects
for (let i = 0; i < flashcards.length; i++) {
  // Question & Answers
  //   console.log(flashcards[i]);
  // Questions
  //   console.log(`Question: ${flashcards[i].question}`);
  // Answers
  //   console.log(`Answer: ${flashcards[i].answer}`);
}

// Event Listener - Answer Button
const answerButton = document.getElementById("answerButton");
let answerQuestion = 0;
answerButton.addEventListener("click", function () {
  console.log(`Answer: ${flashcards[answerQuestion].answer}`);
  nextQuestion++;
});

// Event Listener - Next Question Button
const nextQuestionButton = document.getElementById("nextQuestionButton");
let nextQuestion = 0;
nextQuestionButton.addEventListener("click", function () {
  console.log(`Question: ${flashcards[nextQuestion].question}`);
  nextQuestion++;
});

// Event Listener - Previous Question Button
const prevQuestionButton = document.getElementById("prevQuestionButton");
let prevQuestion = 0;
prevQuestionButton.addEventListener("click", function () {
  console.log(`Question: ${flashcards[prevQuestion].question}`);
  prevQuestion--;
});

const question = document.getElementById("question");
const answer = document.getElementById("answer");

// question.append("Test");

// console.log(question);
// console.log(answer);
