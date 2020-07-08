<template>
	<view >
		<button type="primary" @tap="openLevel">打开地址</button>
		        <text>{{pickerText}}</text>
		
			 <level-linkage  ref="levelLinkage" 
			           :pickerValueDefault="pickerValueDefault" 
			           :allData="treeData"
			          @onConfirm="onConfirm" themeColor='#007AFF'></level-linkage >
		</view>
		
		</view>  
</template>
<script>
	import levelLinkage  from "@/components/three-level-linkage/linkage.nvue"
	export default{
		data(){
			return {
				pickerValueDefault: [0, 0, 0],
				pickerText: '',
				treeData: [
				             {
												"id":"1",
												"name":"北京",
												"code":"11",
												"children":[
													{
														"id":"1230040276324601858",
														"name":"北京大学",
														"code":"10001",
														"children":[
															{
																"id":"1219144373145477122",
																"name":"风景园林",
																"code":"fengjingyuanlin"
															}
														]
				                    }
				                ]
				              }
				          ]
			    
			}
		},
		components:{
			levelLinkage 
		},
		onLoad(){},
		methods:{
			openLevel() {
			                this.$refs.levelLinkage.open();
			            },
			            onConfirm(e) {
			                // e 确认后选中的数据
			                this.pickerText = JSON.stringify(e)
			            }
		}
	}
</script>
<style lang="scss"></style>