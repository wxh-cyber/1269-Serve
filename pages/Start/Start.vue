<template>
	<view class="container">
		<!-- 顶部标题 -->
		<view class="title">1269服务专区</view>

		<!-- 卡片模块区域 -->
		<view class="modules">
			<!-- 左侧申请企业上链 -->
			<view class="apply-chain" @click="applyChain">
				<image class="img-occupy" src="/static/Start/申请企业上链.png" mode="aspectFill" />

				<!-- 卡片内部信息模块 -->
				<view class="left-card-inner">
					<text class="small-text">申请</text>
					<text class="big-text">企业上链</text>
					<view class="btn">上链申请</view>
				</view>
			</view>

			<!-- 右侧两个垂直的申请信息 -->
			<view class="apply-information">
				<!-- 右侧上部蓝色卡片 -->
				<view class="card blue" @click="goEnterpriseChain">
					<!-- 卡片背景 -->
					<image class="img-occupy" src="/static/Start/上链企业数.png" mode="aspectFill" />

					<!-- 卡片内部信息 -->
					<view class="right-card-inner">
						<view class="right-text-group">
							<text class="right-title">上链企业数</text>
							<view class="right-count-row">
								<text class="right-count">2008</text>
								<text class="right-unit">家</text>
							</view>
						</view>

						<!-- 卡片右侧图标 -->
						<view class="right-icon-wrap">
							<image class="right-icon" src="/static/Start/企业.png" mode="aspectFill" />
						</view>
					</view>

				</view>

				<!-- 右侧下部绿色卡片 -->
				<view class="card green">
					<!-- 卡片背景 -->
					<image class="img-occupy" src="/static/Start/产业链图谱.png" mode="aspectFill" />

					<!-- 卡片内部信息 -->
					<view class="right-card-inner">
						<view class="green-card-text-wrap">
							<!-- 上侧标题 -->
							<text class="right-title">产业链图谱</text>

							<!-- 下侧胶囊按钮区域 -->
							<view class="green-card-pill-wrap">
								<image class="green-card-pill-bg" src="/static/Start/产业链图谱圆角矩形.png" mode="aspectFill" />
								<text class="green-card-pill-text">点击进入</text>
							</view>
						</view>

						<!-- 卡片右侧图标 -->
						<view class="green-card-icon-wrap">
							<image class="green-card-icon-bg" src="/static/Start/产业链图谱图标背景.png" mode="aspectFill" />
							<image class="green-card-icon" src="/static/Start/知识图谱.png" mode="aspectFill" />
						</view>

					</view>
				</view>

			</view>
		</view>

		<!-- 中央菜单 -->
		<MiddleMenu :middleList="middleList" />

		<!-- 底部产业链动态 -->
		<ChainActivity :newsList="newsList" />
	</view>
</template>

<script>
	import MiddleMenu from '../../components/Start/MiddleMenu.vue';
	import ChainActivity from '../../components/Start/ChainActivity.vue';

	export default {
		name:'Start',
		
		components: {
			MiddleMenu,
			ChainActivity
		},
		
		data() {
			return {
				//中间菜单列表
				middleList: [
					{
						id: 1,
						text: '一网通办',
						icon: '../../static/Start/一网通办图标.png',
						url: '/pages/OneNet/OneNet'
					},
					{
						id: 2,
						text: '产业链介绍',
						icon: '../../static/Start/产业链介绍图标.png',
						url: '/pages/OneNet/OneNet'
					},
					{
						id: 3,
						text: '产业链政策',
						icon: '../../static/Start/产业链政策图标.png',
						url: '/pages/OneNet/OneNet'
					}
				],

				//底部新闻列表
				newsList: [
					{
						id: 1,
						title: '2024年中央驻赣单位支持南昌高质量发行...',
						text: '为进一步提升我省水上搜救能力，推动全省水上搜救工作整体协同发展，近日，省高航中心举办2024...',
						date: '8月15日',
						image: '../../static/Start/产业链动态图片.png'
					},
					{
						id: 2,
						title: '2024年中央驻赣单位支持南昌高质量发行...',
						text: '为进一步提升我省水上搜救能力，推动全省水上搜救工作整体协同发展，近日，省高航中心举办2024...',
						date: '8月15日',
						image: '../../static/Start/产业链动态图片.png'
					}
				]
			}
		},
		
		methods: {
			/**
			 *  @function applyChain
			 *  @description 点击左侧申请企业上链卡片时触发
			*/
       applyChain(){
				 uni.navigateTo({
					url: '/pages/ApplyChain/ApplyChain'
				})
			 },
			 
			 /**
				*  @function goEnterpriseChain
				*  @description 前往企业上链 
        */
			 goEnterpriseChain(){
				 uni.navigateTo({
					url: '/pages/EnterpriseChain/EnterpriseChain'
				})
			 }
		}
	}
