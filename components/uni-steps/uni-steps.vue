<template>
	<view class="uni-steps">
		<view :class="[direction==='column'?'uni-steps__column':'uni-steps__row']">
			<view :class="[direction==='column'?'uni-steps__column-text-container':'uni-steps__row-text-container']">
				<view v-for="(item,index) in options" :key="index" :class="[direction==='column'?'uni-steps__column-text':'uni-steps__row-text']">
				<!-- <text :style="{color:index<=active?activeColor:deactiveColor}" :class="[direction==='column'?'uni-steps__column-desc':'uni-steps__row-desc',index<=active?'desc-stylesss':'desc-styleeee']">{{item.desc}}</text> -->
					<text :style="{color:index<=active?activeColor:deactiveColor}" :class="[direction==='column'?'uni-steps__column-desc':'uni-steps__row-desc',index<=active?'desc-stylesss':'desc-styleeee']">{{item.desc}}</text>
				</view>
			</view>
			<view :class="[direction==='column'?'uni-steps__column-container':'uni-steps__row-container']">
				<view :class="[direction==='column'?'uni-steps__column-line-item':'uni-steps__row-line-item']" v-for="(item,index) in options"
				 :key="index">
					<view :class="[direction==='column'?'uni-steps__column-line':'uni-steps__row-line',direction==='column'?'uni-steps__column-line--before':'uni-steps__row-line--before']"
					 :style="{backgroundColor:index<=active&&index!==0?activeColor:index===0?'transparent':deactiveColor}"></view>
					<view :class="[direction==='column'?'uni-steps__column-check':'uni-steps__row-check']" v-if="index === active">
						<!-- <uni-icons :color="activeColor" type="checkbox-filled" size="14"></uni-icons> -->
				         <!-- active的时候 Logo的大小 -->
						<image style="width: 21px;height: 21px;" src="../../static/image/activation.png"></image> 
					      
					</view>
					
				    <image  style="width:21px;height:21px;" :src="index<active?  '../../static/image/activation.png':'../../static/image/unactivation.png'" v-else ></image>
					<text class="words" :style="index<active ? 'color:rgba(18, 92, 212, 1)':'color:rgba(184, 186, 196, 1)'">{{item.title}}</text>
					<!-- <view :class="[direction==='column'?'uni-steps__column-circle':'uni-steps__row-circle']" v-else :style="{backgroundColor:index<active?activeColor:deactiveColor}"></view> -->
					<view :class="[direction==='column'?'uni-steps__column-line':'uni-steps__row-line',direction==='column'?'uni-steps__column-line--after':'uni-steps__row-line--after']"
					 :style="{backgroundColor:index<active&&index!==options.length-1?activeColor:index===options.length-1?'transparent':deactiveColor}"></view>
				</view>
			</view>
		</view> 
	</view>
</template>

<script>
	import uniIcons from '../uni-icons/uni-icons.vue'
	export default {
		name: 'UniSteps',
		components: {
			uniIcons
		},
		props: {
			direction: {
				// 排列方向 row column
				type: String,
				default: 'row'
			},
			activeColor: {
				// 激活状态颜色
				type: String,
				default: 'rgba(18, 92, 212, 1)'
			},
			deactiveColor: {
				// 未激活状态颜色
				type: String,
				default: '#999999'
			},
			active: {
				// 当前步骤
				type: Number,
				default: 0
			},
			options: {
				type: Array,
				default () {
					return []
				}
			} // 数据
		},
		data() {
			return {}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-steps {
		/* #ifndef APP-NVUE */
		display: flex;
		width: 100%;
		/* #endif */
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
		flex-direction: column;
	}

	.uni-steps__row {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}

	.uni-steps__column {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row-reverse;
	}

	.uni-steps__row-text-container {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	.uni-steps__column-text-container {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		flex: 1;
	}

	.uni-steps__row-text {
		/* #ifndef APP-NVUE */
		display: inline-flex;
		/* #endif */
		flex: 1;
		flex-direction: column;
	}

	.uni-steps__column-text {
		padding: 6px 0px;
		// border-bottom-style: solid;
		// border-bottom-width: 1px;
		// border-bottom-color: $uni-border-color;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}

	.uni-steps__row-title {
		font-size: $uni-font-size-base;
		line-height: 16px;
		text-align: center;
	}

	.uni-steps__column-title {
		font-size: $uni-font-size-base;
		text-align: left;
		line-height: 18px;
	}

	.uni-steps__row-desc {
		font-size: 12px;
		line-height: 14px;
		text-align: center;
	}
    .desc-stylesss{
		border-bottom:10px solid  #e7eefb;
		background-color:#e7eefb;
		padding:9px 18px  0px 10px;
		
		
	}
	.desc-styleeee{
		padding-top:25px;
		border-bottom:10px solid  #fff;
		// margin-top:10px;
		
	}
	.uni-steps__column-desc {
		display: flex;
		// align-items: center;
		justify-content: center;
		height:55px;
		width:300px;
		text-align: left;
		color:#2368d7;
		font-size: 14px;;
		box-sizing: border-box;
		line-height: 18px;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}   

	.uni-steps__row-container {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	.uni-steps__column-container {
		/* #ifndef APP-NVUE */
		display: inline-flex;
		/* #endif */
		width: 60px;
		flex-direction: column;
		margin-top:-21px;
	}

	.uni-steps__row-line-item {
		/* #ifndef APP-NVUE */
		display: inline-flex;
		/* #endif */
		flex-direction: row;
		flex: 1;
		height: 14px;
		line-height: 14px;
		align-items: center;
		justify-content: center;
	}

	.uni-steps__column-line-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		flex: 1;
		align-items: center;
		justify-content: center;
	}

	.uni-steps__row-line {
		flex: 1;
		height: 1px;
		background-color: $uni-text-color-grey;
	}

	.uni-steps__column-line {
		width: 1px;
		background-color: $uni-text-color-grey;
	}

	.uni-steps__row-line--after {
		transform: translateX(1px);
	}

	.uni-steps__column-line--after {
		flex: 1;
		transform: translate(0px, 1px);
	}

	.uni-steps__row-line--before {
		transform: translateX(-1px);
	}

	.uni-steps__column-line--before {
		height: 27px;
		transform: translate(0px, -1px);
	}

	.uni-steps__row-circle {
		width: 5px;
		height: 5px;
		border-radius: 100px;
		background-color: $uni-text-color-grey;
		margin: 0px 3px;
	}

	.uni-steps__column-circle {
		width: 5px;
		height: 5px;
		border-radius: 100px;
		background-color: $uni-text-color-grey;
		margin: 4px 0px 5px 0px;
	}

	.uni-steps__row-check {
		margin: 0px 6px;
	}
  // active  时候logo 的大小
	.uni-steps__column-check {
		height: 21px;
		line-height: 21px;
		margin: 2px 0px;
	}
	.words{
		font-size: 22rpx;
		color:rgba(18, 92, 212, 1);
		margin-top:5px;
		width: 50px;
		 text-align: center;
	}
</style>
