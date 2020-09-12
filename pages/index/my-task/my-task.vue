<template>
	<view class="uni-task">
		<view class="uni-title"> 
		   <view class="uni-left styless">
			   <view class="field">进行中</view>
			   <image  class="img" src="../../../static/image/tag.png"></image>
		   </view>
		   <view class="uni-right styless">
			   <view class="field">已完成</view>
			   <image class="img" src="../../../static/image/tag.png"></image>
		   </view>		
		</view>	
		<view class="uni-content">
			 <view class="list">
				 <view class="left">
					 <view class="top">提额任务</view>
					 <view class="down">完成推广企业10个</view>
				 </view>
				 <view class="right">
					<view class="top"><text style="font-size: 80rpx;">5</text>/10</view>
					<view class="down">进行中</view>
				 </view>
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
  .uni-title{
	  @include  w_h(750rpx ,100rpx);
	  @extend %flex-style;
	  padding:0 145rpx;
	  box-sizing: border-box;
	  .styless{
		  @include posi_left_top(relative,0,0);
		  .field{
		  	  @include  font-style("PingFang-SC-Bold",Bold,36rpx,#303234);
		  }
		  .img{
			  @include  w_h(79rpx ,33rpx);
			  @include posi_left_top(absolute,15rpx,55rpx);	  
		  }
	  }
  }
  .uni-content{
	  width: 750rpx;
	  padding :0 30rpx;
	  box-sizing: border-box;
	  background-color: #f1f1f1;
	  .list{
		  @include  w_h(690rpx ,220rpx);
		  padding: 49rpx 45rpx;
		  box-sizing: border-box;
		  display:flex;
		  justify-content: space-around;
		  // align-items:;
		  .left{
			  .top{
				  @include  font-style("PingFang-SC-Bold",Bold,36rpx,#303234);
			  }
			  .down{
				  @include  font-style("PingFang-SC-Medium",Medium,28rpx,#93959B);
			  }
		  }
		  .right{
			  .top{
				 @include  font-style("PingFang-SC-Bold",Bold,28rpx,#135CD4);
			  }
			  .down{
				  @include  font-style("PingFang-SC-Medium",Medium,24rpx,#303234);
			  }
		  }
	  }
	  
  }
</style>
