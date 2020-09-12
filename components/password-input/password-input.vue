<template>
  <view class="psdIptBx">
    <block v-for="(item , index) in psdIptNum" :key='index'>
      <view class="psdTtem">
        <text v-if="numLng.length > index" class="psdTtemTxt">
          <text class="signal" v-if="plaintext">*</text>
          <text v-else>{{numLng[index]}}</text>
        </text>
        <text v-if="numLng.length ==index" class="focus_move">|</text>
      </view>
    </block>
  </view>
</template>

<script>
  export default {
    props: {
      //是否明文 默认密文
      plaintext: {
        type: Boolean,
        default: true
      },
      //键盘输入的val
      numLng: {
        type: [String, Number],
        default: ''
      },
      //密码框的个数
      psdIptNum: {
        type: [String, Number],
        default: 6
      }
    },
    data() {
      return {}
    },
    created() {},
    methods: {
    }
  }
</script>

<style scoped>
  .psdIptBx {
    display: flex;
    width: 500rpx;
	margin:0 auto;
    text-align: center;
  }
  .signal{
	  color: #B8BAC4;	 
	  font-size: 36rpx;
	  font-weight: bold;
  }
  .psdTtem {
    flex: 1;
    height: 82rpx;
	width:100rpx;
	background:#f2f2f2;
	margin-right:2rpx;
  }

  .psdTtemTxt {
    text-align: center;
    line-height: 82rpx;
    font-size: 40rpx;
	
  }

  .focus_move {
    color: #ccc;
    font-size: 30rpx;
    line-height: 82rpx;
    animation: focus 0.8s infinite;
  }

 @keyframes focus {
   from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
</style>
