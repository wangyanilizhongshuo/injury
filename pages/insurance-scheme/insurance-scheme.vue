<template>
	<view  class="uni-insuranceScheem">
		 <view class="bg uni-title ">
			  <view class="uni-form">
				  <view class="list">
					  <view class="filed">行业</view>
					  <view class="values">
						  <input class="inputs" placeholder="请选择您的行业" placeholder-style="font-size:26rpx;color:rgba(183, 186, 196, 1)" />
					       <image  class="img" src="../../static/image/insurance-next.png"></image>
					  </view>
				  </view>
				  <view class="list">
					  <view class="filed">人数</view>
					  <view class="values">
						  <input class="inputs" placeholder="请选择您的人数"  placeholder-style="font-size:26rpx;color:rgba(183, 186, 196, 1)"/>
					      <image  class="img" src="../../static/image/insurance-next.png"></image>
					 </view>
				  </view>
				  <view class="list">
					  <view class="filed">生产过程</view>
					  <view class="values">
						  <input class="inputs" placeholder="请选择您的生产过程" placeholder-style="font-size:26rpx;color:rgba(183, 186, 196, 1)" />
					      <image  class="img" src="../../static/image/insurance-next.png"></image>
					  </view>
				  </view>
	              <view class="form-btn" @tap="jumpRecommand">
					  智能推荐
				  </view>		  
			  </view>
		 </view>
		 <view class="uni-content">
			 <!-- 官方推荐 -->
			<view class="official-recommendation">
				 <view  class="uni-titles">
					 <view class="uni-field">官方推荐</view>
					 <view class="uni-more">查看更多 >> </view>
				 </view>
				 <view class="off-contents">
					 <view class="off-list" v-for="(item,index) in 5" :key="index">
						 <image class="imgs" src="../../static/image/girls.jpg"></image>
						 <view class="titles1">超级经典国寿福（庆典版） </view>
						 <view class="titles2">王妮娜王妮娜 </view>
						 <view class="titles3">
							 <text class="left">555</text>
							 <text class="right">555</text>
						 </view>

					 </view>
				 </view>
			</view>
             <!-- 分类 -->
			<view class="uni-classficate">
				  <view class="classfi-title">
					  <view class="ficate-title-first " :class="cateFlag[0]===true?'listss':'smallListss'">分类一</view>
					  <view class="ficate-title-second " :class="cateFlag[1]===true?'listss':'smallListss'">分类二</view>
					  <view class="ficate-title-third " :class="cateFlag[2]===true?'listss':'smallListss'">分类三</view>
					  <view class="ficate-title-fourth " :class="cateFlag[3]===true?'listss':'smallListss'">分类四</view>
					  <view class="ficate-title-fifth " :class="cateFlag[4]===true?'listss':'smallListss'">分类五</view>
				  </view>
				  <view class="cateContents">
					  <view class="off-list" v-for="(item,index) in 5" :key="index">
						 <image class="imgs" src="../../static/image/girls.jpg"></image>
						 <view class="titles1">超级经典国寿福（庆典版） </view>
						 <view class="titles2">王妮娜王妮娜 </view>
						 <view class="titles3">
							 <text class="left">555</text>
							 <text class="right">555</text>
						 </view>
					  </view>
				  </view>
			</view>
		 </view>
	</view>
