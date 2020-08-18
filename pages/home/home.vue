<template>
  <view class="home">
    <view class="end-title">
      <view @tap="change(0)" :class="{btna:btnnum == 0}">推荐</view>
      <view @tap="change(1)" :class="{btna:btnnum == 1}">热门</view>
      <view @tap="change(2)" :class="{btna:btnnum == 2}">我的</view>
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
      
    </view>
    
    <view class="end-cont" :class="{dis:btnnum == 2}">
      <view v-if="list.length>0">
        <Pengpai-FadeInOut :duration="2000" :wait="3000" :top="50" :left="10" :radius="30" :loop="true" :list="list"
           :concat="concat"></Pengpai-FadeInOut>
      </view>
      <button class='testbutton' type="primary" open-type="getUserInfo" @getuserinfo="getuserinfo" withCredentials="true">点击授权</button>
      <view class="user_info">
        <image :src="userInfo.avatarUrl" mode="" style="border-radius: 50%;overflow: hidden;"></image>
        <view style="font-size: 22px;color: #4CA2FF;">
           昵称：{{userInfo.nickName}}          
        </view>
        <view style="font-size: 22px;color: #DD524D;">
           性别：
           <text v-if="userInfo.gender=='1'">
             男
           </text>
           <text v-else-if="userInfo.gender=='2'">
             女    
           </text>
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
        list: [{
            title: '踮起脚尖走向阳光 刚刚浏览本店',
            img: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83er0aq5WuQhWxXcQoQbSnSPywUheQrot5biaFxV47nF2OB0aegkH12q2A6VkGUBDfUVqiaqgzVCJJicDg/132'
          },
          {
            title: '幸福的小女人  刚刚浏览本店',
            img: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIOeUhleCNwcOoTtk9Y1zwmpw76FsmAr1bYcKia2AVPiapbtl34jac7SQgjMaibKDJCqjYaHwvmUh3IQ/132'
          },
          {
            title: '快乐天使  刚刚浏览本店',
            img: 'https://wx.qlogo.cn/mmopen/vi_32/OaXz0rjMsrHkZlfxeEqRhhUCKyaXyVSbCQZWFUeZQuUetKhbQRZiclqNQhFfv3yiclOzTl1FgZdjDpwAFG5gDhBg/132'
          },
          {
            title: '握不住的沙  刚刚浏览本店',
            img: 'https://wx.qlogo.cn/mmopen/vi_32/bVfMeCPxSQsfBRc1XFHiaAiaZvvdrXC9hMTWAHoqDZKk7HD2By7km1dc55eSEibibKwDaW3ZQ2Zcbccr4KzwILVquQ/132'
          },
          {
            title: '顺其自然  刚刚浏览本店',
            img: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJghoO6zuibOUG6AMubJJIUicbbWjyOyljFr4QVZecvRqEhHfkIribPfEyfxiaKY5MpiaAeVjvokLLATDw/132'
          }
        ],
        userInfo: {
          nickName: '',
          gender: '',
          avatarUrl:''
        }, // 用户信息
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
      getuserinfo: function() {
        let _this = this
        // wx登录
        wx.login({
          success(res) {
            if (res.code) {
              //发起网络请求
              var code = res.code
              // 获取微信用户信息
              wx.getUserInfo({
                success: (res)=> {
                   _this.userInfo.nickName = res.userInfo.nickName
                   _this.userInfo.gender = res.userInfo.gender
                   _this.userInfo.avatarUrl = res.userInfo.avatarUrl
                },
                fail: res => {
                  // 获取失败的去引导用户授权 
                }
              })
            } else {}
          }
        })
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
    .goods_list{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30rpx 20rpx;
      box-sizing: border-box;
      border-bottom: 1rpx solid #C8C7CC;
    }
  }
</style>
