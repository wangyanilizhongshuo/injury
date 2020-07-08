<template>
	<view  class="uni-Login-Pwd">
		<view class="uni-msg">
			 <view class="uni-title">
				设置登录密码 
			 </view>
			<view class="uni-input" >
				<input v-model="password" class="reg-phone" type="text"  password="true" placeholder="请设置您的登录密码"  placeholder-style="color:#B7BAC4;font-size:30rpx;"  />	
			</view>
			<view class="uni-input" >
				<input v-model="repassword" class="re-phone" type="text" password="true" placeholder="请设置您的登录密码"  placeholder-style="color:#B7BAC4;font-size:30rpx;"  />	
			</view>
			<view class="uni-jump">
				<view :class="(password || repassword)?'nextJump2':'nextJump1'" class="next-jump" @click="jump()">注册</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				repassword:'',
				password:''
			}
		},
		methods: {
			jump(){
				uni.showToast({
				title: '注册成功',
				duration: 2000
				});
				// uni.navigateTo({
				// 	url:'./login'
				// })
				
			}
		}
		
	}
</script>

<style scoped lang="scss">
 .uni-Login-Pwd{
	 .uni-msg{
		 width: 630rpx;
		 margin:0 auto;
		 .uni-title{
			 color:#303133;
			 font-size:50rpx ;
			 font-weight: bold;
			 margin-top:90rpx;
		 }
		 .uni-input{
			 position: relative;
			 width: 630rpx;
			 border-bottom:2rpx solid #ECECEC;
			 .reg-phone{
				 margin:109rpx 0rpx 25rpx 24rpx;
			 }
			 .re-phone{
				 margin:69rpx 0rpx 25rpx 24rpx;
			 }
		 }
	     .uni-jump{
			 margin-top:170rpx;
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
