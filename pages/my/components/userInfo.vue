<template>
	<view class="userInfo" @click="auth">
		<view class="personalInformation">
			<view class="left">
				<image v-if="!getToken" src="../../../static/demo/banner/banner1.png" mode=""></image>
				<image v-else src="../../../static/demo/banner/banner2.png" mode=""></image>
			</view>
			<view class="right">
				<view class="right-name">
					<view class="top">
						{{getToken?userInfoList.name:'立即登录'}}
					</view>
					<view class="vip" v-if="getToken">
						{{userInfoList.vip}}
					</view>
				</view>
				<view class="right-bottom">
					{{getToken?userInfoList.descriptor:'登录解锁更多功能'}}
				</view>
			</view>
		</view>
		<view class="setting" v-if="getToken">
			<text class="iconfont icon-leimupinleifenleileibie set"></text>
		</view>
	</view>
</template>

<script>
	// 引入个人信息数据
	import myUserInfo from '@/config/my-userInfo.js'
	// 引入vuex的辅助函数
	import {
		mapGetters
	} from 'vuex'
	export default {
		name: "userInfo",
		methods: {
			auth() {
				if (!this.getToken) {
					uni.navigateTo({
						url: '/pages/my/register'
					})
				} else {
					console.log('你已经登录');
				}
			}
		},
		computed: {
			...mapGetters(['getToken'])
		},
		props: {
			userInfoList: {
				type: Object,
				default: () => myUserInfo()
			}
		}
	}
</script>

<style lang="scss">
	.userInfo {
		display: flex;
		justify-content: space-between;
		align-items: center;

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
					display: flex;

					.top {
						font-size: 32rpx;
					}

					.vip {
						font-size: 26rpx;
						color: #f2c310;
						padding-top: 3rpx;
						padding-left: 35rpx;
					}
				}

				.right-bottom {
					font-size: 26rpx
				}
			}
		}

		.setting {
			.set {
				color: #fff;
			}
		}
	}
</style>
