export default class StartSection {
  constructor() {
    this.startSection = document.getElementById("start");
    this.animText = this.startSection.getElementsByClassName("anim-txt")[0];
    this.animTextList = ["webapps", "websites", "ux/ui", "things"];
    // console.log(this.animText);
  }
}
