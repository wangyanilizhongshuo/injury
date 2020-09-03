<template>
	<view class="uni-hotData">
		<view class="bgp">
			 <image  class="hot-banner" :src="urls"></image>
			 <view class="word">签订定金协议有哪些注意事项</view>
		</view>
		<view class="list-content" v-for="i in loop" :key="i">
			 <view class="list" @tap.stop="jumpDetail()">
				 <view class="word">签订定金协议时为减少纠纷和避免不必要的经济损失的发生，主要应注意以下几方面问题,定金协议是主...</view>
			     <image class="img" src="../../static/image/news_pic.png"></image>
			 </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				urls:'../../static/image/newsbanner.png',
				loop:5
			}
		},
		methods: {
			jumpDetail(){
				uni.navigateTo({
					url:'./hotDataDetail'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/scss/common.scss";
.uni-hotData{
	.bgp{
		width:690rpx;
		position: relative;
		margin:30rpx auto 30rpx auto;
		font-size: 0rpx;
	   .hot-banner{
		  @include  w_h(690rpx,300rpx);
	  }
	   .word{
		 @include  w_h(690rpx,68rpx);
		 line-height: 68rpx;
		 background-color: #000;
		 opacity:0.5;
		 border-radius: 10rpx;
		 position: absolute;
		 bottom:0rpx;
		 text-indent: 20rpx; 
		 @include  font-style("PingFang-SC-Medium",Medium,30rpx,#fff);
	 }
   }
   .list-content{
   	 border-bottom:1rpx solid #eee;
   	 .list{
   		 width: 645rpx;
   		 margin:26rpx auto;

		 @extend  %flex-style;			
   		 .word{
   			 width: 398rpx;
			 @include  dh_ellipsis(4);
			 @include  font-style("PingFang-SC-Medium",Medium,28rpx,#2B2B2B);
   		 }
   		 .img{
			 @include  w_h(230rpx,160rpx);
   		 }
   	 }
   }
}
</style>
