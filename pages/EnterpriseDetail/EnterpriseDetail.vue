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
				<!-- 主营产品/服务 -->
				<view class="info-line">
				  <text class="basic-content-text">
					  <text class="label-text">主营产品/服务：</text>{{companyBasicInfo.product}}
				  </text>
				</view>
				
				<!-- 所属产业链 -->
				<view class="info-line">
				  <text class="basic-content-text">
					  <text class="label-text">所属产业链：</text>{{companyBasicInfo.chain}}
				  </text>
				</view>
				
				<!-- 产业链类型 -->
				<view class="info-line">
					<text class="basic-content-text">
						<text class="label-text">产业链类型：</text>{{companyBasicInfo.chainType}}
					</text>
				</view>
				
				<!-- 企业实力 -->
				<view class="info-line">
					<text class="basic-content-text">
						<text class="label-text">企业实力：</text>{{companyBasicInfo.capacity}}
					</text>
				</view>
			</view>
		</view>
		
		<!-- 分隔线 -->
		<view class="separate-line"></view>
		
		<!-- 底部企业简介 -->
		<view class="enterprise-intro-wrap">
			<!-- 上方企业简介标题 -->
			<view class="enterprise-intro-title">
				企业简介
			</view>
			
			<!-- 中央企业介绍文本 -->
			<view class="enterprise-intro-content">
				<view class="enterprise-intro-paragraph" v-for="(item,index) in companyIntro.text" :key="index">
					{{item}}
				</view>
			</view>
			
			<!-- 底部企业图片 -->
			<view class="enterprise-image-wrap">
				<view class="enterprise-image-border">
				    <image 
					  class="enterprise-image" 
					  src="/static/EnterpriseDetail/企业图片.png" 
					  mode="aspectFill" 
					/>
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
					chain:'现代家居产业链/木质家具',
					//产业链类型
					chainType:'供应链、制造链',
					//企业实力
					capacity:'规上企业、小巨人企业、专精特新企业'
				},
				
				//企业简介
				companyIntro:{
					text:[
						'赣州汇明木业有限公司，成立于2014年，位于江西省赣州市，是一家以从事家具制造业为主的企业。企业注册资本27696.6947万人民币，实缴本22094.274933万人民币。\n',
						'通过天眼查大数据分析，赣州汇明木业有限公司共对外投资了6家企业，参与招投标项目4次；知识产权方面有商标信息1条，专利信息63条，著作权6条；此外企业还拥有行政许可7个。'
					]
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

/* 包裹标签和文本内容的单项容器 */
.info-line {
	width:100%;
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
	box-sizing: border-box;
	
	display:flex;
	flex-direction:column;
	justify-content:flex-start;
}

/* 左侧标签和右侧企业详情文本的通用样式 */
.label-text,
.basic-content-text {
	font-size:28rpx;
	font-weight:400;
	line-height:1.8;
}

/* 左侧标签样式 */
.label-text {
	color:#666;
}

/* 右侧企业详情文本样式 */
.basic-content-text {
	display:block;
	width:100%;
	
	word-break:break-all;
	white-space: normal;
	color:#000;
}

/* 中央分隔线 */
.separate-line {
	width:100%;
	height:16rpx;
	
	background: #eee;
}

/* 底部企业简介最外层容器 */
.enterprise-intro-wrap {
	width:100%;
	height:100%;
	box-sizing: border-box;
	
	display:flex;
	flex-direction:column;
	justify-content: flex-start;
	
	background: #fff;
}

/* 上方企业简介标题 */
.enterprise-intro-title {
	width:100%;
	padding:34rpx;
	border-bottom:2rpx solid #eee;
	
	font-size:32rpx;
	font-weight:600;
	color:#000;
	line-height:1;
}

/* 中央介绍文本外层容器 */
.enterprise-intro-content {
	height:100%;
	padding:32rpx;
	box-sizing: border-box;
}

/* 中央企业介绍文本 */
.enterprise-intro-paragraph {
	width:100%;
	
	font-size:28rpx;
	font-weight:500;
	color:#666;
	line-height:1.8;
	
	/* 让文本两端对齐 */
	text-align: justify;
	/* 文本往后缩进2字符 */
	text-indent: 2rem;
	word-break: break-all;
}

/* 企业详情图片外层容器 */
.enterprise-image-wrap {
	width:100%;
	height:410rpx;
	box-sizing: border-box;
	
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

/* 企业详情图片内层边界 */
.enterprise-image-border {
	position: relative;
	width:calc(100% - 60rpx);
	height:100%;
}

/* 企业详情图片 */
.enterprise-image {
	position: absolute;
	inset:0;
	width:100%;
	height:100%;
}
</style>
