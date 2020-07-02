<template>
	<view  class="uni-forgetPwd">
		<view class="back"> 
		  <text> nih  </text> 
		</view>
		<view class="uni-msg">
			 <view class="uni-title">
				 忘记密码
			 </view>
			<view class="uni-input" >
				<input v-model="password" class="reg-phone" type="text"  placeholder="请输入您的手机号"  placeholder-style="color:#B7BAC4;font-size:30rpx;"  />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
 .uni-forgetPwd{
	 
	 .back{
		 width: 300rpx;
		 height: 80rpx;
		 line-height: 80rpx;
		 background-color: #000;
		 margin-top:var(--status-bar-height);
	 }
	 .uni-msg{
		 width: 630rpx;
		 margin:0 auto;
		 .uni-title{
			 color:#303133;
			 font-size: #303133;
			 font-weight: bold;
		 }
		 .uni-input{
			 position: relative;
			 width: 630rpx;
			 border-bottom:2rpx solid #ECECEC;
			 .reg-phone{
				 padding-left: 24rpx;
			 }
		 }
	 }
 }
</style>
