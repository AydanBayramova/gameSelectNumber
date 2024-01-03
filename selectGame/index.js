"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guesss = document.querySelector(".guess").value;
  console.log(guesss);

  if (!guesss) {
    document.querySelector(".message").textContent = "No number entered";
  } else if (parseInt(guesss) === secretNumber) {
    document.querySelector(".message").textContent =
      "Congratulations! You guessed the correct number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".highscore").textContent = score;
  } else {
    if (guesss > secretNumber) {
      document.querySelector(".message").textContent = "too high";
    } else {
      document.querySelector(".message").textContent = "too low";
    }

    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "game finished(";
    }
  }
  document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    score = 20;
    document.querySelector(".message").textContent = "Start guessing..";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value;
    document.querySelector("body").style.backgroundColor = "red";
  });
});
