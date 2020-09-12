<template>
	<view class="uni-policeDetail">
		<view  class="uni-main">
			<view class="uni-title">
				 <view class="uni-left">
					 <view  class="code-num codeStyle">订单编号</view>
					 <view  class="uni-code codeStyle">326233234</view>
				 </view>
				 <view class="uni-right" v-if="tobeAcceptFlag">待受理</view>
				 <view class="uni-right" v-if="tobeIdentifyFlag">待认定</view>
				 <view class="uni-right" v-if="tobeApprasiseFlag || tobeAppraiseTwoStepFlag ||tobestepAppraiseFlag">待鉴定</view>
				 <view class="uni-right" v-if="appRasiseSuccessFlag">鉴定成功</view>
				 <view class="uni-right" v-if="tobeMediateFlag">待调解</view>
				 <view class="uni-right" v-if="applySuccessFlag || appSuccFirstStepFlag" >申请成功</view>
			</view>
			<view class="uni-content" :style="tobeAcceptFlag ===true? 'padding-bottom:69rpx':'padding-bottom:23rpx'">
				<view class="uni-msg">
					<view class="uni-titles">
						 <view class="styles"></view>
						 <view class="uni-msg">基本信息</view>
					</view>
					<view class="uni-contents">
						 <view class="uni-first uni-styles">
							 <view class="name-field field">员工姓名 :</view>
							 <view class="name fieldValue " >王妮娜</view>
						 </view>
						 <view class="uni-second uni-styles">
							 <view class="id-field field">身份证号 :</view>
							 <view class="id fieldValue">340321199993939393</view>
						 </view>
						 <view class="uni-third uni-styles">
							 <view class="id-field field">报案时间 :</view>
							 <view class="id fieldValue">2020-01-01 20:34</view>
						 </view>
					</view>
				</view>			 
				<view class="uni-accident">
					 <view class="uni-titles ">
						 <view class="styles"></view>
						 <view class="uni-msg">案件信息</view>
					 </view>
					 <!-- 待受理 -->
					 <view class="acci-reason" v-if="tobeAcceptFlag">贵公司员工黄大炮于2020年5月17日13时因
					             摔跤而受伤，现救治于下沙邵逸夫医院，请耐心等待平台受理。
					 </view>
					 <!-- 待认定 -->
					 <view class="acci-reason" v-if="tobeIdentifyFlag && !identiStepFirstFlag">
						 您的案件平台已受理，是否需要进行工伤认定
					 </view > 
					 <!-- 待认定 下一步 -->
					 <view  class="acci-reason acci-reason-step" v-if="identiStepFirstFlag">
						 <view class="bottom">
							   您已选择需要进行工伤认定，请在20天内提供以下材料送
					           至或快递到东大门交易中心北四门1201
						 </view>
						 <view class="bottom">
                              <text class="redWord">《工伤认定申请表》</text> 
							  <text class="priWord">首次诊断证明原件、劳动合同复印件、病历复印件详细操作可咨询专属客服。</text>      
						 </view>
						 <view class="acc-form acc-form-style">
							 <view class="uni-left">
								 <image class="image" src="../../../static/image/icon_exl.png"></image>
								 <view class="uni-word">
									 <view  class="up"> 工伤认定申请表</view>
									 <view  class="down"> 表格说明表格说明表格</view>
								 </view>
							 </view>
							 <view class="uni-right uni-right-style">
								 下载
							 </view>
							
						 </view>
					 </view>
					 <view class="uni-button-need" v-if="tobeIdentifyFlag && !identiStepFirstFlag">
						 <view class="btn-need needs">不需要 </view>
						 <view class="btn-inneed needs">需要</view>
					 </view>
					 <!-- 待鉴定的内容 -->
					 <view  class="acci-reason uni-appraise" v-if="tobeApprasiseFlag && !tobestepAppraiseFlag">
						 <view class="top">
							   您已选择需要进行工伤认定，请在20天内提供以下材料送
										至或快递到东大门交易中心北四门1201
						 </view>
						 <view class="bottom">
					         <text class="redWord">《工伤认定申请表》</text> 
					 	     <text class="priWord">首次诊断证明原件、劳动合同复印件、病历复印件详细操作可咨询专属客服。</text>      
					 	     <view class="uni-button-need" >
								 <view class="btn-need needs">不需要 </view>
								 <view class="btn-inneed needs">需要</view>
					 	     </view>
						 </view>
						 <view class="acc-form acc-form-style">
							 <view class="uni-left">
								 <image class="image" src="../../../static/image/icon_exl.png"></image>
								 <view class="uni-word">
									 <view  class="up"> 劳动能力鉴定申请表</view>
									 <view  class="down"> 表格说明表格说明表格</view>
								 </view>
							 </view>
							 <view class="uni-right uni-right-style">
								 下载
							 </view>
						 </view>
					 </view>
					 <!-- 待鉴定内容下一步 -->
					 <view class="acci-reason uni-exam uni-stepappraise" v-if="tobestepAppraiseFlag">
						 <view class="describe">请上传伤者的一寸照照片</view>
						 <view class="photo">
							 <image v-if="!photoUrl" class="images" @tap.stop="getImage" src="../../../static/image/upload_pics.png"></image>
							 <image v-if="photoUrl"  class="images" :src="photoUrl"></image> 
							 <view v-if="raiseSubmitFlag"  class="btns" @tap.stop="raiseSubmitFlag=false">提交</view>
							 <view v-if="!raiseSubmitFlag"  class="btns" style="background:#b7bac4;"  @tap.stop="raiseSubmitFlag=true">已提交</view>
						 </view>
					 </view>
					 <!-- 待鉴定的第二步 -->
					 <view  class="acci-reason uni-examTwoStep" v-if="tobeAppraiseTwoStepFlag">
						 <view class="bottom">
							 <text class="redWord">《工伤认定申请表》</text> 
							   您已选择需要进行工伤认定，请在20天内提供以下材料送
										至或快递到东大门交易中心北四门1201
						 </view>
						
						 <view class="acc-form acc-form-style">
							 <view class="uni-left">
								 <image class="image" src="../../../static/image/icon_exl.png"></image>
								 <view class="uni-word">
									 <view  class="up"> 劳动能力鉴定申请表</view>
									 <view  class="down"> 表格说明表格说明表格</view>
								 </view>
							 </view>
							 <view class="uni-right progressDiv" style="">
								 <view class="examProgress" :class="examTwoPresent>110? 'progressBorder':'progressTopRight'"  :style="'width:'+examTwoPresent+'rpx'"> 50%</view>
								
							 </view>
						 </view>
					 </view>
					 <!-- 鉴定成功 -->
					 <view  class="acci-reason uni-examSuccess" v-if="appRasiseSuccessFlag">
						 <view class="up">
                                经重新鉴定，员工张大炮的伤残等级为
                            <text class="redWord">二级</text>
						 </view>	
						 <view class="uni-button-need" style="margin-top:40rpx">
							 <view class="btn-inneed needs">满意</view>
						 </view>				
					 </view>
					 <!-- 待审核 -->
					 <view  class="acci-reason uni-appraise" style="padding-bottom:50rpx;" v-if="tobeExamineFlag">
						 <view class="top">
							   您已选择需要进行工伤认定，请在20天内提供以下材料送
										至或快递到东大门交易中心北四门1201
						 </view>		 
					 </view>
					 <!-- 待调解 -->
					 <view  class="acci-reason tobeMediate" v-if="tobeMediateFlag">		
						 <view class="top">
							  <text class="redWord">《工伤认定申请表》</text> 
							  <text class="priWord">首次诊断证明原件、劳动合同复印件、病历复印件详细操作可咨询专属客服。</text>      
						 </view>
						 <view class="acc-form acc-form-style">
							 <view class="uni-left">
								 <image class="image" src="../../../static/image/icon_exl.png"></image>
								 <view class="uni-word">
									 <view  class="up"> 工伤待遇申请表</view>
									 <view  class="down"> 表格说明表格说明表格</view>
								 </view>
							 </view>
							<!-- <view class="uni-right uni-right-style">
								 下载
							 </view> -->
							 <view class="uni-right-has uni-right-style">
							 		下载
							 </view>
						 </view>
						 <view class="acc-form acc-form-style">
							 <view class="uni-left">
								 <image class="image" src="../../../static/image/icon_word.png"></image>
								 <view class="uni-word">
									 <view  class="up"> 工伤待遇申请表</view>
									 <view  class="down"> 表格说明表格说明表格</view>
								 </view>
							 </view>
							 <view class="uni-right uni-right-style">
								 下载
							 </view>
						 </view>
					 </view>
					 <!-- 申请成功 -->
					 <view  class="acci-reason uni-appSuccess"  v-if="applySuccessFlag && !appSuccFirstStepFlag">
							<view class="top">
								<text class="redWord">《工伤认定申请表》</text>
								 您已选择需要进行工伤认定，请在20天内提供以下材料送
								  至或快递到东大门交易中心北四门1201。
							</view>	
							<view class="msg">
								<view class="uni-name styles">
									<view class="name-title title">专属客服:</view>
									<view class="name values">王小明</view>
								</view>
								<view class="connect styles">
									<view class="tel-title title">联系电话"</view>
					                <view class="tel values">137555558888</view>			
								</view>
								
							</view>
					 </view>
					 <!-- 申请成功下一步 -->
					 <view  class="acci-reason uni-appSuccessfirstStep"  v-if="appSuccFirstStepFlag">
						<view class="top">
						   鉴定成功，员工张大炮的伤残等级为<text class="redWord">三级</text>                    
						</view>	
						<view class="uni-button-need" >
							 <view class="btn-need needs">不满意 </view>
							 <view class="btn-inneed needs">满意</view>
						</view>
					 </view>
						 <!-- 完成 -->
					 <view  class="acci-reason hasAllfinish"  v-if="hasFinishFlag">
							<view class="top">
							  您的订单已全部完成，感谢您的使用。               
							</view>	
							<view class="uni-button-need" >
								
								 <view class="btn-inneed needs">评价</view>
							</view>
					 </view>
		        </view>
			</view>
		</view>
		<image v-if="tobeAcceptFlag" class="uni-service" src="../../../static/image/service.png"></image>
		<view class="uni-btn-bottom" @tap="jumpTime">查看案件时间轴</view>
	</view>