</script>

<style scoped>
/* 外层容器样式 */
.container {
  min-height: 100vh;
  box-sizing: border-box;
  padding: 65rpx 0 80rpx;

  /* 定义背景颜色 */
  background: linear-gradient(
    to bottom,
    rgba(39, 170, 114, 1) 0%,
    rgba(39, 170, 114, 0.18) 42%,
    #f6fbf7 70%,
    #ffffff 100%
  );
}

/* 标题样式 */
.title {
  color: #ffffff;
  font-size: 48rpx;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
}

/* 卡片模块区域样式 */
.modules {
  width: 100%;
  max-width: 750rpx;
  box-sizing: border-box;
  margin: 72rpx auto 0;
  padding: 0 30rpx;

  display: flex;
  align-items: stretch;
  gap: 30rpx;
}

/* 卡片模块区域在H5端的适配 */
/* #ifdef H5 */
@media screen and (max-width:768px) {
	.modules {
		max-width:none;
		padding:0 24rpx;
		gap:30rpx;
	}
}

@media screen and (max-width:560px) {
	.modules {
		flex-direction:column;
	}
}
/* #endif */

/* 左右两侧卡片的公用样式 */
.apply-chain,
.apply-information {
  /* flex: 1; */
	width:100%;
  min-width: 0;
}

/* 左侧申请企业上链样式 */
.apply-chain {
  position: relative;
	/* 采用flex:1;之后，不要再写死宽度 */
  /* width:330rpx; */
  height:349rpx;
  box-sizing: border-box;
  border-radius: 16rpx;
  overflow: hidden;
  
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 10rpx 10rpx rgba(0, 0, 0, 0.10);
}

/* 申请企业上链在H5端的适配 */
/* #ifdef H5 */
@media screen and (max-width:768px) {
	.apply-chain {
		height:349rpx;
	}
}

@media screen and (max-width:560px) {
	.apply-chain {
		height:340rpx;
	}
}
/* #endif */

/* 右侧申请信息样式 */
.apply-information {
  display: flex;
  flex-direction: column;
  gap: 30rpx;
	
	height:349rpx;
}

/* 右侧申请信息样式在H5端的适配 */
/* #ifdef H5 */
@media screen and (max-width:560px) {
	.apply-information {
		gap:30rpx;
	}
}
/* #endif */

/* 卡片样式 */
.card {
	flex:1;
  position:relative;
  display:flex;
  /* 设置flex布局为水平，以保证文本和图标的正常排列 */
  flex-direction:row;
  
	/* 外层容器已经在横向上保证了flex，所以此处不必写死宽度 */
  /* width:330rpx; */
  min-height: 160rpx;
  border-radius: 16rpx;
  overflow: hidden;
  
  box-shadow:0rpx 10rpx 10rpx rgba(0,0,0,0.1);
}

/* 卡片样式在H5端的适配 */
/* #ifdef H5 */
@media screen and (max-width:768px) {
	.card {
		min-height:150rpx;
	}
}

@media screen and (max-width:560px) {
	.card {
		min-height:160rpx;
	}
}
/* #endif */

/* 卡片背景图样式 */
.img-occupy {
  position:absolute;
  width: 100%;
  height: 100%;
  inset:0;
}

/* 保证占满，仅在H5端进行处理，考虑跨端兼容性 */
/* #ifdef H5 */
:deep(.img-occupy img) {
  display: block;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}
/* #endif */

