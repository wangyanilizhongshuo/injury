<template>
	<view class="uni-timerAxis">
		<uni-steps :options="progress" direction="column" :active="progressNum"></uni-steps>
		 
	</view>
</template>

<script>
	// https://ext.dcloud.net.cn/plugin?id=34    步骤条
	 import uniSteps from '@/components/uni-steps/uni-steps.vue'
	export default {
		data(){
			return {
				progress:[{title:'待受理',desc:'王亚妮王亚妮王亚妮王亚妮王亚妮王亚妮王亚妮王亚妮王亚妮王亚妮王亚妮王亚妮王亚妮王亚妮王亚妮王亚妮王亚妮王亚妮王亚妮王亚妮'},
				          {title:'待认定',desc:'您的案件平台已受理，将进行工伤认定。'},
			              {title:'认定中',desc:'您的案件正在工伤认定中。'},
						  {title:'认定成功',desc:'您的工伤认定已完成，将进行劳动能力鉴定'},
				          {title:'鉴定中',desc:'您的案件正在劳动能力鉴定中。'},
						  {title:'鉴定成功',desc:'鉴定成功，员工张大炮的伤残等级为三级。'},
				          {title:'调解中',desc:'您的案件正在调解中。'},
						  {title:'已成功',desc:'您的案件已完成。'}
						  
						 ],
				progressNum:3
				
			}
		},
		components: {
			uniSteps
		},
		onLoad(){
			
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.uni-timerAxis{
		width:750rpx;
		padding:0 28rpx 0 36rpx;
		box-sizing: border-box;
	}
	
</style>
