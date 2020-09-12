<template>
	<view class="uni-promoterApply">
		<view class="uni-content" :class="{maskFlag:fixedss}" @tap="maskFlag=true">
			<view class="title" >fdf dfdsfds fds</view>
			<view class="contents">度是打发第三方发斯蒂芬撒旦法法师发的发撒旦法
			                       大幅度是打发第三方发斯蒂芬撒旦法法师发
			                        发撒旦法四大法师的发士大夫士大夫
									大幅度是打发第三方发斯蒂芬撒旦法法师发
									 发撒旦法四大法师的发士大夫士大夫
									 大幅度是打发第三方发斯蒂芬撒旦法法师发
									  发撒旦法四大法师的发士大夫士大夫
			</view>
		</view>
		<view class="maskBox">
			<view v-if="maskFlag" class="mask"></view>
			<view v-if="maskFlag" class="maskContent">
				<view class="title">
					推广员申请
					<image class="cancelImg" src="../../../static/image/cancelWhite.png" @tap="maskFlag=false"></image>
				</view>
				<view class="contents">
					<input class="nameInput inputStyle" v-model="name" placeholder="请填写您的姓名"  placeholder-class="color:#B8BAC4;font-size:28rpx;"/>
				    <input class="phoneInput inputStyle" v-model="phone" placeholder="请填写您的联系号码"  placeholder-class="color:#B8BAC4;font-size:28rpx;"/>
				    <view class="addView ">
						<input class="addInput inputStyle" v-model="address" placeholder="请选择您的所在地区"  placeholder-class="color:#B8BAC4;font-size:28rpx;"/>
					    <image class="imgs" src="../../../static/image/inter.png"></image>
					</view>
					<view class="addView  teamNum">
						<input class="addInput inputStyle" v-model="teamNumber" placeholder="请选择您的团队人数"  placeholder-class="color:#B8BAC4;font-size:28rpx;"/>
					    <image class="imgs" src="../../../static/image/inter.png"></image>
					</view>
					<view class="leaveAMsg">
						<view class="field">留言</view>
						<textarea class="textarea" v-model="textareas" placeholder-style="color:#B8BAC4;font-size:28rpx;" placeholder="请写下您的留言"/>
					</view>
					<view class="btn">提交</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				maskFlag:false,
				name:'',
				phone:'',
				address:'',
				teamNumber:'',
				textareas:''
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	@import  "../../../static/scss/common.scss";
    .uni-content{
		.title{
			@include  w_h(750rpx,400rpx);
			background-color: #FF9A31;
		}
		.contents{
			width:750rpx;
			padding:30rpx;
			box-sizing: border-box;
			background-color: red;
		}
	}
	
	// 面罩层
	.mask{
		@include  posi_left_top(fixed,0rpx,0rpx);
		bottom:0;
		right:0;
		z-index:1;
		background-color: #000;
		opacity: .5;
	}
	.maskContent{
		@include  w_h(600rpx,870rpx);
		@include  posi_left_top(absolute,75rpx,74rpx);
		z-index: 20;
		.title{
			@include  w_h(600rpx,190rpx);
			background: linear-gradient(90deg, #FFD788 0%, #FF9A31 100%);
			border-top-left-radius:20rpx ;
			border-top-right-radius:20rpx ;
			line-height: 190rpx;
			text-align: center;
			@include  font-style("PingFang-SC-Medium",400,50rpx,#FFF);
			text-shadow: -1rpx 6rpx 13rpx rgba(255, 162, 62, 0.66);		
			@include  posi_left_top(relative,0,0);
			.cancelImg{
				@include  w_h(36rpx,36rpx);
				@include  posi_left_top(absolute,533rpx,25rpx);
			}
		}
		.contents{
				background-color: white;
				border-bottom-left-radius:20rpx ;
				border-bottom-right-radius:20rpx ;
				width: 600rpx;
				padding: 50rpx;
				box-sizing: border-box;
				height:100%;
				overflow-y: scroll;
				padding-bottom:37rpx;
				font-size: 28rpx;
				.inputStyle{
					@include  w_h(500rpx,90rpx);
					background: #F5F5F5;
					box-sizing: border-box;
					border-radius: 45rpx;
					padding-left:59rpx;
					color:#303234;
				}
				.phoneInput{
					margin:30rpx  0;
				}
				.addView{
					@include  posi_left_top(relative,0,0);
					.imgs{
						display: block;
						@include  w_h(12rpx,20rpx);
						@include  posi_left_top(absolute,446rpx,35rpx);
					}
				}
				.teamNum{
					margin: 30rpx 0;
				}
				.leaveAMsg{
					.field{
						@include  font-style("PingFang-SC-Bold",Bold,30rpx,#303234);
						margin: 15rpx 0 22rpx ;
						box-sizing: border-box;
						padding-left:40rpx;
					}
					.textarea{
						width:500rpx;
						padding: 28rpx 30rpx 20rpx;
						box-sizing: border-box;
                        border-radius: 20rpx;
						background: #F5F5F5;
						color:#303234;
					}
				}
		}
	}
	.btn{
		@include  w_h(500rpx,80rpx);
		background: #FFDFA4;
		border-radius: 40rpx;
		@include  font-style("PingFang-SC-Medium",Medium,30rpx,#FFFFFF);
		text-align: center;
		line-height: 80rpx;
		margin-top:47rpx;
		
	}
	.fixedss{
		position: fixed;
		left:0;
		top:0;
		overflow-y:hidden ;
	}
	
</style>
