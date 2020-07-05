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
			             <picker @change="comPickerChange" :value="companyListIndex" :range="companyList">
							 <text v-if="companyAddress" class="word">{{companyAddress}}</text>
							 <text v-if="!companyAddress" class="word" style="color:#B7BAC4;">请选择或者输入公司名称</text>
							 <!-- <input class="word" type="text"    :value="companyAddress" placeholder="请选择或者输入公司名称" placeholder-style="color:#B7BAC4;"/> -->
							 <image  class="img" src="../../static/image/inter.png"></image>
						 </picker>
					</view>
				</view>
					<picker  @change="personPickerChange" :value="personListIndex" :range="personList">
				 <!--  <view></view> -->
					 <view class="uni-form-item second">
						<view class="left">
						<text class="name">选择人员</text>
						<text class="neceWrite">(必填)</text>
					</view>
					<view class="right">
						  <input class="word" type="text" @click.stop.native="choicePerson()" :value="person" placeholder="请选择或者输入受伤员工" placeholder-style="color:#B7BAC4;"/>
						  <image  class="img" src="../../static/image/inter.png"></image>
					</view>
					 </view>
					
						
					</picker>
					
					<!-- <view class="right">
						<input class="word" type="text" @input.stop.native="choicePerson()" :value="person" placeholder="请选择或者输入受伤员工" placeholder-style="color:#B7BAC4;"/>
						<picker  @change="personPickerChange" :value="personListIndex" :range="personList">
						  <image  class="img" src="../../static/image/inter.png"></image>
						</picker>
					</view> -->
				
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
					<view class="uploadimg"   >
							 <image v-if="!idPhoteUrl"  @click="getidPicture()" class="img" src="../../static/image/pic_upload.png"></image>
						     <view v-if="!idPhoteUrl" class="explain">
								 <view>
									请上传受伤人员的身份证正面照片
								 </view>
								 <view>
									如该员工已录入个人信息，则会直接显示
								 </view>
						     </view>
						<view>
							<image @tap="previewImageID"  v-if="idPhoteUrl" class="img" :src="idPhoteUrl"></image>
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
				<e-picker  mode="dateTime" :showValue="accidentTime" @change="acciPickerTime" >
					<view class="uni-form-item sixth">
						<view class="left">
							<text class="name">事故时间</text>
							<text class="neceWrite">(必填)</text>
						</view>
						<view class="right"> 
								<!-- <input class="word" type="text" :value="accidentTime" placeholder="请选择事故时间" placeholder-style="color:#B7BAC4;"/> -->
								<text  v-if="accidentTime" class="word">{{accidentTime}}</text>
								<text v-if="!accidentTime" class="word" style="color:#B7BAC4;">请选择事故时间</text> 
								<image  class="img" src="../../static/image/inter.png"></image>
						</view>
					</view>	
				</e-picker>
				<view class="uni-form-item sixth">
					<view class="left">
						<text class="name">事故地点</text>
						<text class="neceWrite">(必填)</text>
					</view>
					<view class="right">
						<input class="word" type="text" :value="accidentReason" placeholder="请选择事故地点" placeholder-style="color:#B7BAC4;"/>
						<image  class="img" src="../../static/image/inter.png"></image>
					</view>
				</view>
				<view class="uni-form-item twenlve">
					<view class="left">
						<text class="name">受伤原因</text>
					</view>
					<view class="right noimg">
						<input class="word" type="text" :value="witness" placeholder="请填写受伤原因" placeholder-style="color:#B7BAC4;"/>
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
				<view class="ten">
					<view class="uni-form-item ">
						<view class="left">
							<text class="name">受伤部位</text>
							<text class="neceWrite">(必填)</text>
					    </view>
					    <view class="right">
							<input class="word" type="text" :value="choiceBody" placeholder="请选择受伤的部位(可多选)" placeholder-style="color:#B7BAC4;"/>
							<image  class="img" src="../../static/image/inter.png"></image>
					    </view>
				    </view>
				</view>
				<!-- 在ten 里面输入填入的时候的样式 -->
					<!-- <view class="reasonList">
						 <view class="list">
							  <view class="listStyle" v-for="(item,index) in injuryBodyList " :key="index">
									{{item}}
							  </view>
						 </view>
					</view> -->
					<view class="eleven">
						<view  class="ele-title">
                                请上传伤者受伤部位和受伤现场照片
								<text class="nece">(必填)</text>
						</view>
						<view class="ele-pic">
							<image v-if="!bodyPhotoUrl" @click="bodyPhoto()" class="img" src="../../static/image/pic_uplloads.png"></image>
							<view class="getPhone" v-else-if="bodyPhotoUrl">
								<image @tap="injuryPreviewImage(index)"  v-for="(item,index) in bodyPhotoUrl" :key="index" class="img" :src="item"></image>
								<image v-if="bodyPhotoUrl.length>=0 && bodyPhotoUrl.length<9" @click="bodyPhotoAdd()" class="img" src="../../static/image/pic_uplloads.png"></image>
							</view>
						</view>
					</view>
				
			</form>
		</view>
		<button class="subBtn" @click="submit()">提交</button>
	</view>
</template>

