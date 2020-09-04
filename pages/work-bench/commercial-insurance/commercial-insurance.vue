<template>
	<view class="uni-commerical-insurance">
		<view class="uni-list" v-for="(item,index) in 5" :key="index">
			<view class="uni-top">
				<view class="uni-left">
					<image class="img" src="../../../static/image/ddh_logo.png"></image>
					<text class="word">中美联泰大都会人寿保险 </text>
				</view>
				<view class="uni-right"></view>
			</view>
			<view class="uni-bottom button">
				<text class="title styles">在保人员</text>
				<text class="num styles">216</text>
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
			
		},
		onReachBottom(){
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../static/scss/common.scss";
.uni-commerical-insurance{
	width: 750rpx;
	padding :23rpx 43rpx 0 45rpx ;
	box-sizing: border-box;
	.uni-list{
		@include  w_h(660rpx,256rpx);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: #FFFFFF;
		box-shadow: 0px 8px 35px 0px rgba(208, 207, 207, 0.4);
		border-radius: 10px;
		border-bottom:24rpx solid #f6f6f6;
		.uni-top{
			@include  w_h(660rpx,171rpx);
			display: flex;
		    justify-content: space-between;
			.uni-left{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left:28rpx ;
				.img{
					@include  w_h(285rpx,62rpx);
					margin-top: 30rpx;
				}
				.word{
					@include  font-style("PingFang-SC-Bold",Bold,36rpx,rgba(0, 0, 0, 1));
				}
			}
			.uni-right{
				@include  w_h(196rpx,171rpx);
				// border:1px solid red;
				box-sizing: border-box;;
			}
		}
		.uni-bottom{
			@include  w_h(660rpx,60rpx);
			background-image: url(../../../static/image/bar_tag.png);
			background-repeat: no-repeat;
			background-size: 660rpx 60rpx;
			text-align: right;
			line-height: 60rpx;
			
			.styles{
				@include  font-style("PingFang-SC-Medium",Medium,26rpx,rgba(245, 245, 245, 1));
				margin-right:22rpx;
			}
			.title{
				
			}
			.num{
				@include  font-style("PingFang-SC-Medium",Medium,26rpx,rgba(245, 245, 245, 1));
			}
		}
	}
}

</style>
