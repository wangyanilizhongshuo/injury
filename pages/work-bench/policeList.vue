<template>
	<view class="work-police-list">
	    <view class="title">
			<view class="dealing" @click="dealFlags()">
				 <view :class="dealFlag=='false'?'bigword':'smallword'" >处理中</view>
				 <image v-show="dealFlag=='false'" class="tag" src="../../static/image/tag.png"></image>
			</view>
			<view class="finished" @click="finishFlags()">
				 <view :class="finishFlag=='false'?'bigword':'smallword'" >已完成</view>
				 <image v-show="finishFlag=='false'" class="tag" src="../../static/image/tag.png"></image>
			</view>
			<view class="close" @click="closeFlags()">
				 <view  :class="closeFlag=='false'?'bigword':'smallword'" >已关闭</view>
				 <image v-show="closeFlag== 'false'" class="tag" src="../../static/image/tag.png"></image>
			</view>
		</view>
		<view class="content">
			 <view class="content-list">
				  <view class="list">
					   <view class="li-content"></view>
				  </view>
			 </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// title的字体样式设置
				dealFlag:true,
				finishFlag:true,
				closeFlag:true
			}
		},
		methods: {
			dealFlags(){ 
				console.log(this.dealFlag)
				this.dealFlag=(this.dealFlag=='true'?'false':'true')
				console.log(this.dealFlag)
			},
			finishFlags(){
				this.finishFlag=(this.finishFlag=='true'?'false':'true')
			},
			closeFlags(){
				this.closeFlag=(this.closeFlag=='true'?'false':'true')
			}
		}
	}
</script>

<style lang="scss" scoped>
.work-police-list{
	.title{
		width: 610rpx;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		line-height: 100rpx;
		padding:0rpx 70rpx;
		background:rgba(255,255,255,1);
		font-family: "PingFang-SC-Medium";
		font-weight: Medium;
		border-top:1rpx solid #eee;
		.smallword{
			font-size: 28rpx;
			color:#92959A ;
		}
		.bigword{
			font-size: 36rpx;
			color:#303133 ;
		}
		.dealing ,.finished,.close{
			width:110rpx;
			position: relative;
		}
		.tag{
			width:79rpx;
			height:33rpx;
			position: absolute;
			bottom:-19rpx;
			left:10rpx;
		}
	}
}
.content{
	width:750rpx;
	height:700rpx;
	background-color:#f5f5f5;
	.content-list{
		width: 690prx;
		margin: 28rpx auto;
		.list{
			width:690rpx;
			margin:0rpx auto;
			height:360rpx;
			background-color:#fff;
			.li-content{
				width: 630rpx;
				
			}
			
		}
	}
}
</style>
