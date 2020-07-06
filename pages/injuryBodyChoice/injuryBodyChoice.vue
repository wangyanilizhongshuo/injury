<template>
	<view  class="injurybodyChoice">
		<!-- <image></image> -->
		<view class="content">
			  <image class="delImg" src="../../static/image/reset.png"></image>
			  <view class="bgImg">
				  <image class="bodyImg" src="../../static/image/human.png"></image>
			  </view>
			  <view class="describe">请点击受伤部位进行选择</view>
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

<style lang="scss" scoped>
.injurybodyChoice{
	 .content{
		 width:690rpx;
		 margin:0 auto;
		 position:relative;
		 font-family: "PingFang-SC-Medium";
		 font-weight: Medium;
	     padding-top:66rpx;
			 .delImg{
				 position: absolute;
				 right:0rpx;
				 top:-10rpx;
				 width:129rpx;
				 height:129rpx;
			
		 }
		 .bgImg{
			 width:184.8rpx;
			 margin:0rpx auto 50rpx;
			 font-size: 0;
			 .bodyImg{
				 width:184.8rpx;
				 height:539rpx ;
			 }
		 }
		 .describe{
			 font-size: 30rpx;
			 color: #303133;
			 text-align: center;
		 }
	 }
}
</style>
