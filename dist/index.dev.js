"use strict";

// ALL HTML elements is variables:
var numbersButton = document.getElementsByClassName("calculator__buttons--number");
console.log(numbersButton);
var operationsButton = document.getElementsByClassName("calculator__buttons--operation");
console.log(operationsButton);
var currentSc = document.getElementById("screenCurr");
console.log(currentSc);
var previousSc = document.getElementById("screenPrev");
console.log(previousSc);
var clearButton = document.getElementById("AC");
console.log(clearButton);
var cancelButton = document.getElementById("delete");
console.log(cancelButton);
var totalButton = document.getElementById("equals");
console.log(totalButton);
var sqRoot = document.getElementById("root");
console.log(sqRoot);
var pcent = document.getElementById("percentage");
console.log(pcent);
var divide = document.getElementById("divide");
console.log(divide);
var times = document.getElementById("multiply");
console.log(times);
var minus = document.getElementById("takeAway");
console.log(minus);
var addition = document.getElementById("plus");
console.log(addition); // Create arrays from HTML collections

var numbersBtns = Array.from(numbersButton);
console.log(numbersBtns);
var operationsBtns = Array.from(operationsButton);
console.log(operationsBtns);
sign = operationsBtns.innerText;
console.log(sign); // Append number function
// Handle Operation function
// Clear Display function

var clear = function clear() {
  currentSc.innerText = "";
  previousSc.innerText = "";
  previousSc.innerHTML = "";
  currentSc.innerHTML = "";
}; // Update display function
// Delete item on display function


var back = function back() {
  currentSc.innerText = currentSc.innerText.toString().slice(0, -1);
}; // Final total function 


var answer = function answer() {
  var sumTotal;
  var enteredNum = parseFloat(previousSc.innerText);
  var newNum = parseFloat(currentSc.innerText);
  if (isNaN(enteredNum) || isNaN(newNum)) return;
  var sings = [sqRoot.innerText, pcent.innerText, divide.innerText, times.innerText, minus.innerText, addition.innerText];
  console.log(sings);

  for (var index = 0; index < sings.length; index++) {
    if (sings.includes("√")) {
      sumTotal = Math.sqrt(enteredNum);
      console.log("square");
    } else if (sings.includes("÷")) {
      sumTotal = enteredNum / newNum;
      console.log("divide");
    } else if (sings.includes("X")) {
      sumTotal = enteredNum * newNum;
      console.log("times");
    } else if (sings.includes("-")) {
      sumTotal = enteredNum - newNum;
      console.log("minus");
    } else if (sings.includes["+"]) {
      sumTotal = enteredNum + newNum;
      console.log("plus");
    } else if (sings.includes["%"]) {
      sumTotal = enteredNum % newNum;
      console.log("percent");
    } else {
      console.log("no computation happening");
    }
  }

  currentSc.innerText = sumTotal;
  previousSc.innerText = "";
  return;
}; // Add Number button click functionality 


numbersBtns.forEach(function (number) {
  number.addEventListener("click", function () {
    console.log(number);
    number.toString = number.innerText;
    var bigNum = number.toString;
    if (number.innerText === "." && currentSc.innerText.includes(".")) return;
    currentSc.innerText = currentSc.innerText + bigNum;
  });
}); // Add Operation button click functionality 

addition.addEventListener("click", function () {
  console.log(addition);
  if (currentSc.innerText === "") return;

  if (previousSc.innerText !== "") {
    answer();
  } // Shift number to top section and add operation sign


  var calculation = currentSc.innerText + " " + addition.innerText;
  previousSc.innerText = calculation;
  currentSc.innerText = ""; // start computation 

  totalButton.addEventListener("click", function () {
    console.log(totalButton);
    var sumTotal;
    var enteredNum = parseFloat(previousSc.innerText);
    var newNum = parseFloat(currentSc.innerText);
    if (isNaN(enteredNum) || isNaN(newNum)) return;
    sumTotal = enteredNum + newNum;
    currentSc.innerText = sumTotal;
    previousSc.innerText = "";
    return;
  });
  return;
}); // subtraction Operation button click functionality 

