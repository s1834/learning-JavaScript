"use strict";

// Coding Challenge 1
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  // 1.
  registerNewAnswer() {
    const choice = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option NUmber)`
      )
    );
    typeof choice === "number" && choice >= 0 && choice <= 3
      ? this.answers[choice]++
      : console.log("Wrong option selected");
    // 4.
    this.displayResults();
    this.displayResults("string");
  },
  // 3.
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};
// 2.
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// 5.
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// Coding Challenge #2
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document
    .querySelector("body")
    .addEventListener("click", () => (header.style.color = "blue"));
})();
