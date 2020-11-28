// VARIABLES CATEGORIES GLOBAL

const step2Info = document.querySelector(".bestPractices__default");
const step1Active = document.querySelector(".steps__category");
const themesText = document.querySelector(".themes");
const catGlow = document.querySelector(".categories");

// CATEGORY A

// VARIABLES CATEGORY A SPECIFIC
let category1 = document.getElementById("category0").innerHTML;

// FILTER THEMES
const unique_themesA = [...new Set(formsA.filter((i) => i[0] === category1).map((i) => i[1]))];

// FUNCTION
function displayThemes() {
  state.themes = [];
  unique_themesA.forEach(function (theme, index) {
    document.getElementById("themeText" + index).innerHTML = theme;
    state.themes.push(theme);
  });
  step2Info.innerHTML = "";
  const htmlStep2Info = `<div class="bestPractices__default" id='bestPracticeDefault'> Stap 2. Kies een thema</div>`;
  step2Info.insertAdjacentHTML("afterbegin", htmlStep2Info);
  step1Active.innerHTML = "";
  const htmlStep1Active = `<div class="steps__category--active">Categorie</div>`;
  step1Active.insertAdjacentHTML("afterbegin", htmlStep1Active);
  themesText.style.color = "black";
  catGlow.style.animation = "none";
}

// EVENT LISTENER
document.querySelector(".categories__A").addEventListener("click", displayThemes);
