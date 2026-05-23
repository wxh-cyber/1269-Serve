<template>
	<view class="enterprise-container">
		<!-- 最顶部区域，包括左侧箭头和中央标题 -->
		<view class="top">
			<!-- 左侧箭头 -->
			<view class="left-arrow" @click="goBack"><</view>
			<!-- 中央标题 -->
			<text class="top-title">上链企业</text>
		</view>
		
		<!-- 上部企业上链模块 -->
		<view class="enterprise-chain-wrap">
			<!-- 左侧文本区域 -->
			<view class="enterprise-chain-left-wrap">
				<text class="enterprise-title">企业上链</text>
				<view class="enterprise-chain-btn">
					<text class="apply-rightnow">立即申请</text>
				</view>
			</view>
			
			<!-- 右侧图片区域 -->
			<view class="enterprise-chain-right-wrap">
				<view class="enterprise-chain-bg-wrap">
					<image class="enterprise-chain-bg" src="/static/EnterpriseChain/上链企业.png" mode="aspectFill" />
				</view>
			</view>
		</view>
		
		<!-- 中央行业展示区域 -->
		<!-- 在卡片外层包裹一层容器，实现边框的渐变效果 -->
		<view class="industry-card-bg">
		  <view class="industry-card" @click="goSearch">
	  		<!-- 内部单项 -->
	  		<view class="industry-item" v-for="(item,index) in industryList" :key="index" >
		      <!-- 单项图片 -->
			  	<view class="industry-item-bg-wrap">
			  		<view class="industry-item-icon-wrap">
			  	  	<image class="industry-item-bg" :src="item.icon" mode="aspectFill" />
			  		</view>
				  </view>
				
			  	<!-- 底部文本 -->
			  	<text class="industry-title">{{item.title}}</text>
		  	</view>
		  </view>
		</view>
		
		<!-- 下方企业列表 -->
		<EnterpriseList :goSearch="goSearch" />
		
	</view>
</template>

<script>
import EnterpriseList from '../../components/EnterpriseChain/EnterpriseList.vue';
	
export default {
	components:{
		EnterpriseList
	},
	
	data(){
		return {
			//行业列表
			industryList:[
				{
					title:'电子信息',
					icon:'/static/EnterpriseChain/电子信息.png'
				},
				{
					title:'有色金属',
					icon:'/static/EnterpriseChain/有色金属.png'
				},
				{
					title:'装备制造',
					icon:'/static/EnterpriseChain/装备制造.png'
				},
				{
					title:'新能源',
					icon:'/static/EnterpriseChain/新能源.png'
				},
				{
				  title:'石油化工',
					icon:'/static/EnterpriseChain/石油化工.png'
				},
				{
					title:'建材',
					icon:'/static/EnterpriseChain/建材.png'
				},
				{
					title:'钢铁',
					icon:'/static/EnterpriseChain/钢铁.png'
				},
				{
					title:'航空',
					icon:'/static/EnterpriseChain/航空.png'
				},
				{
					title:'食品',
					icon:'/static/EnterpriseChain/食品.png'
				},
				{
					title:'纺织服装',
					icon:'/static/EnterpriseChain/纺织服装.png'
				},
				{
					title:'医药',
					icon:'/static/EnterpriseChain/医药.png'
				},
				{
					title:'现代家具',
					icon:'/static/EnterpriseChain/现代家具.png'
				}
			]
		}
	},
	
	methods:{
		/**
		 *  @function goBack
		 *  @returns void
		 *  @description 返回首页 
     */
		goBack(){
			uni.navigateBack({
				url:'/pages/Start/Start'
			});
		},
		
		/**
		 *  @function goSearch
		 *  @returns void
		 *  @description 跳转到企业搜索页面 
     */
		goSearch(){
			uni.navigateTo({
				url:'/pages/EnterpriseSearch/EnterpriseSearch'
			});
		}
	}
}
</script>

<style scoped>
/* 外部容器 */
.enterprise-container {
	width: 100%;
	min-height:100vh;
	box-sizing:border-box;
	
	display:flex;
	flex-direction:column;
	justify-content:flex-start;
	align-items: center;
	
	background: linear-gradient(
	  to bottom,
		rgba(39, 170, 114, 1) 0%,
		rgba(39, 170, 114, 0.18) 42%,
		#f6fbf7 70%,
		#ffffff 100%
	);
}

