<template>
	<view class="uni-locationChioce">
		<view class="uni-title">
			<view class="uni-left">
				<image class="img_left" src="/static/image/location2.png"></image>
				<text class="center">杭州</text>
				<image class="img_right" src="/static/image/down2.png"></image>
			</view>
	        <view class="uni-right">
				<input class="input" :class="searchFlag==true?'input1':'input'" @focus="searchFlag=true" @blur="searchFlag=false"  v-model="input_address" placeholder="请搜索您的所在地址" placeholder-style="color:#B7BAC4;font-size:24rpx" />
				<image class="img" src="/static/image/search.png"></image>
				<text class="word" v-if="searchFlag">搜索</text>
			</view>	
		</view>
		<view class="uni-searchValue">
			<view class="left">杭州东大门交易中心</view>
			<view class="right" @tap.stop="jumpAddress">
				<image  class="img" src="/static/image/relocation.png"></image>
				<text class="word">重新定位</text>
			</view>
		</view>
        <view class="uni-nearby">
			<image class="img" src="/static/image/location3.png"></image>
			<text class="word">附近地址</text>
		</view>	
		<view class="uni-nearby-list">
			<view class="word">杭州东大门交易中心北1门</view>
			<view class="word">杭州东大门交易中心北1门</view>
			<view class="word">杭州东大门交易中心北1门</view>
			<view class="word">杭州东大门交易中心北1门</view>
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			return {
				// 搜索输入的地址
				input_address:"",
			    // 搜索点击 样式变化
			    searchFlag:false
			}
		},
		onLoad(){
			
		},
		methods:{
			jumpAddress(){
				uni.navigateTo({
					url:'/pages/home-page/location-search'
				})
			}
		}
	}
</script>

<style  scoped lang="scss">
	@import "../../static/scss/common.scss";
	.uni-locationChioce{
		width: 750rpx;
		padding-top:13rpx;
		box-sizing: border-box;
	}
	// 头部
	.uni-title{
		width:750rpx;
		padding:0 49rpx 0 27rpx;
		box-sizing: border-box;
		@extend %flex-style;
		.uni-left{
			width:140rpx;
			@extend %flex-style;
			.img_right{
				@include w_h(16rpx,16rpx);
				@include  posi_left_top(relative,5rpx,3rpx)
			}
			.center{
				@include  font-style("PingFang-SC-Bold",bold,30rpx,rgba(48,49,51,1));				
			}
			.img_left{
				 @include w_h(36rpx,36rpx);
			}
		}
		.uni-right{
			position: relative;
			@extend %flex-style;
			.input{
				@include w_h(510rpx,50rpx);
				background:rgba(245,245,245,1);
				border-radius:25rpx;
				padding-left:70rpx;
				box-sizing: border-box;;
			}
			.input1{
				@include w_h(448rpx,50rpx);
				background:rgba(245,245,245,1);
				border-radius:25rpx;
				padding-left:70rpx;
				box-sizing: border-box;;
				margin-right:20rpx;
			}
			.img{				
				@include w_h(30rpx,30rpx);
				@include posi_left_top(absolute,29rpx,12rpx);
			}
			.word{
				@include  font-style("PingFang-SC-Bold",bold,30rpx,#303133);
				// position: absolute;
				// top:10rpx;
				// right:-10rpx;
			}
		}
	}
    // 搜索出来的信息 
	.uni-searchValue{
		width:750rpx;
		padding:0 31rpx;
		box-sizing: border-box;
		margin:52rpx 0 70rpx;
		@extend %flex-style-justify;
		.left{
			@include  font-style("PingFang-SC-Bold",bold,36rpx,#303133);
		}
		.right{		
			@extend %flex-style-justify;
			.img{
				@include  w_h(40rpx,40rpx);
				margin-right:10rpx;
			}
			.word{
				@include  font-style("PingFang-SC-Medium",Medium,30rpx,#1159D2);
			}
		}
	}	
    .uni-nearby{
		@include w_h(750rpx,36rpx)
		padding-left:27rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		.img{
			@include w_h(36rpx,36rpx);
			margin-right:16rpx;
		}
		.word{
		    @include font-style("PingFang-SC-Medium",Medium,30rpx,#B7BAC4);
		}
	}
	.uni-nearby-list{
		width: 750rpx;
		padding:56rpx 0 0 77rpx ;
		box-sizing: border-box;
		.word{
			@include font-style("PingFang-SC-Bold",Bold,30rpx,#303133);
			margin-bottom:71rpx;
		}
	}
</style>
