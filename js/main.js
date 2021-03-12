// App State
let runningTotal;


// Cached Elements
const input1El = document.querySelector("#num1");

const totalEl = document.getElementById("running-total");


// Event Listeners
document.getElementById("plus-button").addEventListener("click", handlePlusClick);
document.getElementById("minus-button").addEventListener("click", handleMinusClick);

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
}

function handlePlusClick() {
  let input1Value = parseInt(input1El.value);
  console.log(input1Value);
  runningTotal += input1Value;
  render();
}

function handleMinusClick() {
  let input1Value = parseInt(input1El.value);
  runningTotal -= input1Value;
  render();
}






