<template>
	<view  class="injurybodyChoice">
		<!-- <image></image> -->
		<view class="content">
			  <view class="delImg" @click="del()">  
				  <image class="img" src="../../static/image/reset.png" ></image>
				  <view class="word" > 重置</view>
			  </view>
			 
			  <view class="bgImg"  >
				  <image class="bodyImg" src="../../static/image/human.png"></image>
				  <image class="headerPoint" src="../../static/image/point.png" @click="header()"></image>
				  <image class="upPoint" src="../../static/image/point.png" @click="upperLimb()"></image>
				  <image class="downPoint" src="../../static/image/point.png" @click="lowerLimb()"></image>
			  </view>
			  <view class="describe">请点击受伤部位进行选择</view>
			  <view class="detailChoice">
				  <view class="list">
					  <view class="point" v-for="(item,index) in pickerText" :key="index">{{item}}</view>
				  </view>
			  </view>
			  <level-linkage 
			            ref="levelLinkage"
			            :pickerValueDefault="pickerValueDefault" 
			            :allData="treeData"
			            @onConfirm="onConfirm" themeColor='#007AFF'>
			  </level-linkage>
			  <view class="btn" style="background:url(../../static/image/btn.png) no-repeat 0 0 ;background-size: 589rpx 136rpx;">
				  <!-- <image class="img" src="../../static/image/btn.png"></image> -->
			      <text class="word">确定</text>
			  </view>
		</view>
	</view>
</template>

<script>
	import levelLinkage  from "@/components/three-level-linkage/linkage.nvue"
	export default {
		data() {
			return {
				 pickerValueDefault: [0, 0],
				 pickerText: [],
				 list:['头部骨折','头部骨折','头部骨折','头部骨折','头部骨折','头部骨折','头部骨折','头部骨折','头部骨折','头部骨折','头部骨折'],
				 treeData: [
				            {
				                        "id":"1",
				                        "name":"头部",
				                        "code":"11",
				                        "children":[
				                            {
				                                "id":"122",
				                                "name":"中枢神经",
				                                "code":"122",
				                               
				                            },
											{
											    "id":"1333",
											    "name":"神经末梢",
											    "code":"1333",
											},
											{
											    "id":"1444",
											    "name":"大脑皮层",
											    "code":"1444",
											},
											{
											    "id":"1555",
											    "name":"小脑",
											    "code":"1555",
											}
											
				                        ]
				                    },
									{
									         "id":"2",
									         "name":"上体",
									         "code":"22",
									         "children":[
									             {
									                 "id":"211",
									                 "name":"胳膊",
									                 "code":"211",
									                
							                    },
												{
													"id":"222",
													"name":"心脏",
													"code":"222",
												},
												{
													"id":"2333",
													"name":"肝脏",
													"code":"2333",
												},
												{
													"id":"2444",
													"name":"腹部",
													"code":"2444",
												}
																				
									         ]
									     },
										 {
											  "id":"3",
											  "name":"下体",
											  "code":"33",
											  "children":[
												  {
													  "id":"311",
													  "name":"大腿",
													  "code":"311",
													 
												 },
												{
													"id":"322",
													"name":"小腿",
													"code":"322",
												},
												{
													"id":"333",
													"name":"脚踝",
													"code":"333",
												},
												{
													"id":"344",
													"name":"脚趾",
													"code":"344",
												}
										 											
										     ]
								  }
				                ]
			}
		},
		components:{
			levelLinkage 
		},
		methods: {
			 openLevel() {
			       this.$refs.levelLinkage.open();
			  },
			 onConfirm(e) {
			     // this.pickerText = JSON.stringify(e)
				 // this.pickerText=e.name;
				 let picks=this.pickerText;
				 picks.push(e.name);
				 this.pickerText=picks
			  },
			  // 重置按钮
			  del(){
				   this.pickerText=[]
			  },
			  // 点击头部的地方
			  header(){
				  this.$refs.levelLinkage.open();
				  this.pickerValueDefault=[0,0]
			  },
			  upperLimb(){
				  this.$refs.levelLinkage.open();
				  this.pickerValueDefault=[1,0]
			  },
			  lowerLimb(){
				  this.$refs.levelLinkage.open();
				  this.pickerValueDefault=[2,0]
			  },
			  
		}
	}
</script>

<style lang="scss" scoped>
.injurybodyChoice{
	 .content{
		 width:690rpx;
		 margin:0 auto;
		 position:relative;
		 font-family: "PingFang-SC-Medium";
		 font-weight: Medium;
	     padding-top:66rpx;
			 .delImg{
				 position: absolute;
				 right:0rpx;
				 top:-5rpx;
				 width:140rpx;
				 height:140rpx;
				 text-align: center;
				 .img{
					 width:129rpx;
					 height:129rpx;
				 }
				 .word{
					 font-size: 28rpx;
					 color: #303133;
					 margin-top:-20rpx;
				 }
			
		 }
		 .bgImg{
			 width:184.8rpx;
			 margin:0rpx auto 50rpx;
			 position: relative;
			 font-size: 0;
			 .bodyImg{
				 width:184.8rpx;
				 height:539rpx ;
			 }
			 .headerPoint{
				 width:30rpx;
				 height: 30rpx;
				 position: absolute;
				 top:25rpx;
				 left:50rpx;
			 }
			 .upPoint{
				 width:30rpx;
				 height: 30rpx;
				 position: absolute;
				 top:200rpx;
				 left:70rpx;
			 }
			 .downPoint{
				 width:30rpx;
				 height: 30rpx;
				 position: absolute;
				 top:400rpx;
				 left:120rpx;
			 }
		 }
		 .describe{
			 font-size: 30rpx;
			 color: #303133;
			 text-align: center;
		 }
		 .detailChoice{
			 width: 690rpx;
			 height:300rpx;
			 background:rgba(247,247,247,1);
			 border-radius:8px;
			 margin:50rpx auto 38rpx;
			 .list{
				 padding-top: 28rpx;
				 display: flex;
				 flex-wrap: wrap;
				 .point{
					 width:170rpx;
					 height:30rpx;
					 line-height: 30rpx;
					 text-align: center;
					 color: #303133;
					 font-size: 24rpx;
					 margin-bottom:25rpx;
					
					 
				 }
			 }
		 }
		 .btn{
			   width: 589rpx;
			   height:136rpx;
			   line-height:110rpx;
			   margin:0 auto 0rpx;
			   text-align: center;
			 .word{
				 font-size: 36rpx;
				 color: #fff;
			 }
		 }
	 }
}
</style>
