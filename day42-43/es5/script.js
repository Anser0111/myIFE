// 餐厅类
function Restaurant(obj) {
  this.cash = obj.cash;
  this.seats = obj.seats;
  this.staff = obj.staff;
}
// 招聘
Restaurant.prototype.hire = function (obj) {
  this.staff.push(obj.name);
};
// 解雇
Restaurant.prototype.fire = function (obj) {
  this.staff.forEach((value, index) => {
    if (value === obj.name) {
      this.staff.splice(index, 1);
      return;
    }
  });
};

// 职员类
function Staff(name, salary, id) {
  this.name = name;
  this.salary = salary;
  this.id = id;
}
// 完成一次工作
Staff.prototype.work = function () {
  console.log("完成一次工作");
};

// 服务员类
function Waiter(name, salary, id) {
  Staff.call(this, name, salary, id);
}
// 继承方法
Waiter.prototype = new Staff();
// 自己的完成一次工作
Waiter.prototype.work = function (menu) {
  if (menu.constructor === Array) {
    console.log("记录点菜");
  } else {
    console.log("上菜");
  }
};

//厨师类
function Cook(name, salary, id) {
  Staff.call(this, name, salary, id);
}
Cook.prototype = new Staff();
Cook.prototype.work = function () {
  console.log("烹饪出菜品");
};

//顾客类
function Customer() {}
Customer.prototype.order = function () {
  console.log("点菜");
};
Customer.prototype.eat = function () {
  console.log("吃");
};

// 菜肴类
function Dishes(name, cost, price) {
  this.name = name;
  this.cost = cost;
  this.price = price;
}

var ifeRestaurant = new Restaurant({
  cash: 1000000,
  seats: 20,
  staff: [],
});
var newCook = new Cook("Tony", 10000);
ifeRestaurant.hire(newCook);
console.log(ifeRestaurant.staff);
ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);
