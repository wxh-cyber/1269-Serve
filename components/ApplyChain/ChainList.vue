<template>
	<!-- 产业链列表最外层容器 -->
	<view class="chain-list-container">
		<!-- 单个卡片对象 -->
	  <view class="chain-list-item" v-for="(item,index) in innerChainApplyList" :key="item.id">
	    <!-- 只有多项时，才显示分组头部 -->
	   <view class="group-head" v-if="showGroupHead">
  	    <!-- 左侧产业链标题容器 -->
		    <view class="chain-list-title-wrap">
		    	<!-- 左侧带序号绿色原点 -->
		    	<view class="dot">
	  		  	<text class="dot-index">{{index+1}}</text>
			    </view>
		    	<!-- 产业链标题 -->
		    	<text class="chain-list-title">产业链</text>
	  	  </view>
			
		    <!-- 右侧删除按钮 -->
		    <view class="delete-button-wrap" @click="deleteChainApplyItem(index)">
			    <!-- 删除图标 -->
	  	  	<image class="delete-icon" src="/static/ApplyChain/删除按钮图标.png" mode="aspectFill" />
	  	  	<!-- 删除文本 -->
	  	  	<text class="delete-text">删除</text>
		  	</view>
	  	</view>
		
	  	<!-- 单项下方列表 -->
		  <u--form ref="uForm" :model="item" :rules="rules" labelPosition="left">
				
				<!-- 所属产业链 -->
				<u-form-item 
				  prop="industryChain" 
					class="form-item-input"
					@click="openChainType(index)"
					borderBottom>
					<!-- 自定义左侧标签 -->
					<view class="label-wrap">
						<text class="required">*</text>
						<text class="label-text">所属产业链</text>
					</view>
					
					<!-- 选择产业链类型 -->
					<!-- 选择产业链类型输入框 -->
					<!-- <u--input 
					  v-model="innerInfo.industryChain"
						placeholder="请选择产业链类型"
						inputAlign="right"
						fontSize="28rpx"
						color="#fff"
						border="none"
						disabled
						diabledColor="#fff"
					>
					</u--input> -->
					<!-- 输入框右侧箭头 -->
					<!-- <u-icon slot="right" name="arrow-right"></u-icon> -->
					
					<!-- 采用自定义内容块实现类似输入框的效果 -->
					<view class="select-wrap" @click="openChainType(index)">
						<text 
						  class="select-field-text"
							:class="item.industryChain?'selectedChainType-text':'noselectedChainType-text'"
						>
						  {{item.industryChain||'请选择产业链类型'}}
						</text>
						<u-icon name="arrow-right"></u-icon>
					</view>
					
					<!-- 采用底部下拉框进行选择 -->
					<u-action-sheet 
					  :show="showChainType" 
						:actions="chainTypeList"
						title="请选择产业链类型"
						@close="closeChainType"
						@select="selectChainType"
					>
					</u-action-sheet>
				</u-form-item>
				
				<!-- 主营方向 -->
				<u-form-item prop="businessDirection">
					<view class="form-item-textarea">
						<!-- 上方标签 -->
						<view class="textarea-label-wrap">
							<text class="required">*</text>
							<text class="label-text">主营方向</text>
						</view>
						
						<!-- 下方多行文本框 -->
						<view class="textarea-box">
						  <u--textarea
					  	  v-model="item.businessDirection"
				  			placeholder="请输入主营方向"
		  					:height="75"
						  	fontSize="28rpx"
								fontWeight="500"
			  				border="surround"
								style="background:#f8f8f8 ;"
								confirm-type="return"
				  		>
						  </u--textarea>
						</view>
					</view>
				</u-form-item>
				
			</u--form>
			
			<!-- 卡片下方分隔线 -->
			<view class="separate-line" v-if="index!=total-1"></view>
		</view>
		
		<!-- 所有卡片下方的添加按钮 -->
		<view class="add-chain-wrap">
			<view class="add-chain-button" @click="addChainApplyItem">
				<image class="add-button-icon" src="/static/ApplyChain/增加按钮图标.png" mode="aspectFill" />
				<text class="add-button-text">增加上链申请</text>
			</view>
		</view>
		
	</view>
</template>

