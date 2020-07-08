<template>
	<view class="uni-hotData">
		<view class="bgp">
			 <image  class="hot-banner" :src="urls"></image>
			 <view class="word">签订定金协议有哪些注意事项</view>
		</view>
		<view class="list-content" v-for="i in loop" :key="i">
			 <view class="list" @click="jumpDetail()">
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
.uni-hotData{
	.bgp{
		width:690rpx;
		position: relative;
		margin:30rpx auto 30rpx auto;
		font-size: 0rpx;
	   .hot-banner{
		  width:690rpx;
		  height:300rpx;
	  }
	   .word{
		 width: 690rpx;
		 height: 68rpx;
		 line-height: 68rpx;
		 font-size: 30rpx;
		 background-color: #000;
		 opacity:0.5;
		 border-radius: 10rpx;
		 position: absolute;
		 bottom:0rpx;
		 color:#fff;
		 text-indent: 20rpx; 
	 }
   }
   .list-content{
   	 border-bottom:1rpx solid #eee;
   	 .list{
   		 width: 645rpx;
   		 margin:26rpx auto;
   		 display: flex;
   		 justify-content: space-between;
   		 align-items: center;
   		 .word{
   			 color:#2B2B2B;
   			 font-size: 28rpx;
   			 font-family: "PingFang-SC-Medium";
   			 width: 398rpx;
   			 display: -webkit-box;
   			 -webkit-box-orient: vertical;
   			 -webkit-line-clamp: 4;
   			 overflow: hidden;
   		 }
   		 .img{
   			 width:230rpx;
   			 height:160rpx;
   		 }
   	 }
   }
}
</style>
