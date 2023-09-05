export default class StartSection {
  constructor() {
    this.startSection = document.getElementById("start");
    this.animText = this.startSection.getElementsByClassName("anim-txt")[0];
    this.animTextList = ["webapps", "websites", "ux/ui", "things"];
    this.specialCharacters = [
      "#",
      "$",
      "%",
      "&",
      "ↈ",
      "ↇ",
      "▥",
      "⨷",
      "⩨",
      "⪔",
      "⫵",
      "₪",
    ];
    this.nextWordIndex = 0;

    this.cycleWord();
  }

  cycleWord() {
    let word = {};
    word.currentWord = this.animText.textContent;
    word.nextWord = this.animTextList[this.nextWordIndex++];
    if (this.nextWordIndex >= this.animTextList.length) this.nextWordIndex = 0;
    word.letterList = [];
    for (let i in word.currentWord) {
      word.letterList.push([
        word.currentWord[i],
        Math.floor(
          (Math.random() *
            10 *
            Math.min(i, Math.abs(i - word.currentWord.length))) /
            Math.max(i, Math.abs(i - word.currentWord.length))
        ),
      ]);
    }
    this.cycleLettersID = setInterval(() => {
      this.cycleLetters(word);
    }, 500);
  }

  cycleLetters(word) {
    const wordFromList = (letterList) => {
      let res = "";
      for (let i of letterList) {
        if (i[1] != -2) {
          res += i[0];
        }
      }
      return res;
    };
    const updateLetters = (o, word, wordFromList) => {
      // console.log(
      //   word.currentWord,
      //   word.currentWord.length,
      //   word.nextWord,
      //   word.nextWord.length,
      //   word.letterList,
      //   o
      // );
      if (word.letterList[o.i][1] >= 0) {
        if (
          word.letterList[o.i][1] == 0 &&
          word.currentWord.length > word.nextWord.length
        ) {
          if (Math.floor(Math.random()) || o.i >= word.nextWord.length) {
            word.letterList[o.i][1] = -2;
          } else {
            word.letterList[o.i][0] = word.nextWord[o.i];
            word.letterList[o.i][1] = -1;
          }
        } else if (
          word.letterList[o.i][1] == 0 &&
          word.currentWord.length == word.nextWord.length
        ) {
          word.letterList[o.i][0] = word.nextWord[o.i];
          word.letterList[o.i][1] = -1;
        }

        if (word.letterList[o.i][1] > 0) {
          word.letterList[o.i][0] =
            this.specialCharacters[
              Math.floor(Math.random() * this.specialCharacters.length)
            ];
          word.letterList[o.i][1]--;
        }
      }

      word.currentWord = wordFromList(word.letterList);
      this.animText.textContent = word.currentWord;

      if (word.currentWord.length < word.nextWord.length) {
        word.letterList.push([
          this.specialCharacters[
            Math.floor(Math.random() * this.specialCharacters.length)
          ],
          Math.floor(Math.random() * 3),
        ]);
      }

      if (word.currentWord == word.nextWord) {
        clearInterval(o.id);
        this.stopCycleLetters();
      }

      if (o.i < word.letterList.length - 1) o.i++;
      else clearInterval(o.id);
    };

    let o = { i: 0 };
    o.id = setInterval(() => {
      updateLetters(o, word, wordFromList);
    }, 50);
  }

  stopCycleLetters() {
    clearInterval(this.cycleLettersID);
    setTimeout(() => {
      this.cycleWord();
    }, 2000);
  }
}
