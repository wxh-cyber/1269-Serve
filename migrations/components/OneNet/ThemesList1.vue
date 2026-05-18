<template>
	<!-- 最外层包裹容器 -->
	<view class="themes-container">
		<!-- 顶部，包括左侧标题和右侧更多 -->
		<view class="top">
			<!-- 左侧标题 -->
			<view class="top-title-wrap">
				<view class="line"></view>
				<text class="top-title-text">主题分类</text>
			</view>
			
			<!-- 右侧查看更多 -->
			<text class="more">查看更多 ></text>
		</view>
		
		<!-- 下部主题列表 -->
		<view class="themes-list">
			<!-- 单个主题项容器 -->
			<view class="themes-item" v-for="(item,index) in themes" :key="item.id">
				<!-- 上方图标容器 -->
				<view class="item-icon-wrap">
					<image class="item-icon-bg" :src="item.icon" mode="aspectFill" />
					<image class="item-icon-bottom" src="../../static/OneNet/底部阴影.png" />
				</view>
				<!-- 下部标题 -->
				<text class="item-title">{{item.title}}</text>
			</view>
		</view>
		
	</view>
</template>

<script setup>
defineProps({
	themes: {
		type: Array,
		required:true
	}
});
</script>

<style scoped>
	/* 最外层容器 */
	.themes-container {
		margin-top:64rpx;
		
		display:flex;
		flex-direction:column;
		justify-content: flex-start;
		align-items:center;
}

/* 顶部，包括左侧标题和右侧加载更多 */
.top {
	width:100%;
	
	display:flex;
	flex-direction:row;
	justify-content:space-between;
  align-items: center;
	
	margin-bottom:30rpx;
}

/* 左侧主体分类标题容器 */
.top-title-wrap {
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

/* 左侧标题 */
.top-title-text {
	font-size:32rpx;
	font-weight:600;
	color:#000;
}

/* 右侧查看更多 */
.more {
	font-size:24rpx;
	font-weight:normal;
	color:#999;
}

/* 主题列表容器 */
.themes-list {
	display:flex;
	flex-direction:row;
	justify-content: space-between;
	align-items:center;
	gap:18rpx;
	
	width:100%;
}

/* 单个主题项容器 */
.themes-item {
	width:219rpx;
	height:136rpx;
	box-sizing:border-box;
	border:1rpx solid #7eceae;
	border-radius:16rpx;
	
	display:flex;
	flex-direction:column;
	justify-content: flex-start;
	align-items:center;
	
	/* 保证底部阴影能正常显示 */
  /* overflow:hidden; */
	
	background:linear-gradient(
	  to bottom,
		#e4f6ec 0%,
		#fff 100%
	);
	box-shadow:0rpx 10rpx 10rpx 0 rgba(0,0,0,0.1);
}

/* 上方图标容器 */
.item-icon-wrap {
	position:relative;
	width:42rpx;
	height:42rpx;
	
	margin-top:23rpx;
	z-index:1;
}

/* 单项图标背景 */
.item-icon-bg {
	position:absolute;
	inset:0;
	width:100%;
	height:100%;
	
	z-index:3;
}

/* 单项图标底部阴影 */
.item-icon-bottom {
	position:absolute;
	width:48rpx;
	height:12rpx;
	bottom:-6rpx;
	left:50%;
	transform:translateX(-50%);
	
	z-index:2;
}

/* 下部标题 */
.item-title {
	margin-top:20rpx;
	
	font-size:26rpx;
	font-weight:600;
	color:#058b52;
}
</style>