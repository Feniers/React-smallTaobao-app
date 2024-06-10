const defaultList = [
  {
    id: 1,
    userId: 1,
    orderNo: "201801010001",
    createTime: "2018-01-01 00:00:00",
    payTime: "2018-01-01 00:00:00",
    status: 0, // 0,未支付 1已支付 2发货 3确认收货
    price: 100,
    discount: 30,
    shippingCost: 20,
    goods: [
      {
        id: 1,
        quantity: 2,
      },
    ],
    payMethod: 1,
    address: {
      name: "dyh",
      address: "beijing",
    },
  },
  {
    id: 2,
    userId: 1,
    orderNo: "201801010002",
    createTime: "2018-01-01 00:00:00",
    payTime: "2018-01-01 00:00:00",
    status: 1,
    price: 200,
    discount: 50,
    shippingCost: 20,
    goods: [
      {
        id: 1,
        quantity: 2,
      },
      {
        id: 2,
        quantity: 1,
      },
    ],
    payMethod: 1,
    address: {
      name: "dyh",
      address: "beijing",
    },
  },
];

class OrderService {
  list = [];

  constructor() {
    localStorage.removeItem("orderList");
    console.log("OrderService constructor");
    this._loadData();
  }

  // createOrder(userId, goodId, price) {
  //   const orderNo = new Date().getTime();
  //   // 从list中找到最大值，生成新的id
  //   const maxId = this.list.reduce((max, item) => {
  //     return item.id > max ? item.id : max;
  //   }, 0);

  //   const order = {
  //     id: maxId + 1,
  //     userId,
  //     goodId,
  //     orderNo,
  //     createTime: new Date().toLocaleString(),
  //     status: 0,
  //     price,
  //   };
  //   this.list.push(order);
  //   this._saveData();
  //   return order;
  // }

  createOrder(newOrder) {
    const orderNo = new Date().getTime();
    // 从list中找到最大值，生成新的id
    const maxId = this.list.reduce((max, item) => {
      return item.id > max ? item.id : max;
    }, 0);

    const order = {
      ...newOrder,
      id: maxId + 1,
      orderNo,
      createTime: new Date().toLocaleString(),
      status: 0,
      payMethod: 1,
    };
    this.list.push(order);
    this._saveData();
    return maxId + 1;
  }

  payOrder(orderId, value) {
    console.log("payOrder", orderId, value);
    console.log(this.list);
    const order = this.getOrderById(orderId);
    if (!order) {
      return false;
    }
    order.payMethod = value;
    order.status = 1;
    console.log(value);
    order.payTime = new Date().toLocaleString();
    this._saveData();
    return true;
  }

  setOrderAddress(orderId, address) {
    const order = this.getOrderById(orderId);
    if (!order) {
      return false;
    }
    order.address = address;
    this._saveData();
    return true;
  }

  getOrderById(orderId) {
    console.log("getOrderById", this.list, orderId);
    const id = parseInt(orderId);
    return this.list.find((item) => item.id === id);
  }

  getOrderList() {
    return this.list;
  }

  // 将数据存入到localstorage中
  _saveData() {
    localStorage.setItem("orderList", JSON.stringify(this.list));
  }

  _loadData() {
    const list = localStorage.getItem("orderList");
    if (list) {
      this.list = JSON.parse(list);
    } else {
      this.list = defaultList;
      this._saveData();
    }
  }
}

const orderService = new OrderService();
export default orderService;
