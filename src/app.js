import "./style.css";

window.onload = function() {
  const cardValue = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const cardType = ["♦", "♥", "♠", "♣"];
  const randomType = Math.floor(Math.random() * cardType.length);
  const randomValue = Math.floor(Math.random() * cardValue.length);
  const randomCardValue = cardValue[randomValue];
  const randomCardType = cardType[randomType];
  console.log(randomCardType);
  console.log(randomCardValue);

  document.querySelector(".card-number").innerHTML = randomCardValue;
  document.querySelector(".card-up-side").innerHTML = randomCardType;
  document.querySelector(".card-symbol").innerHTML = randomCardType;

  if (randomCardType == "♦" || randomCardType == "♥") {
    console.log(document.querySelector(".card-symbol"));
    document.querySelector(".card-symbol").style.color = "red";
    document.querySelector(".card-up-side").style.color = "red";
  }
};
