<template>
	<view class="uni-home">
		<view class="uni-title">
			<navigation-custom class="navigationCustom" style="background-color: red;"  :config="config"  @customConduct="customConduct" :scrollMaxHeight="scrollMaxHeight"/>
			 <!-- <view class="gettAddress"   :style="{height:naviHeight+'rpx'}">
			 </view> -->
			<view class="uni-up">
				<view class="first up-style">
					<view class="first-input">
						 <input class="uni-input left" type="text"  v-model="input" />
						 <image v-show="!loginFlag"  class="img" src="../../static/image/down.png"></image>
					</view>
					  <view class="right">
						  <!-- {{type==='forget'?'忘记密码':'登录'}} -->
						  <image class="img" src="../../static/image/account.png"></image>
						  <text class="word-login">{{loginFlag?'请登录':'个人中心'}}</text>
					  </view>
				</view>
				<view class="second up-style">
					  <input class="uni-input left" type="text" v-model="input" />
					  <view class="right" style="position: relative;left:0 ;top:0;">
						  <image class="img" src="../../static/image/msg.png"></image>
						  <text class="word-login">消息</text>
						  <text style="z-index:100;display:block;width:10rpx;height:10rpx;border-radius:50%;background-color:red;position: absolute;right:10rpx;top:2rpx;"></text>
					  </view>
				</view>
			</view>
			<view class="uni-down">
				<image class="img" src="../../static/image/banner.png"></image>
			</view>
		</view>
		<view class="uni-main">
			<view class="main-recomment">
				<view class="reco-title uni-title-style">
					<view class="left">
						<!-- style="width:150rpx;height:30rpx;background: url(../../static/image/decorate1.png) no-repeat left top;background-size: 50rpx 40rpx;" -->
				       <image class="img-left" src="../../static/image/decorate1.png"></image>
					   <text >为你推荐</text>
					   <image class="img-right" src="../../static/image/decorate2.png"></image>
					</view>
					<view class="right">查看更多>></view>
				</view>
				<view class="reco-content">
					<view class="con-div">
						<view class="con-list">
						   <image class="left con-pic" src="../../static/image/pic1.png"></image>
						   <view class="right">
							 <view class="up">安享康健优享版重大疾 病保险产品计划</view>
							 <view class="down">因意外伤害，或等待期180天后因意外伤害以外的原因导致重大,或等待期180天后因意外伤害以外的原因</view>
						 </view> 
					    </view>
				    </view>
					<view class="con-div">
						<view class="con-list">
						   <image class="left con-pic" src="../../static/image/pic1.png"></image>
						   <view class="right">
							 <view class="up">百万守护意外伤害保险产品计划</view>                               
							 <view class="down">因意外伤害，或等待期180天后因意外伤害以外的原因导致重大</view>
						 </view> 
					    </view>
					</view>
					<view class="con-div">
						<view class="con-list">
						   <image class="left con-pic" src="../../static/image/pic1.png"></image>
						   <view class="right">
							 <view class="up">诺享无忧意外伤害保险产品计划</view>
							 <view class="down">因意外伤害，或等待期180天后因意外伤害以外的原因导致重大因意外伤害以外的原因导致重大</view>
						 </view> 
					    </view>
					</view>
				</view>
			</view>
			<view class="main-hotData">
				<view class="hot-title  uni-title-style">
					<view class="left">
						<!-- style="width:150rpx;height:30rpx;background: url(../../static/image/decorate1.png) no-repeat left top;background-size: 50rpx 40rpx;" -->
					   <image class="img-left" src="../../static/image/decorate1.png"></image>
					   <text >热点资讯</text>
					   <image class="img-right" src="../../static/image/decorate2.png"></image>
					</view>
					<view class="right" @tap.stop="dataListJump()">查看更多>></view>
				</view>
				<view class="hot-content">
					<view class="bgp">
						 <image  class="hot-banner" src="../../static/image/newsbanner.png"></image>
						 <view class="word">签订定金协议有哪些注意事项</view>
					</view>
                    <view class="list-content" v-for="i in loop" :key="i">
						 <view class="list" @tap.stop="dataDetaiJump()">
							 <view class="word">签订定金协议时为减少纠纷和避免不必要的经济损失的发生，主要应注意以下几方面问题,定金协议是主...</view>
						     <image class="img" src="../../static/image/news_pic.png"></image>
						 </view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	// https://ext.dcloud.net.cn/plugin?id=464
	import navigationCustom from "@/components/struggler-navigationCustom/navigation-custom.vue"
	export default {
		data() {
			return {
				input:'你好',
				loop:4,
				loginFlag:false,
				naviHeight:'',
				config:{
						title:"我是标题我dfasdfa", //title
						bgcolor:"#1159D2", //背景颜色
						// fontcolor:"red", //文字颜色，默认白色
						type:3, //type 1，3胶囊 2，4无胶囊模式
						transparent:true, //是否背景透明 默认白色
						linear:true, //是为开启下滑渐变
						share:true, //是否将主页按钮显示为分享按钮
						menuIcon:"/static/image/location.png", 
						 // 当type为3或者4的时候左边的icon文件位置，注意位置与当前页面不一样
						//menuText:"返回", 当type为3或4的时候icon右边的文字
				},
					scrollTop:0 ,// 当linear为true的时候需要通过onpagescroll传递参数
					scrollMaxHeight:200 //滑动的高度限制，超过这个高度即背景全部显示
			}
		},
		components: { 
			navigationCustom
	    },
		computed: {
		    
		},
		onLoad(){
			this.$nextTick(()=>{
			})
		}, 
		methods: {
			// 定位 页面跳转 
			 customConduct(){
				 uni.navigateTo({
				 	url:'/pages/home-page/location'
				 })
			 },
			//咨询列表页面
			dataListJump(){
				uni.navigateTo({
					url:'./hotDataList'
				})
			},
			//资讯详情页
			dataDetaiJump(){
				uni.navigateTo({
					url:'./hotDataDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../static/scss/common.scss";
.uni-home{
	width: 750rpx;
}
.uni-title{
	background-color:#1159D2 ;
	height: auto;
	.uni-up{
		.first{
		  margin-top:20rpx;
		  .first-input{
			  position: relative;
			  .img{
				  @include w_h(20rpx,20rpx);
				  position: absolute;
				  top:31rpx;
				  right:29rpx;
				 
			  }
		  }
		}
		.up-style{
			width:625rpx;
			margin-left:30rpx;
			margin-bottom: 25rpx;
			@extend %flex-style-justify;
			.uni-input{
				background:rgba(255,255,255,1);
				box-shadow:0px 17px 13px 0px rgba(1,68,181,0.6);
				border-radius:6px;
				text-align: center;
				@include w_h(500rpx,80rpx);
				@include  font-style("PingFang-SC-Medium",Medium,34rpx,#0061E5);
			}
			.right{
				@extend %flex-style;
				@include w_h(80rpx,80rpx);
				flex-direction: column;
				.img{
					@include w_h(42rpx,42rpx);
				}
				.word-login{
					@include  font-style("PingFang-SC-Medium",Medium,20rpx,#fff);
				}
			}
		}
	}
	.uni-down{
		margin-top:15rpx;
		height:157rpx;
		.img{
			@include w_h(750rpx,157rpx);
			.con-pic{
				@include w_h(260rpx,200rpx);
			}
		}
	}
}
.uni-main{
	 // 每个列表的title
	.uni-title-style{
	 	width: 650rpx;
	 	margin:0 auto;
		@extend %flex-style-justify;
	 	position: relative;
	 	.left{
			@include  font-style("PingFang-SC-Bold",Bold,36rpx,#2B2B2B);
	 		.img-left{
				@include w_h(50rpx,40rpx);
	 			z-index: -1;
				@include posi_left_top(absolute,-26rpx,0);
				
	 		}
	 		.img-right{
	 			position:relative;
	 			z-index: -1;
	 			bottom:-6rpx;
				@include w_h(14rpx,14rpx);
	 			
	 		}
	 	}
	    .right{
			@include  font-style("PingFang-SC-Medium",Medium,28rpx,#AAAAAA);
	 	}
    }
	//推荐
	.main-recomment{
		padding-top:38rpx;
		.reco-content{
			margin-top: 20rpx;
			.con-div{
			    border-bottom:1rpx solid #eee;
			   .con-list{
				width: 650rpx;
				margin:20rpx auto;
				@extend %flex-style-justify;
				.con-pic{
					@include w_h(260rpx,260rpx);
				}
				.right{
					width:360rpx;
					@extend %flex-style-justify;
					flex-direction: column;
					.up{
						@include font-style("PingFang-SC-Medium",Bold,36rpx,#2B2B2B);
					}
					.down{
						width: 360rpx;
						@include  dh_ellipsis(2);
						@include font-style("PingFang-SC-Medium",Medium,24rpx,#AAA);
					}
				}
			  }
		}
		}
	}
	// 热点
	.main-hotData{
		.hot-title{
			margin: 40rpx auto;
		}
		.hot-content{
			width: 750rpx;
			.bgp{
				width:690rpx;
				position: relative;
				margin:0rpx auto 30rpx auto;
				font-size: 0rpx;
			  .hot-banner{
				@include w_h(690rpx,300rpx);
	          }
			  .word{
				 @include w_h(690rpx,68rpx);
				 line-height: 68rpx;
				 background-color: #000;
				 opacity:0.5;
				 border-radius: 10rpx;
				 position: absolute;
				 bottom:0rpx;
				 text-indent: 20rpx; 
				 @include font-style("PingFang-SC-Medium",Medium,30rpx,#fff);
			 }
		      }
		    .list-content{
				 border-bottom:1rpx solid #eee;
				 .list{
					 width: 645rpx;
					 margin:26rpx auto;
					 @extend %flex-style;
					 .word{
						 width: 360rpx;
						 @include font-style("PingFang-SC-Medium",Medium,28rpx,#2B2B2B);
						 @include  dh_ellipsis(4)
					 }
					 .img{
						 @include w_h(230rpx,160rpx);
					 }
				 }
			}
		}
	}
}
</style>
