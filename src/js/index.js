import help from './help'
import { prepare } from '_fast-glob@2.2.7@fast-glob/out/managers/options';

class Player {
  constructor(rootNode) {
    this.root = document.querySelector(rootNode)
    this.$ = (node) => this.root.querySelector(node)
    this.$$ = (node) => this.root.querySelectorAll(node)
    this.musicList = []
    this.currentIndex = 0;
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
      this.audio.src = this.musicList[0].url
      // this.audio.src = "http://dl.stream.qqmusic.qq.com/M500002u8ZOM4C7QF4.mp3?vkey=F1C2AF1C030EAD39CC06BD98EFD8ED5C937D11AA206722BBB795EDBDCC9039F6D90BE27E83C566F9A789F17D668CB6BAD39DF2C8B3020247&guid=5150825362&fromtag=1"
    })
  }
  bind() {
    playBtn.onclick = () => {
      if (playBtn.classList.contains('pausing')) {
        this.playOrPause("play")
      } else {
        this.playOrPause("pause")
      }
    }
    preBtn.onclick = () => {
      this.playPreSong()
    }
    nextBtn.onclick = () => {
      this.playNextSong()
    }
    searchInput.onsubmit = ()=>{
      alert(1);
    }
  }
  playOrPause(option) {
    if (option === "play") {
      this.audio.play()
      console.log('here')
      playBtn.classList.remove('pausing')
      playBtn.classList.add('playing')
      this.$("#playBtn>use").setAttribute('xlink:href', "#playing")
    } else {
      this.audio.pause()
      playBtn.classList.remove('playing')
      playBtn.classList.add('pausing')
      this.$("#playBtn>use").setAttribute('xlink:href', "#pausing")
    }
  }
  playPreSong() {
    this.currentIndex = (this.musicList.length + this.currentIndex - 1) % this.musicList.length
    this.audio.src = this.musicList[this.currentIndex].url
    this.audio.oncanplay = () => {
      this.playOrPause("play")
    }
  }
  playNextSong() {
    this.currentIndex = (this.musicList.length + this.currentIndex + 1) % this.musicList.length
    this.audio.src = this.musicList[this.currentIndex].url
    this.audio.oncanplay = () => {
      this.playOrPause("play")
    }
  }
}
let player = new Player("#player")