<template>
	<view class="detail-container">
		<!-- 上侧企业基本情况 -->
		<view class="enterprise-info-wrap">
			<text class="enterprise-title-text">{{companyInfo.companyName}}</text>
			<text class="enterprise-common-text">所在地：{{companyInfo.region}}</text>
			<text class="enterprise-common-text">联系人：{{companyInfo.person}}</text>
			<text class="enterprise-common-text">联系电话：{{companyInfo.phone}}</text>
			<text class="enterprise-common-text">详细地址{{companyInfo.companyAddress}}</text>
		</view>
		
		<!-- 中央企业概况 -->
		<view class="enterprise-basic-wrap">
			<!-- 企业概况 -->
			<view class="enterprise-basic-title">
				企业概况
			</view>
			<view class="enterprise-basic-content">
				<view class="info-line">
				  <text class="label-text">主营产品/服务：</text>
					<text class="basic-content-text">{{companyBasicInfo.product}}</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//上方企业信息
				companyInfo:{
					//公司名称
					companyName:'赣州汇明木业有限公司',
					//所在地
					region:'江西省赣州市南康区',
					//联系人
					person:'杨卫军',
					//联系电话
					phone:'15717070007',
					//详细地址
					companyAddress:'赣州市镜坝镇家具小镇',
				},
				
				//中央企业概况
				companyBasicInfo:{
					//主营产品和服务
					product:'板、密度板制造与销售；板材贴面板、密度板制造与销售',
					//所属产业链
					chain:'',
					//产业链类型
					chainType:'',
					//企业实力
					capacity:''
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	/* 企业详情最外层容器 */
.detail-container {
	width:100%;
	min-height:100vh;
  box-sizing: border-box;
	
	display:flex;
	flex-direction: column;
	justify-content: flex-start;
	
	background: #0dc477;
}

/* 上链企业基本情况外层容器 */
.enterprise-info-wrap {
	height:100%;
	padding:32rpx;
	
	display:flex;
	flex-direction:column;
	justify-content:flex-start;
}

/* 企业名称文本 */
.enterprise-title-text {
	margin-bottom:35rpx;
	
	font-size:32rpx;
	font-weight:600;
	color:#fff;
	line-height:1;
}

/* 多行相似的文本样式 */
.enterprise-common-text {
	margin-bottom:24rpx;
	
	font-size:24rpx;
	font-weight:400;
	color:#fff;
	line-height:1;
}

/* 中央企业概况容器 */
.enterprise-basic-wrap {
	width:100%;
	box-sizing: border-box;
	border-top-left-radius:16rpx;
	border-top-right-radius:16rpx;
	
	display:flex;
	flex-direction:column;
	justify-content:flex-start;
	
	background: #fff;
}

/* 企业概况标题 */
.enterprise-basic-title {
	width:100%;
	padding:34rpx;
	border-bottom:2rpx solid #eee;
	
	font-size:32rpx;
	font-weight:600;
	color:#000;
	line-height:1;
}

/* 企业概况具体内容 */
.enterprise-basic-content {
	padding:32rpx;
	width:100%;
	height:100%;
	
	display:flex;
	flex-direction:column;
	justify-content:flex-start;
}

/* 每一个属性文本单独占据一行 */
.info-line {
	display:block;
	
}

/* 左侧标签和右侧企业详情文本的通用样式 */
.label-text,
.basic-content-text {
	font-size:28rpx;
	font-weight:400;
	line-height:1.5;
}

/* 左侧标签样式 */
.label-text {
	color:#666;
}

/* 右侧企业详情文本样式 */
.basic-content-text {
	color:#000;
}
</style>
