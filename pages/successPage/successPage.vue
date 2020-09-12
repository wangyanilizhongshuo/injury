<template>
	<view class="uni-success">
		<view class="mask"></view>
		<view class="maskContent">
			<image class="img" src="../../static/image/successbg.png"></image>
			<view class="word" v-if="setting==1">设置成功</view>
			<view class="word" v-if="submit==1">提交成功</view>
		    <view class="btn" @tap="back">确定</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				setting:0,
				submit:0
			}
		},
		onLoad(options){
			this.setting=options.setting;
			this.submit=options.submit;
			
		},
		methods:{
			back(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			}
		}
		
	}
</script>

<style scoped lang="scss">
	.mask{
		 position: fixed;
		 top:0;
		 left:0;
		 z-index: 10;
		 background-color:#000;
		 width: 100vw;
		 height: 100vh;
		 opacity: 0.7;
	}
	.maskContent{
		position: absolute;
		left:195rpx;
		top:350rpx;
		width: 360rpx;
		height: 460rpx;
		z-index: 30;
		background: #FFFFFF;
		border-radius: 20rpx;
		.word{
			color: #303234;
			font-size: 28rpx;
			width: 360rpx;
			text-align: center;
		}
		.img{
			display: block;
			width:219rpx;
			height: 188rpx;
			margin:50rpx 70rpx  60rpx 70rpx;
		}
		.btn{
			position: absolute;
			left:0;
			bottom: 0;
			width: 360rpx;
			height: 70rpx;
			background: linear-gradient(90deg, #6196EB 0%, #125CD4 100%);
			border-bottom-right-radius: 20rpx;
			border-bottom-left-radius: 20rpx;
            font-size: 28rpx;		
            font-weight: 500;
			line-height: 70rpx;
			text-align: center;
			color:#fff;
			
		}
	}
</style>
