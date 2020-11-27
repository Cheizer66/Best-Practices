// CSS VARIABLES FOCUS GLOBAL

const step4Info = document.querySelector(".bestPractices__default");
const step3Active = document.querySelector(".steps__focus");
const questionsText = document.querySelector(".questions");
const x = document.getElementById("focusText0").innerHTML;
console.log(x);
// FOCUS A

// ARRAY FOCUS

const questionsFocusA = [];
for (const question of formsA)
  if (formsA[2] === x) {
    questionsFocusA.push(question[3]);
  }
console.log(questionsFocusA);

// FUNCTION;

function displayQuestions() {
  questionsFocusA.forEach(
    (focus, index) => (document.getElementById("question" + index).innerHTML = focus)
  );
  step4Info.innerHTML = "";
  const htmlStep4Info = `<div class="bestPractices__default" id='bestPracticeDefault'> Stap 2. Kies een vraag</div>`;
  step4Info.insertAdjacentHTML("afterbegin", htmlStep4Info);
  step3Active.innerHTML = "";
  const htmlStep3Active = `<div class="steps__focus--active" id='step3'>Focus</div>`;
  step3Active.insertAdjacentHTML("afterbegin", htmlStep3Active);
  focusText.style.color = "black";
}
document.querySelector(".focus__A").addEventListener("click", displayQuestions);
