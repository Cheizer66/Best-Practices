// ACTUAL STATE ARRAY FOR STORING RECENT SAVED BEST PRACTICE (WITH HEART ICON)
let state = [];
// SAVED STATE ARRAY FOR SAVED BEST PRACTICES
let allSavedBestPractices = [];

// FUNCTION SAVE BEST PRACTICES
function saveBestPractice() {
  let savedBestPractice = state;
  allSavedBestPractices.push(...state);
  const htmlSavedBestPractice = `<div class="popupSaved__text">
  <h3 class="heading-saved">Vraag</h3>
  <div class="par__question-saved">${state[3]}</div>
  <button class="btn__showAnswer" onclick="showAnswer()">Antwoord</button>
  <div id="par__answer-saved">${state[4]}</div>
  <div class="savedLine"></div>
</div>`;
  saveContainer.insertAdjacentHTML("afterbegin", htmlSavedBestPractice);
}

// EVENT HANDLER SAVE BEST PRACTICE
document.querySelector(".saveAnswersText").addEventListener("click", saveBestPractice);

// QUERY SELECTORS
const saveContainer = document.querySelector(".popupSaved__text");

// SHOW ANSWER
function showAnswer() {
  const answer = document.getElementById("par__answer-saved");
  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
