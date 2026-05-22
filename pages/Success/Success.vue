<template>
	<view class="success-container">
		<!-- 上部图片和底部标题 -->
		<view class="pic-container">
			<image class="success-bg" src="/static/Success/提交成功.png" mode="aspectFill" />
		</view>
		
		<!-- 图片下方文字 -->
		<text class="success-title">提交成功!</text>
		
		<!-- 底部返回首页按钮 -->
		<view class="back-btn-wrap">
			<view class="back-btn" @click="goFirst">
				<text class="btn-text">返回首页</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			goFirst(){
				uni.navigateTo({
					url:'/pages/Start/Start'
				});
			}
		}
	}
</script>

<style scoped>
	/* 最外层容器 */
	.success-container {
		display:flex;
		flex-direction:column;
		justify-content: flex-start;
		align-items: center;
	}
	
	/* 上部图片容器 */
	.pic-container {
		position:relative;
		width: 100%;
		height: 374rpx;
		margin-top:180rpx;
		
		display:flex;
		justify-content: center;
		align-items: center;
	}
	
	/* 背景图 */
	.success-bg {
		position:absolute;
		width:100%;
		height:100%;
		inset:0;
	}
	
	/* 图片下方文字 */
	.success-title {
		margin-top:25rpx;
		
		font-size:38rpx;
		font-weight:bold;
		color:#0dc477;
		line-height:1;
	}
	
	/* 底部返回首页按钮容器 */
	.back-btn-wrap {
		margin-top:175rpx;
		width:calc(100% - 60rpx);
		height:98rpx;
		box-sizing: border-box;
	}
	
	/* 底部返回首页按钮 */
	.back-btn {
		width:100%;
		height:100%;
		box-sizing: border-box;
		
		display:flex;
		justify-content: center;
		align-items: center;
		
		background-color:#0dc477;
		border-radius:12rpx;
	}
	
	/* 按钮内部文本 */
	.btn-text {
		font-size:34rpx;
		font-weight:400;
		color:#fff;
		line-height:1;
	}
</style>