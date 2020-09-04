<template>
	<view class="uni-extension">
		<image class="uni-imgBg" src="../../static/image/myextentitle_bg.png"></image>
		<view class="uni-titles">
		  <view class="person-msg noLogin"  >
			   <image class="heads" src="../../static/image/my-headPortrait.png"></image>
		       <view class="person-right">
				   <view class="per-noLoin" v-if="!loginFlag"  @tap.stop="loginFlag=true">
					    <text class="logins" >登录/</text>
					    <text class="register">注册</text>
				   </view>
				   <view class="per-login" v-if="loginFlag" @tap.stop="loginFlag=false">
						<view class="titles1">王妮娜</view>
						<view class="titles2">用户id </view>
						<view class="titles3">我的角色超级管理员</view>
				   </view>
			   </view>
		  </view>
		  <view class="person-msgTwo">
			   <view class="promotion-commission styless">
				   <view class="money values">---</view>
				   <view class="filed">推广佣金</view>
			   </view>
			   <view class="lines"></view>
			   <view class="promotion-enterprise styless">
				   <view class="name values">---</view>
				   <view class="filed">推广企业</view>
			   </view>
		  </view>
		</view>
		<view class="uni-contents">
			 
			 <view class="conetntsFirst">
				 <image class="conFirstBg" src="../../static/image/promoter_bg.png"></image>
				 <view class="contents">
					 <view class="uni-left">
						 <view class="uni-top">
							 <image class="imgs" src="../../static/image/promoterConFirst_icon.png"></image>
							 <text class="field">推广员</text>
						 </view>
						 <view class="uni-down">申请成为推广员 享受更多福利</view>
					 </view>
					 <view class="uni-right">立即申请</view>
				 </view>
			 </view>
			 <!-- promoterConFirst_icon -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				loginFlag:false
			}
		},
		onLoad() {
             
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/scss/common.scss";
	%padding-box-sizing{
		width:750rpx;
		box-sizing: border-box;
		padding:0 32rpx 0 30rpx ;
	}
	.uni-extension{
		@extend  %padding-box-sizing;
	}
	.uni-imgBg{
		@include  w_h(688rpx,356rpx);
	}
    .uni-titles{
		@include  w_h(688rpx,356rpx);
		@extend  %padding-box-sizing;
		position: absolute;
		top:0;
		left:0;
        .noLogin{
			width: 688rpx;
			box-sizing: border-box;
			padding:95rpx 35rpx 155rpx 35rpx;
			height: 110rpx;
			display: flex;
			align-items: center;
			.heads{
				@include  w_h(110rpx,110rpx);
				margin-right:20rpx;
			}
			.person-right{
				.logins{
					@include  font-style("PingFang-SC-Bold",Bold,36rpx,#fff);
				}
				.register{
					@include  font-style("PingFang-SC-Bold",Bold,36rpx,#fff);
				}
				.per-login{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.titles1{
						@include  font-style("PingFang-SC-Bold",Bold,36rpx,#fff);
					}
					.titles2 , .titles3{
						@include  font-style("PingFang-SC-Medium",Medium,22rpx,#B9DDFF);
						
					}
					 .titles3{
						 @include  font-style("PingFang-SC-Medium",Medium,22rpx,#B9DDFF);
					 }
				}
			}
		}
	    .person-msgTwo{
			@include  w_h(688rpx,53rpx);
			display: flex;
			align-items: center;
			.styless{
				@include  w_h(343rpx,53rpx);
				text-align: center;
				.values{
					@include  font-style("PingFang-SC-Bold",Bold,32rpx,#fff);
				}				.filed{
					@include  font-style("PingFang-SC-Medium",Medium,22rpx,#fff);        
				}
			}
			.lines{
				width:2rpx ;
				height:53rpx;
				background-color: #fff;
				position: relative;
				top:10rpx;
				left:0;
			}
		}
	}
	.conetntsFirst{
		@include w_h(690rpx,142rpx);
		margin-top: 24rpx;
		position: relative;
		top: 0;
		left:0;
		.conFirstBg{
			@include w_h(690rpx,142rpx);
		}
		.contents{
			position: absolute;
			left:0;
			top:0;
			z-index: 10;
			@extend  %flex-style;
			.uni-left{
				.uni-top{
					display: flex;
					.imgs{
						@include  w_h(38rpx,38rpx);
					}
					.field{
						@include  font-style("PingFang-SC-Bold",Bold,30rpx,#fff);
					}
				}
				.uni-down{
					@include  font-style("PingFang-SC-Bold",Bold,30rpx,#fff);
				}
				
			}
			.uni-right{}
		}
	}
	
</style>
