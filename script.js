let button = document.getElementById("button");
let question = document.getElementById("question");
let answer = document.getElementById("answer");
let nextbutton = document.getElementById("nextbutton");
let prevbutton = document.getElementById("prevbutton");

const flashcards = [
  {
    question: "What are Parameters?",
    answer: "Parameters are variables listed in the function definition.",
  },
  {
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language used for web development.",
  },
  {
    question: "What is a Function?",
    answer: "A function is a block of reusable code.",
  },
  {
    question: "What is Git?",
    answer: "A tool that allows you to store, track, and share code.",
  },
  {
    question: "What are Arguments?",
    answer:
      "Arguments are actual values passed to the function when it is called.",
  },
];

let questionArr = 0;

// Show the answers on refresh
question.innerText = flashcards[questionArr].question;
answer.innerText = flashcards[questionArr].answer;
answer.classList.add("hidden");

// Button that toggles display of answer
button.addEventListener("click", function () {
  answer.classList.toggle("hidden");
});

// Event Listener for button press
nextbutton.addEventListener("click", function () {
  // Checks if the button is clicked
  console.log("Next Button Clicked");

  // If statement that iterates through the array
  if (questionArr < flashcards.length - 1) {
    // Incremates up
    questionArr++;

    // Adds the question to the question and answer div
    question.innerText = flashcards[questionArr].question;
    answer.innerText = flashcards[questionArr].answer;

    // hides the answer
    answer.classList.add("hidden");
  }
});

prevbutton.addEventListener("click", function () {
  // Checks if the button is clicked
  console.log("Previous Button Clicked");

  // If statement that iterates through the array
  if (questionArr < flashcards.length + 1) {
    // Incremates up
    questionArr--;

    // Adds the question to the question and answer div
    question.innerText = flashcards[questionArr].question;
    answer.innerText = flashcards[questionArr].answer;

    // hides the answer
    answer.classList.add("hidden");
  }
});
