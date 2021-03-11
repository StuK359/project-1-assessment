// // App State
// let runningTotal;


// // Cached Elements
// const input1El = document.querySelector("#num1");
// const input2El = document.querySelector("#num2");
// const input3El = document.querySelector("#num3");
// const totalEl = document.querySelector("h1 span");


// // Event Listeners
// document.querySelector("button").addEventListener("click", handleClick);


// // Functions
// function init() {
//   runningTotal = 0;
//   render();
// }
// init()
// function render() {
//   /* Alternative code; more compact and efficient */
//   totalEl.textContent = (runningTotal >= 0 ? '+' : '') + runningTotal;   
//   totalEl.style.color = runningTotal >= 0 ? "green" : "red";             

//   // if (runningTotal >= 0) {
//   //   totalEl.textContent = "+" + runningTotal;
//   //   totalEl.style.color = "green";
//   // } else {
//   //   totalEl.textContent = runningTotal;
//   //   totalEl.style.color = "red";
//   // }
// }
// function handleClick() {
//   let input1Value = parseInt(input1El.value);
//   let input2Value = parseInt(input2El.value);
//   let input3Value = parseInt(input3El.value);
  
//   runningTotal += (input1Value + input2Value + input3Value);
//   input1El.value = input2El.value = input3El.value = 0;
//   render();
// }

// App State
let runningTotal;
// Cached Elements
const input1El = document.querySelector("#num1");
const input2El = document.querySelector("#num2");
const input3El = document.querySelector("#num3");
const totalEl = document.querySelector("h1 span");
// Event Listeners
document.querySelector("button").addEventListener("click", handleClick);
// Functions
function init() {
  runningTotal = 0;
  render();
}
init();
function render() {
  if (runningTotal >= 0) {
    totalEl.textContent = "+" + runningTotal;
    totalEl.style.color = "green";
  } else {
    totalEl.textContent = runningTotal;
    totalEl.style.color = "red";
  }
}
function handleClick() {
  let input1Value = parseInt(input1El.value);
  let input2Value = parseInt(input2El.value);
  let input3Value = parseInt(input3El.value);
  runningTotal += (input1Value + input2Value + input3Value);
  input1El.value = input2El.value = input3El.value = "";
  render();
}