</template>
<script>
	export default{
		data(){
			return {
				id:'',
				//待受理
				tobeAcceptFlag:false,
				
				
				// 待认定
				tobeIdentifyFlag:false,
				// 待认定的下一步
				identiStepFirstFlag:false,
				
				
				// 待鉴定
				tobeApprasiseFlag:false,
				tobestepAppraiseFlag:true,
				tobeAppraiseTwoStepFlag:false,
				// 获取受伤人员的url
				photoUrl:'',
				raiseSubmitFlag:true,
				// 进度条的百分比 120 d100 的时候变化样式达到
				examTwoPresent:110,
				
				// 带调解
				tobeMediateFlag:false,
				
				// 鉴定成功
				appRasiseSuccessFlag:false,
				
				// 待审核
				tobeExamineFlag:false,
				
				
				// 申请成功
				applySuccessFlag:false,
				appSuccFirstStepFlag:false,
				
				 // 完成
				hasFinishFlag:false
			}
		},
		onLoad(options){
			
		},
		methods:{
			// 获取受伤人员的证件照
			getImage(){
				let that=this;
				uni.chooseImage({
					count: 1, //上传图片的数量，默认是9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						
						const tempFilePaths = res.tempFilePaths; //拿到选择的图片，是一个数组
						that.photoUrl = res.tempFilePaths[0];
						console.log(that.photoUrl)
							// uni.uploadFile({
							// 	url: 'http://zxyptest.hzbixin.cn/file/upload',
							// 	filePath: sos,
							// 	name: 'file',
							// 	success: function(datas) {
							// 		let results = typeof datas.data === "object" ? datas.data : JSON.parse(datas.data);
							// 		let aa = results.result;
							// 	},
							// 	fail: function(datas) {}
							// })
						
					}
				});
			},
			// 时间轴的跳转
			jumpTime(){
				uni.navigateTo({
					url:'/pages/work-bench/case-manage/time-axis'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.uni-policeDetail{
		background-color: #f5f5f5;
		height: 100vh;
		border-top:33rpx solid #f5f5f5;
		box-sizing: border-box;
	}
	.uni-main{
		width: 690rpx;
		background-color: #fff;
		margin-left:30rpx;
		// border-top: 33rpx solid #f5f5f5;
		border-radius:10rpx ;
		padding:0 32rpx 0 26rpx;
		box-sizing: border-box;
		.uni-title{
			@extend  %flex-style;
			// #e5e5e5
			border-bottom:2rpx solid #e5e5e5;
			height: 77rpx;
			.uni-left{
				display: flex;
				.codeStyle{
					 @include  font-style("PingFang-SC-Bold",Bold,28rpx,#303133);
				}
			}
			.uni-right{
				@include w_h(90rpx,40rpx);
				background: #F1F6FF;
				border: 2rpx solid #4189FF;
				border-radius: 4rpx;
				text-align: center;
				line-height: 40rpx;
				@include  font-style("PingFang-SC-Medium",Medium,20rpx,#4189FF);
			}
		}
	}
    .uni-content{
		.uni-contents{
			padding-left: 31rpx;
			box-sizing: border-box;
			.uni-styles{
				display: flex;
				margin-bottom: 23rpx;
				.field{
					@include  font-style("PingFang-SC-Medium",Medium,26rpx,rgba(48, 49, 51, 1));
					margin-right:20rpx;
				}
				.fieldValue{
					@include  font-style("PingFang-SC-Medium",Medium,26rpx,rgba(48, 49, 51, 1));
				}
			}
		}
	}
	.uni-titles{
		display: flex;
		height: 106rpx;
		align-items: center;
		.styles{
			width: 10rpx;
			height: 32rpx;
			background: linear-gradient(180deg, #71C4FF 0%, #1360D6 100%);
			border-radius: 5rpx;
			margin-right: 21rpx;
		}
		.uni-msg{
			@include  font-style("PingFang-SC-Bold",Bold,30rpx,rgba(48, 49, 51, 1));
		}
	}
	.uni-accident{
		.acci-reason{
			@include  font-style("PingFang-SC-Medium",Medium,28rpx,rgba(48, 49, 51, 1));
			padding-left: 31rpx;
			box-sizing: border-box;
			.bottom{
				padding-bottom:20rpx;
				border-bottom: 2rpx solid #e5e5e5;
				
			}
			.redWord{
					@include  font-style("PingFang-SC-Medium",Medium,28rpx,rgba(255, 0, 1, 1));
				}
		}		
	}
	.uni-service{
		@include  w_h(129rpx,129rpx);
		position: fixed;
		right:0;
		bottom:225rpx;
	}
	.acc-form-style{
		display: flex;
		height:70rpx;
		align-items: center;
		margin:30rpx 0 30rpx 0;
		// padding-left: 28rpx;
		box-sizing: border-box;
		.uni-left{
			flex: 1;
			display: flex;
			.image{
				@include w_h(59rpx,70rpx);
				margin-right:25rpx;
			}
			.uni-word{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.up{
					@include  font-style("PingFang-SC-Medium",Medium,28rpx,rgba(48, 50, 52, 1));
				}
				.down{
					@include  font-style("PingFang-SC-Medium",Medium,22rpx,rgba(146, 150, 154, 1));
				}
			}
			
		}
		.uni-right-style{
			@include w_h(120rpx,60rpx);
			box-shadow: 1rpx 4rpx 10rpx 0rpx rgba(65, 136, 246, 0.3);
			border-radius: 30rpx;
			text-align: center;
			line-height: 60rpx;
			box-sizing: border-box;
			@include  font-style("PingFang-SC-Medium",Medium,24rpx,rgba(255, 255, 255, 1));
		}
		.uni-right{
			background: #125CD4;
		}
		.uni-right-has{
          background: #B8BAC4;
		}
		.progressDiv{
			width:120rpx;
			background-color: rgba(65, 136, 246, 0.3);
			border: 2px solid #125CD4;
			box-shadow: 1px 4px 10px 0px rgba(65, 136, 246, 0.3);
			border-radius: 30px;
		}
		.progressBorder{
			border-radius: 30px;
		}
		.progressTopRight{
			border-top-left-radius: 30rpx;
			border-bottom-left-radius: 30rpx;
		}
		.examProgress{
			@include w_h(50rpx,52rpx);
			background: rgba(89, 153, 255, 1);
			text-align: center;
			
			box-shadow: 1px 4px 10px 0px rgba(65, 136, 246, 0.3);
			// border-radius: 30px;
			box-sizing: border-box;
			line-height: 60rpx;
			@include  font-style("PingFang-SC-Medium",Medium,24rpx,rgba(255, 255, 255, 1));
		}
	}
	.uni-btn-bottom{
		@include w_h(750rpx,98rpx);
		@include  font-style("PingFang-SC-Medium",Medium,36rpx,#FFFFFF);
		background-color:#125CD4 ;
		line-height: 98rpx;
		text-align: center;
		position: absolute;
		left: 0;
		bottom: 0;
	}
	.uni-button-need{
		display: flex;
		justify-content: flex-end;
		margin-top:20rpx ;
		.needs{
			@include  w_h(139rpx,79rpx);
			background-size:139rpx 79rpx ;
			background-repeat: no-repeat;
			@include  font-style("PingFang-SC-Medium",Medium,24rpx,rgba(255, 255, 255, 1));
			text-align: center;
			 line-height: 70rpx;
		}
		.btn-need{	
			background-image: url(../../../static/image/btn2.png)   ;	
		}
		.btn-inneed{
			background-image: url(../../../static/image/check_btn.png) ;
		}		
	}
    .uni-stepappraise{
		.describe{
			@include  font-style("PingFang-SC-Medium",Medium,28rpx,rgba(48, 50, 52, 1));
		}
		.photo{
			@extend  %flex-style-justify;
			align-items: flex-end;
			margin-top:35rpx;
			.images{
				@include  w_h(200rpx,200rpx);
				display: block;
			}
			.btns{
				@include  w_h(120rpx,60rpx);
				background: #125CD4;
				box-shadow: 1rpx 4rpx 10rpx 0rpx rgba(65, 136, 246, 0.3);
				border-radius: 30rpx;
				text-align: center;
				line-height: 60rpx;
				@include  font-style("PingFang-SC-Medium",Medium,24rpx,rgba(255, 255, 255, 1));
			}
		}
	}
     // 申请成功
   .uni-appSuccess{
		.msg{
			margin-top:40rpx;
			.styles{
				display: flex;
				margin-bottom:15rpx;
				.title{
					margin-right:20rpx;
					@include  font-style("PingFang-SC-Medium",Medium,28rpx,rgba(48, 49, 51, 1));
				}
				.values{
					@include  font-style("PingFang-SC-Medium",Medium,28rpx,rgba(48, 49, 51, 1));
				}
			}
		}
	}



</style>
