<script>
	export default {
		onLaunch: function() {
			//console.log('App Launch')
		},
		onShow: function() {
			//console.log('App Show')
		},
		onHide: function() {
			//console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 提供uView全局组件样式依赖 */
	@import '@/uni_modules/uview-ui/index.scss';
	
	/* 每个页面公共css */
	.page {
		/* 默认页面背景为白色 */
		background-color: #fff;
	}
</style>
