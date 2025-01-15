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
  console.log("Prev Button Clicked");
});
