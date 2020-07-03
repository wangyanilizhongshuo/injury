<template>
	<view  class="uni-forgetPwd">
		<view class="uni-msg">
			 <view class="uni-title">
				 忘记密码
			 </view>
			<view class="uni-input" >
				<input v-model="phoneNumber" class="reg-phone" type="text"  placeholder="请输入您的手机号"  placeholder-style="color:#B7BAC4;font-size:30rpx;"  />
			    <text class="in-word">+&nbsp;86</text>
				<image  v-if="phoneNumber" class="img"@click="clearPhone()"  src="../../static/image/del_icon.png"></image>
			</view>
			<view class="uni-jump">
				<view :class="phoneNumber?'nextJump2':'nextJump1'" @click="jumps()" class="next-jump">下一步</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNumber:''
			}
		},
		methods: {
			clearPhone(){
				this.phoneNumber=''
			},
			//重置登录密码
			jumps(){
				uni.navigateTo({
					url:'../resetLoginPwd/resetLoginPwd'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
 .uni-forgetPwd{
	 .uni-msg{
		 width: 630rpx;
		 margin:0 auto;
		 .uni-title{
			 color:#303133;
			 font-size: 50rpx;
			 font-weight: bold;
			 margin-top:90rpx;
		 }
		 .uni-input{
			 position: relative;
			 width: 630rpx;
			 border-bottom:2rpx solid #ECECEC;
			 .reg-phone{
				 padding-left: 24rpx;
				 margin:109rpx 0rpx 25rpx 114rpx;
			 }
			 .in-word{
				 position: absolute;
				 left:24rpx;
				 top:0rpx;
				 font-size: 30rpx;
				 color:#010101;
			 }
			 .img{
			 	 width:30rpx;
			 	 height: 30rpx;
				 position: absolute;
				 right:0rpx;
				 top:0rpx;
				 z-index:2;  
			 }
		 }
	     .uni-jump{
			 margin-top:64rpx;
			 .next-jump{
				 width: 540rpx;
				 margin: 0 auto;
				 height: 90rpx;
				 line-height: 90rpx;
				 border-radius:45rpx;
				 color:#fff;
				 font-size: 36rpx;
				 text-align: center;
			 }
			 .nextJump1{
				  background-color: #D1E0FF;
			 }
			 .nextJump2{
			 	  background-color: #125CD4;
			 }
		 }
	 }
 }
</style>
