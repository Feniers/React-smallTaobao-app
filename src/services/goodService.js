const defaultList = [
  {
    id: 1,
    name: "商品1",
    price: 100,
    categoryId: "1",
    description: "商品1的描述",
    img: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
  },
  {
    id: 2,
    name: "商品2",
    price: 200,
    categoryId: "2",
    description: "商品2的描述",
    img: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
  },
  {
    id: 3,
    name: "商品3",
    price: 300,
    categoryId: "3",
    description: "商品3的描述",
    img: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
  },
  {
    id: 4,
    name: "商品4",
    price: 400,
    categoryId: "4",
    description: "商品4的描述",
    img: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
  },
  {
    id: 5,
    name: "商品5",
    price: 500,
    categoryId: "5",
    description: "商品5的描述",
    img: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
  },
  {
    id: 6,
    name: "商品6",
    price: 600,
    categoryId: "6",
    description: "商品6的描述",
    img: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
  },
  {
    id: 7,
    name: "商品7",
    price: 700,
    categoryId: "7",
    description: "商品7的描述",
    img: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
  },
  {
    id: 8,
    name: "商品8",
    price: 800,
    categoryId: "8",
    description: "商品8的描述",
    img: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
  },
  {
    id: 9,
    name: "商品9",
    price: 900,
    categoryId: "9",
    description: "商品9的描述",
    img: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
  },
  {
    id: 10,
    name: "商品10",
    price: 1000,
    categoryId: "10",
    description: "商品10的描述",
    img: "https://news.bjtu.edu.cn/images/16/07/18/1tmvx4g0yo/IMG_6830.jpg",
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
