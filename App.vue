<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */

	/* 全局样式文件 */
	@import url('@/common/free.css');

	/* 引入动画库 */
	@import url('@/common/animate.min.css');
	/* 引入字体图标 */
	@import url('~@/common/iconfont.css');
	@import url('~@/common/iconfont/iconfont.css');

	@import url('@/common/common.css');
</style>
