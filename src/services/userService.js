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
