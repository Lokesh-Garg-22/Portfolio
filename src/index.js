import StartSection from "./StartSection.js";
import ProjectBoxs from "./ProjectBoxs.js";
import Cursor from "./cursor.js";
import Nav from "./Nav.js";

window.cursor = new Cursor();
window.nav = new Nav();
window.startSection = new StartSection();
window.projectBoxs = new ProjectBoxs(window.cursor);

let aTagList = document.getElementsByTagName("a");
for (let e of aTagList) {
  e.addEventListener("mouseover", (ev) => window.cursor.cursorSize(2.7));
  e.addEventListener("mouseout", (ev) => window.cursor.cursorSize(1));
}
let buttonTagList = document.getElementsByTagName("button");
for (let e of buttonTagList) {
  e.addEventListener("mouseover", (ev) => window.cursor.cursorSize(2.7));
  e.addEventListener("mouseout", (ev) => window.cursor.cursorSize(1));
}