<script>
	import ePicker from "../../components/e-picker/e-picker.vue"
	export default {
		data() {
			  
			return {
				//companyAddress:'杭州市杭州彼信信息科技有限公司'
				companyAddress:'',
				companyList: ['北京市乐华娱乐有限公司', '北京市哇唧唧哇有限公司', '北京市华谊兄弟有限公司', '北京市新湃传媒有限公司'],
				companyListIndex:-1,
				phone:'',
				person:'',
				personList:['张伟','王伟','李伟','刘伟','李娜'],
				personListIndex:-1,
				ID:'',
				commercialnsurance:'',
				accidentTime:'',
				accidentReason:'',
				witness:'',
				witnessPhone:'',
				hospitalAddress:'',
				choiceBody:'',
				idPhoteUrl:'',
				bodyPhotoUrl:'',
				injuryBodyList:['头部鼻梁骨折','胸部肋骨骨折','头部鼻梁骨折','胸部肋骨骨折','头部鼻梁骨折',
				               '胸部肋骨骨折','头部鼻梁骨折','胸部肋骨骨折','头部鼻梁骨折','胸部肋骨骨折'],
				date:"",
		
		
			}
		},
		components:{
			 ePicker
		},
		methods: {
			// form的提交
			formSubmit(){},
			//身份证图片的获取
			getidPicture(){
				let _that=this;
				uni.chooseImage({
				    count: 1, //上传图片的数量，默认是9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], //从相册选择
				    success: function (res) {
				        const tempFilePaths = res.tempFilePaths;    //拿到选择的图片，是一个数组
						_that.idPhoteUrl=res.tempFilePaths[0]
				    }
				});
				
			},
			// 对身份证的图片进行预览
			  previewImageID() {
				uni.previewImage({
				  current: this.idPhoteUrl,
				  urls: [this.idPhoteUrl],
				  indicator:"number"
				  
				})
			  },
		
			switchChange(){
				
			},
			//选择公司的picker的弹框
			comPickerChange(e) {
				this.companyListIndex = e.target.value;
				this.companyAddress=this.companyList[this.companyListIndex]
            },
			//选择人员的picker的弹框
			personPickerChange(e){
				this.personListIndex = e.target.value;
				this.person=this.personList[this.personListIndex]
			},
			//选择事故发生的时间
			acciPickerTime(e){
				this.accidentTime=e;
			},
			//选择人员input 输入框
			choicePerson(){
				
			
			},
			//身体受伤部位照片的List
			bodyPhoto(){
				let _that=this;
				uni.chooseImage({
				    count:9 , //上传图片的数量，默认是9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], //从相册选择
				    success: function (res) {
				        const tempFilePaths = res.tempFilePaths;    //拿到选择的图片，是一个数组
						_that.bodyPhotoUrl=res.tempFilePaths
						
				    }
				});
			},
			//添加受伤部位照片
			 bodyPhotoAdd(){
				 let _that=this;
				 let lls=_that.bodyPhotoUrl
				 console.log(lls.length)
				 uni.chooseImage({
				     count:9-lls.length, //上传图片的数量，默认是9
				     sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				     sourceType: ['album','camera'], //从相册选择
				     success: function (res) {
				         const tempFilePaths = res.tempFilePaths;     //拿到选择的图片，是一个数组
				 		 _that.bodyPhotoUrl=lls.concat(res.tempFilePaths)
						 console.log(res.tempFilePaths)
						console.log(_that.bodyPhotoUrl)
				     }
				 });
			 },
			 // 受伤部位照片预览
			 injuryPreviewImage(index){
			 	console.log(this.bodyPhotoUrl)
			 	uni.previewImage({
			 	  current: this.bodyPhotoUrl[index],
			 	  urls: this.bodyPhotoUrl,
			 	  indicator:"number"
			 	})
			 },
			submit(){
				
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
					 // position:relative;
					 // top:2rpx;
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
			 .uni-form-item{
				 height: 94rpx;
				 margin-bottom: 0rpx;
			 }
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
		 .ten{
			 // .uni-form-item{
				//  height:94rpx;
				//  margin-bottom: 0rpx;
			 // }
			 background:rgba(255,255,255,1);
			 .reasonList{
				 width:630rpx;
				 margin:0 auto;
				 border-top:1rpx solid #E5E5E5;
				 .list{
					 display: flex;
					 justify-content: space-between;
					 flex-wrap: wrap;
					 padding-top:27rpx;
					 .listStyle{
						 width:180rpx;
						 height: 60rpx;
						 line-height: 60rpx;
						 background:rgba(241,246,255,1);
						 border:2px solid rgba(65,137,255,1);
						 border-radius:4px;
						 color: #4189FF;
						 font-size: 24rpx;
						 text-align: center;
						 margin-bottom: 30rpx;
					 }
				 }
			 }
			
		 }
         .eleven{
			  background:rgba(255,255,255,1);
			  border-radius:8rpx;
			  padding:36rpx 0rpx 24rpx 24rpx;
			  .ele-title{
				 color: #303133;
				 font-size: 28rpx;
				 .nece{
					 color: #FF0000;
				 }
			 }
			 .ele-pic{
				 padding-top: 53rpx;
				 .img{
					 width:200rpx;
					 height:200rpx;
					 border-radius:10rpx;
				 }
				 .getPhone{
					 width:630rpx;
					 display: flex;
					 flex-wrap: wrap;
					 .img{
						 margin-bottom: 24rpx;
						 margin-right:10rpx;
						 border-radius:10rpx;
					 }
					 
				 }
			 }
		 }
   }
 }
 .subBtn{
	 width:750rpx;
	 height:98rpx;
	 line-height:98rpx;
	 background-color: #125CD4;
	 font-size: 36rpx;
	 color:#FFFFFF;
	 text-align: center;
	 margin-top:46rpx;
 }
</style>
