const audioList = ['shoot.mp3']
let audio = {}
for (let item of audioList) {
  let name = item.split('.')[0]
  let format = item.split('.')[1]
  audio[name] = (() => {
    let innerAudioContext = uni.createInnerAudioContext()
    innerAudioContext.src = `https://statics.meiway.cc/zs-spaceship/audio/${name}.${format}`
    return innerAudioContext
  })()
}
export default audio
