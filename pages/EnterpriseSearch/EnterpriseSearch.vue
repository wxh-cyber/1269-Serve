<template>
	<view class="search-container">
		<!-- 顶部，包括左侧下拉库和右侧搜索部分 -->
		<!-- 左侧下拉框 -->
		<view class="search-top">
			<view class="select-bar" @click="toggleCategory">
				<text class="select-text">{{this.selectedCategory}}</text>
				<u-icon
				  :name="showCategory?'arrow-up-fill':'arrow-down-fill'"
					size="14"
					color="#000"
				>
				</u-icon>
			</view>
			
			<!-- 中央搜索框 -->
			<view class="search-box">
				<u-icon name="search" size="29" color="#b2b2b2"></u-icon>
				<u--input
				  v-model="searchKeyWord"
					class="search-input"
					fontSize="28rpx"
					color="#000"
				  placeholder="输入关键字查询"
					placeholder-class="placeholder"
					border="none"
				></u--input>
			</view>
			
			<!-- 搜索框右侧搜索文本 -->
			<text class="search-text">搜索</text>
			
			<!-- 局部下拉框 -->
			<view class="select-dropdown" v-if="showCategory">
				<!-- 下拉框内部单项 -->
				<view 
				  class="select-dropdown-item"
					@click="selectCategory(item)"
					v-for="(item,index) in categoryList" 
					:key="index"
				>
					<text class="select-dropdown-item-text">{{item.name}}</text>
				</view>
			</view>
		</view>
		
		<!-- 打开下拉框时，出现遮罩层 -->
		<view class="dropdown-mask" v-if="showCategory" @click="showCategory=false">
		</view>
		
		<!-- 底部企业列表 -->
		<SearchList :searchList="filteredSearchList" />
		
	</view>
</template>

<script>
	import SearchList from '../../components/EnterpriseSearch/SearchList.vue';
	
	export default {
		components:{
			SearchList
		},
		
		data() {
			return {
				//是否展现下拉框内容
				showCategory:false,
				
				//搜索关键字
				searchKeyWord:'',
				
				//产业类型列表
				categoryList:[
					{
						id:1,
						name:'现代家具',
					},
					{
						id:2,
						name:'规上企业'
					}
				],
				
				//被选中的产业类型
				selectedCategory:'现代家具',
				
				/**
				 *  @typedef {Array} companyTags 
				 *  @property {String} companyTag - 企业标签
				 */
				/**
				 *  @typedef {Object} searchListItem - 单个企业列表项
				 *  @property {String} companyName - 企业名称
				 *  @property {String} companyBg - 企业背景图
				 *  @property {String} companyIntro - 企业介绍
				 *  @property {String} companyAddress - 企业地址
				 *  @property {String} companyType - 企业类型
				 *  @property {companyTags} companyTags - 企业标签
				 */
				/**
				 *  @typedef {Object} searchListItem - 单个企业列表项
				 *  @property {String} companyName - 企业名称
				 *  @property {String} companyBg - 企业背景图
				 *  @property {String} companyIntro - 企业介绍
				 *  @property {String} companyAddress - 企业地址
				 *  @property {String} companyType - 企业类型
				 */
				/**
				 *  @typedef searchList - 企业列表
				 *  @type {Array}
				 *  @property {searchListItem} searchListItem - 单个企业列表项
				 */
				searchList:[
					{
						companyName:'赣州汇明木业有限公司',
						companyBg:'/static/EnterpriseSearch/企业列表图片.png',
						companyIntro:'木制家具产品政府采购，省内企业优先考虑。',
						companyTags:['规上企业','现代家具'],
						companyAddress:'赣州市镜坝镇家具小镇',
						companyType:'链主龙头企业'
					},
					{
						companyName:'赣州汇明木业有限公司赣州汇明木业有限公司两行样式展示',
						companyBg:'/static/EnterpriseSearch/企业列表图片.png',
						companyIntro:'木制家具产品政府采购，省内企业优先考虑。',
						companyTags:['规上企业'],
						companyAddress:'赣州市镜坝镇家具小镇',
						companyType:'链主龙头企业'
					},
					{
						companyName:'赣州汇明木业有限公司赣州汇明木业有限公司两行样式展示',
						companyBg:'/static/EnterpriseSearch/企业列表图片.png',
						companyIntro:'木制家具产品政府采购，省内企业优先考虑。',
						companyTags:['现代家具'],
						companyAddress:'赣州市镜坝镇家具小镇',
						companyType:'链主龙头企业'
					}
				]
			}
		},
		
		computed:{
			//根据关键字筛选企业列表
			filteredSearchList(){
				//首先获取到企业类型和关键字
				const category=this.selectedCategory;
				const keyword=this.searchKeyWord;
				
				return this.searchList.filter(item => {
					//先筛选企业类型
					const isMatchCategory=item.companyTags.includes(category);
					
					//再筛选企业名称
					const isMatchName=item.companyName.includes(keyword);
					
					return isMatchCategory&&isMatchName;
				});
			}
		},
		
		methods: {
			/**
			 *  @function toggleCategory
			 *  @returns void
			 *  @description 改变下拉框是否可见 
       */
			toggleCategory(){
				this.showCategory=!this.showCategory;
			},
			
			/**
			 *  @function selectCategory 
			 *  @params {Object} item
			 *  @returns void
			 *  @description 选择下拉框中的某一项
       */
			selectCategory(item){
				//更新选中类型
				this.selectedCategory=item.name;
				//关闭下拉框
				this.showCategory=false;
	   	}
		}
  }