/* 顶部容器 */
.top {
	margin-top:67rpx;
	width:calc(100% - 60rpx);
	height:100%;
	
	display:flex;
	flex-direction:row;
	justify-content:center;
	align-items:center;
}

/* 左上角箭头 */
.left-arrow {
	position:absolute;
	left:30rpx;
	
	font-size:34rpx;
	font-weight:500;
	color:#fff;
}

/* 顶部标题 */
.top-title {
	font-size:34rpx;
	font-weight:500;
	color:#fff;
}

/* 企业上链模块外层容器 */
.enterprise-chain-wrap {
	width:calc(100% - 60rpx);
	height:231rpx;
	
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	align-items: center;
}

/* 企业上链模块左侧容器 */
.enterprise-chain-left-wrap {
	margin-left:34rpx;
	height:100%;
	
	display:flex;
	flex-direction:column;
	justify-content:flex-end;
}

/* 企业上链标题 */
.enterprise-title {
	font-size:43rpx;
	font-weight:bold;
  color:#fff;
	line-height:1;
}

/* 底部白色按钮 */
.enterprise-chain-btn {
	margin-top:31rpx;
	margin-bottom:35rpx;
	width:196rpx;
	height:54rpx;
	box-sizing:border-box;
	border-radius:999rpx;
	
	background: #fff;
	display:flex;
	justify-content:center;
	align-items: center;
}

/* 立即申请文本 */
.apply-rightnow {
	font-size:27rpx;
	font-weight:normal;
	color:#2dcb88;
	line-height:1;
}

/* 包裹右侧图片外层容器 */
.enterprise-chain-right-wrap {
	width:208rpx;
	height:100%;
	margin-right:24rpx;
	
	display:flex;
	flex-direction:column;
	justify-content:flex-end;
}

/* 包裹右侧图片的内层容器 */
.enterprise-chain-bg-wrap {
	position:relative;
	width:208rpx;
	height:204rpx;
}

/* 企业上链图片 */
.enterprise-chain-bg {
	position:absolute;
	inset:0;
	width:100%;
	height:100%;
}

/* 中央行业展示区域外部卡片 */
.industry-card {
	margin-top:8rpx;
	width:100%;
	height:100%; 
	padding-top:38rpx;
	padding-bottom:38rpx;
	box-sizing: border-box;
	border-radius:12rpx;
	/* border:1rpx solid #fff; */
	/* 
	   注意：不要在Uniapp中采用border-image来实现边框渐变效果。
		 因为对圆角支持不好，且在不同端表现不稳定。
	 */
	/* border-image:linear-gradient(45deg,#d0ede3,#90d6ba); */
	
	display:grid;
	grid-template-columns:repeat(4,1fr);
	row-gap:37rpx;
	
	background: linear-gradient(
	  to bottom,
		#8dd1b8 0%,
		#d4efe6 42%,
		#f6fbf7 70%,
		#ffffff 100%
	);
	box-shadow:0rpx 10rpx 10rpx 0rpx rgba(0,0,0,0.1);
}

/* 卡片容器外侧背景 */
.industry-card-bg {
	width:calc(100% - 60rpx);
	height:100%;
	padding:2rpx;
	border-radius:14rpx;
	background: linear-gradient(45deg,#d0ede3,#90d6ba);
	
	display:flex;
	justify-content:center;
	align-items:center;
}

/* 内部单项最外层容器 */
.industry-item {
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
}

/* 包裹单项图片容器 */
.industry-item-bg-wrap {
	width:93rpx;
	height:93rpx;
	box-sizing:border-box;
	border-radius:999rpx;
	
	display:flex;
	justify-content:center;
	align-items: center;
	
	background:#fff;
	box-shadow:0 10rpx 10rpx 0 #beebda;
}

/* 包裹内层图标的容器 */
.industry-item-icon-wrap {
	position:relative;
	width:48rpx;
	height:48rpx;
}

/* 内部图标样式 */
.industry-item-bg {
	position:absolute;
	inset:0;
	width:100%;
	height:100%;
	
	/* 保证图标始终位于中央区域 */
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
}

/* 底部行业文本 */
.industry-title {
	margin-top:27rpx;
	
	font-size:27rpx;
	font-weight:500;
	color:#000;
	line-height:1;
}
</style>