<script>
export default {
	name: 'ChainList',
	
	props:{
		//列表长度
		total: {
			type: Number,
			default: 1
		},
		
		//产业链列表
		chainApplyList: {
			type: Array,
			default: () => []
		},
		
	},
	
	data() {
		return {			
			/**
			 *   @typedef innerChainApplyListItem - 单个产业链信息项
			 *   @type {Object}
			 *   @property {String} id - 产业链信息项id
			 *   @property {String} industryChain - 所属产业链
			 *   @property {String} businessDirection - 主营方向
       */
			/**
			 *   @typedef innerChainApplyList - 子组件内部产业链列表 
			 *   @type {Array}
			 *   @property {innerChainApplyListItem} innerChainApplyListItem - 单个产业链信息项
       */
			innerChainApplyList:[],
			
			//是否显示产业链类型选择框
			showChainType: false,
			
			//当前操作项状态层
			activeIndex:-1,
			
			//产业链类型列表
			//每个产业链单项都是一个独立的对象
			chainTypeList:[
				{name:'现代家具产业链/木制家具'},
				{name:'电子信息产业链/半导体产业链'}
			],
			
			//表单校验规则
			rules:{
				//所属产业链
				'industryChain':{
					type:'string',
					required:true,
					message:'请选择产业链类型',
					trigger:['blur','change']
				},
				//主营方向
				'businessDirection':{
					type:'string',
					required:true,
					message:'请输入主营方向',
					trigger:['blur','change']
				}
			}
		}
	},
	
	computed:{
		//是否显示分组头部
		showGroupHead() {
			return this.total > 1;
		}
	},
	
	watch:{
		// 子组件内部动态监听列表变化
		chainApplyList:{
			immediate:true,
			deep:true,
			/**
			 *  @function handler - 监听列表变化
			 *  @param {Array} val - 监听到的列表
			 *  @returns void
			 *  @description 监听列表变化，将父组件传递过来的列表赋值给子组件内部列表
       */
			handler(val){
				this.innerChainApplyList=val.map(item => ({...item}) );
			}
		}
	},
	
	methods: {
		/**
		 *  @function selectChainType - 选择产业链类型
		 *  @param {Object} action - 选择的产业链类型
		 *  @description 选择产业链类型，将选中的类型赋值给内部信息
		 *  @returns void 
     */
		selectChainType(action) {
			//无有效索引，则直接退出
			if(this.activeIndex<0) {
				this.closeChainType();
				return;
			}
			
			//获取当前操作箱索引
			let index = this.activeIndex;
			this.innerChainApplyList[index].industryChain = action.name;
			this.showChainType = false;
		
			//向父组件传递变化
			this.emitChainListChange();
			
			//手动触发表单校验规则
			this.validateField(index,'industryChain');
			
			this.closeChainType();
		},
		
		/**
		 *  @function validateField
		 *  @param {Number} index - 当前操作项索引
		 *  @param {String} prop - 当前操作项属性
		 *  @returns void
		 *  @description 手动触发当前表单的校验规则，属于局部校验
     */
		validateField(index,prop){
			this.$nextTick(()=>{
				//将当前的表单对象统一加工成数组
				const forms=Array.isArray(this.$refs.uForm)?this.$refs.uForm:[this.$refs.uForm];
				//获取到当前被选中的表单单项
				const form=forms[index];
				
				//如果当前单项存在，且具有校验规则
				if(form &&form.validateField) {
					form.validateField(prop);
				}
			});
		},
		
		/**
		 *  @function validate
		 *  @returns Promise
		 *  @description 对当前表单进行校验，返回Promise对象
     */
		validate(){
			const forms=Array.isArray(this.$refs.uForm)?this.$refs.uForm:[this.$refs.uForm];
			
			/**
			 *  如何理解这里的每个单项的form.validate()方法？
			 *  form.validate()是uView表单组件自带的方法。
			 *  具体过程如下：
			 *    1.读取当前 u--form 的 model
       *    2.读取当前 u--form 的 rules
       *    3.找到它内部所有 u-form-item 的 prop
       *    4.按 prop 去 model 里取值
       *    5.用对应的 rules[prop] 校验
       *    6.校验通过则返回成功的 Promise
       *    7.校验失败则返回 rejected Promise，并显示错误信息  
       */
			return Promise.all(forms.map(form => form.validate()));
		},
		
		/**
		 *  @function openChainType
		 *  @param {Number} index  
		 *  @returns void
		 *  @description 打开产业链类型选择框，并记录当前操作项索引
     */
		openChainType(index) {
			//如果页面上有键盘，先收起
			this.hideKeyboard();
			
			this.activeIndex=index;
			this.showChainType=true;
		},
		
		/**
		 *  @function closeChainType
		 *  @returns void
		 *  @description 关闭产业链类型选择框，并重置当前操作项索引
     */
		closeChainType(){
			this.showChainType=false;
			this.activeIndex=-1;
		},
		
		/**
		 *  @function addChainApplyItem
		 *  @returns void
		 *  @description 向内部列表添加新项，并向父组件传递变化
     */
		addChainApplyItem(){
			//向内部列表添加新项
			this.innerChainApplyList.push({
				id: this.innerChainApplyList.length+1,
				industryChain: '',
				businessDirection: ''
			});
			
			//向父组件传递变化
			this.emitChainListChange();
		},
		
		/**
		 *  @function deleteChainApplyItem
		 *  @param {Number} index - 删除项索引
		 *  @returns void
		 *  @description 删除指定索引的产业链信息项
     */
		deleteChainApplyItem(index){
			this.innerChainApplyList=this.innerChainApplyList.filter(item => item.id!== index+1);
			
			//执行删除后，更新列表中的每一项的id
			this.updateChainApplyItemId();
			//子组件中的列表改动后，向父组件更新
			this.emitChainListChange();
		},
		
		/**
		 *   @function updateChainApplyItemId
		 *   @returns void
		 *   @description 更新子组件内部产业链列表的单项id，防止由于多次增加删除导致列表中单项id混乱。
         */
        updateChainApplyItemId(){
			for(let i=0;i<this.innerChainApplyList.length;i++){
				this.innerChainApplyList[i].id=i+1;
			}
		},
		
		/**
		 *  @function emitChainListChange
		 *  @returns void
		 *  @description 向父组件传递内部列表
     */
		emitChainListChange(){
			this.$emit('change',this.innerChainApplyList);
		},
		
		/**
		 *   @function hideKeyboard - 隐藏键盘
		 *   @returns void
     */
		hideKeyboard() {
			uni.hideKeyboard();
		},
	}
}
</script>

