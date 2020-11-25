document.getElementById("special").addEventListener("click", wyc1);
function wyc1() {
  document.getElementById("specialcontent").innerHTML = "我喜欢打游戏！";
}

var greeting;
var time = new Date().getHours();
if (time < 12) {
  greeting = "上午好！";
} else if (time < 20) {
  greeting = "下午好！";
} else {
  greeting = "晚上好！";
}
document.getElementById("demo").innerHTML = greeting;
document.getElementById("demo").style.backgroundColor = "yellow";
