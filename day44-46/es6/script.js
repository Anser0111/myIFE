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
  // 初始化菜单
  initMenu() {
    let menu = [];
    let dish1 = new Dish("梅菜扣肉", 20, 40);
    menu.push(dish1);
    let dish2 = new Dish("糖醋里脊", 25, 45);
    menu.push(dish2);
    let dish3 = new Dish("京酱肉丝", 15, 30);
    menu.push(dish3);
    let dish4 = new Dish("北京烤鸭", 40, 90);
    menu.push(dish4);
    let dish5 = new Dish("宫保鸡丁", 30, 50);
    menu.push(dish5);
    return menu;
  }
  // 初始化客人列表
  initCustomerLish(waiterNum) {
    let customerList = [];
    for (let i = 0; i < waiterNum; i++) {
      let customer = new Customer();
      customerList.push(customer);
    }
    return customerList;
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
  work(orderList) {
    if (orderList.constructor === Array) {
      console.log("已记录：" + orderList[0].name);
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
  work(orderList) {
    console.log("烹饪出菜品：" + orderList[0].name);
  }
}

// 顾客类
class Customer {
  constructor() {}
  order() {
    console.log("点菜");
    let orderList = [];
    let menuLength = menu.length;
    // 不使用for循环，因为只点一个菜
    let random = Math.floor(Math.random() * menuLength);
    orderList.push(menu[random]);
    return orderList;
  }
  eat() {
    console.log("吃");
  }
}

// 菜肴类
class Dish {
  constructor(name, cost, price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
  }
}
// 初始化
let restaurant = new Restaurant({
  cash: 100000,
  seats: 1,
  staff: [],
});
let customerList = restaurant.initCustomerLish(3);
let menu = restaurant.initMenu();
let waiter = new Waiter("wyc", "20000", 180);
let cook = new Cook("jojo", "19999", 182);

// 开业函数
function opening() {
  // 只要有客人就开始循环
  while (customerList.length) {
    // 客人点菜，记录点菜列表
    let orderList = customerList[0].order();
    console.log("点的菜是：" + orderList[0].name);
    // 服务员记录点菜
    waiter.work(orderList);
    // 厨师做菜
    cook.work(orderList);
    // 服务员上菜
    waiter.work(1);
    // 客人离开
    customerList.shift();
  }
}
opening();