<style scoped>
	/* 产业链列表最外层容器 */
	.chain-list-container {
		display:flex;
		flex-direction:column;
		width:100%;
	}
	
	/* 单个卡片对象外层容器 */
	.chain-list-item {
		display:flex;
		flex-direction:column;
		width:100%;
	}
	
	/* 产业链列表头部 */
	.group-head {
		display:flex;
		flex-direction:row;
		justify-content:space-between;
		align-items:center;
		
		width:100%;
		height:98rpx;
		padding-left:32rpx;
		padding-right:35rpx;
		box-sizing:border-box;
	}
	
	/* 左侧产业链标题容器 */
	.chain-list-title-wrap {
		display:flex;
		flex-direction:row;
		align-items:center;
	}
	
	/* 绿色原点容器 */
	.dot {
		width:32rpx;
		height:32rpx;
		margin-right:21rpx;
		border-radius:50%;
		
		display:flex;
		justify-content:center;
		align-items:center;
		
		background:#0dc477;
	}
	
	/* 绿色原点内部序号 */
	.dot-index {
		font-size:24rpx;
		font-weight:400;
		color:#fff;
	}
	
	/* 产业链标题文本 */
	.chain-list-title {
		font-size:32rpx;
		font-weight:700;
		color:#000;
	}
	
	/* 右侧删除按钮 */
	.delete-button-wrap {
		width:140rpx;
		height:54rpx;
		box-sizing:border-box;
		
		display:flex;
		justify-content:center;
		align-items:center;
		
		border:1rpx solid #e7564d;
		border-radius:12rpx;
		background: #ffedec;
	}
	
	/* 删除图标 */
	.delete-icon {
		width:32rpx;
		height:28rpx;
		
		margin-right:8rpx;
	}
	
	/* 删除文本 */
	.delete-text {
		font-size:28rpx;
		font-weight:600;
		color:#e7564d;
	}
	
	/* 左侧标签容器和文本框标签容器通用 */
	.label-wrap,
	.textarea-label-wrap{		
		display:flex;
		flex-direction:row;
		align-items:center;
		
		white-space: nowrap;
	}
	
	/* 标签必须 */
	.required {
		margin-right:2rpx;
		
		font-size:28rpx;
		font-weight:500;
		line-height:1;
		color:#ff2a2a;
	}
	
	/* 标签文本 */
	.label-text {
		font-size:28rpx;
		font-weight:500;
		color:#000;
		line-height:1;
		white-space: nowrap;
	}
	
	/* 单个的表单输入框通用样式 */
	.form-item-input {
		height:90rpx;
	}
	
	/* 自定义内容块实现类似输入框效果 */
	.select-wrap {
		width:100%;
		height:100%;
		
		display:flex;
		justify-content:flex-end;
		align-items:center;
	}
	
	/* 下拉框内容块内部文本 */
	.select-field-text {
		margin-right:5rpx;
		
		font-size:28rpx;
	}
	
	/* 下拉框未选中内容时的文本样式 */
	.noselectedChainType-text {
		color:#ccc;
	}
	
	/* 下拉框选中内容时的文本样式 */
	.selectedChainType-text {
		color:#000;
	}
	
	/* 带文本框的容器 */
	.form-item-textarea {
		display:flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		
		width:100%;
	}
	
	/* 带文本框的标签容器 */
	.textarea-label-wrap {
		margin-bottom:35rpx;
	}
	
	/* 包裹多行文本框的容器 */
	.textarea-box {
		width:100%;
		box-sizing: border-box;
	}
	
	/* 中央分隔线 */
	.separate-line {
		width:calc(100%+56rpx);
		height:16rpx;
		margin-left:-28rpx;
		margin-top:30rpx;
		
		background-color:#eee;
	}
	
	/* 包裹增加上链申请的按钮容器 */
	.add-chain-wrap {
		width:100%;
		height:98rpx;
		margin-top:30rpx;
	}
	
	/* 增加上链申请按钮 */
	.add-chain-button {
		width:calc(100%-60rpx);
		height:100%;
		
		display:flex;
		justify-content:center;
		align-items:center;
		
		box-sizing:border-box;
		border:1rpx solid #8ee3c0;
		border-radius:16rpx;
		background: #f1faf6;
	}
	
	/* 增加按钮图标 */
	.add-button-icon {
		width:34rpx;
		height:34rpx;
		
		margin-right:22rpx;
	}
	
	/* 增加上链申请文本 */
	.add-button-text {
		font-size:36rpx;
		font-weight:600;
		color:#0dc477;
	}
</style>