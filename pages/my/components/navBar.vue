<template>
	<view class="navBar">
		<view class="navItem" v-for="(item,index) in navList" :key="index">
			<text class="icon" :class="item.icon"></text>
			<text class="title mt-1">{{item.title}}</text>
		</view>
	</view>
</template>

<script>
	// 引入导航栏数据
	import myNavList from '@/config/my-navList.js'
	export default {
		data() {
			return {

			}
		},
		props: {
			navList: {
				type: Array,
				default: () => myNavList()
			}
		}
	}
</script>

<style lang="scss">
	.navBar {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 695rpx;
		height: 150rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		margin: 60rpx auto 0;
		box-shadow: 2px 2px 5px #ddd;

		.navItem {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;

			.icon {
				color: rgb(254, 189, 0);
				font-size: 40rpx !important;
			}

			.title {
				font-size: 12rpx;
				color: #6c757d;
			}
		}
	}
</style>
