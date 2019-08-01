
//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: (res) => {
        console.log('系统信息', res)
        this.globalData.windowHeight = res.windowHeight
        this.globalData.windowWidth = res.windowWidth
        this.globalData.rpxHeight = res.windowHeight * (750 / res.windowWidth)
      },
    })
  },
  globalData: {
    userInfo: null
  }
})