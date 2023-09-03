export default class ProjectBoxs {
  constructor() {
    this.projectBoxs = document.getElementsByClassName("project-box");

    for (let e of this.projectBoxs) {
      e.addEventListener("mousemove", (ev) => this.onMouseMove(ev, e));
      e.addEventListener("mouseover", (ev) => this.onMouseOver(ev));
      e.addEventListener("mouseout", (ev) => this.onMouseOut(ev, e));
    }
  }

  onMouseMove(event, e) {
    let offsetLeft = 0;
    let offsetTop = 0;
    let t = e;
    while (t != document.body) {
      offsetLeft += t.offsetLeft;
      offsetTop += t.offsetTop;
      t = t.parentElement;
    }

    let x =
      ((offsetLeft + e.offsetWidth / 2 - event.pageX) / (e.offsetWidth / 2)) *
      17;
    let y =
      ((offsetTop + e.offsetHeight / 2 - event.pageY) / (e.offsetHeight / 2)) *
      17;

    if (x <= 15 && x >= -15 && y <= 15 && y >= -15) {
      e.style.transform = `perspective(700px) rotateX(${-y}deg) rotateY(${x}deg) scale3d(1.05, 1.05, 1.05)`;
      e.style.transition = ``;
    } else {
      e.style.transform = `perspective(700px) rotateX(${
        y >= 15 ? -15 : y <= -15 ? 15 : -y
      }deg) rotateY(${
        x >= 15 ? 15 : x <= -15 ? -15 : x
      }deg) scale3d(1.05, 1.05, 1.05)`;
      e.style.transition = `transform 200ms ease-in`;
    }
  }
  onMouseOver(event) {
    window.cursor.cursorSize(2.7);
  }
  onMouseOut(event, e) {
    e.style.transform = `perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    window.cursor.cursorSize(1);
  }
}
