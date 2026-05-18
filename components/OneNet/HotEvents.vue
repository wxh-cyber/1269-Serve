<template>
	<!-- 最外层容器 -->
	<view class="hot-events-container">
		<!-- 页面顶部，包括左侧标题和右侧查看更多 -->
		<view class="hot-events-top">
			<!-- 左侧标题 -->
			<view class="hot-events-top-title-wrap">
				<view class="line"></view>
				<text class="hot-events-title">热门事项</text>
			</view>
			<text class="more">查看更多 ></text>
		</view>
		
		<!-- 热门事件列表 -->
		<view class="hot-events-list">
			<!-- 单个热门事件卡片 -->
			<view class="hot-events-card" v-for="(item,index) in hotEvents" :key="item.id">
				<!-- 卡片标题 -->
				<text class="card-title">{{item.title}}</text>
				
				<!-- 中央文本内容 -->
				<view class="card-text">
					{{item.text}}
				</view>
				
				<!-- 底部时间 -->
				<text class="card-phone">
					{{item.phone}}
				</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:'HotEvent',
		
		props:{
			hotEvents:{
				type:Array
			}
		}
	}
</script>

<style scoped>
	/* 最外层容器 */
	.hot-events-container {
		display:flex;
		flex-direction:column;
		justify-content: flex-start;
		align-items: center;
		
		margin-top:62rpx;
	}
	
	/* 页面顶部 */
	.hot-events-top {
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		align-items:center;
		
		width:100%;
	}
	
	/* 左侧标题容器 */
	.hot-events-top-title-wrap {
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		align-items:center;
		gap:18rpx;
	}
	
	/* 标题左侧细线 */
	.line {
		width:6rpx;
		height:32rpx;
		background: #0dc477;
		border-radius:999rpx;
	}
	
	/* 标题文本样式 */
	.hot-events-title {
		font-size:32rpx;
		font-weight:600;
		color:#000;
	}
	
	/* 查看更多文本样式 */
	.more {
		font-size:24rpx;
		font-weight:normal;
		color:#999;
	}
	
	/* 热门事件列表样式 */
	.hot-events-list {
		display:flex;
		flex-direction:column;
		justify-content:flex-start;
		align-items:center;
		gap:20rpx;
		
		width:100%;
		margin-top:32rpx;
	}
	
	/* 单个热门事件卡片 */
	.hot-events-card {
		width:100%;
		padding:28rpx 32rpx;
		border-radius:16rpx;
		box-sizing:border-box;
		
		display:flex;
		flex-direction:column;
		justify-content:flex-start;
		
		box-shadow:0rpx 10rpx 10rpx 0rpx rgba(0, 0, 0, 0.1);
		background: #fff;
	}
	
	/* 卡片标题文本 */
	.card-title {
		display:block;
		
		font-size:32rpx;
		font-weight:600;
		color:#000;
		
		/* 保证文本始终在一行显示，超出的内容用省略号表示 */
		/* white-space:no-wrap;
		overflow:hidden;
		text-overflow:ellipsis; */
	}
	
	/* 卡片中央文本内容 */
	.card-text {
		margin-top:21rpx;
		
		font-size:28rpx;
		font-weight:normal;
		color:#999;
	}
	
	/* 卡片底部联系电话 */
	.card-phone {
		margin-top:30rpx;
		
		font-size:24rpx;
		font-weight:normal;
		color:#058b52;
	}
</style>