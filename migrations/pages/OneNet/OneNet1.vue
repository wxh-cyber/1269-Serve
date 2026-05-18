<template>
	<view class="container">
		<!-- 页面顶部，包括顶部标题和左上角箭头 -->
		<view class="top">
			<!-- 左侧箭头 -->
			<text class="arrow" @click="goBack"><</text>
			
			<!-- 中央标题 -->
		    <view class="title">工信专区</view>
		</view>
		
		<!-- 上侧卡片区域 -->
		<view class="cards-container">
			<!-- 事件在线办理 -->
			<view class="event-online-wrap">
				<image class="event-online-bg" src="../../static/OneNet/事件在线办理背景图.png" />
				<view class="event-online-text">事项在线办理、查询</view>
				
				<!-- 底部两个按钮的容器 -->
				<view class="event-online-button-wrap">
					<!-- 申报在线办理容器 -->
					<view class="apply-online-wrap">
						<!-- 申报在线办理背景按钮图 -->
						<image src="../../static/OneNet/申报在线办理按钮.png" class="apply-online-bg" />
						<text class="apply-online-text">申报在线办理</text>
						<image class="item-arrow" src="/static/OneNet/申报在线办理带背景箭头.png" mode="aspectFill" />
					</view>
					
					<!-- 事项办件查询容器 -->
					<view class="event-item-search-wrap">
						<!-- 事项办件查询背景按钮图 -->
						<image src="../../static/OneNet/事项办件查询按钮.png" class="event-item-search-bg" />
						<text class="event-item-search-text">事项办件查询</text>
						<image class="item-arrow" src="/static/OneNet/事件办项查询带背景箭头.png" mode="aspectFill" />
					</view>
				</view>
			</view>
			
			<!-- 我的代办 -->
			<view class="my-plan">
				<!-- 我的代办背景图片 -->
				<image class="my-plan-img" src="/static/OneNet/我的办件背景图.png" mode="aspectFill" />
				
				<text class="my-plan-person">我的办件</text>
				<text class="my-plan-enterpise">企业服务一网通办</text>
				<!-- 下方我的代办点击进入按钮 -->
				<view class="click-enter-wrap">
					<image class="click-enter-bg" src="/static/OneNet/我的办件点击进入按钮.png" mode="aspectFill" />
					<text class="click-enter-text">点击进入</text>
				</view>
				
			</view>
		</view>
		
		<!-- 中央主题列表 -->
		<ThemesList :themes="themes" />
		
		<!-- 底部热点事件列表 -->
		<HotEvents :hotEvents="hotEvents" />
	</view>
</template>

<script setup>
import ThemesList from '../../components/OneNet/ThemesList.vue';
import HotEvents from '../../components/OneNet/HotEvents.vue';	

// 中央主题菜单信息
const themes=[
	{
		id:1,
		title:'行政许可',
		icon:'../../static/OneNet/行政许可.png'	
	},
	{
		id:2,
		title:'行政确认',
		icon:'../../static/OneNet/行政确认.png'	
	},
	{
		id:3,
		title:'公共服务',
		icon:'../../static/OneNet/公共服务.png'	
	}
];

// 底部热点事件信息
const hotEvents=[
	{
		id:1,
		title:'新型墙体材料产品认定申请-首次申请认定',
		text:'窗口地址：江西省南昌市红谷滩区北龙蟠街993号方楼省政务服务中心三层27、28窗口',
		phone:'联系电话：0791-86739741'
	},
	{
		id:2,
		title:'新型墙体材料产品认定申请-有效期满重新认定',
		text:'窗口地址：江西省南昌市红谷滩区北龙蟠街993号方楼省政务服务中心三层27、28窗口',
		phone:'联系电话：0791-86739741'
	},
	{
		id:3,
		title:'江西省预拌混凝土和预拌砂浆生产企业及产品目录查询',
		text:'窗口地址：江西省南昌市红谷滩区北龙蟠街993号方楼省政务服务中心三层27、28窗口',
		phone:'联系电话：0791-86739741'
	},
	{
		id:4,
		title:'省级两化融合示范企业认定',
		text:'窗口地址：江西省南昌市红谷滩区北龙蟠街993号方楼省政务服务中心三层27、28窗口',
		phone:'联系电话：0791-86739741'
	},
	{
		id:5,
		title:'民用爆炸物品安全生产许可',
		text:'窗口地址：江西省南昌市红谷滩区北龙蟠街993号方楼省政务服务中心三层27、28窗口',
		phone:'联系电话：0791-86739741'
	}
];

