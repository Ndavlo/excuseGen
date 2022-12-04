/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let generateExcuse = () => {
    let who = [
      "The dog",
      "My grandma",
      "His turtle",
      "My bird",
      "My snake",
      "My crocodile"
    ];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying",
      "before I could get in the car",
      "before the presentation",
      "before I arrived"
    ];

    let whoI = Math.floor(Math.random() * who.length);
    let actionI = Math.floor(Math.random() * action.length);
    let whatI = Math.floor(Math.random() * what.length);
    let whenI = Math.floor(Math.random() * when.length);

    return (
      who[whoI] +
      " " +
      action[actionI] +
      " " +
      what[whatI] +
      " " +
      when[whenI] +
      "."
    );
  };
  document.querySelector("#buttonGen").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};
