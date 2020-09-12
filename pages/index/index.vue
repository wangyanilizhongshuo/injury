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
				   <!-- 登录和没有登录的切换 -->
				   <view class="per-login" v-if="loginFlag" @tap.stop="loginFlag=false">
						<view class="titles1">王妮娜</view>
						<view class="titles2">用户id </view>
						<view class="titles3">我的角色超级管理员</view>
				   </view>
			   </view>
		  </view>
		  <view class="person-msgTwo">
			   <view class="promotion-commission styless">
				   <!-- 登录和没有登录的切换 -->
				   <view  v-if="!loginFlag" class="money values">---</view>
				   <view  v-if="loginFlag" class="money values">100.00</view>
				   
				   <view class="filed">推广佣金</view>
			   </view>
			   <view class="lines"></view>
			   <view class="promotion-enterprise styless">
				   <!-- 登录和没有登录的切换 -->
				   <view  v-if="!loginFlag"  class="name values">---</view>
				   <view v-if="loginFlag" class="name values">58</view>
				   <view class="filed">推广企业</view>
			   </view>
		  </view>
		</view>
		<view class="uni-contents">
			 
			 <view class="contentsFirst">
				 <image class="conFirstBg" src="../../static/image/promoter_bg.png"></image>
				 <view class="contents" @tap="jump(5)">
					 <view class="uni-left">
						 <view class="uni-top">
							 <image class="imgs" src="../../static/image/promoterConFirst_icon.png"></image>
							 <text class="field">推广员</text>
						 </view>
						
						 <view class="uni-down" v-if="!prometerFlag" @tap="prometerFlag =true">申请成为推广员 享受更多福利</view>
						 <view class="uni-down" v-if="prometerFlag" @tap="prometerFlag =false">当前您的推广等级为：普通推广员</view>
					 </view>
					 <view class="uni-right" v-if="!prometerFlag">立即申请</view>
					 <image class="vipImg"  v-if="prometerFlag" src="../../static/image/badge_icon.png" ></image>
				 </view>
			 </view>
			 <!-- 推广专区 -->
			<view class="contentsSecond listStyles">
				<view class="second-title titles">
					<image class="img" src="../../static/image/vertical-tag.png"></image>
					<text class="word">推广专区</text>
				</view>
				<view class="list-content">
					<!-- 登录和没有登录 -->
					<view class="list" v-if="!loginFlag">
						<image class="img" src="../../static/image/extension_team.png"></image>
						<view class="word">我的团队</view>
					</view>
					<view class="list" v-if="loginFlag">
						<image class="img" src="../../static/image/extension_team.png"></image>
						<view class="word">我的推广</view>
					</view>
					<view class="list"  @tap="jump(4)">
						<image class="img" src="../../static/image/extension_authentication.png"></image>
						<view class="word">实名认证</view>
					</view>
					<view class="list" @tap="jump(6)">
						<image class="img" src="../../static/image/extension_quest.png"></image>
						<view class="word">我的任务</view>
					</view>
					<view class="list"  v-if="!loginFlag" @tap="jump(3)">
						<image class="img" src="../../static/image/extension_enterprise.png"></image>
						<view class="word">企业推广</view>
					</view>
					<view class="list"  v-if="loginFlag"> 
						<image class="img" src="../../static/image/extension_enterprise.png"></image>
						<view class="word">邀请注册</view>
					</view>
				</view>
			</view>
			<!-- 平台应用 -->
			<view class="contentsSecond listStyles">
				<view class="second-title titles">
					<image class="img" src="../../static/image/vertical-tag.png"></image>
					<text class="word">平台应用</text>
				</view>
				<view class="list-content">
					<view class="list">
						<image class="img" src="../../static/image/extension_guide.png"></image>
						<view class="word">新手指南</view>
					</view>
					<view class="list" @tap="jump(1)">
						<image class="img" src="../../static/image/person-setting.png"></image>
						<view class="word">安全设置</view>
					</view>
					<view class="list" @tap="jump(2)">
						<image class="img" src="../../static/image/person_partener.png"></image>
						<view class="word">加盟合作</view>
					</view>
					<view class="list">
						<image class="img" src="../../static/image/person_aboutus.png"></image>
						<view class="word">关于我们</view>
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
				title: 'Hello',
				// 是否登录的flag
				loginFlag:false,
				// 是否为推广员
				prometerFlag:false
			}
		},
		onLoad() {
             
		},
		methods: {
			jump(msg){
				console.log(msg);
				if(msg ===1){
					uni.navigateTo({
						url:'/pages/index/security-setting/security-setting'
					})
				}
				else if (msg ===2){
					uni.navigateTo({
						url:'/pages/index/join-cooperation/join-cooperation'
					})
				}
				else if (msg ===3){
					uni.navigateTo({
						url:'/pages/index/enterprise-extension/enterprise-extension'
					})
				}
				else if (msg ===4){
					uni.navigateTo({
						url:'/pages/index/realName-authenticate/realName-authenticate'
					})
				}
				else if (msg ===5){
					uni.navigateTo({
						url:'/pages/index/promoter-apply/promoter-apply'
					})
				}
				else if (msg ===6){
					uni.navigateTo({
						url:'/pages/index/my-task/my-task'
					})
				}
				
				
			}
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
		display: block;
		margin-bottom:24rpx;
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
					.titles2 {
						@include  font-style("PingFang-SC-Medium",Medium,22rpx,#B9DDFF);
						margin: 10rpx 0;
						
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
	.contentsFirst{
		@include w_h(690rpx,142rpx);
		position: relative;
		top: 0;
		left:0;
		
		.conFirstBg{
			@include w_h(690rpx,142rpx);
		}
		.contents{
			width: 690rpx;
			position: absolute;
			left:0;
			top:0;
			z-index: 10;
			padding:22rpx 34rpx 26rpx 42rpx;
			box-sizing: border-box;
			@extend  %flex-style;
			.uni-left{
				.uni-top{
					display: flex;
					.imgs{
						@include  w_h(38rpx,38rpx);
						margin-right:20rpx;
					}
					.field{
						@include  font-style("PingFang-SC-Bold",Bold,30rpx,#fff);
					}
				}
				.uni-down{
					margin-top: 27rpx;
					@include  font-style("PingFang-SC-Bold",Bold,30rpx,#fff);
				}
				
			}
			.uni-right{
				@include  w_h(150rpx,60rpx);
				background: #FFFFFF;
				box-shadow: 1rpx 15rpx 32rpx 0rpx rgba(255, 124, 52, 0.66);
				border-radius: 29rpx;
				@include  font-style("PingFang-SC-Medium",Medium,26rpx,#FF9D36);
				line-height: 60rpx;
				text-align: center;
			}
			.vipImg{
				display: block;
				@include  w_h(95rpx,91rpx);
			}
		}
	}
	.listStyles{
		margin-top:46rpx;
		.titles{
			display: flex;
			height: 31rpx;
			align-items: center;
			.img{
				display: block;
				@include w_h(10rpx,32rpx);
				margin-right:21rpx;
			}
			.word{
				@include  font-style("PingFang-SC-Bold",Bold,32rpx,#000000);
			}
		}
		.list-content{
			margin-top: 47rpx;
			display: flex;
			justify-content: space-between;
			 .list{
				width: 120rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				 .img{
					 @include w_h(80rpx,80rpx);
					 display: block;
					 margin-bottom: 25rpx;
				 }
				 .word{
					 @include  font-style("PingFang-SC-Medium",Medium,28rpx,#303234);
				 }
			 }
		}
	}
</style>
