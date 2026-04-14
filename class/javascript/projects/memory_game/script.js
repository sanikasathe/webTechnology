let values = ["A", "A", "B", "B"];

let first = null;
let matches = 0;

let game = document.getElementById("game");

for (let i = 0; i < 4; i++) {

  let card = document.createElement("div");
  card.className = "card";
  card.innerText = "?";
  card.value = values[i];

  card.onclick = function () {

    card.innerText = card.value;

    if (first == null) {
      first = card;
    } else {

      if (first.value == card.value) {
        matches++;
        first = null;

        if (matches == 2) {
        alert(" You Won!!");
        }

      } else {
        let second = card;

        setTimeout(function () {
          first.innerText = "?";
          second.innerText = "?";
          first = null;
        }, 800);
      }
    }
  };

  game.appendChild(card);
}