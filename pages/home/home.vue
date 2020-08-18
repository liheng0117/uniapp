<template>
  <view class="home">
    <view class="end-title">
      <view @tap="change(0)" :class="{btna:btnnum == 0}">推荐</view>
      <view @tap="change(1)" :class="{btna:btnnum == 1}">热门</view>
      <view @tap="change(2)" :class="{btna:btnnum == 2}">联系</view>
    </view>
    <view class="end-cont" :class="{dis:btnnum == 0}">
      <view class="uni-padding-wrap">
        <view class="page-section swiper">
          <view class="page-section-spacing">
            <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
              indicator-color="#ccc" circular="true">
              <swiper-item v-for="v in provinces.bannerList" class="swiper-image">
                <image :src="v.url" :key="v.id" mode="scaleToFill"></image>
              </swiper-item>
            </swiper>
          </view>
        </view>
      </view>
      <view class="home_goods">
        <view class="goods_tit" style="text-align: center;color: #ED1C24;">
          <view>中国民办教育信息网(民教网)-唯一民教网官网</view>
          <view>www.cnhsi.com.cn</view>
          <view>注：另 + 学校官网学历证明</view>
        </view>
        <view class="goods_list" v-for="v in provinces.cnSchool" :key="v.id">
          <view>
            <view>{{v.name}}</view>
            <view>{{v.url}}</view>
          </view>
          <view style="color: orangered;font-weight: 700;font-size: 20px;">{{v.price}}</view>
        </view>
      </view>
      
    </view>
    
    <view class="end-cont" :class="{dis:btnnum == 1}">
      <view class="uni-padding-wrap">
        <view class="page-section swiper">
          <view class="page-section-spacing">
            <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
              indicator-color="#ccc" circular="true">
              <swiper-item v-for="v in provinces.bannerList" class="swiper-image">
                <image :src="v.url" :key="v.id" mode="scaleToFill"></image>
              </swiper-item>
            </swiper>
          </view>
        </view>
      </view>
      <view class="goods_tit" style="text-align: center;color: #ED1C24;">
        <view>中国民办高等教育学生信息网(民教网)</view>
        <view>www.clhsi.com.cn</view>
        <view>注：全部￥260 不含学位 （加学位证需补差价 ￥100） </view>
      </view>
      <view class="goods_list" v-for="(v,i) in provinces.clSchool" :key="i">
        <view>
          <view>{{v.name}}</view>
          <view>{{v.city}}</view>
        </view>
        <view style="color: orangered;font-weight: 700;font-size: 20px;">{{v.gender}}</view>
      </view>
    </view>
    
    <view class="end-cont" :class="{dis:btnnum == 2}">
      <view class="user_info" style="display: flex;flex-direction: column;align-items: center;">
        <image src="../../static/wx.png" mode=""></image>
        <view>扫描上面二维码联系我</view>
        <view style="padding-top: 20rpx;">wx: tangcuyu17</view>
        <view style="padding-top: 20rpx;">QQ: 1447026400</view>
        <view style="position: fixed;bottom: 140rpx;color: #C0C0C0;font-size: 14px;text-align: center;">
          <view>https://github.com/liheng0117/uniapp.git</view>
          <view>个人出版</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import datas from '../../static/data/json.js'
  export default {
    components: {},
    data() {
      return {
        btnnum: 0,
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500,
        provinces:datas.datas
      };
    },
    methods: {
      change(e) {
        this.btnnum = e
      },
      goDetail: function(gid) {
        uni.navigateTo({
          url: `../detail/detail?gid=${gid}`
        });
      },
    },
    onLoad() {
    }
  }
</script>

<style lang="less" scoped>
  page {
    width: 100%;
    height: 100%;
  }

  .home {
    width: 100%;
    height: 100%;
  }

  .end-title {
    display: flex;
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    position: fixed;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(#e66465, #9198e5);
  }

  .end-title view {
    flex-grow: 1;
    text-align: center;
  }

  .end-cont {
    display: none;
    overflow: scroll;
    padding-bottom: 100rpx;
  }

  .btna {
    color: #FFFFFF;
  }

  .dis {
    display: block;
  }

  .uni-margin-wrap {

    height: 100%;
    margin: 0 0upx;
  }

  .swiper {
    border-bottom: 1rpx solid #F1F1F1;
    height: 400upx;

    .swiper-item {
      display: block;
      line-height: 400upx;
      text-align: center;
    }

    .swiper-image {
      width: 100%;
      height: 400upx;

      image {
        width: 100%;
        height: 100%;
      }
    }
  }
  .home_goods{
    width: 100%;
  }
  .goods_list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30rpx 20rpx;
    box-sizing: border-box;
    border-bottom: 1rpx solid #C8C7CC;
  }
</style>
