<template>
	<view class="register">
		<view class="reg-bg">
			<view class="back" @click="navBack()"></view>
		</view>


		<!-- 登录注册表单 -->
		<view class="regForm">
			<view class="title">
				<text>{{loginFlag?'登 录':'注 册'}}</text>
			</view>
			<view class="login-form">
				<text class="iconfont icon-yonghu"></text>
				<input placeholder="请输入用户名" type="text">
			</view>
			<view class="login-form">
				<text class="iconfont icon-mima"></text>
				<input placeholder="请输入密码" type="text">
			</view>
			<view class="login-form" v-if="!loginFlag">
				<text class="iconfont icon-mima"></text>
				<input placeholder="请输入确认密码" type="text">
			</view>
			<view class="btn">
				<button>{{loginFlag?'登 录':'注 册'}}</button>
			</view>
			<view class="option">
				<view class="registering-an-ccount" @click="loginFlag=!loginFlag">
					{{loginFlag? '注册账号':'去登录'}}
				</view>
				<view class="forget-your-password">
					忘记密码?
				</view>
			</view>
			<view class="wechatlogin">
				<text class="wx iconfont icon-weixin"></text>
			</view>
			<view class="agreement" v-if="loginFlag">
				<checkbox />
				<text>已阅读并同意用户协议&隐私声明</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginFlag: true //登录注册切换
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page,
	.register {
		position: relative;

		.reg-bg {
			height: 220rpx;
			background-image: linear-gradient(90deg, #3bfdaf, #70d6f2);
			overflow: hidden;

			.back {
				width: 20rpx;
				height: 20rpx;
				border-left: 4rpx solid #fff;
				border-top: 4rpx solid #fff;
				transform: rotate(-45deg);
				margin: 40rpx 0 0 46rpx;
			}
		}

		.regForm {
			position: absolute;
			background-color: #fff;
			width: 100%;
			top: 200rpx;
			border-top-left-radius: 30rpx;
			border-top-right-radius: 30rpx;
			padding: 0 70rpx 0 70rpx;

			.icon {
				width: 95rpx;
				text-align: center;
				color: rgb(51, 51, 51);
				font-size: 32rpx !important;
			}

			.title {
				margin: 60rpx 0 55rpx 0;
			}

			text {
				font-size: 42rpx;
			}

			.login-form {
				overflow: hidden;
				margin-bottom: 50rpx;
				position: relative;

				text {
					position: absolute;
					left: 0;
					top: 0;
					width: 52px;
					height: 52px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 32rpx
				}

				input {
					background-color: #f5f5f5;
					width: 640rpx;
					height: 100rpx;
					border-radius: 15rpx;
				}
			}

			button {
				background-color: #5ccc84;
				color: #fff;
				height: 100rpx;
			}

			.option {
				display: flex;
				justify-content: space-between;
				margin: 60rpx 0;

				.registering-an-ccount {
					color: #5ccf9c;
				}

				.forget-your-password {
					color: #a9a5a0;
				}
			}

			.wechatlogin {
				text-align: center;
				margin-bottom: 40rpx;

				.wx {
					width: 100rpx;
					height: 100rpx;
					font-size: 100rpx;
					color: rgb(92, 204, 132);
				}
			}

			.agreement {
				display: flex;
				justify-content: center;
				align-items: center;

				checkbox {
					transform: scale(0.7)
				}

				text {
					font-size: 30rpx;
					color: #aaa7a3;
				}
			}
		}
	}
</style>
