<template>
	<view class="uni-injury">
		<view class="uni-content">
			<form class="uni-form" @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item first">
					<view class="left">
						<text class="name">选择公司</text>
						<text class="neceWrite">(必填)</text>
					</view>
					<view class="right">
						
						<text class="word" type="text"     placeholder="请选择或者输入公司名称" placeholder-style="color:#B7BAC4;">
							{{companyAddress}}
						</text>
						<image  class="img" src="../../static/image/inter.png"></image>
					</view>
				</view>
				<view class="uni-form-item second">
					<view class="left">
						<text class="name">选择人员</text>
						<text class="neceWrite">(必填)</text>
					</view>
					<view class="right">
						<input class="word" type="text" :value="person" placeholder="请选择或者输入受伤员工" placeholder-style="color:#B7BAC4;"/>
						<image  class="img" src="../../static/image/inter.png"></image>
					</view>
				</view>
				<view class="uni-form-item third">
					<view class="left">
						<text class="name">手机号码</text>
					</view>
					<view class="right noimg">
						<input class="word" type="text" :value="phone" placeholder="请输入手机号码" placeholder-style="color:#B7BAC4;"/>
					</view>
				</view>
				<view class="forth">
					<view class="uni-form-item">
						<view class="left">
							<text class="name">身份证号码</text>
							<text class="neceWrite">(必填)</text>
					    </view>
						<view class="right noimg">
							<input class="word" type="text" :value="ID" placeholder="请输入员工身份证号码" placeholder-style="color:#B7BAC4;"/>
						</view>
					</view>
					<view style="width:620rpx;height:1rpx;background:rgba(229,229,229,1);margin:0 0 28rpx 24rpx;"></view>
					<view class="uploadimg"  >
						 <image @click="getidPicture()" class="img" src="../../static/image/pic_upload.png"></image>
						 <view class="explain">
							 <view>
                                请上传受伤人员的身份证正面照片
							 </view>
							 <view>
								如该员工已录入个人信息，则会直接显示
							 </view>
						 </view>
					</view>
					
				</view>
				<view class="uni-form-item fifth">
					<view class="left">
						<text class="name">商业保险</text>
					</view>
					<view class="right noimgswitch">
						 <switch  style="transform: scale(0.7,0.7)" @change="switchChange" checked class="word"/>
						<!-- <input class="word" type="text" :value="commercialnsurance" placeholder="请输入手机号码" placeholder-style="color:#B7BAC4;"/> -->
					</view>
				</view>
				<view class="uni-form-item sixth">
					<view class="left">
						<text class="name">事故时间</text>
						<text class="neceWrite">(必填)</text>
					</view>
					<view class="right">
						<input class="word" type="text" :value="accidentTime" placeholder="请选择事故时间" placeholder-style="color:#B7BAC4;"/>
						<image  class="img" src="../../static/image/inter.png"></image>
					</view>
				</view>
				<view class="uni-form-item sixth">
					<view class="left">
						<text class="name">事故地点</text>
						<text class="neceWrite">(必填)</text>
					</view>
					<view class="right">
						<input class="word" type="text" :value="accidentReason" placeholder="请填写受伤原因" placeholder-style="color:#B7BAC4;"/>
						<image  class="img" src="../../static/image/inter.png"></image>
					</view>
				</view>
				<view class="uni-form-item seven">
					<view class="left">
						<text class="name">见证人</text>
					</view>
					<view class="right noimg">
						<input class="word" type="text" :value="witness" placeholder="请输入见证人姓名" placeholder-style="color:#B7BAC4;"/>
					</view>
				</view>
				<view class="uni-form-item eight">
					<view class="left">
						<text class="name">见证人号码</text>
					</view>
					<view class="right noimg">
						<input class="word" type="number" :value="witnessPhone" placeholder="请输入见证人手机号" placeholder-style="color:#B7BAC4;"/>
					</view>
				</view>
				<view class="uni-form-item nine">
					<view class="left">
						<text class="name">医院选择 </text>
						<text class="neceWrite">(必填)</text>
					</view>
					<view class="right">
						<input class="word" type="text" :value="hospitalAddress" placeholder="请选择医院" placeholder-style="color:#B7BAC4;"/>
						<image  class="img" src="../../static/image/inter.png"></image>
					</view>
				</view>
				<view class="uni-form-item ten">
					<view class="left">
						<text class="name">受伤部位</text>
						<text class="neceWrite">(必填)</text>
					</view>
					<view class="right">
						<input class="word" type="text" :value="choiceBody" placeholder="请选择受伤的部位(可多选)" placeholder-style="color:#B7BAC4;"/>
						<image  class="img" src="../../static/image/inter.png"></image>
					</view>
				</view>
				<image v-if="idPhoteUrl" style="width: 200rpx;height: 300rpx;" :src="idPhoteUrl"></image>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//companyAddress:'杭州市杭州彼信信息科技有限公司'
				companyAddress:'',
				phone:'',
				person:'d',
				ID:'',
				commercialnsurance:'',
				accidentTime:'',
				accidentReason:'',
				witness:'',
				witnessPhone:'',
				hospitalAddress:'',
				choiceBody:'',
				idPhoteUrl:''
			}
		},
		methods: {
			formSubmit(){},
			getidPicture(){
				// console.log(2222)
				uni.chooseImage({
				    count: 1, //上传图片的数量，默认是9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
				        const tempFilePaths = res.tempFilePaths;    //拿到选择的图片，是一个数组
						this.idPhoteUrl=res.tempFilePaths[0]
						console.log(this.idPhoteUrl)
				    }
				});
				
			},
			switchChange(){
				
			}
			
		}
	}
