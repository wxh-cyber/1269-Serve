<template>
	<view class="search-list-container">
		<view 
		  class="card" 
			v-for="(item,index) in innersearchList" 
			:key="index" 
			@click="goDetail"
		>
			<!-- 卡片内部标题 -->
				<text class="item-title">{{item.companyName}}</text>
				
				<!-- 卡片中央内容 -->
				<view class="item-content-wrap">
					<!-- 内容左侧图片 -->
					<view class="item-content-bg-wrap">
						<image class="item-content-bg" :src="item.companyBg" mode="aspectFill" />
					</view>
					
					<!-- 内容右侧文本和下方标签 -->
					<view class="item-content-right-wrap">
						<!-- 右侧上方文本内容 -->
						<text class="item-content-text">
							{{item.companyIntro}}
						</text>
						
						<!-- 右侧下方并排标签 -->
						<view class="tag-wrap">
							<view 
							  class="tag"
								:class="index%2==0?'tag-orange':'tag-blue'"
								v-for="(tag,index) in item.companyTags"
								:key="index"
							>	
							  {{tag}}
							</view>
							<!-- <view class="tag tag-orange" >
								规上企业
							</view>
							<view class="tag tag-blue">
								现代家具
							</view> -->
						</view>
					</view>
				</view>
				
				<!-- 卡片底部，包括左侧企业地址和右侧企业类型 -->
				<view class="item-bottom-wrap">
					<!-- 左侧企业地址 -->
					<view class="enterprise-address-wrap">
						<!-- 企业地址左侧图标 -->
						<view class="enterprise-address-bg-wrap">
							<image class="enterprise-address-bg" src="/static/EnterpriseChain/企业地址.png" mode="aspectFill" />
						</view>
						
						<!-- 企业地址右侧文本 -->
						<text class="enterprise-address-text">
						  {{item.companyAddress}}
						</text>
					</view>
					
					<!-- 右侧企业类型 -->
					<view class="enterprise-type-wrap">
						<!-- 企业类型左侧图标 -->
						<view class="enterprise-type-bg-wrap">
							<image class="enterprise-type-bg" src="/static/EnterpriseChain/企业类型.png" mode="aspectFill" />
						</view>
						
						<!-- 企业类型右侧文本 -->
						<text class="enterprise-type-text">
						  {{item.companyType}}
						</text>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:'SearchList',
		
		props:{
			searchList:{
				type:Array
			}
		},
		
		data(){
			return {
				/**
				 *  @typedef {Array} companyTags 
				 *  @property {String} companyTag - 企业标签
				 */
				/**
				 *  @typedef {Object} searchListItem - 单个企业列表项
				 *  @property {String} companyName - 企业名称
				 *  @property {String} companyBg - 企业背景图
				 *  @property {String} companyIntro - 企业介绍
				 *  @property {companyTags} companyTags - 企业标签
				 *  @property {String} companyAddress - 企业地址
				 *  @property {String} companyType - 企业类型
				 */
				/**
				 *  @typedef innersearchList - 企业列表
				 *  @type {Array}
				 *  @property {searchListItem} searchListItem - 单个企业列表项
				 */
				innersearchList:[
					// {
					// 		companyName:'赣州汇明木业有限公司',
					// 		companyBg:'/static/EnterpriseSearch/企业列表图片.png',
					// 		companyIntro:'木制家具产品政府采购，省内企业优先考虑。',
					// 		companyTags:['规上企业','现代家具'],
					// 		companyAddress:'赣州市镜坝镇家具小镇',
					// 		companyType:'链主龙头企业'
					// 	},
					// 	{
					// 		companyName:'赣州汇明木业有限公司赣州汇明木业有限公司两行样式展示',
					// 		companyBg:'/static/EnterpriseSearch/企业列表图片.png',
					// 		companyIntro:'木制家具产品政府采购，省内企业优先考虑。',
					// 		companyTags:['规上企业'],
					// 		companyAddress:'赣州市镜坝镇家具小镇',
					// 		companyType:'链主龙头企业'
					// 	},
					// 	{
					// 		companyName:'赣州汇明木业有限公司赣州汇明木业有限公司两行样式展示',
					// 		companyBg:'/static/EnterpriseSearch/企业列表图片.png',
					// 		companyIntro:'木制家具产品政府采购，省内企业优先考虑。',
					// 		companyTags:['现代家具'],
					// 		companyAddress:'赣州市镜坝镇家具小镇',
					// 		companyType:'链主龙头企业'
					// 	}
					]
			}
		},
		
		watch:{
			searchList:{
				immediate:true,
				deep:true,
				handler(newVal){
					this.innersearchList=newVal.map( item => ({...item}));
				}
			}
		},
		
		methods:{
			/**
			 *  @function goDetail
			 *  @returns void 
			 *  @description 跳转到企业详情页面 
       */
			goDetail(){
				uni.navigateTo({
					url:'/pages/EnterpriseDetail/EnterpriseDetail'
				})
		}
	}
}
</script>