/* 蓝色卡片边框 */
.blue {
	background:linear-gradient(135deg,#3aa6ff,#6ec6ff);
}

/* 绿色卡片边框 */
.green {
	background:linear-gradient(135deg,#2bb673,#3fd38a);
}

/* 卡片内部信息样式 */
.left-card-inner {
	position:relative;
	display:flex;
	flex-direction:column;
	
	height:100%;
	padding-left:30rpx;
	padding-top:52rpx;
	box-sizing:border-box;
	z-index:2;
}

/* 左侧卡片较小字体 */
.small-text {
	font-size:30rpx;
	font-weight:bold;
	color:#77502f;
}

/* 左侧卡片较大字体 */
.big-text {
	font-size:36rpx;
	font-weight:bold;
	color:#77502f;
	margin-bottom:33rpx;
}

/* 上链申请按钮样式 */
.btn {	
	display:flex;
	justify-content:center;
	align-items:center;
	
	width:143rpx;
	height:37rpx;
	box-sizing: border-box;
	padding:8rpx 24rpx;
	/* 让外形呈现出胶囊效果 */
	border-radius:9999rpx;
	
	background: #a37955;
	
	font-size:23rpx;
	font-weight:bold;
    color:#fff;
}

/* 右侧包含卡片内信息的容器 */
.right-card-inner {
	position:relative;
	width:100%;
	box-sizing:border-box;
	
	display:flex;
	flex-direction:row;
	align-items: center;
	justify-content:space-between;
	/* 此处不设置gap，而是通过内部的margin保持距离 */
	gap:0;
	
	margin-left:0;
	margin-top:0;
	padding:33rpx 30rpx;
	z-index:2;
}

/* 右侧两卡片内部文本容器的通用样式 */
.right-text-group,
.green-card-text-wrap {
	flex:1;
	min-width:0;
}

/* 右侧包裹卡片文本容器的样式 */
.right-text-group {
	display:flex;
	flex-direction:column;
	gap:35rpx;
}

/* 上链企业数标题样式 */
.right-title {
	font-size:30rpx;
	font-weight:bold;
	color:#fff;
	white-space:nowrap;
}

/* 企业数统计区域样式 */
.right-count-row{
	display:flex;
	align-items:baseline;
}

/* 企业数统计数字样式 */
.right-count {
	font-size:30rpx;
	font-weight:bold;
	color:#fff;
}

/* 企业统计单位样式 */
.right-unit {
	margin-left:8rpx;
	
	font-size:21rpx;
	font-weight:bold;
	color:#fff;
}

/* 包裹上链企业图标容器 */
.right-icon-wrap {
	position: relative;
	/* 不进行缩放 */
	flex:0 0 81rpx;
	
	width:81rpx;
	height:81rpx;
	border-radius:50%;
	background: #fff;

  margin-left:30rpx;
}

/* 上链企业图标样式 */
.right-icon {
	position:absolute;
	top:50%;
	left:50%;
	transform: translate(-50%,-50%);
	
	width: 42rpx;
	height: 40rpx;
}

/* 绿色卡片文本容器样式 */
.green-card-text-wrap {
	display:flex;
	flex-direction:column;
	gap:35rpx;
}

/* 绿色卡片胶囊按钮区域样式 */
.green-card-pill-wrap {
	position: relative;
	width:143rpx;
	height:37rpx;
	border-radius:9999rpx;
	
	/* 直接通过flex布局确定间距 */
	/* margin-top:30rpx;
	margin-bottom:20rpx; */
	
	overflow:hidden;
}

/* 绿色胶囊背景图片样式 */
.green-card-pill-bg {
	position:absolute;
	inset:0;
	width:100%;
	height:100%;
}

/* 绿色胶囊内部文本样式 */
.green-card-pill-text {
	position:relative;
	width:100%;
	height:100%;
	
	display:flex;
	justify-content:center;
	align-items:center;
	
	font-size:23rpx;
	font-weight:bold;
	color:#fff;
}

/* 包裹绿色卡片图标容器样式 */
.green-card-icon-wrap {
	position: relative;
	/* 绿色卡片图标禁止压缩 */
	flex:0 0 80rpx;
	width:80rpx;
	height:80rpx;
	border-radius:50%;
	background: #fff;
	/* 直接由flex布局控制右侧距离边缘距离 */
	/* right:30rpx; */
	z-index:2;
}

/* 绿色卡片图标背景样式 */
.green-card-icon-bg {
	position:absolute;
	inset:0;
	width:100%;
	height:100%;
}

/* 绿色卡片图标样式 */
.green-card-icon {
	position:absolute;
	top:50%;
	left:50%;
	width: 41rpx;
	height: 41rpx;
	transform:translate(-50%,-50%);
}

</style>