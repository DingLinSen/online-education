<template>
	<view class="option">
		<view class="optionItem" v-for="(item,index) in optionList" :key="index">
			<view class="left">
				<text class="icon" :class="item.icon"></text>
				<text class="text">{{item.title}}</text>
			</view>
			<view class="right">
				<text class="rightIcon"></text>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入选项卡数据
	import myOptionList from "@/config/my-option-list.js"
	export default {
		data() {
			return {

			}
		},
		props: {
			optionList: {
				type: Array,
				default: () => myOptionList()
			}
		}
	}
</script>

<style lang="scss">
	.option {
		margin-top: 70rpx;
		padding: 0 56rpx;

		.optionItem {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 2rpx solid #eee;
			line-height: 100rpx;
			padding-right: 40rpx;

			&:last-child {
				border: none;
			}

			.left {
				display: flex;
				align-items: center;

				.icon {
					font-size: 40rpx;
					color: rgb(67, 150, 236);
				}

				.text {
					display: inline-block;
					font-size: 28rpx;
					color: #3b4144;
					margin-left: 20rpx;
				}
			}

			.right {
				.rightIcon {
					&::after {
						content: "";
						display: inline-block;
						width: 20rpx;
						height: 20rpx;
						border-right: 4rpx solid #ccc;
						border-bottom: 4rpx solid #ccc;
						transform: rotate(-45deg);
					}
				}
			}
		}
	}
</style>
