let colorBox = document.querySelector("#color-box");

let grayButton = document.querySelector("#gray-button");
grayButton.addEventListener("click", function () {
  colorBox.className = "gray";
});

let blueButton = document.querySelector("#blue-button");
blueButton.addEventListener("click", function () {
  colorBox.className = "blue";
});

let pinkButton = document.querySelector("#pink-button");
pinkButton.addEventListener("click", function () {
  colorBox.className = "pink";
});

let count = 0;
let countspan = document.querySelector("#countspan");
let counterButton = document.querySelector("#counter-button");
counterButton.addEventListener("click", function () {
  count += 1;
  countspan.innerHTML = count;
});

let evenOrOddButton = document.querySelector("#even-or-odd-button");
evenOrOddButton.addEventListener("click", function () {
  if (count % 2 == 0) {
    alert("Count is Even");
  } else {
    alert("Count is Odd");
  }
});
