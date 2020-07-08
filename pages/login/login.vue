<template>
	<view class="uni-login">
		 <view class="uni-nav">
			 <image class="uni-img" src="../../static/image/cancel.png"></image>
		 </view>
		 <view class="uni-msg">
			  <view class="uni-msg-title">
				  <text  :class="type ==='login'? 'login1':'login2'"  @click="switchTab('login')">登录
				  </text>
				  <text :class="type ==='register'? 'register1':'register2'" class="register" @click="switchTab('register')">注册</text>
				  <text :class="type ==='login'? 'line1':'line2'"   class="line"></text>
				  
			  </view>
			  <!-- 登录注册 -->
			  <view class="login-msg" v-if="type==='login'" >
				  <view class="uni-input">
					  <input v-model="phone" class="username inStyle" type="text"   placeholder="请输入您的账号" @input='inputPhone' placeholder-style="color:#B7BAC4;font-size:30rpx;"  />
				      <image  v-if="phone" class="img" @click="loginclearPhone()" src="../../static/image/del_icon.png"></image>
				  </view>
				  <view class="uni-input">
					 <input v-model="password" class="passWord inStyle" password="true"  type="text"  placeholder="请输入您的密码" placeholder-style="color:#B7BAC4;font-size:30rpx;" /> 
				  </view>
				  <view class="choice-login">
					  <text class="word-style" @click="phoneVerifi()">手机验证码登录</text>
					  <text class="word-style" @click="forPwd()" >忘记密码</text>
				  </view>
				  <view :class="(phone||password)?'unibtn1':'unibtn2'" class="uni-btn">
					  登录
				  </view>
				 <view class="weixin-login">
					  <image class="img" src="../../static/image/login_wechat.png"></image>
					  <view class="word">微信登录</view>
				  </view>
				  <view class="protocol">
					  <text class="left-1">登录即代表您同意</text>
					  <text class="left-2">《用户协议》</text>
					  <text class="left-1 right-1">和</text>
					  <text class="left-2 right-2">《隐私政策》</text>
				  </view>
			  </view>
			  <view class="register-msg" v-else-if="type==='register'">
               <view class="uni-input" @click="loginclearPhone()">
               		 <input v-model="phone" class="reg-phone" type="text"   placeholder="请输入您的账号" @input='inputPhone' placeholder-style="color:#B7BAC4;font-size:30rpx;"  />
                     <text class="in-Sty86">+86</text>
					 <image  v-if="phone" class="img" @click="loginclearPhone()" src="../../static/image/del_icon.png"></image>
			   </view>
			   <view class="next-btn">
				    <view :class="phone?'next-jump1':'next-jump2'" @click="jumps()" class="next-jump">下一步</view>
			   </view>
			   <view class="protocol">
				   <text class="left">点击"下一步"即同意</text>
                   <text class="right">《用户协议》</text> 
				   <text class="left">和</text>
				   <text class="right">《隐私政策》</text>           
			   </view>
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
			//忘记密码
			forPwd(){
				// console.log(213)
				uni.navigateTo({
					  url: './forgetPassword'
				})
			},
			//手机验证码登录
			phoneVerifi(){
				uni.navigateTo({
					  url: './phoneVerification'
				});
				console.log('999')
			},
			//注册成功之后 重新设置登录密码
			jumps(){
				uni.navigateTo({
					url:'./setLoginPwd'
				})
			},
			loginclearPhone(){
				this.phone='';
			},
			switchTab(type){
				   // console.log(type)
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
			  width: 36rpx;
			  height: 36rpx;
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
		  .login1{
			  font-size: 50rpx;
			  font-weight: bold;
			  color:#303133;
		  }
		  .login2{
			   font-size: 34rpx;
			   color:#92959A;
		  }
		  .register{
			   margin-left:43rpx;
		  }
		  .register1{
			  font-size: 50rpx;
			  font-weight: bold;
			  color:#303133;
		  }
		  .register2{
		  	  font-size: 34rpx;
		  	  color:#92959A;
		  }
		  .line{
			  position: absolute;
			  bottom: 0rpx;
			  width:110rpx;
			  height:16rpx;
			  background:linear-gradient(90deg,rgba(18,92,212,1) 0%,rgba(34,165,255,0) 100%);
			  border-radius:2rpx;
		  }
		  .line1{
			  left:0rpx;
		  }
		  .line2{
			  left:110rpx;
		  }
	  }
	    // 登录样式
	  .login-msg{
		  .inStyle{
			  padding-left: 24rpx;
			  margin-bottom:36rpx;
		  }
		  // 160 120
		  .uni-input{
			  position: relative;
			  width: 630rpx;
			  border-bottom:2rpx solid #ECECEC;
			  .passWord{
				   margin-top:72rpx;
			  }
			  .img{
				  width: 30rpx;
				  height:30rpx;
				  position: absolute;
				  right:0rpx;
				  bottom:36rpx;
				  z-index:3;
			  }
		  }
		  .choice-login{
			  width:630rpx;
			  display: flex;
			  justify-content: space-between;
			  margin: 33rpx 0rpx 112rpx;
			  .word-style{
				  font-family: "PingFang-SC-Medium";
				  font-size: 26rpx;
				  color:#44464A;
			  }
		  }
		  .uni-btn{
			  width: 540rpx;
              margin :0 auto;
			  height:90rpx;
			  line-height:90rpx;
			  border-radius:45rpx;
			  font-size: 36rpx;
			  color: #FFFFFF;
			  text-align: center;
		  }
		  .unibtn2{
			   background-color:#D1E0FF;
		  }
		  .unibtn1{
			  background-color: #125CD4;
		  }
		  .protocol{
			  text-align: center;
			  .left-1{
				  font-size: 28rpx;
				  color: #747F9B;
			  }
			  .left-2{
				  color: #125CD4;
				  font-size: 28rpx;
			  }
		  }
		  //微信登录的样式
		  .weixin-login{
			  width: 150rpx;
			  margin: 150rpx auto 100rpx;
			  display: flex;
			  flex-direction: column;
			  align-items: center;
			  .img{
				  width: 78rpx;
				  height: 78rpx;
				  margin-bottom: 31rpx;
			  }
			  .word{
				  color: #44464A;
				  font-size: 26rpx;
				  
			  }
		  }
	  }
	 
  }
  // 注册的样式
  .uni-msg{
	  .register-msg{
  		  .uni-input{
			 position: relative;
  		  	 width: 630rpx;
  		  	 border-bottom:2rpx solid #ECECEC;
			 .reg-phone{
				 padding-left:130rpx;
				 margin-bottom:25rpx;
			 }
			 .in-Sty86{
				 position: absolute;
				 top:0rpx;
				 left:20rpx;
				 color:#010101;
				 font-size: 30rpx; 
			 }
			 .img{
				 width: 30rpx;
				 height:30rpx;
				 position: absolute;
				 right:0rpx;
				 top:0rpx;
				 z-index:2;
			 }
  		  }
          .next-btn{
			  margin:64rpx auto 27rpx;
			  .next-jump{
				  width:540rpx;
				  margin:0 auto;
				  height:90rpx;
				  line-height:90rpx;
				  border-radius:45rpx;
				  font-size: 36rpx;
				  color:#fff;
				  text-align: center;
			  }
			  .next-jump2{
				  background-color: #D1E0FF;
			  }
			  .next-jump1{
				  background-color: #125CD4;
			  }
		  }
	      .protocol{
			  width: 630rpx;
			  text-align: center;
			  font-size: 28rpx;
			  text-indent: 15rpx;
			  .left{
				  color:#747F9B;
			  }
			  .right{
				  color: #125CD4;
			  }
		  }
	}
  }
  
</style>
