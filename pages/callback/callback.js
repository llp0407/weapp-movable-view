const app = getApp()
Page({
  data: {
    x: 0,
    y: 0,
    isRotate:false,
    showDef:false,
    arr:[1,2,3]
  },
  onLoad(){
    
    setInterval(()=>{
      this.moveFish()
    }, 3000)

  },
  moveFish(e) {
    let x = this.randomNum(0, 750)
    let y = this.randomNum(0, app.globalData.rpxHeight)
    let isRotate = false
    let prevX = this.data.x
    if (prevX > x) {
      isRotate = true
    }
    this.setData({
      x, y, isRotate
    })
  },
  randomNum(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(x)
    return randomNum
  },
})