import help from './help'

class Player {
  constructor(rootNode) {
    this.root = document.querySelector(rootNode)
    this.$ = (node) => root.querySelector(node)
    this.$$ = (node) => root.querySelectorAll(node)
    this.musicList = []
    this.audio = new Audio()
    this.init()
    this.bind()
  }
  init() {
    help.ajax({
      url: 'https://jirengu.github.io/data-mock/huawei-music/music-list.json',
      method: 'GET'
    }).then(res => {
      this.musicList = JSON.parse(res)
      // this.audio.src = this.musicList[0].url
      this.audio.src = "http://dl.stream.qqmusic.qq.com/M500002u8ZOM4C7QF4.mp3?vkey=F1C2AF1C030EAD39CC06BD98EFD8ED5C937D11AA206722BBB795EDBDCC9039F6D90BE27E83C566F9A789F17D668CB6BAD39DF2C8B3020247&guid=5150825362&fromtag=1"
    })
  }
  bind() {
    playBtn.onclick = () => {
      console.log(this.audio)
      this.audio.play()
    }
  }
}
let player = new Player("#player")