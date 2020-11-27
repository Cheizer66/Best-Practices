// CSS VARIABLES THEMES GLOBAL

const step3Info = document.querySelector(".bestPractices__default");
const step2Active = document.querySelector(".steps__theme");
const focusText = document.querySelector(".focus");

// THEME A

// CSS VARIABLES THEME A

let theme1 = document.getElementById("themeText0").innerHTML;

// FILTER FOCUS

const unique_focus = [...new Set(formsA.filter((i) => i[1] === theme1).map((i) => i[2]))];
// FUNCTION

function displayFocus() {
  unique_focus.forEach(
    (focus, index) => (document.getElementById("focusText" + index).innerHTML = focus)
  );
  step3Info.innerHTML = "";
  const htmlStep3Info = `<div class="bestPractices__default" id='bestPracticeDefault'> Stap 2. Kies een focus</div>`;
  step3Info.insertAdjacentHTML("afterbegin", htmlStep3Info);
  step2Active.innerHTML = "";
  const htmlStep2Active = `<div class="steps__theme--active" id='step2'>Thema</div>`;
  step2Active.insertAdjacentHTML("afterbegin", htmlStep2Active);
  focusText.style.color = "black";
}
document.querySelector(".themes__A").addEventListener("click", displayFocus);

// THEME B

// CSS VARIABLES THEME B

let themeB = document.getElementById("themeText1").innerHTML;

// FILTER FOCUS

const unique_focusB = [...new Set(formsA.filter((i) => i[1] === themeB).map((i) => i[2]))];

// FUNCTION

function displayFocusB() {
  unique_focusB.forEach(
    (focus, index) => (document.getElementById("focusText" + index).innerHTML = focus)
  );
  step3Info.innerHTML = "";
  const htmlStep3InfoB = `<div class="bestPractices__default" id='bestPracticeDefault'> Stap 2. Kies een focus</div>`;
  step3Info.insertAdjacentHTML("afterbegin", htmlStep3InfoB);
  step2Active.innerHTML = "";
  const htmlStep2ActiveB = `<div class="steps__theme--active" id='step2'>Thema</div>`;
  step2Active.insertAdjacentHTML("afterbegin", htmlStep2ActiveB);
  focusText.style.color = "black";
}

document.querySelector(".themes__B").addEventListener("click", displayFocusB);
