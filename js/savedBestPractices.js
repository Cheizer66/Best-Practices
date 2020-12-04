// ACTUAL STATE ARRAY FOR STORING RECENT SAVED BEST PRACTICE (WITH HEART ICON)
let state = [];
// SAVED STATE ARRAY FOR SAVED BEST PRACTICES
let allSavedBestPractices = [];

// FUNCTION SAVE BEST PRACTICES
function saveBestPractice() {
  let savedBestPractice = state;
  allSavedBestPractices.push(...state);
  const htmlSavedBestPractice = `<div class="popupSaved__container">
  <h3 class="heading-saved">Vraag</h3>
  <div class="popupSaved__question par__question-saved">${state[3]}</div>
  <h3 class="heading-saved">Antwoord</h3>
  <div class="popupSaved__question par__answer-saved">${state[4]}</div>
  <div class="savedLine"></div>
</div>`;
  saveContainer.insertAdjacentHTML("afterbegin", htmlSavedBestPractice);
}

// EVENT HANDLER SAVE BEST PRACTICE
document.querySelector(".saveAnswersText").addEventListener("click", saveBestPractice);

// QUERY SELECTORS
const saveContainer = document.querySelector(".popupSaved__content");
