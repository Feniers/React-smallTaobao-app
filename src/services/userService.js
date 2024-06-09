// 这个是默认的用户列表，给你们看看，这个只用来做登录的对比，不要用来做其他操作
// const defaultUserList = [
//   {
//     id: 1,
//     addr: [
//       {
//         name: "dyh",
//         address: "beijing",
//       },
//       {
//         name: "dyh",
//         address: "shanghai",
//       },
//     ],
//     phone: "12345678901",
//     name: "dyh",
//     password: "123456",
//     cart: [
//       { id: 1, amount: 2 },
//       { id: 2, amount: 1 },
//     ],
//     coupon: 3
//   },
//   {
//     id: 2,
//     addr: [
//       {
//         name: "dyh",
//         address: "beijing",
//       },
//     ],
//     phone: "12345678901",
//     name: "dyh2",
//     password: "654321",
//     cart: [
//       { id: 1, amount: 2 },
//       { id: 2, amount: 1 },
//     ],
//     coupon:2
//   },
// ];

class UserService {
  userList = [];
  currentUser = null;

  constructor() {
    this.userList = JSON.parse(localStorage.getItem("userList")) || [];
  }

  logging(username, password) {
    // 比较用户名和密码，如果正确则返回用户信息，否则返回null
    const user = this.userList.find(
      (u) => u.name === username && u.password === password
    );
    if (user) {
      this.currentUser = user;
      this._setData();
    }
    return !!user;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem("currentUser");
  }

  getUser() {
    return this.currentUser;
  }
  getCart() {
    // 如果当前用户存在，则返回其购物车，否则返回空数组
    return this.currentUser ? this.currentUser.cart : [];
  }

  /**
   * 传入的cart会完全覆盖原来的cart
   * @param {*} cart
   */
  setCart(cart) {
    this.currentUser.cart = cart;
    this._setData();
  }

  _setData() {
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
  }

  _loadData() {
    const user = localStorage.getItem("currentUser");
    if (user) {
      this.currentUser = JSON.parse(user);
    } else {
      console.log("no user");
    }
  }
}

const userService = new UserService();
export default userService;
