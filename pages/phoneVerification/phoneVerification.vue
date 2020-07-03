<template>
	<view  class="uni-phoneverfication">
		<view class="uni-msg">
			 <view class="uni-title">
				 手机验证
			 </view>
			<view class="uni-input" >
				<input v-model="phoneNumber" class="reg-phone" type="text"  placeholder="请输入您的手机号"  placeholder-style="color:#B7BAC4;font-size:30rpx;"  />
			    <text class="in-word">+&nbsp;86</text>
				<image  v-if="phoneNumber" class="img"@click="clearPhone()"  src="../../static/image/del_icon.png"></image>
			</view>
			<view class="uni-jump">
				<view :class="phoneNumber?'nextJump2':'nextJump1'" class="next-jump" @click="jumps()">下一步</view>
			</view>
			<view class="protocol">
			    <text class="left">点击"下一步"即同意</text>
			    <text class="right">《用户协议》</text> 
			    <text class="left">和</text>
			    <text class="right">《隐私政策》</text>           
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
			jumps(){
				uni.navigateTo({
					url:'../setVerificateCode/setVerificateCode'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
 .uni-phoneverfication{
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
			 .box-img{
				
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
	     .protocol{
			 width: 630rpx;
			 text-align: center;
			 font-size: 28rpx;
			 text-indent: 15rpx;
			 margin-top: 27rpx;
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
