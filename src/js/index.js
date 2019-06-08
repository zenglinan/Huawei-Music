class Player {
  constructor() {
    this.index = 0
    this.music = []
    this.currentMusic = null
    this.init()
  }
  init() {
    new Promise(function (reslove, reject) {
      let xhr = new XMLHttpRequest()
      xhr.open('GET','https://jirengu.github.io/data-mock/huawei-music/music-list.json')
      xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
          if(xhr.status >= 200 && xhr.status <400 ){
            console.log(xhr.response)
            reslove(JSON.stringify(xhr.response))
          }
        }
      }
      xhr.send()
    })
  }
}
let player = new Player()