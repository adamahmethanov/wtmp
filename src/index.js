
const menu = document.getElementById("menufood");
const btn = document.getElementById("submit");
const randombtn = document.getElementById("random");
const randomMenu = document.getElementById("randomfood");
let currentLanguage = "fi";
const number = Math.floor(Math.random() * 6);
const number2 = Math.floor(Math.random() * 6);
console.log(number);

import data from './sodexo-day-example.json';
console.log(data);


const coursesEn = ["Hamburger, cream sauce and poiled potates",
  "Goan style fish curry and whole grain rice",
  "Vegan Chili sin carne and whole grain rice",
  "Broccoli puree soup, side salad with two napas",
  "Lunch baguette with BBQ-turkey filling",
  "Cheese / Chicken / Vege / Halloum burger and french fries"];

const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
  "Goalaista kalacurrya ja täysjyväriisiä",
  "vegaani Chili sin carne ja täysjyväriisi",
  "Parsakeittoa,lisäkesalaatti kahdella napaksella",
  "Lunch baguette with BBQ-turkey filling",
  "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"]; 



btn.addEventListener("click", () => {
  if (currentLanguage === "fi") {
    menu.textContent = coursesEn[number];
    currentLanguage = "en";
  } else {
    menu.textContent = coursesFi[number];
    currentLanguage = "fi";
  }
});

randombtn.addEventListener("click", () => {
  if (currentLanguage === "fi") {
    randomMenu.textContent = coursesEn[number2];
    currentLanguage = "en";
  } else {
    randomMenu.textContent = coursesFi[number2];
    currentLanguage = "fi";
  }
});

menu.textContent = coursesFi[number];

