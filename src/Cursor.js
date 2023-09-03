export default class Cursor {
  constructor() {
    this.cursorDiv = document.querySelector("div.cursor");
    this.cursorDot = this.cursorDiv.querySelector(".cursor__inner--dot");
    this.cursorCircle = this.cursorDiv.querySelector(".cursor__inner--circle");

    this.cursorPos = [[0, 0], [0, 0], 1];
    window.addEventListener("mousemove", (ev) => this.onMouseMove(ev));
    window.addEventListener("scroll", (ev) => this.onScroll(ev));
  }

  onMouseMove(event) {
    this.cursorPos[0] = [event.x, event.y];
    this.updateCursor();
  }
  onScroll(event) {
    this.updateCursor();
  }
  updateCursor() {
    this.cursorPos[1] = [window.scrollX, window.scrollY];
    let x = this.cursorPos[0][0] + this.cursorPos[1][0];
    let y = this.cursorPos[0][1] + this.cursorPos[1][1];

    this.cursorDot.style.transform = `translateX(${x}px) translateY(${y}px)`;
    this.cursorCircle.style.transform = `translateX(${x - 7}px) translateY(${
      y - 7
    }px) scale(${this.cursorPos[2]})`;
  }
  cursorSize(s) {
    this.cursorPos[2] = s;
  }
}
