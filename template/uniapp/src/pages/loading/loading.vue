<template>
  <view class="loading">
    <view class="progress">
      {{ percent }}
    </view>
    <view v-for="(item, index) in loadImgArr" :key="index">
      <image
        :src="item"
        style="width: 0;height: 0;display: none;"
        @load="loadImg"
        @error="loadImg"
      ></image>
    </view>
  </view>
</template>

<script>
import assets from '../../config/asset.config.js'
let loadImgArr = []
export default {
  data() {
    return {
      loaded: false,
      count: 0,
      percent: 0,
      elementList: null,
      loadImgArr,
      assets,
    }
  },
  watch: {
    percent(val, old) {
      if (val == 100) {
        this.getToken()
      }
    },
  },
  async created() {
    this.initImgList()
  },
  methods: {
    initImgList() {
      let list = []
      let assetsImg = assets.imgList.map((item) => {
        list.push(item)
      })
      let Arr = assetsImg.concat(loadImgArr)
      this.loadImgArr = Arr
    },
    async getToken() {
      let token = uni.getStorageSync('TOKEN') || this.$store.state.common.token
      if (token) {
        uni.redirectTo({
          url: '/pages/index/index',
        })
      } else {
        uni.redirectTo({
          url: '/pages/index/index',
        })
      }
    },
    loadImg(e) {
      this.count++
      this.percent = Math.floor((this.count / this.loadImgArr.length) * 100)
    },
  },
}
</script>

<style lang="scss">
.loading {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .progress {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
