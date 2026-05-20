<template>
	<!-- 最外层容器 -->
	<view class="page">
		
		<!-- 包裹表单容器 -->
		<view class="content">
	  	<!-- 页面表单 -->
	  	<u--form 
		    labelPosition="left" 
			  :model="model1"
			  ref="uForm"
			>
			  <!-- 企业名称 -->
				<!-- 由于已经自定义了开头标签，故此处不在采用原生标签 -->
		  	<u-form-item prop="info.companyName"  class="form-item-input" borderBottom>
					<!-- 自定义开头标签 -->
					<view class="label-wrap">
						<text class="required">*</text>
						<text class="label-text">企业名称</text>
					</view>
		  		<u--input 
					  v-model="model1.info.companyName" 
						inputAlign="right"
						fontSize="28rpx"
						color="#707070"
						placeholder="请输入企业名称" 
						border="none"
					></u--input>
		  	</u-form-item>
				
				<!-- 所属地区 -->
				<u-form-item prop="info.region"  class="form-item-input" borderBottom>
					<view class="label-wrap">
						<text class="required">*</text>
						<text class="label-text">所属地区</text>
					</view>
					<u--input 
						v-model="model1.info.region" 
						inputAlign="right"
						fontSize="28rpx"
						color="#707070"
						placeholder="请选择所属地区" 
						border="none"
					></u--input>
				</u-form-item>
				
			  <!-- 社会信用代码 -->
				<u-form-item prop="info.companyCode" class="form-item-input"  borderBottom>
					<view class="label-wrap">
						<text class="required">*</text>
						<text class="label-text">社会信用代码</text>
					</view>
					<u--input 
						v-model="model1.info.companyCode" 
						inputAlign="right"
						fontSize="28rpx"
						color="#707070"
						placeholder="请输入社会信用代码" 
						border="none"
					></u--input>
				</u-form-item>
				
				<!-- 联系人 -->
				<u-form-item prop="info.person" class="form-item-input" borderBottom>
					<view class="label-wrap">
						<text class="label-text">联系人</text>
					</view>
					<u--input 
						v-model="model1.info.person" 
						inputAlign="right"
						fontSize="28rpx"
						color="#707070"
						placeholder="请输入联系人" 
						border="none"
					></u--input>
				</u-form-item>
				
				<!-- 联系人电话 -->
				<u-form-item prop="info.phone" class="form-item-input" borderBottom>
					<view class="label-wrap">
						<text class="label-text">联系人电话</text>
					</view>
					<u--input 
						v-model="model1.info.phone" 
						inputAlign="right"
						fontSize="28rpx"
						color="#707070"
						placeholder="请输入联系人电话" 
						border="none"
					></u--input>
				</u-form-item>
				
				<!-- 详细地址 -->
				<u-form-item prop="info.address">
					<!-- 如果将form-item-textarea挂载在根节点上，由于u-form-item内部还有子容器，因此无法达到最终效果 -->
					<view class="form-item-textarea">
						<!-- 上方标签 -->
				  	<view class="textarea-label-wrap">
		  				<text class="required">*</text>
				  		<text class="label-text">详细地址</text>
			  		</view>
						
						<!-- 下部文本框 -->
						<view class="textarea-box">
							<!-- u-form-item 默认内部是横向布局，u--textarea 会被压缩，所以要把这一个表单项单独“撑满整行” -->
	  	        <u--textarea 
			  		    v-model="model1.info.address"
								fontSize="28rpx"
								fontWeight="500"
								color="#000"
				  			placeholder="请输入详细地址"
								border="surround"
		  					height="75"
								style="background:#f8f8f8;"
			  	  	></u--textarea>
						</view>
					</view>
				</u-form-item>
				
        <!-- 主营产品和服务 -->
				<u-form-item prop="info.address">
					<view class="form-item-textarea">
						<!-- 上方标签 -->
						<view class="textarea-label-wrap">
							<text class="required">*</text>
							<text class="label-text">主营产品/服务</text>
						</view>
						
						<!-- 下方文本框 -->
						<view class="textarea-box">
							<!-- u-form-item 默认内部是横向布局，u--textarea 会被压缩，所以要把这一个表单项单独“撑满整行” -->
						  <u--textarea 
						    v-model="model1.info.product"
								fontSize="28rpx"
								fontWeight="500"
								color="#000"
								placeholder="请输入产品服务"
								border="surround"
								height="75"
								style="background:#f8f8f8"
							></u--textarea>
						</view>
					</view>
				</u-form-item>
				
				<!-- 中央分隔线 -->
				<view class="separate-line"></view>
				
				<!--  申请产业链列表-->
				<ChainList 
				  :total="total" 
					:chainApplyList="model1.info.chainApplyList" 
					@change="handleChainListChange"
				/>
				
		  </u--form>
		</view>
		
	</view>
