<template>
	<view  class="uni-setverCode">
		<view class="uni-msg">
			 <view class="uni-title">
				请输入验证码 
			 </view>
			 <view class="uni-code-phone">
				 <text class="phone-explain small-style">验证码已发送至手机：</text>
				 <text class="phone-number small-style">13735370601</text>
			 </view>
			 <view class="setCode">
				 <one-input  v-model="test" type="box" @finish="finishedOne"></one-input>
			 </view>
			 <view class="uni-tips">
				 <text class="left">如没有收到验证码？可以</text>
                 <text class="right"> 重新获取（<text>59</text>秒）</text>                
			 </view>
		</view>
	</view>
</template>

<script>
	import oneInput from  '../../components/myp-one/myp-one.vue'
	export default {
		data() {
			return {
				test:'2334'
			}
		},
		components:{
			oneInput
		},
		methods: {
			finishedOne(one){
				console.log(one)
			}
		}
		
	}
</script>

<style scoped lang="scss">
 .uni-setverCode{
	 .uni-msg{
		 width: 630rpx;
		 margin:90rpx  auto 0rpx;
		 // margin-top:90rpx;
		 .uni-title{
			 color:#303133;
			 font-size:50rpx;
			 font-weight: bold;
		 }
		 .uni-code-phone{
			 margin-top:33rpx;
			 .small-style{
				 color: #000000;
				 font-size: 26rpx;
				 font-weight: Medium;
			 }
         }
		 .setCode{
			 margin-top:86rpx;
			 margin-bottom:67rpx;
		 }
		 .uni-tips{
			 font-size: 26rpx;
			 font-weight: Medium;
			 text-align: center;
			 .left{
				 color:#B7BAC4;
			 }
			 .right{
				 color: #1159D2;
			 }
			 
		 }
	 }
 }
</style>
