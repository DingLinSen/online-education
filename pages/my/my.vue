<template>
	<view class="my animate__animated animate__fadeInDown">
		<view class="user">
			<!-- 个人信息组件 -->
			<userInfo></userInfo>
			<!-- nav组件 -->
			<navBar></navBar>
		</view>
		<!-- 选项列表组件 -->
		<optionList></optionList>
	</view>
</template>

<script>
	// 引入个人信息、登录组件
	import userInfo from '@/pages/my/components/userInfo.vue'
	// 引入nav组件
	import navBar from '@/pages/my/components/navBar.vue'
	// 引入选项列表组件
	import optionList from '@/pages/my/components/optionTab.vue'
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		components: {
			userInfo,
			navBar,
			optionList
		}
	}
</script>

<style lang="scss">
	page,
	.my {
		height: 100%;
		background-color: #fff;
		--animate-duration: .5s; //动画持续时间
		--animate-delay: .5s; //动画延迟时间
	}

	.user {
		height: 320rpx;
		background-color: #5ccc84;
		padding: 20rpx;
		border-radius: 0 0 48rpx 48rpx;
	}
</style>
