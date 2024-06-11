const defaultList = [
  {
    id: 1,
    name: "男装",
    price: 100.52,
    sales: 45,
    store:2300,
    categoryId: 1,
    description: "男士外套春秋季2024新款假两件休闲夹克男生工装痞帅潮牌冲锋衣服",
    discountPrice: 19,
    //以id作为随机数，确保每次刷新页面图片都不一样
    merchant: "南极人",
    // img: `https://picsum.photos/400/200?random=${Math.random()}`,
    img: "https://img.alicdn.com/imgextra/i3/45446667/O1CN01RkT3oV1z7XNu5yEms_!!0-saturn_solar.jpg_580x580q90.jpg_.webp",
  },
  {
    id: 2,
    name: "短袖",
    price: 54.9,
    sales: 52,
    store:156899,
    categoryId: 1,
    description: "森马短T恤夏季宽松中性风上衣情侣装纯棉休闲装",
    merchant: "森马官方店",
    img: "https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/4002489870/O1CN01mKhhuj2MmW7r7wj2W_!!0-item_pic.jpg_580x580q90.jpg_.webp",
    discountPrice: 16,
  },
  {
    id: 3,
    name: "苹果手机",
    price: 3399.63,
    sales: 121,
    store:2893,
    categoryId: 2,
    description: "Apple/苹果 iPhone 12 Pro Max国行双卡正品iphone12promax手机",
    discountPrice: 66,
    merchant: "",
    img: "https://img.alicdn.com/imgextra/i1/191580128/O1CN01tpVK8v1Cofda9Ja7X_!!0-saturn_solar.jpg_580x580q90.jpg_.webp",
  },
  {
    id: 4,
    name: "华为手机",
    price: 6399.56,
    sales: 23,
    store:1781,
    categoryId: 2,
    description: "新款现货Huawei/华为 Mate 60 Pro5G麒麟12+512G正品Mate60手机",
    merchant: "",
    img: "https://img.alicdn.com/imgextra/i1/123971054/O1CN01JZ60RJ1JemKyAx67p_!!0-saturn_solar.jpg_580x580q90.jpg_.webp",
    discountPrice: 99,
  },
  {
    id: 5,
    name: "童装",
    price: 48,
    sales: 134,
    store:1999,
    categoryId: 1,
    description: "六一街舞儿童潮服男童嘻哈宽松潮牌酒红工装裤少儿hiphop表演出服",
    merchant: "狮园旗舰店",
    img: "https://img.alicdn.com/imgextra/i3/2108390075/O1CN01GObVyb1CQOfKiOsXK_!!0-saturn_solar.jpg_580x580q90.jpg_.webp",
    discountPrice: 6,
  },
  {
    id: 6,
    name: "除螨吸尘器",
    price: 600,
    sales: 12,
    store:1355,
    categoryId: 3,
    description: "莱克吉米M5S强拍深吸半导体杀菌除螨仪家用床上除螨神器吸尘B501P",
    discountPrice: 59,
    merchant: "chanel",
    img: "https://img.alicdn.com/imgextra/i3/338940198/O1CN01VQYFvE1DKjFmysZxo_!!0-saturn_solar.jpg_580x580q90.jpg_.webp",
  },
  {
    id: 7,
    name: "沙发",
    price: 2499,
    sales: 67,
    store:178,
    categoryId: 4,
    description: "零靠墙电动多功能沙发意式极简客厅直排可伸缩2024新款蛋白皮沙发",
    discountPrice: 68,
    merchant: "不雷人家具店",
    img: "https://img.alicdn.com/imgextra/i1/42407812/O1CN010Bot5827Zx1r9IuVW_!!0-saturn_solar.jpg_580x580q90.jpg_.webp",
  },
  {
    id: 8,
    name: "简易小衣柜",
    price: 88,
    sales: 231,
    store:156,
    categoryId: 4,
    description: "小衣柜简易组装出租房家用卧室布橱单人宿舍小型儿童储物收纳柜子",
    discountPrice: 13,
    merchant: "",
    img: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/3964144866/O1CN01X02iiv1log03JMQzb_!!0-item_pic.jpg_580x580q90.jpg_.webp",
  },
  {
    id: 9,
    name: "车载纸巾盒",
    price: 34.5,
    sales: 34,
    store:199,
    categoryId: 5,
    description: "车载纸巾盒扶手箱车用抽纸盒创意可爱卡通纸巾袋挂式车内装饰用品",
    discountPrice: 9,
    merchant: "车品专营店",
    img: "https://gw.alicdn.com/imgextra/O1CN01RFAimx2KrtYKAs8GQ_!!2576259611-0-picasso.jpg_580x580q90.jpg_.webp",
  },
  {
    id: 10,
    name: "电脑整机",
    price: 459,
    sales: 56,
    store:128,
    categoryId: 6,
    description: "酷睿i5/i7台式电脑主机办公商务家用组装机台式机绘图PS美工视频剪辑设计师电脑整机游戏电竞吃鸡LOL全套DIY",
    discountPrice: 33,
    merchant: "电脑旗舰店",
    img: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/2216382544938/O1CN01UjNYGo1mLej7rQO5c_!!0-item_pic.jpg_580x580q90.jpg_.webp",
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
