
import {
    request
  } from "../../request/index.js";
  
  Page({
  
    /**
     * 页面的初始数据
     */
    data: {
      goodsObj: {},
      // 商品是否被收藏
      isCollect: false
    },
    // 商品对象
    GoodsInfo: {},
    /**
     * 生命周期函数--监听页面加载
     */
    onShow: function () {
      let pages = getCurrentPages();
      let currentPage = pages[pages.length - 1];
      let options = currentPage.options;
      const {
        uniquekey
      } = options;
      this.getGoodsDetail(uniquekey);
  
  
    },
    // 获取商品详情数据
    async getGoodsDetail(uniquekey) {
  
      const goodsObj = await request({
        url: "http://v.juhe.cn/toutiao/content",
        data: {
            key:"aa6ab5d96dca3fb4fa8bc8e3e3abd886",
            uniquekey
        }
      });
      console.log(goodsObj)
      this.GoodsInfo = goodsObj;

      // 1 获取缓存中的商品收藏的数组
      let collect = wx.getStorageSync("collect") || [];
      // 2 判断当前商品是否被收藏
      let isCollect = collect.some(v => v.uniquekey === this.GoodsInfo.data.result.uniquekey);
      this.setData({
        goodsObj: {
          title: goodsObj.data.result.detail.title,
        content:goodsObj.data.result.content.replace(/\.webp/g, '.jpg'),
        author:goodsObj.data.result.detail.author_name,
        date:goodsObj.data.result.detail.date,
         uniquekey:goodsObj.data.result.uniquekey,
         pic1:goodsObj.data.result.detail.thumbnail_pic_s,
         pic2:goodsObj.data.result.detail.thumbnail_pic_s02,
         pic3:goodsObj.data.result.detail.thumbnail_pic_s03

        },
        isCollect
      })
    },
    // 点击轮播图 放大预览
   
    
    // 点击 商品收藏图标
    handleCollect() {
      let isCollect = false;
      // 1 获取缓存中的商品收藏数组
      let collect = wx.getStorageSync("collect") || [];
      // 2 判断该商品是否被收藏过
      let index = collect.findIndex(v => v.uniquekey === this.GoodsInfo.data.result.uniquekey);
      // 3 当index！=-1表示 已经收藏过
      if (index !== -1) {
        // 能找到 已经收藏过了  在数组中删除该商品
        collect.splice(index, 1);
        isCollect = false;
        wx.showToast({
          title: '取消成功',
          icon: 'success',
          mask: true
        });
  
      } else {
        // 没有收藏过
        collect.push(this.GoodsInfo.data.result);
        isCollect = true;
        wx.showToast({
          title: '收藏成功',
          icon: 'success',
          mask: true
        });
      }
      // 4 把数组存入到缓存中
      wx.setStorageSync("collect", collect);
      // 5 修改data中的属性  isCollect
      this.setData({
        isCollect
      })
  
  
    }
  
  })