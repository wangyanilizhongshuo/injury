<template>
	<view class="uni-loca-search">
          <QSNavbar :navbarItems="navbarItems" @tap.stop="navbarClick"></QSNavbar>
		  <view class="uni-location-title">
			  <image class="image" src="../../static/image/location2.png"></image>
			  <view class="uni-first">当前定位城市</view>
			  <view class="uni-second">杭州全城</view>
		  </view>
		  <view class="uni-add-list" >
			  <view class="uni-list-style" v-for="(item,index) in addressFlag" :key="index" :class="item.flag==false?'unilistActive':'uni-list'" @tap.stop="addActive(index)">{{item.name}}</view>
		  </view>
		  <view class="uni-allAddress" v-for="(item,index) in addAdress" :key="index" >
			  <view class="uni-title">{{item.title}}</view>
			  <view class="uni-list" v-for="(items,indexs) in item.list" :key="indexs">{{items}}</view>
		  </view>
	</view>
</template>
<script>
	// https://ext.dcloud.net.cn/plugin?id=1979
	  import QSNavbar from "@/components/QS-Navbar/QS-Navbar.vue";
	export default{
		data(){
			return{
				navbarItems: [
				                {
				                    type: 'icon',
				                    icon: 'back',
				                    width: 15,
				                    doEvent: 'back',
				                    layout: 'left'
				                },
				                {
				                    type: 'search',
				                    backgroundColor: '#f8f8f8',
				                    borderRadius: '20rpx',
				                    text: '输入城市名称进行搜索',
				                    width: 90
				                   
				                }
				            ],
				addressFlag:[{name:'全城',flag:false},{name:'滨江区',flag:false},
				             {name:'西湖区',flag:false},{name:'江干区',flag:false},
							 {name:'上城区',flag:false},{name:'下城区',flag:false},
							 {name:'余杭区',flag:false},{name:'萧山区',flag:false},
							 {name:'桐庐县',flag:false},{name:'富阳区',flag:false} ,
						    ],
				addAdress:[{title:'A',list:['安山','安阳','安庆',' 安康',' 阿图什',' 阿克苏 ']},
				           {title:'B',list:['北京','保定','蚌埠','亳州','北海','白城']},
				          ]
							 
							
				  
			}
		},
		components:{
			 QSNavbar
		},
		onLoad(){
			
		},
		methods:{
			// 胶囊里面的数据变化
			navbarClick(){
				this.navbarItems[1].text='Nihao';
				this.navbarItems[1].type='text';
			},
			// 点击某一个框 ,样色变化
			addActive(index){
				// 让其他的颜色变成灰色 将index排除在外
				this.addressFlag.map((currentValue,indexss,arr)=>{
					 if(index !=indexss){
						 currentValue.flag=false;
					 }
				});
				this.addressFlag[index].flag=!this.addressFlag[index].flag;
			}
		}
	}
</script>

<style  scoped lang="scss">
	@import "../../static/scss/common.scss";
	.uni-location-title{
		display: flex;
		padding-left: 27rpx;
		box-sizing: border-box;
		margin: 40rpx 0;
		.image{
			@include  w_h(36rpx,36rpx);
		}
		.uni-first{
			@include  font-style('PingFang-SC-Bold',bold,30rpx,#303133);
			margin: 0 17rpx;
		}
		.uni-second {
			@include  font-style('PingFang-SC-Bold',bold,30rpx,#303133);
		}
	}
	.uni-add-list{
		width: 750rpx;
		padding:0 20rpx 39rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		.uni-list-style{
			@include  w_h(160rpx,60rpx);
			border-radius: 8rpx;
			text-align: center;
			line-height: 60rpx;
			margin-right:11rpx;
			margin-bottom: 16rpx;
		}
		.uni-list{		
			background: #F7FAFF;
			border: 2rpx solid #1159D2;			
			@include  font-style('PingFang-SC-Medium',Medium,28rpx,#1159D2);			
		}
		.unilistActive{
			background: #F5F5F5;
			border: 2rpx solid #F5F5F5;
			@include  font-style('PingFang-SC-Medium',Medium,28rpx,#B7BAC4);	
		}
	}
	.uni-allAddress{
		.uni-title{
			@include w_h(700rpx,60rpx);
			line-height: 60rpx;
			font-size: 30rpx;
			padding-left: 30rpx;
            background: #F5F5F5; 
			color:#B7BAC4;
		}
		.uni-list{
			@include w_h(670rpx,80rpx);
			@include  font-style('PingFang-SC-Bold',bold,30rpx,#303133);
			line-height: 60rpx;
			margin-left: 30rpx;
			border-bottom: 2rpx solid #F5F5F5;
		}
	}
</style>
