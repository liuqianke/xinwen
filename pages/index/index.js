import {request} from "../../request/index.js";
// var postsData = require('../../data/top.js')
Page({

 
  data: {
    tabs: [
        {
        id: 0,
        value: "头条",
        isActive: true
      },
      {
        id: 1,
        value: "国内",
        isActive: false
      },
      {
        id: 2,
        value: "国际",
        isActive: false
      },
      {
        id: 3,
        value: "娱乐",
        isActive: false
      },
      {
        id: 4,
        value: "体育",
        isActive: false
      },
      {
        id: 5,
        value: "军事",
        isActive: false
      },
      {
        id: 6,
        value: "科技",
        isActive: false
      },
      {
        id: 7,
        value: "财经",
        isActive: false
      },
      {
        id: 8,
        value: "游戏",
        isActive: false
      },
      {
        id: 9,
        value: "汽车",
        isActive: false
      },
      {
        id: 10,
        value: "健康",
        isActive: false
      }
    ],
    
    topList: [],
    guoneiList: [],
    guojiList: [],
    yuleList: [],
    tiyuList: [],
    junshiList: [],
    kejiList: [],
    caijingList: [],
    
    
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.gettopList();
    this.getguoneiList();
    this.getguojiList();
    this.getyuleList();
    // this.setData({
    //   topList: postsData.postList,
    //   guoneiList: postsData.postList,
    //   guojiList: postsData.postList,
    //   guojiList: postsData.postList,

    // });
    
  },
  async gettopList() {
    const result =  await request({
      url: 'https://v.juhe.cn/toutiao/index',
      data:  {
        key:"aa6ab5d96dca3fb4fa8bc8e3e3abd886",
        type:"top"
      
      }
    })
    console.log(result)
    this.setData({
        topList: result.data.result.data
     })
  },
  async getguoneiList() {
    const result =  await request({
      url: 'https://v.juhe.cn/toutiao/index',
      data:  {
        key:"aa6ab5d96dca3fb4fa8bc8e3e3abd886",
        type:"guonei"
      
      }
    })
    console.log(result)
    this.setData({
        guoneiList: result.data.result.data
     })
  },
  async getguojiList() {
    const result =  await request({
      url: 'https://v.juhe.cn/toutiao/index',
      data:  {
        key:"aa6ab5d96dca3fb4fa8bc8e3e3abd886",
        type:"guoji"
      
      }
    })
    console.log(result)
    this.setData({
        guojiList: result.data.result.data
     })
  },
  async getyuleList() {
    const result =  await request({
      url: 'https://v.juhe.cn/toutiao/index',
      data:  {
        key:"aa6ab5d96dca3fb4fa8bc8e3e3abd886",
        type:"yule"
      
      }
    })
    console.log(result)
    this.setData({
        yuleList: result.data.result.data
     })
  },

  handleTabsItemChange(e) {
    // 1 获取被点击的标题索引
    const {
      index
    } = e.detail;

    // 2 修改源数组
    let {
      tabs
    } = this.data;

    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);


    // 3 赋值到data中
    this.setData({
      tabs
    })
  },
})
