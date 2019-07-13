import { byeIE } from "./byeie"; // loučíme se s IE

byeIE();

document.addEventListener("DOMContentLoaded", () => { 
  [...document.querySelectorAll(".wcbutton")].forEach((el) => {
    el.addEventListener("click", e => document.querySelector("#wordcloud").innerHTML = `<img class="wcimg" src="https://data.irozhlas.cz/gott-80/img/${e.target.id}.png">`)
  })
});
