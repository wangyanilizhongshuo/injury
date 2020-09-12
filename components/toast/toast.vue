<template>
	<view>
		<view class="toast" >{{title}}</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		 props: {
			  title: {
			  	type: String,
				required:true
			  	
			  }
		    },
		onLoad:{
		
		},
		methods:{
			
		}
	}
</script>

<style scoped>
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
