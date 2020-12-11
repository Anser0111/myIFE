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
    var behind = getInput();
    behind = behind.slice(symbolPosition + 1);
    console.log(behind);
  }
  for (i = 0; i < postfixList.length; i++) {
    if (postfixList[i].indexOf(behind) == 0) {
      liContent.push(document.createElement("li"));
      liContent[liContent.length - 1].textContent = trim + "@" + postfixList[i];
    }
    if (behind == null) {
      liContent[i] = document.createElement("li");
      liContent[i].textContent = trim + "@" + postfixList[i];
    }
  }
  return liContent;
}
function addTips() {
  var tips = generateTips();
  if (ul.children.length >= tips.length) {
    for (i = 0, j = ul.children.length; i < j; i++) {
      var li = document.querySelector("li");
      ul.removeChild(li);
    }
  }
  for (i = 0; i < tips.length; i++) {
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
  var tips = generateTips();
  for (i = 0; i < tips.length; i++) {
    var li = document.querySelectorAll("li");
    li[i].style.display = "none";
  }
}
function displayTips() {
  var tips = generateTips();
  for (i = 0; i < tips.length; i++) {
    var li = document.querySelectorAll("li");
    li[i].style.display = "block";
  }
}
