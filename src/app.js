import "./style.css";

window.onload = function() {
  const numberElement = document.querySelector(".number");

  const cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Q",
    "K",
    "J",
    "A"
  ];

  const randomIndexValue = Math.floor(Math.random() * cardValues.length);

  const selectedValue = cardValues[randomIndexValue];

  numberElement.textContent = selectedValue;

  const topElement = document.querySelector(".top");
  const bottomElement = document.querySelector(".bottom");

  const cardSymbols = ["♠", "♥", "♦", "♣"];

  const cardColors = ["black", "red", "red", "black"];

  const randomIndexSymbol = Math.floor(Math.random() * cardSymbols.length);

  const selectedSymbol = cardSymbols[randomIndexSymbol];
  const selectedColor = cardColors[randomIndexSymbol];

  topElement.textContent = selectedSymbol;
  bottomElement.textContent = selectedSymbol;
  topElement.style.color = selectedColor;
  bottomElement.style.color = selectedColor;
};
