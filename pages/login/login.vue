<template>
	<view class="uni-login">
		 <view class="uni-nav">
			 <image class="uni-img" src="../../static/image/cancel.png"></image>
		 </view>
		 <view class="uni-msg">
			  <view class="uni-msg-title">
				  <text class="login" @tab="switchTab('login')">登录
				  </text>
				  <text class="register" @tab="switchTab('resister')">注册</text>
				  <text class="line"></text>
			  </view>
			  <!-- 登录注册 -->
			  <view class="login-msg" v-if="type==='login'" >
				  <view class="uni-input">
					  <input v-model="phone" class="username" type="text" placeholder-style="color:#B7BAC4;line-height:40rpx;font-size:30rpx;" placeholder="请输入您的账号" @input='inputPhone'/>
				  </view>
				  <view class="uni-input">
					 <input v-model="password" class="passWord " type="text" placeholder="请输入您的密码" placeholder-style="color:#B7BAC4;font-size:30rpx;" /> 
				  </view>
			  </view>
			  <view class="register-msg" v-if="type ==='register'">
                 <view>注册</view>
			  </view>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 登录或者是注册的类型
				type:'login',
				yzphone:false,
				phone:'',
				password:''
				
			}
		},
		methods: {
			// 手机号的格式进行检测
			inputPhone(e){
				if(/^1(3|4|5|6|7|8|9)\d{9}$/.test(e.detail.value)){
					this.yzphone=true;
				}else{
					this.yzphone=false;
				}
			},
			
			switchTab(type){
					uni.hideKeyboard();//隐藏软键盘
					this.type=type;
					this.phone='';
					this.password='';	
			}
		}
	}
</script>

<style scoped lang="scss">
 .uni-login{
	margin-top:var(--status-bar-height);
	// 导航
	.uni-nav{
		  height:80rpx;
		  line-height: 80rpx;
		  width:500rpx;
		  .uni-img{
			  width: 18rpx;
			  height: 18rpx;
			  margin-left:30rpx;
		  }
	 }
 }
  // 登录注册信息开始
  .uni-msg{
	  width:630rpx;
	  margin: 110rpx auto 198rpx auto ;
	  // title
	  .uni-msg-title{
		  margin-bottom:100rpx;
		  position: relative;
		  .login{
			  color:#303133;
			  font-weight: bold;
			  font-size: 50rpx;
		  }
		  .register{
			  font-size: 34rpx;
			  font-weight: bold;
			  color:#92959A;
			  margin-left:43rpx;
		  }
		  .line{
			  position: absolute;
			  bottom: 0rpx;
			  width:110rpx;
			  height:16rpx;
			  background:linear-gradient(90deg,rgba(18,92,212,1) 0%,rgba(34,165,255,0) 100%);
			  border-radius:2rpx;
		  }
	  }
	    // 登录样式
	  .login-msg{
		  .uni-input{
			  width: 630rpx;
			  border-bottom:2rpx solid #ECECEC;
			  margin-top:40rpx;
		  }
		  .username{
			  // margin-bottom: 69rpx;
			  height:80rpx;
			  
		  }
		  .passWord{
			  height: 80rpx;
			  // margin-top:69rpx;
		  }
		  
	  }
	  // 注册样式
	  .register-msg{
		  
	  }
  }
</style>
