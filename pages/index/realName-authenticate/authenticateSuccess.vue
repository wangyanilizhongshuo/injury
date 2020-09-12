<template>
	<view class="uni-authenSuccess">
		 <image class="imgBg" src="../../../static/image/authenSuccess.png"></image>
		 <view class="content">
			 <view class="first styles">
				 <view class="words">王妮娜</view>
				 <view class="wordss">已认证</view>
			 </view>
			 <view class="second styles">
				 <image  class="imgs" src="../../../static/image/authen-success-head.png"></image>
				 <view class="word">137****0601</view>
			 </view>
			 <view class="third styles">
				 <image  class="imgs" src="../../../static/image/authen-success-id.png"></image>
				 <view class="word">330************50</view>
			 </view>
			 <view class="fourth styles">
				 <image  class="imgs" src="../../../static/image/authen-success-city.png"></image>
				 <view class="word">浙江省 杭州市  富阳区</view>
			 </view>
			 
		 </view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		onLoad(){
			
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	@import  "../../../static/scss/common.scss";
	.uni-authenSuccess{
		position: relative;
		left:0;
		top:0;
		.imgBg{
			display: block;
			@include w_h(750rpx,435rpx);
			margin-top:-60rpx;
		}
		.content{
			@include posi_left_top(absolute,63rpx,90rpx);
			@include w_h(616rpx,300rpx);
			 padding:50rpx;
			box-sizing: border-box;
			z-index:10;
			padding-top:60rpx;
			.styles{
				display: flex;
				height: 27rpx;
				align-items: center;
				margin-bottom:25rpx;
				.imgs{
					display: block;
					@include w_h(22rpx,22rpx);
					margin-right:17rpx;
				}
				.word{
					@include  font-style("PingFang-SC-Medium",Medium,28rpx,#fff);
				}
				.words{
					@include  font-style("PingFang-SC-Bold",Bold,50rpx,#fff);
					margin-right: 14rpx;
				}
				.wordss{
					@include w_h(120rpx,46rpx);
					background: #FFFFFF;
					border-radius: 23rpx;
					@include  font-style("PingFang-SC-Medium",Medium,26rpx,#1C86EC);
					line-height: 46rpx;
					text-align: center;
				}
			}
			.first{
				margin-bottom:50rpx;
			}
			
		}
		
	}
</style>
