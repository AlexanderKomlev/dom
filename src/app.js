export default class Game {
  constructor(element) {
    this._element = element;
    this._gameplay = null;
    this.level = 1;
  }

  start() {
    const items = this._element.querySelectorAll(".item");

    const timer = 1100 / this.level;
    console.log(timer);
    let currentIndex = 0;
    this._gameplay = setInterval(() => {
      items.forEach((item) => item.classList.remove("clicked"));
      const index = Math.floor(Math.random() * items.length);
      items[currentIndex].classList.remove("active");
      items[index].classList.add("active");
      currentIndex = index;
    }, timer);
  }

  stop() {
    clearInterval(this._gameplay);
    const items = this._element.querySelectorAll(".item");
    items.forEach((item) => item.classList.remove("active"));
  }

  reset() {
    this.stop();
    const score = document.querySelector(".score");
    score.textContent = 0;
    this.level = 1;
  }

  click(element) {
    element.classList.add("clicked");
    this.levelUp();
  }

  levelUp() {
    const score = document.querySelector(".score");
    if (score.textContent % 5 === 0) {
      const levelUp = document.querySelector(".level-up");
      levelUp.classList.toggle("level-up-show");
      setTimeout(() => {
        levelUp.classList.toggle("level-up-show");
      }, 1000);

      this.level += 0.15;
      this.stop();
      this.start();
    }
  }
}
