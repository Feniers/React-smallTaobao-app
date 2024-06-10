const defaultList = [
  {
    id: 1,
    name: "商品1",
    price: 100.52,
    sales: 45,
    store:2300,
    categoryId: 1,
    description: "商品1的描述",
    discountPrice: 19,
    //以id作为随机数，确保每次刷新页面图片都不一样
    merchant: "南极人",
    // img: `https://picsum.photos/400/200?random=${Math.random()}`,
    img: "https://s3.bmp.ovh/imgs/2024/06/09/c4112768b4de752e.jpg",
  },
  {
    id: 2,
    name: "商品2",
    price: 200.99,
    sales: 52,
    store:156899,
    categoryId: 1,
    description: "商品2的描述",
    merchant: "可口可乐官方旗舰店",
    img: "https://s3.bmp.ovh/imgs/2024/06/09/fb5d81becacba1cd.jpg",
    discountPrice: 19,
  },
  {
    id: 3,
    name: "商品3",
    price: 300.01,
    sales: 121,
    store:2893,
    categoryId: 2,
    description: "商品3的描述",
    discountPrice: 19,
    merchant: "",
    img: "https://s3.bmp.ovh/imgs/2024/06/09/1bfb272ce8abd25d.jpg",
  },
  {
    id: 4,
    name: "商品4",
    price: 400,
    sales: 23,
    store:1781,
    categoryId: 2,
    description: "商品4的描述",
    merchant: "",
    img: "https://s3.bmp.ovh/imgs/2024/06/09/456238426b43602d.jpg",
    discountPrice: 19,
  },
  {
    id: 5,
    name: "商品5",
    price: 500,
    sales: 134,
    store:1999,
    categoryId: 1,
    description: "商品5的描述",
    merchant: "淘工厂直营店",
    img: "https://s3.bmp.ovh/imgs/2024/06/09/1e19c1e822894fb1.jpg",
    discountPrice: 19,
  },
  {
    id: 6,
    name: "商品6",
    price: 600,
    sales: 12,
    store:1355,
    categoryId: 3,
    description: "商品6的描述",
    discountPrice: 10,
    merchant: "chanel",
    img: "https://s3.bmp.ovh/imgs/2024/06/09/4ac99d37b1a54658.jpg",
  },
  {
    id: 7,
    name: "商品7",
    price: 700,
    sales: 67,
    store:178,
    categoryId: 4,
    description: "商品7的描述",
    discountPrice: 19,
    merchant: "可口可乐官方旗舰店",
    img: "https://s3.bmp.ovh/imgs/2024/06/09/fb5d81becacba1cd.jpg",
  },
  {
    id: 8,
    name: "商品8",
    price: 800,
    sales: 231,
    store:156,
    categoryId: 4,
    description: "商品8的描述",
    discountPrice: 19,
    merchant: "",
    img: "https://s3.bmp.ovh/imgs/2024/06/09/1e19c1e822894fb1.jpg",
  },
  {
    id: 9,
    name: "商品9",
    price: 900,
    sales: 34,
    store:199,
    categoryId: 5,
    description: "商品9的描述",
    discountPrice: 19,
    merchant: "",
    img: "https://s3.bmp.ovh/imgs/2024/06/09/1bfb272ce8abd25d.jpg",
  },
  {
    id: 10,
    name: "商品10",
    price: 1000,
    sales: 56,
    store:128,
    categoryId: 6,
    description: "商品10的描述",
    discountPrice: 19,
    merchant: "",
    img: "https://s3.bmp.ovh/imgs/2024/06/09/4ac99d37b1a54658.jpg",
  },
];

class GoodService {
  list = [];

  constructor() {
    localStorage.removeItem("goodList");
    console.log("GoodService constructor");
    this._loadData();
  }

  // 根据id获取单个商品
  getGoodById(id) {
    return this.list.find((item) => item.id === id);
  }

  // 获取商品列表
  getGoodList() {
    return this.list;
  }

  // 添加商品
  addGood(good) {
    this.list.push(good);
    this._saveData();
  }

  // 删除商品
  deleteGood(id) {
    this.list = this.list.filter((item) => item.id !== id);
    this._saveData();
  }

  // 更新商品
  updateGood(good) {
    this.list = this.list.map((item) => {
      if (item.id === good.id) {
        return good;
      }
      return item;
    });
    this._saveData();
  }

  // 将数据存入到localstorage中
  _saveData() {
    localStorage.setItem("goodList", JSON.stringify(this.list));
  }

  _loadData() {
    const list = localStorage.getItem("goodList");
    if (list) {
      this.list = JSON.parse(list);
    } else {
      this.list = defaultList;
      this._saveData();
    }
  }
}

const goodService = new GoodService();
export default goodService;