/**
 * @function goBack 返回上一页
 * @returns void
 * @description 点击左上角箭头返回上一页
 */ 
const goBack=()=>{
	uni.navigateBack();
}
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
	justify-content: center;
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
	
	display:flex;
	flex-direction:column;
	justify-content: center;
	
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
	/* 从最左侧横向排列 */
	justify-content: flex-start;
	gap:20rpx;
	
	margin-bottom:30rpx;
}

/* 申报在线办理容器 */
.apply-online-wrap {
	position:relative;
	width:260rpx;
	height:54rpx;
	margin-left:42rpx;
	border-radius:999rpx;
	
	display:flex;
	flex-direction:row;
	justify-content:flex-start;
	align-items: center;
}

/* 申报在线办理按钮图片 */
.apply-online-bg {
	position:absolute;
	inset:0;
	width:100%;
	height:100%;
	z-index:1;
}

/* 申报在线办理文本和事件办项查询文本的公共样式 */
.apply-online-text,
.event-item-search-text {
	margin-left:35rpx;
	
	line-height:1;
	/* 保证文本不换行 */
	white-space:nowrap;
	z-index:2;
}

/* 申报在线办理文本 */
.apply-online-text {
	display:inline-block;
	margin-right:15rpx;
	
	font-size:28rpx;
	font-weight:500;
	color:#fff;
}

/* 事项在线办理底部两个按钮中的箭头样式 */
.item-arrow {
	display:relative;
	width:29rpx;
	height:29rpx;
	
	z-index:2;
}

/* 事项办件查询容器 */
.event-item-search-wrap {
	position:relative;
	width:260rpx;
	height:54rpx;
	border-radius:999rpx;
	
	display:flex;
	flex-direction:row;
	justify-content: flex-start;
	align-items: center;
}

/* 事项办件查询背景 */
.event-item-search-bg {
	position:absolute;
	inset:0;
	width:100%;
	height:100%;
	z-index:1;
}

/* 事项办件查询文本 */
.event-item-search-text {
	display:inline-block;
	margin-right:15rpx;
	
	font-size:28rpx;
	font-weight:500;
	color:#058b52;
}

/* 我的代办外层容器 */
.my-plan {
	position:relative;
	display:flex;
	flex-direction:column;
	justify-content: flex-start;
	align-items: flex-start;
	
	width:690rpx;
	height:170rpx;
	padding:20rpx 0 0 42rpx;
	border-radius:16rpx;
	box-sizing: border-box;
	
	overflow:hidden;
	
	box-shadow:0 10rpx 10rpx 0 rgba(0,0,0,0.1);
}

/* 我的代办内层背景图片 */
.my-plan-img {
	position:absolute;
	inset:0;
	width:100%;
	height:100%;
	z-index:1;
}

/* 我的办件文本 */
.my-plan-person {
	position:relative;
	margin-bottom:8rpx;
	
	font-size:32rpx;
	font-weight:bold;
	color:#fff;
	z-index:2;
}

/* 企业服务一网通办 */
.my-plan-enterpise {
	position:relative;
	margin-bottom:8rpx;
	
	font-size:24rpx;
	font-weight: normal;
	color:#fff;
	z-index:2;
}

/* 点击进入外部容器 */
.click-enter-wrap {
	position:relative;
	width:147rpx;
	height:37rpx;
	
	/* 考虑到右上角，不设置边框 */
	
	display:flex;
	justify-content: center;
	align-items: center;
}

/* 点击进入外部容器内部按钮背景 */
.click-enter-bg {
	position:absolute;
	inset:0;
	width:100%;
	height:100%;
	z-index:1;
}

/* 按钮内部点击进入文本 */
.click-enter-text {
	position:absolute;
	
	font-size:24rpx;
	font-weight:normal;
	color:#0dc477;
	z-index:2;
}
</style>