</script>

<style scoped lang="scss">
 .uni-injury{
	 position: relative;
	 width:750rpx;
	 height:auto;
	 background-color: #e5e5e5;
	 padding-top:10rpx;
	 .uni-content{
		 width:690rpx;
		 margin-top:10rpx;
		 margin:0 auto;
		 .uni-form{
			 display: block;
			 height: auto;
			 width: 690rpx;
		 }
		 .uni-form-item{
			 display: flex;
			 align-items: center;
			 font-family: "PingFang-SC-Medium";       
		 	 height:98rpx;
			 padding-left:24rpx;
			 justify-content: space-between;
			 background:rgba(255,255,255,1);
			 border-radius:8rpx;
			 font-size: 28rpx;
			 color: #303133;
			 margin-bottom: 12rpx;
			 .left{
				 .neceWrite{
					 color: #FF0000;
				 }
			 }
			 .right{
				 margin-right:29rpx;
				 display: flex;
				 align-items: center;
				 .noword{
					 color: #B7BAC4;
				 }
				 .word{
					 width:345rpx;
					 text-align: right;
					 overflow: hidden;
					 text-overflow:ellipsis;
					 white-space: nowrap;
				 }
				 .img{
					 width: 12rpx;
					 height: 20rpx;
					 margin-left:18rpx;
					 position:relative;
					 top:2rpx;
				 }
			 }
			 .noimg{
				margin-right:67rpx; 
			 }
			 .noimgswitch{
				 position: relative;
				 left:30rpx;
				 
			 }
		  }
		 //身份证重新定义css
		 .forth{
			 width:690rpx;
			 background:rgba(255,255,255,1);
			 margin-bottom: 12rpx;
			 .uploadimg{
				 position: relative;
				 margin-left:24rpx;
				 padding-bottom: 35rpx;
				 .img{
					width: 620rpx;
			        height: 390rpx;
					margin-left:6rpx;
				 }
				 .explain{
					 width:620rpx;
					 color:#B7BAC4;
					 font-size: 28rpx;
					 position: absolute;
					 bottom:83rpx;
					 text-align: center;
					 
				 }
				
			 }
			
		 }
   }
 }
</style>
