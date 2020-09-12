<template>
	<view  class="uni-telephone">
		 <view class="uni-title">手机验证</view>
		 <view class="uni-content1">
			 <text class="word1">+86</text>
			 <input class="uni-input1" type="number" v-model="telephonNum" @input="teleValue()" placeholder="请输入您的手机号" placeholder-style="color:#B7BAC5;font-size:30rpx" />
		     <image class="img1" @tap="click1" v-if="btnColorFlag"  src="../../../static/image/del_icon.png"></image>
		 </view>
		 <view v-if="!btnColorFlag" class="btn1">下一步</view>
		 <view class="btn1-color" v-if="btnColorFlag" @tap="jump" > 下一步</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				// 手机号输入btn  改变颜色
				btnColorFlag:false,
				// 绑定的手机号码
				telephonNum:''
			}
		},
		onLoad(){},
		methods:{
			teleValue(){
				 if(this.telephonNum){
					 this.btnColorFlag=true;
				 }else{
					 this.btnColorFlag=false;
				 }
			},
			click1(){
				this.telephonNum=''
			},
			// 路径跳转
			jump(){
				uni.navigateTo({
					url:'/pages/index/security-setting/setPassword'
				})
			}
			
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.uni-telephone{
		width: 750rpx;
		padding: 88rpx 62rpx 0 58rpx;
		box-sizing: border-box;
		
	}
	.uni-title{
		@include  font-style("PingFang-SC-Bold",Bold,50rpx,#303234);
		margin-bottom: 110rpx;
	}
	.uni-content1{
		width: 630rpx;
		display: flex;
		border-bottom:2rpx solid #ececec;
		padding:0 0 25rpx 15rpx;
		position: relative;
		top:0rpx;
		left:0rpx;
		.word1{
			margin-right: 56rpx;
		}
		.img1{
			display: block;
			@include  w_h(30rpx,30rpx);
			position: absolute;
			right:20rpx;
			top:15rpx;
		}
	}
	%btn-style{
			width: 540rpx;
			text-align: center;
			margin:64rpx 0  0 45rpx;
			@include  font-style("PingFang-SC-Medium",Medium,36rpx,#FFFFFF);
	}
	.btn1{
		height: 90rpx;
		line-height: 90rpx;	
		background: #D1E1FF;
		border-radius: 45rpx;
		@extend %btn-style;
	}
	.btn1-color{
		height: 139rpx;
		line-height: 110rpx;
		background-image: url(../../../static/image/pers-btn.png);
		background-repeat: no-repeat;
		background-size: 540rpx 139rpx;
		@extend %btn-style
	}
</style>
