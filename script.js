let button = document.getElementById("button");
let question = document.getElementById("question");
let answer = document.getElementById("answer");
let nextbutton = document.getElementById("nextbutton");
let prevbutton = document.getElementById("prevbutton");

const flashcards = [
  {
    question: "What are Parameters and Arguments?",
    answer:
      "Parameters are variables listed in the function definition. Arguments are actual values passed to the function when it is called.",
  },
  {
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language used for web development.",
  },
];

let questionArr = 0;

question.innerText = flashcards[questionArr].question;
answer.innerText = flashcards[questionArr].answer;
answer.classList.add("hidden");

button.addEventListener("click", function () {
  answer.classList.toggle("hidden");
});