minus.addEventListener("click", function () {
  console.log(minus);
  if (currentSc.innerText === "") return;

  if (previousSc.innerText !== "") {
    answer();
  } // Shift number to top section and add operation sign


  var calculation = currentSc.innerText + " " + minus.innerText;
  previousSc.innerText = calculation;
  currentSc.innerText = ""; // start computation 

  totalButton.addEventListener("click", function () {
    preventDefault();
    console.log(totalButton);
    var sumTotal;
    var enteredNum = parseFloat(previousSc.innerText);
    var newNum = parseFloat(currentSc.innerText);
    if (isNaN(enteredNum) || isNaN(newNum)) return;
    sumTotal = enteredNum - newNum;
    currentSc.innerText = sumTotal;
    previousSc.innerText = "";
  });
}); // Multiplication Operation button click functionality 

times.addEventListener("click", function () {
  console.log(times);
  if (currentSc.innerText === "") return;

  if (previousSc.innerText !== "") {
    answer();
  } // Shift number to top section and add operation sign


  var calculation = currentSc.innerText + " " + times.innerText;
  previousSc.innerText = calculation;
  currentSc.innerText = ""; // start computation 

  totalButton.addEventListener("click", function () {
    preventDefault();
    console.log(totalButton);
    var sumTotal;
    var enteredNum = parseFloat(previousSc.innerText);
    var newNum = parseFloat(currentSc.innerText);
    if (isNaN(enteredNum) || isNaN(newNum)) return;
    sumTotal = enteredNum * newNum;
    currentSc.innerText = sumTotal;
    previousSc.innerText = "";
  });
}); // Division Operation button click functionality 

divide.addEventListener("click", function () {
  console.log(divide);
  if (currentSc.innerText === "") return;

  if (previousSc.innerText !== "") {
    answer();
  } // Shift number to top section and add operation sign


  var calculation = currentSc.innerText + " " + divide.innerText;
  previousSc.innerText = calculation;
  currentSc.innerText = ""; // start computation 

  totalButton.addEventListener("click", function () {
    preventDefault();
    console.log(totalButton);
    var sumTotal;
    var enteredNum = parseFloat(previousSc.innerText);
    var newNum = parseFloat(currentSc.innerText);
    if (isNaN(enteredNum) || isNaN(newNum)) return;
    sumTotal = enteredNum / newNum;
    currentSc.innerText = sumTotal;
    previousSc.innerText = "";
  });
}); // Percentage Operation button click functionality 

pcent.addEventListener("click", function () {
  console.log(pcent);
  if (currentSc.innerText === "") return;

  if (previousSc.innerText !== "") {
    answer();
  } // Shift number to top section and add operation sign


  var calculation = currentSc.innerText + " " + pcent.innerText;
  previousSc.innerText = calculation;
  currentSc.innerText = ""; // start computation 

  totalButton.addEventListener("click", function () {
    preventDefault();
    console.log(totalButton);
    var sumTotal;
    var enteredNum = parseFloat(previousSc.innerText);
    var newNum = parseFloat(currentSc.innerText);
    if (isNaN(enteredNum) || isNaN(newNum)) return;
    sumTotal = enteredNum % newNum;
    currentSc.innerText = sumTotal;
    previousSc.innerText = "";
  });
}); // Square Root Operation button click functionality 

sqRoot.addEventListener("click", function () {
  console.log(sqRoot);
  if (currentSc.innerText === "") return;

  if (previousSc.innerText !== "") {
    answer();
  } // Shift number to top section and add operation sign


  var calculation = currentSc.innerText + " " + sqRoot.innerText;
  previousSc.innerText = calculation;
  currentSc.innerText = ""; // start computation 

  totalButton.addEventListener("click", function () {
    console.log(totalButton);
    var sumTotal;
    var enteredNum = parseFloat(previousSc.innerText);
    var newNum = parseFloat(currentSc.innerText);
    if (isNaN(enteredNum) || isNaN(newNum)) return;
    sumTotal = Math.sqrt(enteredNum);
    currentSc.innerText = sumTotal;
    previousSc.innerText = "";
  });
}); // add All Clear button click functionality

clearButton.addEventListener("click", clear);
console.log(clearButton); // Clear the display
// currentSc.innerHTML = ""
// previousSc.innerHTML = ""
// add All Delete button click functionality

cancelButton.addEventListener("click", back);
console.log(cancelButton); // Delete last number
// currentSc.innerText = currentSc.innerText.toString().slice(0, -1)
// add All Equals button click functionality
// totalButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     answer()
//     console.log(totalButton);
// });