</template>
<script>
	export default {
		data(){
			return{
				cateFlag:[false,true,false,false,false]
			}
		},
		onLoad(){
			
		},
		methods:{
			jumpRecommand(){
				uni.navigateTo({
					url:'/pages/insurance-scheme/intellge-recommand'
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "../../static/scss/common.scss";
	%padd-box{
		width:750rpx;
		box-sizing: border-box;
		padding: 0 26rpx 0 34rpx;
	}
	.uni-insuranceScheem{
	  width: 750rpx;
	  .uni-title{
		  @include w_h(750rpx,346rpx);
		  background-color: #1360d6;
		  padding-top:65rpx;
		  box-sizing: border-box;
		  margin-bottom:264rpx;
		  background-image: url(../../static/image/insurance-bg.png);
		  background-repeat: no-repeat;
		  background-size: 750rpx 346rpx;
		  .uni-form{
				@include w_h(690rpx,500rpx);			
				background: #FFFFFF;
				box-shadow: 0px 8px 27px 0px rgba(39, 114, 234, 0.2);
				border-radius: 10px;
				margin: 0 auto;
				padding:45rpx 48rpx 43rpx 38rpx;
				box-sizing: border-box;
				.list{
					width:600rpx;
					@extend  %flex-style;
					margin-bottom:31rpx;
					.filed{
						width: 120rpx;
						text-align: center;
						@include  font-style("PingFang-SC-Bold",Bold,30rpx,rgba(48, 49, 51, 1));	
					}
					.values{
						position: relative;
						left:0;
						top:0;
						.inputs{
							@include w_h(458rpx,70rpx);
							background: #F5F5F5;
							border-radius: 8rpx;
							text-align: center;
						}
						.img{
							@include w_h(20rpx,20rpx);
							position: absolute;
							right:25rpx;
							top:27rpx;
						}
					}
				}
		        .form-btn{
					@include w_h(440rpx,80rpx);
					background: #125CD4;
					box-shadow: 0px 10px 25px 0px rgba(65, 136, 246, 0.3);
					border-radius: 40px;
					@include  font-style("PingFang-SC-Medium",Medium,30rpx,rgba(255, 255, 255, 1));
					text-align: center;
					line-height: 80rpx;
					margin-left: 80rpx;
					margin-top:55rpx;
			    }	
	     }
	  }  
	}
	// 官方推荐
	.official-recommendation{
		.uni-titles{
			@include  w_h(750rpx ,48rpx);
			@extend  %padd-box;
			@extend  %flex-style;
			margin-bottom: 43rpx ;
			.uni-field{
				@include  w_h(180rpx,48rpx);
				background-image: url(../../static/image/decorate_icon.png);
				background-repeat: no-repeat;
				background-size:180rpx 48rpx ;
				text-align: center;
				line-height: 48rpx;
				@include  font-style("PingFang-SC-Bold",Bold,36rpx,#2C2C2C);
			}
			.uni-more{
				@include  font-style("PingFang-SC-Medium",Medium,28rpx,#AAA);
			}
		}
	    .off-contents{
			@extend  %padd-box;
			display: flex;
			justify-content:space-between;
			flex-wrap: wrap;
			
		}
	}
	 .off-list{
	     width: 330rpx;
	 	margin-bottom:47rpx;
	 	.imgs{
	 		@include  w_h(330rpx,330rpx);
	 	}
	 	.titles1{
	 		@include  font-style("PingFang-SC-Bold",Bold,30rpx,#2C2C2C);
	 	}
	 	.titles2{
	 		@include  font-style("PingFang-SC-Medium",Medium,22rpx,#AAA);
	 		margin:10rpx 0;
	 	}
	 	.titles3{
	 		.left{
	 			@include font-style("PingFang-SC-Medium",Medium,30rpx,#FF3A3A);
	 			margin-right: 20rpx;
	 		}
	 		.right{
	 			@include font-style("PingFang-SC-Medium",Medium,24rpx,#FF3A3A);
	 		}
	 	}
	 }
	.uni-classficate{
		@include  w_h(750rpx,60rpx);
		.classfi-title{
			@extend  %padd-box;
			@extend  %flex-style;
			margin-bottom:35rpx;
			.listss{
				@include  w_h(130rpx,60rpx);
				background: #F1F6FF;
				border: 2rpx solid #418AFF;
				border-radius: 30rpx;
				text-align: center;
				line-height: 60rpx;
				@include font-style("PingFang-SC-Medium",Medium,28rpx,#428AFF);
			}
			.smallListss{
				@include  w_h(120rpx,50rpx);
				background: #F1F6FF;
				text-align: center;
				line-height: 50rpx;
				border: 2rpx solid #B8BAC4;
				border-radius: 25px;
				@include font-style("PingFang-SC-Medium",Medium,24rpx,#93959B);
			}
		}
		
	    .cateContents{
			@extend  %padd-box;
			display: flex;
			justify-content:space-between;
			flex-wrap: wrap;
		}
	}
</style>