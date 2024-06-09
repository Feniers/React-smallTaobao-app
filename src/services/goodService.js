const defaultList = [
  {
    id: 1,
    name: "商品1",
    price: 100.52,
    sales: 45,
    categoryId: 1,
    description: "商品1的描述",
    discountPrice:19,
    //以id作为随机数，确保每次刷新页面图片都不一样
    merchant: "南极人",
    // img: `https://picsum.photos/400/200?random=${Math.random()}`,
    img: "goods/bleu.jpg",
  },
  {
    id: 2,
    name: "商品2",
    price: 200.99,
    sales: 52,
    categoryId: 1,
    description: "商品2的描述",
    merchant: "可口可乐官方旗舰店",
    img: "goods/cola.jpg",
    discountPrice:19,
  },
  {
    id: 3,
    name: "商品3",
    price: 300.01,
    sales: 121,
    categoryId: 2,
    description: "商品3的描述",
    discountPrice:19,
    merchant: "",
    img: "goods/rio.jpg",
  },
  {
    id: 4,
    name: "商品4",
    price: 400,
    sales: 23,
    categoryId: 2,
    description: "商品4的描述",
    merchant: "",
    img: "goods/OIP.jpg",
    discountPrice:19,
    },
  {
    id: 5,
    name: "商品5",
    price: 500,
    sales: 134,
    categoryId: 1,
    description: "商品5的描述",
    merchant: "淘工厂直营店",
    img: "goods/wire.jpg",
    discountPrice:19,
  },
  {
    id: 6,
    name: "商品6",
    price: 600,
    sales: 12,
    categoryId: 3,
    description: "商品6的描述",
    discountPrice:10,
    merchant: "chanel",
    img: "goods/bleu.jpg",
  },
  {
    id: 7,
    name: "商品7",
    price: 700,
    sales: 67,
    categoryId: 4,
    description: "商品7的描述",
    discountPrice:19,
    merchant: "可口可乐官方旗舰店",
    img: "goods/tea.jpg",
  },
  {
    id: 8,
    name: "商品8",
    price: 800,
    sales: 231,
    categoryId: 4,
    description: "商品8的描述",
    discountPrice:19,
    merchant: "",
    img: "goods/cola.jpg",
  },
  {
    id: 9,
    name: "商品9",
    price: 900,
    sales: 34,
    categoryId: 5,
    description: "商品9的描述",
    discountPrice:19,
    merchant: "",
    img: "goods/rio.jpg",
  },
  {
    id: 10,
    name: "商品10",
    price: 1000,
    sales: 56,
    categoryId: 6,
    description: "商品10的描述",
    discountPrice:19,
    merchant: "",
    img: "goods/OIP.jpg",
  },
];

class GoodService {
  list = [];

  constructor() {
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
