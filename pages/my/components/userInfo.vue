<template>
	<view class="userInfo">
		<view class="personalInformation">
			<view class="left">
				<image src="../../../static/demo/banner/banner1.png" mode=""></image>
			</view>
			<view class="right">
				<view class="right-name">
					立即登录
				</view>
				<view class="right-bottom">
					登录解锁更多功能
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "userInfo",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.userInfo {
		.personalInformation {
			display: flex;

			.left {
				width: 125rpx;
				height: 125rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}

			.right {
				display: flex;
				flex-direction: column;
				line-height: 65rpx;
				color: #fff;
				margin-left: 25rpx;

				.right-name {
					font-size: 32rpx
				}

				.right-bottom {
					font-size: 26rpx
				}
			}
		}
	}
</style>
