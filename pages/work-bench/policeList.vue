<template>
	<view class="work-police-list">
	    <view class="title">
			<view class="dealing" @tap.stop="dealFlag=(!dealFlag),finishFlag=true,closeFlag=true">
				 <view :class="dealFlag===false?'bigword':'smallword'" >处理中</view>
				 <image v-show="dealFlag===false" class="tag" src="../../static/image/tag.png"></image>
			</view>
			<view class="finished" @tap.stop="finishFlag=(!finishFlag),dealFlag=true,closeFlag=true">
				 <view :class="finishFlag===false?'bigword':'smallword'" >已完成</view>
				 <image v-show="finishFlag===false" class="tag" src="../../static/image/tag.png"></image>
			</view>
			<view class="close" @tap.stop="closeFlag=(!closeFlag),finishFlag=true,dealFlag=true">
				 <view  :class="closeFlag===false?'bigword':'smallword'" >已关闭</view>
				 <image v-show="closeFlag===false" class="tag" src="../../static/image/tag.png"></image>
			</view>
		</view>
		<view class="uni-content" v-if="dealFlag===false">
			 <view class="content-list" v-for="(item,index) in 4" :key="index">
				  <view class="list" >
					   <view class="li-content">
						   <view class="li-title">
							   <view class="li-left">
								   <view class="li-word">订单编号  :</view>
								   <view class="li-code">  3268574157</view>
							   </view>
							   <view class="li-right">
								   待受理
							   </view>
						   </view>
					       <view class="li-contents">
							   <view class="li-first li-style">
								   <image class="img" src="../../static/image/menber.png"></image>
							       <view class="titles">员工姓名 :</view>
								   <view class="name">王妮娜</view>
							   </view>
							   <view class="li-second li-style">
								    <image class="img" src="../../static/image/time.png"></image>
							        <view class="titles">身份证号 :</view>
							        <view class="name">340321199703062834</view>
							   </view>
							   <view class="li-three li-style">
								   <image  class="img"src="../../static/image/idcard.png"></image>
								   <view class="titles">报案时间 :</view>
								   <view class="name">2020-09-01   16.06</view>
							   </view>
							   <view class="li-fourth" @tap.stop="jumpDetail">
								   <image class="img" src="../../static/image/check_btn.png"></image>
							       <text class="word">查看详情</text> 
							   </view>
						   </view>
					   </view>
				  </view>
			 </view>
		</view>
		<view class="uni-content" v-if="finishFlag===false">
			 <view class="content-list" v-for="(item,index) in 4" :key="index">
				  <view class="list" >
					   <view class="li-content">
						   <view class="li-title">
							   <view class="li-left">
								   <view class="li-word">订单编号  :</view>
								   <view class="li-code">  3268574157</view>
							   </view>
							   <view class="li-right">
								  已完成
							   </view>
						   </view>
					       <view class="li-contents">
							   <view class="li-first li-style">
								   <image class="img" src="../../static/image/menber.png"></image>
							       <view class="titles">员工姓名 :</view>
								   <view class="name">王妮娜</view>
							   </view>
							   <view class="li-second li-style">
								    <image class="img" src="../../static/image/time.png"></image>
							        <view class="titles">身份证号 :</view>
							        <view class="name">340321199703062834</view>
							   </view>
							   <view class="li-three li-style">
								   <image  class="img"src="../../static/image/idcard.png"></image>
								   <view class="titles">报案时间 :</view>
								   <view class="name">2020-09-01   16.06</view>
							   </view>
							   <view class="li-fourth">
								   <image class="img" src="../../static/image/check_btn.png"></image>
							       <text class="word">查看详情</text> 
							   </view>
						   </view>
					   </view>
				  </view>
			 </view>
		</view>
		<view class="uni-content" v-if="closeFlag===false">
			 <view class="content-list" v-for="(item,index) in 4" :key="index">
				  <view class="list" >
					   <view class="li-content">
						   <view class="li-title">
							   <view class="li-left">
								   <view class="li-word">订单编号  :</view>
								   <view class="li-code">  3268574157</view>
							   </view>
							   <view class="li-right li-right-close">
								   已关闭
							   </view>
						   </view>
					       <view class="li-contents">
							   <view class="li-first li-style">
								   <image class="img" src="../../static/image/menber.png"></image>
							       <view class="titles">员工姓名 :</view>
								   <view class="name">王妮娜</view>
							   </view>
							   <view class="li-second li-style">
								    <image class="img" src="../../static/image/time.png"></image>
							        <view class="titles">身份证号 :</view>
							        <view class="name">340321199703062834</view>
							   </view>
							   <view class="li-three li-style">
								   <image  class="img"src="../../static/image/idcard.png"></image>
								   <view class="titles">报案时间 :</view>
								   <view class="name">2020-09-01   16.06</view>
							   </view>
							   <view class="li-fourth">
								   <image class="img" src="../../static/image/check_btn.png"></image>
							       <text class="word">查看详情</text> 
							   </view>
						   </view>
					   </view>
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
				dealFlag:false,
				finishFlag:true,
				closeFlag:true
			}
		},
		methods: {
			 // 跳转到详情页
			 jumpDetail(){
				 uni.navigateTo({
				 	url:'/pages/work-bench/police-detail'
				 })
			 }
			
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../static/scss/common.scss";
.work-police-list{
	height: 100vh;
	background-color: #f5f5f5;
	.title{
		@include w_h(750rpx,100rpx);
		@extend %flex-style-justify;
		line-height: 100rpx;
		padding:0rpx 70rpx;
		box-sizing: border-box;
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
			@include w_h(79rpx,33rpx);
			position: absolute;
			bottom:-19rpx;
			left:10rpx;
		}
	}
}
.uni-content{
	@include w_h(750rpx,700rpx);
	border-top:28rpx solid #f5f5f5 ;
	.content-list{
		width: 690rpx;
		margin-bottom: 28rpx;
		margin-left:30rpx;
		.list{
			 //@include w_h(690rpx,370rpx);
		    width:690rpx;
			margin:0rpx auto;
			background-color:#fff;
			padding:0 33rpx 0 27rpx;
			box-sizing: border-box;
			border-radius: 10rpx;
			.li-content{
				width: 630rpx;
				.li-title{
					height:77rpx;
					@extend  %flex-style;
					border-bottom: 1rpx solid #E5E5E5;
					.li-left{
						display: flex;
						@include  font-style("PingFang-SC-Bold",Bold,28rpx,#000000);
						.li-word{
							margin-right:20rpx;
						}
					}
					.li-right{
						@include w_h(90rpx,40rpx);
						background: #F1F6FF;
						border: 2rpx solid #4189FF;
						border-radius: 4rpx;
						text-align: center;
						line-height: 40rpx;
						@include  font-style("PingFang-SC-Medium",Medium,20rpx,#4189FF);
					}
					.li-right-close{
                       background: #F5F5F5;
					   border: 2rpx solid #f5f5f5;
					   @include  font-style("PingFang-SC-Medium",Medium,20rpx,#B7B9C3);
					}
				}
				.li-contents{
					padding-top:34rpx;
					box-sizing: border-box;
					.li-style{
						display: flex;
						align-items: center;
						.img{
							@include w_h(26rpx,26rpx);
						}
						.titles{
							margin:0 15rpx;
							@include  font-style("PingFang-SC-Medium",Medium,26rpx,#303133);
						}
						.name{
							@include  font-style("PingFang-SC-Medium",Medium,26rpx,#303133);
							
						}
					}
					.li-first,.li-second{
						margin-bottom:40rpx;
					}
					.li-fourth{
						text-align: right;
						position: relative;
						box-sizing: border-box;
						height: 78rpx;
						.img{
							@include w_h(149rpx,79rpx);
							display:inline-block;
						}
						.word{
							position: absolute;
							right:25rpx;
							top:19rpx;
							@include  font-style("PingFang-SC-Medium",Medium,24rpx,#FFFFFF);
						}
					}
					
				}
			}
			
		}
	}
}
</style>