</template>

<script>
import ChainList from '../../components/ApplyChain/ChainList.vue';	
	
export default {
	components:{
		ChainList
	},
	
	data(){
		return {
			model1:{
				// 表单中的相关信息
				info:{
					  //企业名称
				  	companyName:'',
			  		//所属地区
			  		region:'',
			  		//社会信用代码
			  		companyCode:'',
					  //联系人
						person:'',
						//联系人电话
						phone:'',
						//详细地址
						address:'',
						// 主营产品和服务
						product:'',
						//申请产业链列表
						chainApplyList:[
							{
								id:1,
								//所属产业链
								industryChain:'现代家具产业链/木制家具',
								//主营方向
								businessDirection:''
							},
							{
								id:2,
								//所属产业链
								industryChain:'现代家具产业链/木制家具',
								//主营方向
								businessDirection:''
							}
						]
				}
			},
			
		}
	},

  computed:{
		//产业链列表长度
		total(){
			return this.model1.info.chainApplyList.length;
		}
	},
	
	methods:{
		/**
		 *  @function handleChainListChange
		 *  @description 产业链列表发生改变时触发
		 *  @param {Array} newList 产业链列表
		 *  @return {void}
     */
		handleChainListChange(newList){
			this.model1.info.chainApplyList = newList;
		}
	}
}
</script>

<style scoped>
	/* 最外层容器 */
.page {
	min-height: 100vh;
}

/* 包裹表单容器 */
.content {
	padding:0 28rpx;
}

/* 单个的表单输入框通用样式 */
.form-item-input {
	height:90rpx;
}

/* 开头标签容器和文本框标签容器的公共样式 */
.label-wrap,
.textarea-label-wrap{
	display:flex;
	flex-direction: row;
	align-items:center;
}

/* 必须存在 */
.required {
	margin-right:2rpx;
	
	font-size:28rpx;
	font-weight:normal;
	line-height:1;
	color:#ff2a2a;
}

/* 标签文本样式 */
.label-text {
	font-size:28rpx;
	font-weight:500;
	line-height:1;
	color:#000;
}

/* 文本框标签容器 */
.textarea-label-wrap {
	margin-bottom:35rpx;
}

/* 带文本框的容器 */
.form-item-textarea {
	display:flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	
	width:100%;
}

/* 包裹文本框的容器 */
.textarea-box {
	width:100%;
	box-sizing:border-box;
}

/* 给当前已有的u-textarea组件设置自定义样式 */
/* .textarea-box :deep(.u-textarea) {
	min-height:160rpx !important;
	box-sizing:border-box;
	
	background-color: #f8f8f8 !important;
} */

/* 注意：u-textarea实际上内部嵌套了多层节点 */
/* .textarea-box :deep(.u-textarea__field) {
	min-height:160rpx !important;
	background-color: transparent !important;
} */

/* 中央分隔线 */
.separate-line {
	width:calc(100%+56rpx);
	height:16rpx;
	margin-left:-28rpx;
	margin-top:30rpx;
	
	background-color:#eee;
}
</style>