<style scoped>
	/* 最外侧企业搜索结果容器 */
	.search-list-container {
		margin-top:35rpx;
		width:calc(100% - 60rpx);
		height:100%;
		
		display:flex;
		flex-direction:column;
		justify-content:flex-start;
		align-items:center;
	}
	
	/* 单项搜索卡片样式 */
	.card {
		margin-bottom:22rpx;
		width:100%;
		height:100%;
		padding:32rpx 35rpx;
		box-sizing:border-box;
		border-radius:16rpx;
		
		display:flex;
		flex-direction:column;
		justify-content: flex-start;
		
		background: #fff;
		box-shadow:0rpx 10rpx 10rpx 0rpx rgba(0,0,0,0.1);
	}
	
	/* 列表卡片内部标题 */
	.item-title {
		font-size:32rpx;
		font-weight:600;
		color:#000;
		line-height:1.5;
	}
	
	/* 列表卡片内部内容 */
	.item-content-wrap {
		margin-top:36rpx;
		width:100%;
		height:100%;
		
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		/* 保证右侧文本内容靠上显示 */
		/* align-items:center; */
		/* 最小间隔宽度 */
		gap:32rpx;
	}
	
	/* 内容左侧图片外层容器 */
	.item-content-bg-wrap {
		position:relative;
		width:160rpx;
		height:150rpx;
		box-sizing: border-box;
		border-radius:8rpx;
		
		overflow:hidden;
	}
	
	/* 左侧图片 */
	.item-content-bg {
		position:absolute;
		inset:0;
		width:100%;
		height:100%;
	}
	
	/* 卡片右侧外层容器 */
	.item-content-right-wrap {
		flex:1;
		
		display:flex;
		flex-direction:column;
		justify-content: flex-start;
	}
	
	/* 右侧文本 */
	.item-content-text {
		flex:1;
		
		font-size:28rpx;
		font-weight:500;
		color:#999;
		line-height:1.2;
	}
	
	/* 右侧下方标签容器 */
	.tag-wrap {
		margin-top:32rpx;
		
		display:flex;
		flex-direction:row;
		justify-content:flex-start;
		align-items:center;
		gap:16rpx;
	}
	
	/* 标签样式 */
	.tag {
		width:140rpx;
		height:45rpx;
		box-sizing:border-box;
		border-radius:8rpx;
		
		display:flex;
		flex-direction:row;
		justify-content:center;
		align-items:center;
		
		font-size:24rpx;
		font-weight:500;
		
		background: #f6f6f6;
	}
	
	/* 左侧橙色字体 */
	.tag-orange {
		color:#f88563;
	}
	
	/* 右侧蓝色字体 */
	.tag-blue {
		color:#62aae7;
	}
	
	/* 列表卡片底部 */
	.item-bottom-wrap {
		margin-top:34rpx;
		width:100%;
		height:100%;
		
		display:flex;
		flex-direction:row;
		justify-content:space-between;
	}
	
	/* 左侧企业地址外层容器 */
	.enterprise-address-wrap {
		display:flex;
		flex-direction:row;
		justify-content:flex-start;
	  align-items:center;
	}
	
	/* 企业地址图标外层容器 */
	.enterprise-address-bg-wrap {
		position:relative;
		width:25rpx;
		height:25rpx;
		margin-right:10rpx;
	}
	
	/* 企业地址图标 */
	.enterprise-address-bg {
		position: absolute;
		inset:0;
		width:100%;
		height:100%;
	}
	
	/* 企业地址文本 */
	.enterprise-address-text {
		font-size:24rpx;
		font-weight:400;
		color:#999;
		line-height: 1;
	}
	
	/* 右侧企业类型外层容器 */
	.enterprise-type-wrap {
		display:flex;
		flex-direction:row;
		justify-content:flex-end;
		align-items:center;
	}
	
	/* 右侧企业类型图标外层容器 */
	.enterprise-type-bg-wrap {
		position:relative;
		width:25rpx;
		height:25rpx;
		margin-right:10rpx;
	}
	
	/* 企业类型图标 */
	.enterprise-type-bg {
		position:absolute;
		inset:0;
		width:100%;
		height:100%;
	}
	
	/* 企业类型右侧文本 */
	.enterprise-type-text {
		font-size:24rpx;
		font-weight:400;
		color:#000;
		line-height:1;
	}
</style>