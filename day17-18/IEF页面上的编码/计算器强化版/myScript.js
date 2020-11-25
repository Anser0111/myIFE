var x1 = document.getElementById("first-number").value;
var x2 = document.getElementById("second-number").value;
var add = x1 + x2;
var subtract = x1 - x2;
var multiply = x1 * x2;
var divide = x1 / x2;
function isN() {
  if (isNaN(x1) || isNaN(x2)) {
    var shuchu = "You need to enter a number!";
    console.log(shuchu);
  }
}
function calculation1() {
  x1 = document.getElementById("first-number").value;
  x2 = document.getElementById("second-number").value;
  add = parseFloat(x1) + parseFloat(x2);
  document.getElementById("result").innerHTML = add;
  isN();
}
function calculation2() {
  x1 = document.getElementById("first-number").value;
  x2 = document.getElementById("second-number").value;
  subtract = parseFloat(x1) - parseFloat(x2);
  document.getElementById("result").innerHTML = subtract;
  isN();
}
function calculation3() {
  x1 = document.getElementById("first-number").value;
  x2 = document.getElementById("second-number").value;
  multiply = parseFloat(x1) * parseFloat(x2);
  document.getElementById("result").innerHTML = multiply;
  isN();
}
function calculation4() {
  x1 = document.getElementById("first-number").value;
  x2 = document.getElementById("second-number").value;
  divide = parseFloat(x1) / parseFloat(x2);
  document.getElementById("result").innerHTML = divide;
  isN();
  if (x2 == 0) {
    var chu0 = "除数是0!";
    console.log(chu0);
  }
}

document.getElementById("add-btn").addEventListener("click", calculation1);
document.getElementById("minus-btn").addEventListener("click", calculation2);
document.getElementById("times-btn").addEventListener("click", calculation3);
document.getElementById("divide-btn").addEventListener("click", calculation4);
