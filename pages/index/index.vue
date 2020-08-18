<template>
  <view class="content">
    <view class="loader">
    </view>
    <view class="logoimg">
      <image class="logo" src="/static/logo.jpg"></image>
    </view>
    <view class="text-area">
      <text class="title">{{title}}</text>
    </view>
    <input type="text" placeholder="账号" class="inputAcc" v-model="username" />
    <input type="password" placeholder="密码" class="input" v-model="password" />
    <button class="loginBtn" @click="go()">
      Go
    </button>
    <uni-popup ref="popup" type="message">
      <uni-popup-message type="error" message="账号或密码错误" :duration="2000"></uni-popup-message>
    </uni-popup>
  </view>
</template>
<script>
  import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
  export default {
    data() {
      return {
        username: '123',
        password: '123',
      }
    },
    components: {
      uniPopupMessage,
    },
    onLoad() {
      //this.go()
    },
    methods: {
      go: function() {
        if (this.username == '123' && this.password == '123') {
          uni.redirectTo({
            url: '../home/home'
          });
        } else {
          this.$refs.popup.open()
        }
      }
    }
  }
</script>

<style>
  page {
    background-color: #000000;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .input {
    margin: 20% 0rem;
    position: absolute;
    top: 600rpx;
    height: 70upx;
    width: 50%;
    color: #FFFFFF;
    text-align: center;
    border-bottom: 1px #007AFF solid;
    border-radius: 10upx;

  }

  .inputAcc {
    margin: 20% 0rem;
    position: absolute;
    top: 470rpx;
    height: 70upx;
    width: 50%;
    color: #FFFFFF;
    text-align: center;
    border-bottom: 1px #007AFF solid;
    border-radius: 10upx;

  }

  .loginBtn {
    background: linear-gradient(to right, #4bb0ff, #6149f6);
    border-radius: 200rpx;
    width: 200rpx;
    position: absolute;
    color: white;
    bottom: 150rpx;
  }

  .logoimg {
    position: absolute;
    top: 155rpx;
    z-index: 10;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    border-radius: 100upx;
  }

  .text-area {
    position: absolute;
    top: 530rpx;
    display: flex;
    justify-content: center;
  }

  .title {

    font-size: 25rpx;
    color: #8f8f94;
  }

  .loader {
    z-index: 1;
    position: absolute;
    top: 130rpx;
    width: 250rpx;
    height: 250rpx;
    border-radius: 50%;
    background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
    animation: animate 1.2s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .loader:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: #f1f1f1;
    border: solid white 10px;
    border-radius: 50%;
  }
</style>
