<template>
	<view  class="uni-securitySetting">
		 <view class="security" @tap="jumps">
			  <view class="field"> 交易密码修改</view>
			  <image class="img" src="../../../static/image/inter.png"></image>
		 </view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			jumps(){
				uni.navigateTo({
					url:'/pages/index/security-setting/teleRegister'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.uni-securitySetting{
		height: 100vh;
		background-color:#f1f1f1 ;
        .security{
			width: 750rpx;
			height: 120rpx;
			display: flex;
			justify-content: space-between;
			padding:0 30rpx;
			box-sizing: border-box;
			align-items: center;
			background-color: #fff;;
			border-top: 20rpx solid #f1f1f1;
			.field{
				color: #303234;
				font-size: 28rpx;
			}
			.img{
				width:20rpx;
				height: 20rpx;
			}
		}
	}
	
</style>
