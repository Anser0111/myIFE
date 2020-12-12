var postfixList = ["163.com", "gmail.com", "126.com", "qq.com", "263.net"];
var input = document.querySelector("#email-input");
var ul = document.querySelector("#email-sug-wrapper");
var nowSelectTipIndex = 0;
input.oninput = function (e) {
  /*var trim = getInput();
    console.log(trim);
    var tips = generateTips();
    console.log(tips);*/
  if (e.keyCode != 38 && e.keyCode != 40 && e.keyCode != 13) {
    //如果按的不是上下及回车，重置选中状态
    reset();
  }
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
  liContent[nowSelectTipIndex].style.backgroundColor = "red";
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
input.onkeydown = function (e) {
  if (e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 13) {
    //如果按下的是上下或回车
    if (ul.children.length > 0) {
      //如果有提示
      var li = document.querySelectorAll("li");
      if (e.keyCode == 38) {
        //如果输入的是上
        if (nowSelectTipIndex != 0) {
          li[nowSelectTipIndex].style.backgroundColor = "white";
          nowSelectTipIndex = nowSelectTipIndex - 1;
          li[nowSelectTipIndex].style.backgroundColor = "red";
        } else {
          li[nowSelectTipIndex].style.backgroundColor = "white";
          nowSelectTipIndex = ul.children.length - 1;
          li[nowSelectTipIndex].style.backgroundColor = "red";
        }
      }
      if (e.keyCode == 40) {
        //如果输入的是下
        if (nowSelectTipIndex != ul.children.length - 1) {
          li[nowSelectTipIndex].style.backgroundColor = "white";
          nowSelectTipIndex = nowSelectTipIndex + 1;
          li[nowSelectTipIndex].style.backgroundColor = "red";
        } else {
          li[nowSelectTipIndex].style.backgroundColor = "white";
          nowSelectTipIndex = 0;
          li[nowSelectTipIndex].style.backgroundColor = "red";
        }
      }
      if (e.keyCode == 13) {
        //如果输入的是回车
        hideTips();
        input.value = li[nowSelectTipIndex].textContent;
      }
    }
  }
};
function reset() {
  //重置选中状态（如果选中的li不是第一个，则选中第一个）
  nowSelectTipIndex = 0;
}
