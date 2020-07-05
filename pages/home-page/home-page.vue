<template>
	<view class="uni-home">
	   <!-- <view  style="width:200rpx;height:var(--status-bar-height);background-color: red;;">sdfsd</view> -->
		<view class="uni-title">
			<!-- :style="{height:naveHeight+'px'}" -->
			
			<navigation-custom class="navigationCustom" style="background-color: red;"  :config="config"  @customConduct="customConduct" :scrollMaxHeight="scrollMaxHeight"/>
			 <!-- <view class="gettAddress"   :style="{height:naviHeight+'rpx'}">
			 </view> -->
			<!-- <view class="gettAddress"   :style="{height:naveHeight+'px'}">
				 <view class="uni-add-box" :style="{height:naveHeight+'px'}" > 
					 <image class="image" src="../../static/image/location.png" ></image>
			        
					 <text class="uni-text"> 浙江省杭州市江干区</text>
				</view> 
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
					  <view class="right">
						  <image class="img" src="../../static/image/msg.png"></image>
						  <text class="word-login">消息</text>
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
					<view class="right" @click="dataListJump()">查看更多>></view>
				</view>
				<view class="hot-content">
					<view class="bgp">
						 <image  class="hot-banner" src="../../static/image/newsbanner.png"></image>
						 <view class="word">签订定金协议有哪些注意事项</view>
					</view>
                    <view class="list-content" v-for="i in loop" :key="i">
						 <view class="list" @click="dataDetaiJump()">
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
	import navigationCustom from "../../components/struggler-navigationCustom/navigation-custom.vue"
	export default {
		data() {
			return {
				input:'你好',
				loop:4,
				loginFlag:false,
				naviHeight:'',
				 config:{
				                    title:"我是标题我是标题我是标题", //title
				                    bgcolor:"#1159D2", //背景颜色
				                    // fontcolor:"red", //文字颜色，默认白色
				                    type:3, //type 1，3胶囊 2，4无胶囊模式
				                    transparent:true, //是否背景透明 默认白色
				                    linear:true, //是为开启下滑渐变
				                    share:true, //是否将主页按钮显示为分享按钮
				                     menuIcon:"../../static/image/location.png", 
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
			 this.getdata();
		},
		  
		methods: {
			 customConduct(){
				 // console.log(2222)
			 },
			 // 获取navigation的高度
			getdata(){
				
			},
			//咨询列表页面
			dataListJump(){
				uni.navigateTo({
					url:'../home-hotDataList/home-hotDataList'
				})
			},
			//资讯详情页
			dataDetaiJump(){
				uni.navigateTo({
					url:'../home-hotDataDetail/home-hotDataDetail'
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
.uni-home{
	width: 750rpx;
}
.uni-title{
	background-color:#1159D2 ;
	height: auto;
	.gettAddress{
		   height:88rpx;
		   
		.uni-add-box{
			position: fixed;
			display: flex;
			align-items: center;
			z-index:10;
			 height:88rpx;
			width:750rpx;
			background-color:#1159D2 ;
			padding-top:(var(--status-bar-height));
		.image{
			width:26rpx;
			height:30rpx;
			margin-right:22rpx;
			margin-left:30rpx;
		}
		.uni-text{
			font-weight: bold;
			color:#fff;
			font-size:30rpx;
		}
	}
	}
	.uni-up{
		.first{
		  margin-top:20rpx;
		  .first-input{
			  position: relative;
			  .img{
				  width:20rpx;
				  height:20rpx;
				  position: absolute;
				  top:31rpx;
				  right:29rpx
			  }
		  }
		}
		.up-style{
			display: flex;
			width:625rpx;
			margin-left:30rpx;
			justify-content: space-between;
			margin-bottom: 25rpx;
			.uni-input{
				width:500rpx;
				height:80rpx;
				background:rgba(255,255,255,1);
				box-shadow:0px 17px 13px 0px rgba(1,68,181,0.6);
				border-radius:6px;
				text-align: center;
				font-family: "PingFang-SC-Medium";
				color:#0061E5;
				font-size: 34rpx;
			}
			.right{
				display: flex;
				flex-direction: column;
				width:80rpx;
				height: 80rpx;
				justify-content: space-between;
				align-items: center;
				.img{
					width:42rpx;
					height:42rpx;
				}
				.word-login{
					font-size:20rpx;
					color:#fff ;
					font-family: "PingFang-SC-Medium";
				}
			}
		}
	}
	.uni-down{
		margin-top:15rpx;
		height:157rpx;
		.img{
			height:157rpx;
			width: 750rpx;
			.con-pic{
				width:260rpx;
				height: 200rpx;
			}
			
		}
	}
}
.uni-main{
	 // 每个列表的title
	.uni-title-style{
	 	width: 650rpx;
	 	margin:0 auto;
	 	display: flex;
	 	justify-content: space-between;
	 	position: relative;
	 	.left{
	 		font-family: "PingFang-SC-Bold";
	 		font-weight: bold;
	 		color: #2B2B2B;
	 		font-size: 36rpx;
	 		.img-left{
	 			width:50rpx;
	 			height:40rpx;
	 			position:absolute;
	 			z-index: -1;
	 			left:-26rpx;
	 		}
	 		.img-right{
	 			position:relative;
	 			z-index: -1;
	 			width: 14rpx;
	 			height: 14rpx;
	 			bottom:-6rpx;
	 			
	 		}
	 	}
	    .right{
	 		font-family: "PingFang-SC-Medium";
	 		font-weight: Medium;
	 		color: #AAAAAA;
	 		font-size: 28rpx;
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
				display: flex;
				justify-content: space-between;
				.con-pic{
					width: 260rpx;
					height:200rpx;
				}
				.right{
					width:360rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.up{
						font-weight: Bold;
						color:#2B2B2B;
						font-size: 36rpx;;
					}
					.down{
						width: 360rpx;
						// height:64rpx;
						color: #AAA;
						font-size: 24rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
						
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
				// display: block;
				width:690rpx;
				height:300rpx;
	          }
			  .word{
				 width: 690rpx;
				 height: 68rpx;
				 line-height: 68rpx;
				 font-size: 30rpx;
				 background-color: #000;
				 opacity:0.5;
				 border-radius: 10rpx;
				 position: absolute;
				 bottom:0rpx;
				 color:#fff;
				 text-indent: 20rpx; 
			 }
		      }
		    .list-content{
				 border-bottom:1rpx solid #eee;
				 .list{
					 width: 645rpx;
					 margin:26rpx auto;
					 display: flex;
					 justify-content: space-between;
					 align-items: center;
					 .word{
						 color:#2B2B2B;
						 font-size: 28rpx;
						 font-family: "PingFang-SC-Medium";
						 width: 360rpx;
						 display: -webkit-box;
						 -webkit-box-orient: vertical;
						 -webkit-line-clamp: 4;
						 overflow: hidden;
					 }
					 .img{
						 width:230rpx;
						 height:160rpx;
					 }
				 }
			}
		}
	}
}

</style>
