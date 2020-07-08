<template>
	<view class="uni-work">
		<view class="injury-manager">
			 <view class="injury-title uni-title">工伤管理</view>
			 <view class="injurt-list lists">
				 <view class="list-one" @click="jumpList()">
					 <image class="img" src="../../static/image/workbench_report.png"></image>
					 <text class="word">工伤报案</text>
				 </view>
				 <view class="list-one">
					 <image class="img" src="../../static/image/workbench_cases.png"></image>
					 <text class="word">案件管理</text>
				 </view>
			 </view>
		</view>
		<view class="staff-manager">
			<view class="staff-title uni-title">员工管理</view>
			<view class="staff-list lists">
				 <view class="list-one">
					 <image class="img" src="../../static/image/workbench_punch.png"></image>
					 <text class="word">员工打卡</text>
				 </view>
				 <view class="list-one">
					 <image class="img" src="../../static/image/workbench_policy.png"></image>
					 <text class="word">商业保单</text>
				 </view>
			</view>
		</view>
		<view class="other-manager">
			<view class="other-title uni-title">其他</view>
			<view class="other-list lists">
				 <view class="list-one">
					 <image class="img" src="../../static/image/workbench_qrcode.png"></image>
					 <text class="word">员工端下载</text>
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
			//跳转到报案列表
			jumpList(){
				console.log(1111)
				uni.navigateTo({
					url:'./policeList'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.uni-work{
	.uni-title{
	  color: #303133;
	  font-size: 40rpx;
	  margin:0rpx 0rpx 68rpx 32rpx;
	  font-family: "PingFang-SC-Bold";
	  font-weight:Bold ;
	  margin-top: 100rpx;
	}
	.lists{
		  display: flex;
		  margin-left:58rpx;
		 .list-one{
			 display: flex;
			 flex-direction: column;
			 align-items: center;
			 width:115rpx;
			 margin-right:70rpx;
			 .img{
				 width: 90rpx;
				 height: 90rpx;
			 }
			 .word{
				 font-family: "PingFang-SC-Medium";
				 font-weight: Medium;
				 color: #303133;
				 font-size: 28rpx;
				 margin-top:28rpx;
			 }
		 }
	}
}
  .injury-manager{
	  margin-top:60rpx;
  }
  .staff-manager{
	
  }
  .other-manager{
	 
  }
  
</style>
