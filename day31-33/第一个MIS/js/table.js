let sourceData = [
  {
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270],
  },
  {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200],
  },
  {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380],
  },
  {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20],
  },
  {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20],
  },
  {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100],
  },
  {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25],
  },
  {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40],
  },
  {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26],
  },
];
var body = document.querySelector("body");
body.onchange = function (e) {
  if (e.target.nodeName.toLowerCase() == "input") {
    rendering(getData1());
  }
};
function findSelected(k) {
  for (i = 0; i <= k.length - 1; i++) {
    if (k[i].selected == true) {
      return k[i];
    }
  }
}
function getData1() {
  var dataArray = new Array();
  var checkedArray = new Array(); //选中的内容是什么的数组
  var eachInput = document.querySelectorAll("input");
  for (i = 0; i < eachInput.length; i++) {
    var theInput = eachInput[i];
    var what = theInput.getAttribute("what");
    if (theInput.checked == true) {
      checkedArray.push(what);
    }
  }
  for (i = 0; i < sourceData.length; i++) {
    //遍历sourceData
    for (j = 0; j < checkedArray.length; j++) {
      //遍历checkedArray
      if (checkedArray[j] == sourceData[i]["product"]) {
        //如果其中一维条件满足了，在遍历一次，看看另一维条件是否满足
        for (k = 0; k < checkedArray.length; k++) {
          if (checkedArray[k] == sourceData[i]["region"]) {
            //如果也满足了，则添加这个源数据
            dataArray.push(sourceData[i]);
          }
        }
      }
    }
  }
  //console.log(checkedArray);
  return dataArray;
}

function rendering(data) {
  var warpper = document.querySelector("#table-wrapper");
  if (warpper.children.length > 0) {
    //新增功能，简历新表单时，删除旧表单。
    warpper.removeChild(warpper.children[0]);
  }
  var div = document.querySelector("#table-wrapper");
  var table = document.createElement("table");
  div.appendChild(table);
  var tr1 = document.createElement("tr");
  table.appendChild(tr1);
  var th1 = document.createElement("th");
  tr1.appendChild(th1);
  th1.textContent = "商品";
  var th2 = document.createElement("th");
  tr1.appendChild(th2);
  th2.textContent = "地区";
  for (i = 1; i <= 12; i++) {
    var th3 = document.createElement("th");
    tr1.appendChild(th3);
    th3.textContent = i + "月";
  }
  for (i = 0; i < data.length; i++) {
    var tr = document.createElement("tr");
    table.appendChild(tr);
    var td1 = document.createElement("td");
    tr.appendChild(td1);
    td1.textContent = data[i]["product"];
    var td2 = document.createElement("td");
    tr.appendChild(td2);
    td2.textContent = data[i]["region"];
    for (j = 0; j < 12; j++) {
      var td3 = document.createElement("td");
      tr.appendChild(td3);
      td3.textContent = data[i]["sale"][j];
    }
  }
}
