<template>
	<view class="container">
		<!-- 页面顶部，包括顶部标题和左上角箭头 -->
		<view class="top">
			<!-- 左侧箭头 -->
			<text class="arrow"><</text>
			
			<!-- 中央标题 -->
		    <view class="title">工信专区</view>
		</view>
		
		<!-- 上侧卡片区域 -->
		<view class="cards-container">
			<!-- 事件在线办理 -->
			<view class="event-online-wrap">
				<image class="event-online-bg" src="/static/OneNet/事件在线办理背景图.png" />
				<view class="event-online-text">事项在线办理、查询</view>
				
				<!-- 底部两个按钮的容器 -->
				<view class="event-online-button-wrap">
					<!-- 申报在线办理容器 -->
					<view class="apply-online-wrap">
						<image src="/static/OneNet/申报在线办理按钮.png" class="apply-online-bg" />
					</view>
					
					<!--  -->
					<view class="">
						
					</view>
				</view>
			</view>
			
			<!-- 我的代办 -->
			<view class="my-plan">
				
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style scoped>
/* 最外层容器样式 */
.container {
	min-height:100vh;
	box-sizing:border-box;
	padding:30rpx;
	
	background:linear-gradient(
	  to bottom,
	  rgba(39, 170, 114, 1) 0%,
	  rgba(39, 170, 114, 0.18) 42%,
	  #f6fbf7 70%,
	  #ffffff 100%
	);
} 

/* 页面顶部样式 */
.top {
	position:relative;
	display:block;
	margin-bottom: 67rpx;
}

/* 左侧箭头样式 */
.arrow {
	position:absolute;
	left:0;
	top:0;
	
	font-size:30rpx;
	font-weight:normal;
	color:#fff;
}

/* 顶部标题样式 */
.title {
	position:absolute;
	left:50%;
	transform: translateX(-50%);
	
	font-size:30rpx;
	font-weight:bold;
	color:#fff;
}

/* 外层卡片容器 */
.cards-container {
	display:flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap:30rpx;
}

/* 事件在线办理外层容器 */
.event-online-wrap {
	position:relative;
	width:690rpx;
	height:200rpx;
	box-sizing:border-box;
	border:1px solid #fff;
	border-radius:16rpx;
	
	overflow:hidden;
	
	box-shadow:0 10rpx 10rpx 0 rgba(0,0,0,0.1);
}

/* 事件在线办理图片 */
.event-online-bg {
	position:absolute;
	inset:0;
	width:100%;
	height:110%;
	z-index:0;
}

/* 事项在线办理文本 */
.event-online-text {
	position:absolute;
	display:block;
	margin-top:50rpx;
	margin-left:42rpx;
	margin-bottom:25rpx;
	
	font-size:38rpx;
	font-weight:bold;
	color:#2c7548;
	
	z-index:1;
}

/* 底部两个按钮的容器 */
.event-online-button-wrap {
	display:flex;
	flex-direction: row;
	justify-content: center;
}

/* 申报在线办理容器 */
.apply-online-wrap {
	position:relative;
	width:260rpx;
	height:54rpx;
	border-radius:999rpx;
}

/* 申报在线办理按钮图片 */
.apply-online-bg {
	position:absolute;
	inset:0;
	width:100%;
	height:100%;
	z-index:1;
}
</style>
