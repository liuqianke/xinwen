import {request} from "../../request/index.js";

Page({

 
  data: {
    
    videoList:[]
    
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getvideoList();
  
   
    
  },
  async getvideoList() {
    const result =  await request({
      url: 'http://apis.juhe.cn/fapig/douyin/billboard',
      data:  {
        key:"76df40271d0870d2af8f11498ff71286",
        type:"hot_video"
      
      }
    })
    console.log(result)
    this.setData({
        videoList: result.data.result
     })
  },
 
 
  

})
