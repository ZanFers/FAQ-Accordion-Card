const questions = document.querySelectorAll(".toggle-text");

function toggleQuestion() {
  const content = this.nextElementSibling;
  const arrow = this.nextElementSibling.nextElementSibling;
  const allHiddenText = document.getElementsByClassName("hidden-text");
  const allArrows = document.getElementsByClassName("arrow");

  //Adding classes based on hidden-text class (element sibling of toggle-text)
  if (content.classList.contains("hide")) {
    content.classList.remove("hide");
    this.classList.add("bold");
    arrow.classList.add("rotate");
  } else {
    content.classList.add("hide");
    arrow.classList.remove("rotate");
    this.classList.remove("bold");
  }

  //For loops to hide all others except the one that is clicked/active
  for (var i = 0; i < allHiddenText.length; i++) {
    if (allHiddenText[i] != content) {
      allHiddenText[i].classList.add("hide");
    }
  }

  for (var j = 0; j < allArrows.length; j++) {
    if (allArrows[j] != arrow) {
      allArrows[j].classList.remove("rotate");
    }
  }

  for (var q = 0; q < questions.length; q++) {
    if (questions[q] != this) {
      questions[q].classList.remove("bold");
    }
  }
}

(function () {
  questions.forEach((x) => {
    x.addEventListener("click", toggleQuestion);
  });
})();
