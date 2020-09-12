<template>
	<view class="uni-joinCooperation">
		<image class="imgbg" src="../../../static/image/alliance_bg.png"></image>
		<view class="uni-contents">
			<input v-model="name" @input="inputValue" class="names inputStyle" placeholder="请填写您的姓名" placeholder-style="color:#B8BAC4;font-size:28rpx;"  />
	        <input v-model="telephone" @input="inputValue" class="tele inputStyle" placeholder="请填写您的联系电话" placeholder-style="color:#B8BAC4;font-size:28rpx;"  />	
		    <view style="position: relative;left:0 ;right:0">
				<input v-model="address" class="address inputStyle" placeholder="请选择您的所在区域"  placeholder-style="color:#B8BAC4;font-size:28rpx;"  />
			    <image class="img"  src="../../../static/image/inter.png"></image>
			</view>
		</view>
		<view class="btn" :class="{btnColor:btnFlag}" @tap="submits">提交</view>
	
	</view>
</template>

<script>
	
	export default{
		data(){
			return{
				name:'',
				btnFlag:false,
				telephone:'',
				address:""
			}
		},
		
		onLoad(){
			
		},
		methods:{
			inputValue(val){
				let aa= val.detail.value;
				if(aa){
					this.btnFlag=true;
				}
			},
			// 提交数据
			submits(){
				console.log(45234)
				uni.navigateTo({
					url:'/pages/successPage/successPage?submit='+1
				})
			}
			
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.uni-joinCooperation{
		background-color: #f1f1f1;
		height: 100vh;;
	}
	.imgbg{
		@include  w_h(750rpx,490rpx);
	}
	.uni-contents{
		.inputStyle{
			@include  w_h(750rpx,100rpx);
			@include  font-style("PingFang-SC-Medium",Medium,28rpx,#303234);
			padding-left:32rpx ;
			box-sizing: border-box;
			border-bottom: 1rpx  solid #f6f6f6;
		}
		.img{
			@include  w_h(12rpx,20rpx);
			position: absolute;
			right:30rpx;
			top:40rpx;
		}
	}
	.btn{
		@include  w_h(540rpx,90rpx);
		background: #D2E0FF;
		border-radius: 45rpx;
		text-align: center;
		line-height: 90rpx;
		@include  font-style("PingFang-SC-Medium",Medium,30rpx,#fff);
		margin:280rpx auto;
	}
	
	.btnColor{
		background: #125CD4;
	}
</style>
