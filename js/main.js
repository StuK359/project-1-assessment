// App State
let runningTotal;


// Cached Elements
const input1El = document.querySelector("#num1");

const totalEl = document.getElementById("running-total");


// Event Listeners
document.getElementById("plus-button").addEventListener("click", handlePlusClick);
document.getElementById("minus-button").addEventListener("click", handleMinusClick);
// document.getElementById("plus-button").addEventListener("hover", inverseMinusColors);
// document.getElementById("minus-button").addEventListener("hover", inversePlusColors);

// Functions
function init() {
  runningTotal = 0;
  render();
}
init()
function render() {
  /* Alternative code; more compact and efficient */
  totalEl.textContent = (runningTotal >= 0 ? '+' : '') + runningTotal;   
  totalEl.style.color = runningTotal >= 0 ? "green" : "red";             

  // if (runningTotal >= 0) {
  //   totalEl.textContent = "+" + runningTotal;
  //   totalEl.style.color = "green";
  // } else {
  //   totalEl.textContent = runningTotal;
  //   totalEl.style.color = "red";
  // }
}
function handlePlusClick() {
  let input1Value = parseInt(input1El.value);
  
  runningTotal += (input1Value);
  render();
}

function handleMinusClick() {
  let input1Value = parseInt(input1El.value);
  runningTotal -= (input1Value);
  render();
}
// function inversePlusButtonColors() {
//     var plusButton = document.getElementById("plus-button");
//     plusButton.style.color = 'grey';
//     plusButton.style.backgroundColor = "white";
// }

// function inverseMinusButtonColors() {
//   var minusButton = document.getElementById("minus-button");
//   minusButton.style.color = 'grey';
//   minusButton.style.backgroundColor = "white";
// }





