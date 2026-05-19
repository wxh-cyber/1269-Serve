<template>
	<!-- 产业链动态组件 -->
	<view class="news-container">
		<!-- 页面顶部区域，包含左侧页面标题和右侧查看更多 -->
		<view class="news-top">
			<!-- 包裹产业链动态标题的容器 -->
			<view class="chain-news-wrap">
				<view class="line"></view>
				<text class="news-title">产业链动态</text>
			</view>
			
			<!-- 查看更多 -->
			<text class="more">
				查看更多 >
			</text>
		</view>
		
		<!-- 下方新闻动态列表 -->
		<view class="news-list">
			<!-- 单个新闻卡片 -->
			<view class="news-card" v-for="(item,index) in newsList" :key="item.id">
				<!-- 新闻卡片内部标题 -->
				<text class="new-card-inner-title">{{item.title}}</text>
				
				<!-- 新闻卡片内部内容 -->
				<view class="news-card-inner-wrap">
					<!-- 卡片左侧图片 -->
					<view class="news-card-img-wrap">
						<image :src="item.image" class="news-card-img" mode="aspectFill" />
					</view>
					
					<!-- 卡片右侧文本 -->
					<view class="news-card-text-wrap">
						<!-- 文本靠上主要内容 -->
						<view class="news-card-text-content">{{item.text}}</view>
						<!-- 文本靠下日期 -->
						<text class="date">{{item.date}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'ChainActivity',
		
		props:{
			newsList: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style scoped>
	/* 外层包裹样式 */
	.news-container {
		display:flex;
		flex-direction:column;
		/* 注意：align-items没有space-between这个属性值 */
		/* align-items:space-between; */
		
		margin:63rpx 30rpx;
		border-radius:16rpx;
		background:transparent;
	}
	
	/* 页面顶部区域样式 */
	.news-top {
		display:flex;
		justify-content:space-between;
	}
	
	/* 包裹产业链动态标题的容器 */
	.chain-news-wrap {
		display:flex;
		align-items:center;
	}
	
	/* 产业链动态标题左侧绿色竖线 */
	.line {
		width:6rpx;
		height:32rpx;
		margin-right:10rpx;
		background: #0dc477;
		border-radius:999rpx;
	}
	
	/* 产业链动态标题样式 */
	.news-title {
		font-size:32rpx;
		font-weight:bold;
		color:#000;
	}
	
	/* 查看更多 */
	.more {
		font-size:24rpx;
		font-weight:normal;
		color:#999;
	}
	
	/* 新闻动态列表 */
	.news-list {
		display:flex;
		flex-direction:column;
		justify-content: space-between;
		align-items:center;
		/* 卡片间距 */
		gap:25rpx;
		
		margin-top:30rpx;
		padding:0 30rpx;
	}
	
	/* 单个最外层新闻卡片 */
	.news-card {
		width:100%;
		height:auto;
		padding:30rpx;
		background: #fff;
		box-sizing:border-box;
		border-radius:16rpx;
		
		display:flex;
		flex-direction:column;
		justify-content:space-between;
		align-items:center;
		
		box-shadow:0rpx 10rpx 10rpx rgba(0,0,0,0.1);
	}
	
	/* 新闻卡片内部标题 */
	.new-card-inner-title {
		width:100%;
		display:block;
		
		font-size:32rpx;
		font-weight:bold;
		color:#000;
		
		/* 文本不自动换行 */
		white-space:nowrap;
		/* 隐藏超出的文本内容 */
		overflow:hidden;
		/* 超出内容用省略号表示 */
		text-overflow:ellipsis;
	}
	
	/* 包裹新闻卡片内部内容的容器 */
	.news-card-inner-wrap {
		width:100%;
		height:100%;
		
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		align-items:center;
		gap:32rpx;
	}
	
	/* 包裹卡片中图片的外层容器 */
	.news-card-img-wrap {
		position:relative;
		width:150rpx;
		height:150rpx;
		background: #fff;
		border-radius:16rpx;
		
		/* 保证圆角能够正常显示 */
		overflow:hidden;
	}
	
	/* 新闻卡片图片样式 */
	.news-card-img {
		position:absolute;
		inset:0;
		width:100%;
		height:100%;
	}
	
	/* 卡片右侧文本容器 */
	.news-card-text-wrap {
		display:flex;
		flex-direction:column;
		flex:1;
		
		margin-top:30rpx;
		/* 本身通过gap保持间距 */
		/* margin-left:30rpx; */
	}
	
	/* 卡片内部文本区域 */
	.news-card-text-content {
	 	margin-bottom:20rpx;
		
		font-size:28rpx;
		font-weight:normal;
		color:#999;
	}
	
	/* 卡片底部日期文本样式 */
	.date {
		/* 子元素在横轴上靠右 */
		align-self:flex-end;
		/* 注意在flex布局中，float会失效 */
		/* float:right; */
	
		font-size:24rpx;
		font-weight:normal;
		color:#999;
	}
</style>