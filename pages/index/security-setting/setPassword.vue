<template>
        <view class="uni-payPassword">
			 <view class="field"  v-if="firstShowFlag">请输入六位交易密码</view>
			 <view  v-if="firstShowFlag "  @tap='KeyboarOpen'  class="passInput">
				 <password-input :numLng='password'></password-input>
				 <number-keyboard tabBar ref='KeyboarHid' @input='clickInput' psdLength='6'></number-keyboard>
			 </view>
               <!-- 再次输入密码 -->
			 <view class="field" v-if="!firstShowFlag ">请再次输入六位交易密码</view>
			 <view  @tap='KeyboarOpen' v-if="!firstShowFlag "  class="passInput">
				 <password-input :numLng='rePassword'></password-input>
				 <number-keyboard tabBar ref='KeyboarHid' @input='clickInputs' psdLength='6'></number-keyboard>
			 </view>
			<toast-view v-if="toastFlag"  :title="titles" ></toast-view>
	   </view>
</template>
<script>
	import numberKeyboard from '@/components/number-keyboard/number-keyboard.vue'
	import passwordInput from '@/components/password-input/password-input.vue'
	import toastView from '@/components/toast/toast.vue'
    export default {
        data() {
            return {
			   password:'',
			   // 再次输入密码
			   firstShowFlag:true,
			   // 弹出层
			   maskFlag:false,
			   rePassword:'',
			   toastFlag:false,
			   titles:'两次密码输入不一致'
            }
        },
		components:{
			numberKeyboard,
			passwordInput,
			toastView
		},
		onLoad(){
			
			
				},
        methods: {
			// 插件里面的事件
			 KeyboarOpen() {
			    this.$refs.KeyboarHid.open();
				
			 },
			  //输入的值
			  clickInput(val) {
				  this.password = val;
				  if(this.password.length ===6){
					  this.firstShowFlag=false;
				  } 
			  },
			  clickInputs(val) {
				  this.rePassword = val;
				  if(this.rePassword.length ===6){
					   if(this.password ==this.rePassword){
						    this.$refs.KeyboarHid.close();
						     uni.navigateTo({
						     	url:'/pages/successPage/successPage?setting='+1
						     })
					   }else{
						   this.toastFlag=true;
						   setTimeout(()=>{
							   this.toastFlag=false;
						   },2500)
						   
					   }
				  } 
			  },
			 
			  
        }
    }
</script>

<style scoped lang="scss">
 
 .uni-payPassword{
	 width: 750rpx;;
	 box-sizing: border-box;
	 padding-top:254rpx ;
	 text-align: center;
 }
 .passInput{
	
 }
 .field{
	 font-size: 30rpx;
	 margin-bottom:52rpx;
 }
 .toast{
	 width:250rpx;
	 height:80rpx;
	 position: absolute;
	 left:250rpx;
	 top:400rpx;
	 z-index:1;
	 font-size:22rpx;
	 color:#fff;
	 background:#4c4c4c;
	 text-align: center;
	 line-height: 80rpx;
	 border-radius: 15rpx;
 }

 
</style>

