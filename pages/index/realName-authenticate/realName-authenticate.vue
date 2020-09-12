<template>
	<view class="uni-realName">
		
		<view class="uni-contents-top">
			<input v-model="name" @input="inputValue" class="names inputStyle" placeholder="请填写您的姓名" placeholder-style="color:#B8BAC4;font-size:28rpx;"  />
	        <input v-model="telephone" @input="inputValue" class="tele inputStyle" placeholder="请填写您的联系电话" placeholder-style="color:#B8BAC4;font-size:28rpx;"  />	
		    <view class="add" @tap="openLevel">
				<input v-model="address" class="address inputStyle" style="border:none" placeholder="请选择您的所在区域"  placeholder-style="color:#B8BAC4;font-size:28rpx;"  />
			    <image class="img"  src="../../../static/image/inter.png"></image>
			</view>
		</view>
	    <view class="uni-contents-down">
			<view class="title">
				<image class="img" src="../../../static/image/vertical-tag.png"></image>
			    <view  class="word ">上传身份证</view>
			</view>
			<view class="contents">
				<image v-if="!fontImgUrl" class="fontImg imgs" @tap="chooseImageFont(1)" src="../../../static/image/idBackpic_upload.png"></image>
			    <image v-if="fontImgUrl" class="fontImg imgs" @tap="previewImageFont(1)" :src="fontImgUrl"></image>
				<image v-if="!backImgUrl"  class="backImg imgs" @tap="chooseImageFont(2)" src="../../../static/image/idFontpic_upload.png"></image>
		  	    <image v-if="backImgUrl" class="fontImg imgs"  @tap="previewImageFont(2)" :src="backImgUrl"></image>
			</view>
		</view>
		<view class="btn" :class="{btnColor:btnFlag}" @tap="submits">提交</view>
		<level-linkage
		          ref="levelLinkage"
		          :pickerValueDefault="pickerValueDefault" 
		          :allData="treeData"
		          @onConfirm="onChioceAddress" themeColor='#007AFF'>
		</level-linkage>
	</view>
</template>

<script>
	// https://ext.dcloud.net.cn/plugin?id=1349
	import levelLinkage  from "@/components/three-level-linkage/linkage.nvue"
	export default{
		data(){
			return{
				name:'',
				btnFlag:false,
				telephone:'',
				address:"",
				fontImgUrl:'',
				backImgUrl:'',
				pickerValueDefault:[0, 0, 0],
				treeData: [
					 {
					                        "id":"1",
					                        "name":"安徽省",
					                        "code":"11",
					                        "children":[
					                            {
					                                "id":"1-1",
					                                "name":"蚌埠市",
					                                "code":"11",
					                                "children":[
					                                    {
					                                        "id":"1-1-1",
					                                        "name":"怀远县",
					                                        "code":"111"
					                                    }
					                                ]
					                            },
												{
												    "id":"1-2",
												    "name":"合肥市",
												    "code":"12",
												    "children":[
												        {
												            "id":"1-1-1",
												            "name":"经济开发区",
												            "code":"111"
												        }
												    ]
												}
					                        ]
					                    }
				       //     {
				       //                 "id":"1",
				       //                 "name":"头部",
				       //                 "code":"11",
				       //                 "children":[
				       //                     {
				       //                         "id":"122",
				       //                         "name":"中枢神经",
				       //                         "code":"122",
				                                
				       //                     },
											// {
											// 	"id":"1333",
											// 	"name":"神经末梢",
											// 	"code":"1333",
											// },
											// {
											// 	"id":"1444",
											// 	"name":"大脑皮层",
											// 	"code":"1444",
											// },
											// {
											// 	"id":"1555",
											// 	"name":"小脑",
											// 	"code":"1555",
											// }
															
				       //                 ]
						     //        },
									// {
									// 		 "id":"2",
									// 		 "name":"上体",
									// 		 "code":"22",
									// 		 "children":[
									// 			 {
									// 				 "id":"211",
									// 				 "name":"胳膊",
									// 				 "code":"211",
													
									// 			},
									// 			{
									// 				"id":"222",
									// 				"name":"心脏",
									// 				"code":"222",
									// 			},
									// 			{
									// 				"id":"2333",
									// 				"name":"肝脏",
									// 				"code":"2333",
									// 			},
									// 			{
									// 				"id":"2444",
									// 				"name":"腹部",
									// 				"code":"2444",
									// 			}
																				
									// 		 ]
								 //          },
												 // {
													//   "id":"3",
													//   "name":"下体",
													//   "code":"33",
													//   "children":[
													// 	  {
													// 		  "id":"311",
													// 		  "name":"大腿",
													// 		  "code":"311",
															 
													// 	 },
													// 	 {
													// 		"id":"322",
													// 		"name":"小腿",
													// 		"code":"322",
													// 	 }
														
													// 		"id":"344",
													// 		"name":"脚趾",
													// 		"code":"344",
													// 	}
																							
													//     ]
											  //    }
				               ]
			}
		},
		components:{
			levelLinkage
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
			// 选择带人像的图片
			chooseImageFont(msg){
				let that=this;
				let msgFlag=msg;
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera '], //从相册选择
				    success: function (res) {
						let url=res.tempFilePaths;
						if(msgFlag===1){
							that.fontImgUrl=url;
						}
						else if(msgFlag===2){
							that.backImgUrl=url;
						}
					  
						that.btnFlag=true;
				    }
				});
			},
			// 人像预览
			previewImageFont(msg){
				let  aUrl='';
				if(msg==1){
					aUrl=this.fontImgUrl;
				}else if(msg==2){
					aUrl=this.backImgUrl;
				}
				 uni.previewImage({
				      urls: aUrl,
				 })
			},
			// 提交数据
			submits(){
				uni.navigateTo({
					url:'/pages/index/realName-authenticate/authenticateSuccess'
				})
			},
			// 打开地址列表的插件
			openLevel() {
			      this.$refs.levelLinkage.open();
			},
			// 选择某个地址
			onChioceAddress(e){
				console.log(e)
				 
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
	.uni-contents-top{
		// border-bottom: 20rpx solid f1f1f1;
		.add{
			 position: relative;
			 left:0 ;
			 right:0 ;
		}
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
	.uni-contents-down{
		border-top: 20rpx solid #f1f1f1;
		.title{
			display: flex;
			height: 30rpx;
			align-items: center;
			margin:43rpx 0 49rpx 30rpx;
			.img{
				display: block;
				@include  w_h(10rpx ,32rpx);
				margin-right:21rpx;
			}
			.word{
				@include  font-style("PingFang-SC-Bold",Bold,32rpx,#000000);
			}
		}
		.contents{
			display: flex;
			padding:0 30rpx;
			box-sizing: border-box;
			.imgs{
				display: block;
				@include  w_h(330rpx,230rpx);
			}
			.fontImg{
				margin-right: 31rpx;;
			}
		}
	}
	.btn{
		@include  w_h(540rpx,90rpx);
		background: #D2E0FF;
		border-radius: 45rpx;
		text-align: center;
		line-height: 90rpx;
		@include  font-style("PingFang-SC-Medium",Medium,30rpx,#fff);
		position: absolute;
		left:105rpx;
		bottom:35rpx;
	}
	
	.btnColor{
		background: #125CD4;
	}
</style>
