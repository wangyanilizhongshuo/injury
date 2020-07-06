<template>
	<view  class="injurybodyChoice">
		<!-- <image></image> -->
		<view class="content">
			  <image class="delImg" src="../../static/image/reset.png"></image>
			  <view class="bgImg"  @tap="openLevel">
				  <image class="bodyImg" src="../../static/image/human.png"></image>
			  </view>
			  <view class="describe">请点击受伤部位进行选择</view>
			  <view class="detailChoice">
				  
				  
			  </view>
			  <view class="btn" style="background:url(../../static/image/btn.png) no-repeat 0 0 ;background-size: 589rpx 136rpx;">
				  <!-- <image class="img" src="../../static/image/btn.png"></image> -->
			      <text class="word">确定</text>
			  </view>
			    <level-linkage ref="levelLinkage" 
			              :pickerValueDefault="pickerValueDefault" 
			              :allData="treeData"
			              @onConfirm="onConfirm" themeColor='#007AFF'>
			    </level-linkage>
		</view>
	</view>
</template>

<script>
	import levelLinkage  from "@/components/three-level-linkage/linkage.nvue"
	export default {
		data() {
			return {
				 pickerValueDefault: [0, 0],
				  pickerText: '',
				       treeData: [
				            {
				                        "id":"1",
				                        "name":"头部骨折",
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
			                // e 确认后选中的数据
			     // this.pickerText = JSON.stringify(e)
				 this.pickerText=e.name;
			  }
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
				 width:129rpx;
				 height:129rpx;
			
		 }
		 .bgImg{
			 width:184.8rpx;
			 margin:0rpx auto 50rpx;
			 font-size: 0;
			 .bodyImg{
				 width:184.8rpx;
				 height:539rpx ;
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
		 }
		 .btn{
			   width: 589rpx;
			   height:136rpx;
			   height:110rpx;
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
