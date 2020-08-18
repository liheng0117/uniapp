<template>
  <view>
    <carousel :img-list="img" url-key="url" @selected="selectedBanner" />
    <view class="detail_tit">
      <view>{{detail.title}}</view>
      <view style="color: orangered;font-size: 22px;font-weight: 700;padding: 30rpx 0;">￥{{detail.price}}</view>
      <button type="default" @click="go()">免费领取</button>
    </view>
    <uni-popup ref="popup" type="dialog">
      <uni-popup-dialog title="通知" content="你在想屁吃!" @confirm="confirm" :duration="2000"></uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script>
  import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
  import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
  import carousel from '@/components/vear-carousel/vear-carousel'
  export default {
    components: {
      carousel,
      uniPopupMessage,
      uniPopupDialog
    },
    data() {
      return {
        detail: {},
        img: []
      }
    },
    methods: {
      selectedBanner(item, index) {
        console.log('🥒', item, index)
      },
      go: function() {
        this.$refs.popup.open()
      },
       //点击确认按钮触发
      confirm(done) {
        done()
      }
    },
    onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
      uni.request({
        url: `${this.$baseUrl}/home/goods/info/gid/${option.gid}/type/details?token=1ec949a15fb709370f`,
        method: 'GET',
        success: (res) => {
          console.log(res.data.data);
          this.detail = res.data.data
          res.data.data.images.forEach((v, i) => {
            let obj = {}
            obj.url = v
            obj.id = i
            this.img.push(obj)
          })
        },
        fail: (err) => {}
      })
    }
  }
</script>

<style lang="less" scoped>
  .detail_tit {
    padding: 20rpx 40rpx;
  }
</style>
