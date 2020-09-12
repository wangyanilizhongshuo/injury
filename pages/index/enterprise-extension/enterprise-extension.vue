<template>
	<view class="uni-extension">
		<!-- alliance_bg  -->
		<image class="img" src="../../../static/image/exterpirseBg.png"></image>
		<view class="exten-content">
			<view class="uni-title">
				<image class="imgs" src="../../../static/image/extension-wordStyle.png"></image>
			</view>
			<view class="code">
				<image class="img" src="../../../static/image/QRcoad-bg.png"></image>
			</view>
			<view class="invite">
				<view class="top">我的邀请码</view>
				<view class="down">13735370601</view>
			</view>
			<view class="uni-share">
				<image class="friend stlyess" src="../../../static/image/share-friend.png"></image>
				<image class="pyq stlyess" src="../../../static/image/share-pyq.png"></image>
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
@import "../../../static/scss/common.scss";
	.uni-extension{
		  @include w_h(750rpx,100vh);
		  background-color: #2e373f;
		  overflow: hidden;
		  position: relative;
		  left:0;
		  right:0;
		 .img{
			 @include w_h(752rpx,100%);
			 display:block ;
		 	}
	}
	.exten-content{
		width: 340rpx;
		position: absolute;
		z-index: 10;
		left:205rpx;
		top:103rpx;
		text-align: center;
		.uni-title{
			.imgs{
				display: block;
				@include w_h(344rpx,148rpx);
			}
		}
		.code{
			position: relative;
			margin:60rpx auto 66rpx;
			.img{
				@include w_h(340rpx,340rpx);
			}
		}
		.invite{
			.top{
				@include  font-style("PingFang-SC-Regular",Regular,32rpx,#fff);
			}
			.down{
				@include  font-style("PingFang-SC-Medium",Medium,40rpx,#fff);
				margin:24rpx auto 70rpx;
			}
		}
		.uni-share{
			width: 200rpx;
			margin-left:70rpx;
			display: flex;
			justify-content: space-between;
			.stlyess{
				@include w_h(80rpx,80rpx);
				display: block;
			}
			
		}
	}

</style>
