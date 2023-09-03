export default class Nav {
  constructor() {
    this.nav = document.getElementById("main-nav");
    this.prevPos = window.scrollY;

    window.addEventListener("scroll", (ev) => this.onScroll(ev));
  }

  onScroll(event) {
    this.updateMainNav();
    this.updateNavLinks();
  }

  updateMainNav() {
    if (0 == window.scrollY) {
      this.prevPos = window.scrollY;
      this.nav.classList.remove(
        "activated",
        "headspace--fixed",
        "headspace--hidden"
      );
    } else if (
      document.body.clientHeight - document.documentElement.clientHeight ==
        window.scrollY ||
      window.scrollY < this.prevPos
    ) {
      this.prevPos = window.scrollY;
      this.nav.classList.add("activated", "headspace--fixed");
      this.nav.classList.remove("headspace--hidden");
    } else {
      this.prevPos = window.scrollY;
      this.nav.classList.add(
        "activated",
        "headspace--fixed",
        "headspace--hidden"
      );
    }
  }

  updateNavLinks() {
    let navItems = this.nav.getElementsByClassName("nav-item");
    let navItemsNames = ["start", "work", "about", "contact"];

    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove("active");
      navItems[i]
        .getElementsByClassName("nav-link")[0]
        .classList.remove("active");
    }
    for (let i = 0; i < navItems.length; i++) {
      if (
        window.scrollY >= document.getElementById(navItemsNames[i]).offsetTop &&
        window.scrollY <
          document.getElementById(navItemsNames[i]).clientHeight +
            document.getElementById(navItemsNames[i]).offsetTop
      ) {
        navItems[i].classList.add("active");
        navItems[i]
          .getElementsByClassName("nav-link")[0]
          .classList.add("active");
      }
    }
  }
}
