// CSS VARIABLES FOCUS GLOBAL

const step4Info = document.querySelector(".bestPractices__default");
const step3Active = document.querySelector(".steps__focus");
const questionsText = document.querySelector(".questions");

// FOCUS A

// VARIABLES CATEGORY A SPECIFIC

// FILTER QUESTIONS
let unique_questionsA = [
  ...new Set(formsA.filter((i) => i[2] === "Deskundigheid").map((i) => i[3])),
];

// FUNCTION
function displayQuestionsA() {
  state.questions = [];
  unique_questionsA.forEach(function (question, index) {
    document.getElementById("question" + index).innerHTML = question;
    state.questions.push(question);
  });

  step4Info.innerHTML = "";
  const htmlStep4Info = `<div class="bestPractices__default" id='bestPracticeDefault'> Stap 2. Kies een vraag</div>`;
  step4Info.insertAdjacentHTML("afterbegin", htmlStep4Info);
  step3Active.innerHTML = "";
  const htmlStep3Active = `<div class="steps__focus--active" id='step3'>Focus</div>`;
  step3Active.insertAdjacentHTML("afterbegin", htmlStep3Active);
  focusText.style.color = "black";
}
document.querySelector(".focus__A").addEventListener("click", displayQuestionsA);
