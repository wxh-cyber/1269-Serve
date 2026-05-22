<template>
	<!-- 最外层容器 -->
	<view class="page">

		<!-- 包裹表单容器 -->
		<view class="content">
			<!-- 页面表单 -->
			<u--form labelPosition="left" :model="model1" :rules="rules" ref="uForm">
				<!-- 企业名称 -->
				<!-- 由于已经自定义了开头标签，故此处不在采用原生标签 -->
				<u-form-item prop="info.companyName" class="form-item-input" borderBottom>
					<!-- 自定义开头标签 -->
					<view class="label-wrap">
						<text class="required">*</text>
						<text class="label-text">企业名称</text>
					</view>
					<u--input v-model="model1.info.companyName" inputAlign="right" fontSize="28rpx" color="#707070"
						placeholder="请输入企业名称" border="none"></u--input>
				</u-form-item>

				<!-- 所属地区 -->
				<u-form-item prop="info.region" class="form-item-input" borderBottom>
					<view class="label-wrap">
						<text class="required">*</text>
						<text class="label-text">所属地区</text>
					</view>
					<u--input v-model="model1.info.region" inputAlign="right" fontSize="28rpx" color="#707070"
						placeholder="请选择所属地区" border="none"></u--input>
				</u-form-item>

				<!-- 社会信用代码 -->
				<u-form-item prop="info.companyCode" class="form-item-input" borderBottom>
					<view class="label-wrap">
						<text class="required">*</text>
						<text class="label-text">社会信用代码</text>
					</view>
					<u--input 
						:value="displayCompanyCode"
						inputAlign="right" 
						fontSize="28rpx" 
						color="#707070"
						placeholder="请输入社会信用代码" 
						border="none"
						@focus="handleCompanyCodeFocus"
						@blur="handleCompanyCodeBlur"
						@input="handleCompanyCodeInput"
					></u--input>
				</u-form-item>

				<!-- 联系人 -->
				<u-form-item prop="info.person" class="form-item-input" borderBottom>
					<view class="label-wrap">
						<text class="label-text">联系人</text>
					</view>
					<u--input v-model="model1.info.person" inputAlign="right" fontSize="28rpx" color="#707070"
						placeholder="请输入联系人" border="none"></u--input>
				</u-form-item>

				<!-- 联系人电话 -->
				<u-form-item prop="info.phone" class="form-item-input" borderBottom>
					<view class="label-wrap">
						<text class="label-text">联系人电话</text>
					</view>
					<u--input v-model="model1.info.phone" inputAlign="right" fontSize="28rpx" color="#707070"
						placeholder="请输入联系人电话" border="none"></u--input>
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
								confirm-type="return"
								style="background:#f8f8f8;"
							></u--textarea>
						</view>
					</view>
				</u-form-item>

				<!-- 主营产品和服务 -->
				<u-form-item prop="info.product">
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
								confirm-type="return"
							></u--textarea>
						</view>
					</view>
				</u-form-item>

				<!-- 中央分隔线 -->
				<view class="separate-line"></view>

				<!--  申请产业链列表 -->
				<ChainList 
					ref="chainList"
				  :total="total" 
					:chainApplyList="model1.info.chainApplyList" 
					@change="handleChainListChange" 
				/>

				<!-- 产业链列表底部分隔线 -->
				<view class="separate-line"></view>

				<!-- 是否规上企业 -->
				<u-form-item prop="info.isRuleOnEnterprise" borderBottom>
					<view class="form-item-radio">
						<!-- 左侧标签 -->
						<view class="label-wrap">
							<text class="required">*</text>
							<text class="label-text">是否规上企业</text>
						</view>

						<!-- 右侧单选框 -->
						<!-- 
					  	  注意：
						      对于u-radio-group，内部默认是flex:1;所以会挤占剩余空间
						      同时两个内部的u-radio从左向右排，所以视觉上没有靠右
					    -->
						<view class="radio-wrap">
							<u-radio-group v-model="model1.info.isRuleOnEnterprise" placement="row" labelColor="#000" labelSize="28">
								<u-radio :name="true" label="是" activeColor="#0dc477" labelSize="28rpx" :customStyle="{
							      marginRight:'50rpx',
										marginLeft:'auto'
							    }"></u-radio>
								<u-radio :name="false" label="否" labelSize="28rpx" activeColor="#0dc477"></u-radio>
							</u-radio-group>
						</view>
					</view>
				</u-form-item>

				<!-- 是否链主龙头企业 -->
				<u-form-item prop="info.isLeadingEnterprise" borderBottom>
					<view class="form-item-radio">
						<!-- 左侧标签 -->
						<view class="label-wrap">
							<text class="required">*</text>
							<text class="label-text">是否链主龙头企业</text>
						</view>

						<!-- 右侧单选框 -->
						<view class="radio-wrap">
							<u-radio-group v-model="model1.info.isLeadingEnterprise" placement="row" labelColor="#000" labelSize="28">
								<u-radio :name="true" label="是" activeColor="#0dc477" labelSize="28rpx" :customStyle="{
							      marginRight:'50rpx',
										marginLeft:'auto'
							    }"></u-radio>
								<u-radio :name="false" label="否" labelSize="28rpx" activeColor="#0dc477"></u-radio>
							</u-radio-group>
						</view>
					</view>
				</u-form-item>

				<!-- 是否专精特新中小企业 -->
				<u-form-item prop="info.isSpecialEnterprise" borderBottom>
					<view class="form-item-radio">
						<!-- 左侧标签 -->
						<view class="label-wrap">
							<text class="required">*</text>
							<text class="label-text">是否专精特新中小企业</text>
						</view>

						<!-- 右侧单选框 -->
						<view class="radio-wrap">
							<u-radio-group v-model="model1.info.isSpecialEnterprise" placement="row" labelColor="#000" labelSize="28">
								<u-radio :name="true" label="是" activeColor="#0dc477" labelSize="28rpx" :customStyle="{
							      marginRight:'50rpx',
										marginLeft:'auto'
							    }"></u-radio>
								<u-radio :name="false" label="否" labelSize="28rpx" activeColor="#0dc477"></u-radio>
							</u-radio-group>
						</view>
					</view>
				</u-form-item>

				<!-- 是否专精特新“小巨人”企业 -->
				<u-form-item prop="info.isSpecialNewGiant" borderBottom>
					<view class="form-item-radio">
						<!-- 左侧标签 -->
						<view class="label-wrap">
							<text class="required">*</text>
							<text class="label-text">是否专精特新"小巨人"企业</text>
						</view>

						<!-- 右侧单选框 -->
						<view class="radio-wrap">
							<u-radio-group v-model="model1.info.isSpecialNewGiant" placement="row" labelColor="#000" labelSize="28">
								<u-radio :name="true" label="是" activeColor="#0dc477" labelSize="28rpx" :customStyle="{
							      marginRight:'50rpx',
										marginLeft:'auto'
							    }"></u-radio>
								<u-radio :name="false" label="否" labelSize="28rpx" activeColor="#0dc477"></u-radio>
							</u-radio-group>
						</view>
					</view>
				</u-form-item>

				<!-- 企业照片 -->
				<u-form-item prop="info.photoList" borderBottom>
					<view class="form-item-upload">
						<!-- 上方企业照片标签 -->
						<view class="label-wrap">
							<text class="label-text">企业照片</text>
						</view>

						<!-- 下方上传照片具体区域 -->
						<view class="upload-wrap">
							<u-upload :fileList="model1.info.fileList1" name="1" multiple :maxCount="10"
								@delete="deletePic"></u-upload>
						</view>
					</view>
				</u-form-item>
				
				<!-- 企业简介 -->
				<u-form-item prop="info.enterpriseIntro">
					<view class="form-item-textarea">
						<view class="textarea-label-wrap">
							<text class="label-text">企业简介</text>
						</view>
						
						<!-- 下方文本框 -->
						<view class="textarea-box">
							<u--textarea
							  v-model="model1.info.enterpriseIntro" 
								fontSize="28rpx" 
								fontWeight="500" 
								color="#000"
								placeholder="请输入企业简介" 
								border="surround" 
								:height="75" 
								:autoHeight="true" 
								style="background:#f8f8f8;"
								confirm-type="return"
							></u--textarea>
						</view>
					</view>
				</u-form-item>
			</u--form>
			
			<!-- 底部提交按钮 -->
			<view class="submit-btn-wrap">
				<view class="submit-btn" @click="handleSubmit">
					<text class="submit-btn-text">提交</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import ChainList from '../../components/ApplyChain/ChainList.vue';
	//import { wrapTextareaText } from '../../utils/textarea-processor';

	export default {
		components: {
			ChainList
		},

		data() {
			return {
				//社会信用码文本框是否聚焦
				isCompanyCodeFocus:false,
				//实际展示的社会信用码
				displayCompanyCode:'',
				
				model1: {
					// 表单中的相关信息
					info: {
						//企业名称
						companyName: '',
						//所属地区
						region: '',
						//社会信用代码
						companyCode: '',
						//联系人
						person: '',
						//联系人电话
						phone: '',
						//详细地址
						address: '',
						// 主营产品和服务
						product: '',

						//申请产业链列表
						chainApplyList: [{
								id: 1,
								//所属产业链
								industryChain: '现代家具产业链/木制家具',
								//主营方向
								businessDirection: ''
							},
							{
								id: 2,
								//所属产业链
								industryChain: '',
								//主营方向
								businessDirection: ''
							}
						],

						//是否规上企业
						isRuleOnEnterprise: true,
						//是否链主龙头企业
						isLeadingEnterprise: true,
						//是否专精特新中小企业
						isSpecialEnterprise: true,
						//是否是“专精特新”小巨人企业
						isSpecialNewGiant: true,

						//企业照片
						fileList1: [],
						//企业简介
						enterpriseIntro:'企业简介'
					}
				},
				
				//表单校验规则
				rules:{
					//企业名称
					'info.companyName':{
						type:'string',
						required:true,
						message:'请填写企业名称',
						trigger:['blur','change']
					},
					//所属地区
					'info.region':{
						type:'string',
						required:true,
						message:'请填写所属地区',
						trigger:['blur','change']
					},
					//社会信用代码
					'info.companyCode':[{
						//必填规则
						type:'string',
						required:true,
						message:'请填写社会信用代码',
						trigger:['blur','change'],
					},
					{
						//正则判断为字母或者数字
						pattern:/^[a-zA-Z0-9]*$/,
						message:'社会信用代码只能为字母或数字',
						trigger:['blur','change']
					}],
					//详细地址
					'info.address':{
						type:'string',
						required:true,
						message:'请填写详细地址',
						trigger:['blur','change']
					},
					//主营产品和服务
					'info.product':{
						type:'string',
						required:true,
						message:'请填写主要产品和服务',
						trigger:['blur','change']
					}
				}
			}
		},

		computed: {
			//产业链列表长度
			total() {
				return this.model1.info.chainApplyList.length;
			}
		},

		methods: {
			/**
			 *  @function handleChainListChange
			 *  @description 产业链列表发生改变时触发
			 *  @param {Array} newList 产业链列表
			 *  @return {void}
			 */
			handleChainListChange(newList) {
				this.model1.info.chainApplyList = newList;
			},
			
			/**
			 *  @function maskCompanyCode
			 *  @param {*} code - 社会信用代码输入字段
			 *  @returns {String} value - 进行掩码处理后的字段
			 *  @description 对社会信用代码进行掩码处理 
       */
			maskCompanyCode(code){
				//如果信用代码字段本身为空，则直接返回
        if(!code)	return;
				
				const value=String(code).trim();
				
				//统一社会信用代码通常是18位
				//如果输入字段位数小于9，则原样显示
				if(value.length<=9) return value;
				
				const start=value.slice(0,9);
				const end=value.slice(-1);
				const stars='*'.repeat(value.length-9);
				
				//拼接后形成新的掩码
				return `${start}${stars}${end}`;
			},
			
			/**
			 *  @function handleCompanyCodeFocus
			 *  @returns void
			 *  @description 处理社会信用代码文本框聚焦 
       */
			handleCompanyCodeFocus(){
				this.isCompanyCodeFocus=true;
				this.displayCompanyCode=this.model1.info.companyCode;
			},
			
			/**
			 *  @function handleCompanyCodeBlur
			 *  @returns void
			 *  @description 处理社会信用代码文本框失焦 
       */
			handleCompanyCodeBlur(){
				this.isCompanyCodeFocus=false;
				this.displayCompanyCode=this.maskCompanyCode(this.model1.info.companyCode);
			},
			
			/**
			 *  @function handleCompanyCodeInput
			 *  @param {*} value
			 *  @returns void
			 *  @description 处理社会信用代码输入框文本变化  
       */
			handleCompanyCodeInput(value){
				this.model1.info.companyCode=value;
				if(this.isCompanyCodeFocus) {
					this.displayCompanyCode=value;
				}
			},

			/**
			 *  @function deletePic
			 *  @description 删除图片时触发
			 *  @param {Object} detail 图片信息
			 *  @return {void}
			 */
			deletePic(detail) {
				this.model1.info[`fileList${detail.name}`].splice(detail.index, 1);
			},

			/**
			 *  @function uploadFilePromise
			 *  @param {String} url  
			 *  @description 上传文件
			 *  @return {Promise}
			 */
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload',
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},

						//上传成功回调
						success: (res) => {
							let data = JSON.parse(res.data);
							if (data.code == 200) {
								//返回200，请求成功
								resolve(data.data);
							} else {
								//否则被认为失败，传入错误信息
								reject(data.msg);
							}
						},

						//上传失败回调
						fail: (err) => {
							reject(err);
						}
					})
				})
			},

			/**
			 *  @function afterRead
			 *  @param {Object} event 上传事件对象 
			 *  @description 新增图片 
			 */
			async afterRead(event) {
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file);
				//文件列表长度
				let fileListLen = this.model1.info[`fileList${event.name}`].length;
				
				lists.map((item) => {
					this.model1.info[`fileList${event.name}`].push({
						...item,
						status: "uploading",
						message: "上传中",
					});
				});
				
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url);
					let item = this.model1.info[`fileList${event.name}`][fileListLen];
					
					this.model1.info[`fileList${event.name}`].splice(
						fileListLen,
						1,
						Object.assign(item, {
							status: "success",
							message: "",
							url: result,
						})
					);
					fileListLen++;
				}
			},
			
			//直接通过设置confirm-type="return" 来实现换行
			/**
			 *  @function handleTextarea
			 *  @param {String} value  
			 *  @returns void
			 *  @description 处理文本框输入
       */
			// handleTextarea(value){
			// 	const wrappedValue=wrapTextareaText(value,32);
				
			// 	if(wrappedValue!==this.model1.info.enterpriseIntro) {
			// 		this.model1.info.enterpriseIntro=wrappedValue;
			// 	}
			// }
			
			/**
			 *  @function handleSubmit
			 *  @returns void
			 *  @description 提交后跳转到对应页面
             */
			async handleSubmit(){
				/*
				try {
					//如果父组件表单校验先触发错误，则直接抛出error，不会再触发子组件校验规则
					await this.$refs.uForm.validate();
					await this.$refs.chainList.validate();
					
					//跳转到提交成功页面
					uni.navigateTo({
						url:'/pages/Success/Success'
					});
				}catch(errors){
					
				}*/
				
				const results=await Promise.allSettled([
					this.$refs.uForm.validate(),
					this.$refs.chainList.validate()
				]);
				
				const hasError=results.some(item => item.status==='rejected');
				if(hasError) return;
				
				//跳转到提交成功页面
				uni.navigateTo({
						url:'/pages/Success/Success'
				});
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
		padding: 0 28rpx;
	}

	/* 单个的表单输入框通用样式 */
	.form-item-input {
		height: 90rpx;
	}

	/* 开头标签容器和文本框标签容器的公共样式 */
	.label-wrap,
	.textarea-label-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	/* 必须存在 */
	.required {
		margin-right: 2rpx;

		font-size: 28rpx;
		font-weight: normal;
		line-height: 1;
		color: #ff2a2a;
	}

	/* 标签文本样式 */
	.label-text {
		font-size: 28rpx;
		font-weight: 500;
		line-height: 1;
		color: #000;

		white-space: nowrap;
	}

	/* 文本框标签容器 */
	.textarea-label-wrap {
		margin-bottom: 35rpx;
	}

	/* 带文本框的容器 */
	.form-item-textarea {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		width: 100%;
	}

	/* 包裹文本框的容器 */
	.textarea-box {
		width: 100%;
		box-sizing: border-box;
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
		width: calc(100%+56rpx);
		height: 16rpx;
		margin-left: -28rpx;
		margin-top: 30rpx;

		background-color: #eee;
	}

	/* 包裹标签和单选框的外层容器 */
	.form-item-radio {
		width: 100%;
		height: 90rpx;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	/* 包裹radio的容器 */
	/* 实际上最终通过marginLeft:'auto' 解决了radio不靠右的问题 */
	.radio-wrap {
		height: 100%;

		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	/* 包裹单项上传图片的容器 */
	.form-item-upload {
		margin-top: 32rpx;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	/* 上传照片外层容器 */
	.upload-wrap {
		margin-top: 32rpx;
	}
	
	/* 包裹提交按钮容器 */
	.submit-btn-wrap {
		margin-top:48rpx;	
		width:100%;
		height:98rpx;
	}
	
	/* 提交按钮 */
	.submit-btn {
		width:100%;
		height:100%;
		box-sizing:border-box;
		border-radius: 8rpx;
		
		display:flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		
		background: #0dc477;
	}
	
	/* 提交按钮文本 */
	.submit-btn-text {
		font-size:36rpx;
		font-weight:500;
		line-height: 1;
		color: #fff;
	}
</style>