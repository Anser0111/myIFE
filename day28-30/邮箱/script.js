var postfixList = ["163.com", "gmail.com", "126.com", "qq.com", "263.net"];
var input = document.querySelector("#email-input");
var ul = document.querySelector("#email-sug-wrapper");
input.oninput = function () {
  /*var trim = getInput();
    console.log(trim);
    var tips = generateTips();
    console.log(tips);*/
  addTips();
  controlTips();
};
function getInput() {
  var i = document.querySelector("#email-input").value;
  i = i.replace(/\s+/g, "");
  return i;
}
function generateTips() {
  var trim = getInput();
  var liContent = new Array();
  if (trim.indexOf("@") != -1) {
    var symbolPosition = trim.indexOf("@");
    trim = trim.slice(0, symbolPosition);
  }
  for (i = 0; i < postfixList.length; i++) {
    liContent[i] = document.createElement("li");
    liContent[i].textContent = trim + "@" + postfixList[i];
  }
  return liContent;
}
function addTips() {
  var tips = generateTips();
  if (ul.children.length >= postfixList.length) {
    for (i = 0; i < postfixList.length; i++) {
      var li = document.querySelector("li");
      ul.removeChild(li);
    }
  }
  for (i = 0; i < postfixList.length; i++) {
    ul.appendChild(tips[i]);
  }
}
function controlTips() {
  var trim = getInput();
  if (trim == "") {
    hideTips();
    // console.log("为空");
  } else {
    displayTips();
    //console.log("不为空");
  }
}
function hideTips() {
  for (i = 0; i < postfixList.length; i++) {
    var li = document.querySelectorAll("li");
    li[i].style.display = "none";
  }
}
function displayTips() {
  for (i = 0; i < postfixList.length; i++) {
    var li = document.querySelectorAll("li");
    li[i].style.display = "block";
  }
}
