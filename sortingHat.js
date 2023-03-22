// Inspo från: https://www.youtube.com/watch?v=riDzcEQbX6k
let getStarted = document.getElementById("getStarted");
let send = document.getElementById("send");
let box = document.getElementById("box");
let questionsBox = document.getElementById("questionsBox");
let questions = document.getElementById("questions");
let options = document.getElementById("options");
let replay = document.getElementById("replay");
let replayTitle = document.getElementById("replayTitle");
let played;
let index;
let fourQuestions = [
  {
    question: "The Gryffindor animal is: ",
    answers: [
      {
        option: "Elephant",
        correct: false,
      },
      {
        option: "Turtle",
        correct: false,
      },
      {
        option: "Scorpion",
        correct: false,
      },
      {
        option: "Lion",
        correct: true,
      },
    ],
  },
  {
    question: "What is Harry Potters favorite subject?",
    answers: [
      {
        option: "Herbology",
        correct: false,
      },
      {
        option: "Charm",
        correct: false,
      },
      {
        option: "Defense Against the Dark Arts",
        correct: true,
      },
      {
        option: "Potions",
        correct: false,
      },
    ],
  },
  {
    question: "What kind of pet does Hermione own?",
    answers: [
      {
        option: "Cat",
        correct: true,
      },
      {
        option: "Rat",
        correct: false,
      },
      {
        option: "Owl",
        correct: false,
      },
      {
        option: "Toad",
        correct: false,
      },
    ],
  },
  {
    question: "Which element represents Slytherin?",
    answers: [
      {
        option: "Water",
        correct: true,
      },
      {
        option: "Fire",
        correct: false,
      },
      {
        option: "Earth",
        correct: false,
      },
      {
        option: "Air",
        correct: false,
      },
    ],
  },
];

function replaySave() {
  if (played === undefined) {
    played = localStorage.getItem("played");
  } else {
    replayTitle.classList.remove("hide");
    replay.innerText = localStorage.getItem("played");
    replayTitle.appendChild(replay);
  }
  localStorage.setItem("played", played++);
}

function showSend() {
  index++;
  displayQuestions();
}

function clear(e) {
  e.classList.remove("correct");
  e.classList.remove("incorrect");
}
function set(e, correct) {
  clear(e);
  if (correct) {
    e.setAttribute("class", "correct");
  } else {
    e.setAttribute("class", "incorrect");
  }
}

function chosenAnswer(chosen) {
  let chosenButton = chosen.target;
  let correct = chosenButton.dataset.correct;
  set(options, correct);
  Array.from(options.children).forEach((click) => {
    set(click, click.dataset.correct);
  });

  if (fourQuestions.length > index + 1) {
    send.classList.remove("hide");
  } else {
    getStarted.innerText = "Play again!";
    getStarted.classList.remove("hide");
  }
}

function reset() {
  send.setAttribute("class", "hide");
  while (options.firstChild) {
    options.removeChild(options.firstChild);
  }
}

function questionAndAnswers(q) {
  questions.innerText = q.question;
  q.answers.forEach((a) => {
    let click = document.createElement("button");
    click.innerText = a.option;
    click.setAttribute("class", "answer");
    click.addEventListener("click", chosenAnswer);
    options.appendChild(click);
    if (a.correct) {
      click.dataset.correct = click.correct;
    }
  });
}

function displayQuestions() {
  reset();
  questionAndAnswers(fourQuestions[index]);
}

send.addEventListener("click", showSend);
getStarted.addEventListener("click", () => {
  index = 0;
  getStarted.setAttribute("class", "hide");
  questionsBox.classList.remove("hide");
  displayQuestions();
  replaySave();
});
replaySave();