</script>

<style scoped>
/* 最外层容器 */
.search-container {
	width:100%;
	min-height:100vh;
	
	background:#f3f4f8;
	
	display:flex;
	flex-direction:column;
	justify-content:flex-start;
	align-items:center;
}

/* 顶部容器 */
.search-top {
	position:relative;
	margin-top:35rpx;
	width:calc(100% - 60rpx);
	height:100%;
	box-sizing:border-box;
	
	display:flex;
	flex-direction:row;
	align-items: center;
}

/* 下拉框样式 */
.select-bar {
	width:142rpx;
	
	display:flex;
	flex-direction:row;
	justify-content:center;
	align-items: center;
}

/* 下拉框文本样式 */
.select-text {
	margin-right:8rpx;
	
	font-size:28rpx;
	font-weight:400;
	color:#000;
	line-height:1;
}

/* 搜索框外层容器 */
.search-box {
	flex:1;
	height:75rpx;
	padding:0 32rpx;
	margin-left:22rpx;
	box-sizing: border-box;
	border-radius:999rpx;
	
	display:flex;
	flex-direction:row;
	justify-content:flex-start;
	align-items:center;
	
	background: #fff;
}

/* 搜索框样式 */
.search-input {
	flex:1;
	height:28rpx;
}

/* 搜索框内部占位符样式 */
.placeholder {
	font-size:28rpx;
	font-weight:400;
	color:#b2b2b2;
	line-height: 1;
}

/* 搜索框右侧搜索文本 */
.search-text {
	margin-left:20rpx;
	
	font-size:28rpx;
	font-weight:400;
	color:#0dc477;
	line-height: 1;
}

/* 局部下拉库样式 */
.select-dropdown {
	position:absolute;
	top:62rpx;
	width:142rpx;
	box-sizing: border-box;
	
	display:flex;
	flex-direction:column;
	justify-content:flex-start;
	align-items:center;
	
	background: #fff;
	z-index:50;
}

/* 下拉框内部单项样式 */
.select-dropdown-item {
	width:100%;
	height:80rpx;
	border-bottom:1rpx solid #b2b2b2;
	
	display:flex;
	flex-direction:row;
	justify-content:center;
	align-items: center;
}

/* 下拉框内部单项文本样式 */
.select-dropdown-item-text {
	font-size:28rpx;
	font-weight:400;
	color:#000;
	line-height:1;
}

/* 打开下拉框时出现的遮罩层 */
.dropdown-mask {
	position:fixed;
	left:0;
	right:0;
	top:164rpx;
	bottom:0;
	
	background: rgba(0,0,0,0.8);
	z-index:10;
}

</style>
