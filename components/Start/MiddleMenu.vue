<template>
	<!-- 菜单最外层容器 -->
	<view class="menu-container">
		<!-- 菜单内部单个的列表项 -->
		<view class="menu-item" v-for="(item,index) in middleList">
			<!-- 包裹内容的容器 -->
			<view class="inner-content">
				<!-- 包裹图标的容器 -->
				<view class="item-icon-wrap">
					<image class="item-icon-bg" src="/static/Start/产业链图谱图标背景.png" />
					<image class="item-icon" :src="item.icon" />
				</view>
				
				<!-- 下方文字说明 -->
				<text class="item-text">{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
defineProps({
	middleList:{
		type:Array,
		required:true
	}
});
</script>

<style scoped>
/* 外层菜单容器样式 */
.menu-container {
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	padding:44rpx 30rpx;
	gap:15rpx;
}

/* 单个菜单项样式 */
.menu-item {
	position:relative;
	width:220rpx;
	height:222rpx;
	border-radius:16rpx;
	
	/* 菜单单项内部布局 */
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	align-items:center;
	
	box-shadow:0rpx 5rpx 10rpx 0rpx rgba(0, 0, 0, 0.1);
	/* 菜单项背景 */
	background:linear-gradient(
	  to bottom,
		rgba(39,170,114,0.75) 0%,
		rgba(39,170,114,0.18) 42%,
		#f6fbf7 70%,
		#fff 100%
	);
}

/* 包裹内容的容器样式 */
.inner-content {
	position:relative;
	width:auto;
	margin-top:36rpx;
	
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
}

/* 包裹单项图标图片容器 */
.item-icon-wrap {
	position:relative;
	width:80rpx;
	height:80rpx;
	border-radius:50%;
	margin-bottom:30rpx;
	background: #fff;
	z-index:2;
	box-shadow: 0rpx 5rpx 10rpx 0rpx rgba(0, 0, 0, 0.1);
}

/* 单项图标图片背景 */
.item-icon-bg {
	position:absolute;
	inset:0;
	width:100%;
	height:100%;
}

/* 单项图标 */
.item-icon {
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	
	width:44rpx;
	height:44rpx;
}

/* 下方文字样式 */
.item-text {
	font-size:25rpx;
	font-weight:500;
	color:#000;
}
</style>