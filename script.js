let button = document.getElementById("button");
let question = document.getElementById("question");
let answer = document.getElementById("answer");
let nextbutton = document.getElementById("nextbutton");
let prevbutton = document.getElementById("prevbutton");
let cardIndex = document.getElementById("card-index");
//absara
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
  {
    question: "What is a Variable?",
    answer: "A variable allows you to store values.",
  },
  {
    question: "What is an Array?",
    answer:
      "An array allows you to store multiple values in a single variable.",
  },
  {
    question: "What is the DOM?",
    answer:
      "The Document Object Model (DOM) represents the page structure of an application.",
  },
  {
    question: "What is an Event Listener?",
    answer:
      "An event listener waits for an event to occur and executes an action.",
  },
  {
    question: "What is the difference between let and const?",
    answer:
      "'let' can be changed while 'const' cannot be changed once declared.",
  },
  {
    question: "What does HTML stand for?",
    answer: "HTML stands for HyperText Markup Language.",
  },
  {
    question: "What is the purpose of the <head> tag in HTML?",
    answer: "The <head> tag contains metadata and links to external resources.",
  },
  {
    question: "What is the <body> tag used for in HTML?",
    answer: "The <body> tag defines the main content of the HTML document.",
  },
  {
    question: "What is an HTML attribute?",
    answer:
      "An HTML attribute provides additional information about an element.",
  },
  {
    question: "What is the <a> tag used for in HTML?",
    answer: "The <a> tag is used to create hyperlinks.",
  },
  {
    question: "What is the <img> tag used for in HTML?",
    answer: "The <img> tag is used to embed images in a webpage.",
  },
  {
    question: "What is the <form> tag used for in HTML?",
    answer: "The <form> tag is used to create forms for user input.",
  },
  {
    question: "What is the difference between <ol> and <ul>?",
    answer: "<ol> creates an ordered list, and <ul> creates an unordered list.",
  },
  {
    question: "What does CSS stand for?",
    answer: "CSS stands for Cascading Style Sheets.",
  },
  {
    question: "What is CSS used for?",
    answer: "CSS is used to style and layout web pages.",
  },
  {
    question: "How do you add CSS to an HTML file?",
    answer:
      "You can use inline styles, an internal <style> tag, or an external stylesheet.",
  },
  {
    question: "What is a CSS selector?",
    answer: "A CSS selector is a pattern used to select and style elements.",
  },
  {
    question: "What is the difference between 'id' and 'class' in CSS?",
    answer:
      "'id' is unique to one element, while 'class' can be used for multiple elements.",
  },
  {
    question: "What is the purpose of the color property in CSS?",
    answer: "The color property is used to set the color of text.",
  },
  {
    question: "What is the background-color property in CSS?",
    answer:
      "The background-color property is used to set the background color of an element.",
  },
  {
    question: "How do you set the font size in CSS?",
    answer: "You use the 'font-size' property, e.g., font-size: 16px;",
  },
  {
    question: "What is the difference between 'margin' and 'padding' in CSS?",
    answer:
      "Margin is the space outside an element, while padding is the space inside an element.",
  },
  {
    question: "What does the 'display' property do in CSS?",
    answer:
      "The 'display' property defines how an element is displayed, e.g., block, inline, or none.",
  },
  {
    question: "What is the purpose of the 'flexbox' layout in CSS?",
    answer: "Flexbox is used to create flexible and responsive layouts.",
  },
  {
    question: "What is the 'position' property in CSS?",
    answer:
      "The 'position' property specifies how an element is positioned in the document.",
  },
];

let questionArr = 0;

// Show the answers on refresh

function updateFlashcard() {
  question.innerText = flashcards[questionArr].question;
  answer.innerText = flashcards[questionArr].answer;
  answer.classList.add("hidden");
  cardIndex.innerText = `${questionArr + 1}/${flashcards.length}`;
}

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
    updateFlashcard();

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
    updateFlashcard();

    // Adds the question to the question and answer div
    question.innerText = flashcards[questionArr].question;
    answer.innerText = flashcards[questionArr].answer;

    // hides the answer
    answer.classList.add("hidden");
  }
});

updateFlashcard();
