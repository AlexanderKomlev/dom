import "./css/style.css";
import Game from "./app";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(document.querySelector(".container"));
  window.game = game;

  game.init();

  document.querySelector(".start").addEventListener("click", () => {
    game.start();
  });

  document.querySelector(".stop").addEventListener("click", () => {
    game.stop();
  });

  document.querySelector(".reset").addEventListener("click", () => {
    game.reset();
  });

  document.querySelector(".container").addEventListener("click", (event) => {
    const score = document.querySelector(".score");
    if (event.target.classList.contains("active")) {
      game.click(event.target);
      score.textContent = Number(score.textContent) + 1;
    }
  });
});
