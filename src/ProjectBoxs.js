export default class ProjectBoxs {
  constructor() {
    this.projectBoxs = document.getElementsByClassName("project-box");

    for (let e of this.projectBoxs) {
      e.addEventListener("mousemove", (ev) => this.onMouseMove(ev, e));
      e.addEventListener("mouseover", (ev) => this.onMouseOver(ev));
      e.addEventListener("mouseout", (ev) => this.onMouseOut(ev));
    }
  }

  onMouseMove(event, e) {
    console.log(
      event.offsetX,
      event.offsetY,
      event.clientX,
      event.clientY,
      event.movementX,
      event.movementY,
      event.target.offsetLeft,
      event.target.offsetTop,
      event.target.offsetWidth,
      event.target.offsetHeight,
      event.offsetX / event.target.offsetWidth,
      event.offsetY / event.target.offsetHeight,
      event
    );

    let offsetLeft = 0;
    let offsetTop = 0;
    let test = e;
    while (test != document.body) {
      offsetLeft += test.offsetLeft;
      offsetTop += test.offsetTop;
      //   console.log(test, test.offsetLeft, test.offsetTop, offsetLeft, offsetTop);
      test = test.parentElement;
    }
    console.log(offsetLeft, offsetTop);
    // console.log(
    //   (event.offsetX / event.target.offsetWidth) * 15,
    //   (event.offsetY / event.target.offsetHeight) * 15
    // );
  }
  onMouseOver(event, e) {
    window.cursor.cursorSize(2.7);
  }
  onMouseOut(event, e) {
    window.cursor.cursorSize(1);
  }
}
