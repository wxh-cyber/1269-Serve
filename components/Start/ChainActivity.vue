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
			<view class="news-card">
				<!-- 新闻卡片内部标题 -->
				<text class="new-card-inner-title"></text>
				
				<!-- 新闻卡片内部内容 -->
				<view class="news-card-inner-wrap">
					<!-- 卡片左侧图片 -->
					<view class="news-card-img-wrap">
						<image src="" class="news-card-img" mode="aspectFill" />
					</view>
					
					<!-- 卡片右侧文本 -->
					<view class="news-card-text-wrap">
						<!-- 文本靠上主要内容 -->
						<view></view>
						<!-- 文本靠下日期 -->
						<text></text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style scoped>
/* 外层包裹样式 */
.news-container {
	display:flex;
	flex-direction:column;
	align-items:space-between;
	
	padding:63rpx 30rpx;
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
	background: #0dc477;
	border-radius:50%;
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
}

/* 单个最外层新闻卡片 */
.news-card {
	width:100%;
	height:320rpx;
	background: #fff;
	border-radius:16rpx;
	
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	align-items:center;
	
	padding:30rpx;
}

/* 新闻卡片内部标题 */
.new-card-inner-title {
	font-size:32rpx;
	font-weight:bold;
	color:#000;
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
	width:150rpx;
	height:150rpx;
	background: #fff;
	border-radius:16rpx;
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
	
}
</style>