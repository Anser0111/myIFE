var postfixList = ["163.com", "gmail.com", "126.com", "qq.com", "263.net"];
var input = document.querySelector("#email-input");
var ul = document.querySelector("#email-sug-wrapper");
input.oninput = function () {
  /*var trim = getInput();
    console.log(trim);
    var tips = generateTips();
    console.log(tips);*/
  addTips(); //添加提示
  controlTips(); //控制提示
};
function getInput() {
  //去掉空格
  var i = document.querySelector("#email-input").value;
  i = i.replace(/\s+/g, "");
  return i;
}
function generateTips() {
  //生成提示内容
  var trim = getInput();
  var liContent = new Array();
  if (trim.indexOf("@") != -1) {
    //如果trim里有@
    var symbolPosition = trim.indexOf("@");
    trim = trim.slice(0, symbolPosition);
    var behind = getInput();
    behind = behind.slice(symbolPosition + 1); //得到@后的内容
    //onsole.log(behind);
  }
  for (i = 0; i < postfixList.length; i++) {
    //遍历postfixList
    if (postfixList[i].indexOf(behind) == 0) {
      //如果behind被某个postfixList元素包含
      liContent.push(document.createElement("li"));
      liContent[liContent.length - 1].textContent = trim + "@" + postfixList[i];
      //将该postfixList元素push到liContent的最后一位
    }
    if (behind == null) {
      //如果behind是空的
      liContent[i] = document.createElement("li");
      liContent[i].textContent = trim + "@" + postfixList[i];
      //生成五个提示
    }
  }
  if (behind != null) {
    //如果behind不是空的
    if (behind.length >= 7 && liContent.length == 0) {
      //如果behind的长度大于7且licontent是空的
      for (i = 0; i < postfixList.length; i++) {
        liContent[i] = document.createElement("li");
        liContent[i].textContent = trim + "@" + postfixList[i];
        //生成五个提示
      }
    }
  }

  return liContent;
}
function addTips() {
  //添加提示
  var tips = generateTips();
  if (ul.children.length > 0) {
    //如果已有提示存在，把他们都删了
    for (i = 0, j = ul.children.length; i < j; i++) {
      var li = document.querySelector("li");
      ul.removeChild(li);
    }
  }
  for (i = 0; i < tips.length; i++) {
    //添加提示
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
ul.onclick = function (e) {
  if (e.target.nodeName.toLowerCase() == "li") {
    hideTips();
    var source = e.target;
    var liContent = source.textContent;
    input.value = liContent;
  }
};
