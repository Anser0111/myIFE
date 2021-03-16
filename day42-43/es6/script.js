// 餐厅类
class Restaurant {
  constructor(obj) {
    this.cash = obj.cash;
    this.seats = obj.seats;
    this.staff = obj.staff;
  }
  hire(obj) {
    this.staff.push(obj.name);
  }
  fire(obj) {
    this.staff.forEach((value, index) => {
      if (value === obj.name) {
        this.staff.splice(index, 1);
        return;
      }
    });
  }
}

// 职员类
class Staff {
  constructor(name, salary, id) {
    this.name = name;
    this.salary = salary;
    this.id = id;
  }
  work() {
    console.log("完成一次工作");
  }
}

// 服务员类
class Waiter extends Staff {
  constructor(name, salary, id) {
    super(name, salary, id);
  }
  work(menu) {
    if (menu.constructor === Array) {
      console.log("记录点菜");
    } else {
      console.log("上菜");
    }
  }
}

// 厨师类
class Cook extends Staff {
  constructor(name, salary, id) {
    super(name, salary, id);
  }
  work() {
    console.log("烹饪出菜品");
  }
}

// 顾客类
class Customer {
  constructor() {}
  order() {
    console.log("点菜");
  }
  eat() {
    console.log("吃");
  }
}

// 菜肴类
class Dishes {
  constructor(name, cost, price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
  }
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
