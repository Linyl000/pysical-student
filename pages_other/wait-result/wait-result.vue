<template>
	<view class="page">
		<div class="wait"><image src="@/static/wait-result.png"></image></div>
		<view lines="1" class="tips-title">请耐心等待评定结果...</view>
		<view class="button_1" @click="goBack">返回</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		goBack() {
			uni.navigateBack({ delta: 3 });
		}
	}
};
</script>

<style lang="scss">
.wait {
	width: 312rpx;
	height: 380rpx;
	margin: 280rpx auto 80rpx;
	image {
		width: 100%;
		height: 100%;
	}
}
.tips-title {
	font-size: 48rpx;
	font-weight: 600;
	text-align: center;
	padding: 20rpx;
}
.button_1 {
	border-radius: 48rpx;
	width: 448rpx;
	height: 96rpx;
	margin: 40rpx auto;
	font-size: 32rpx;
	font-weight: 600;
	text-align: center;
	line-height: 96rpx;
	color: rgba(255, 255, 255, 1);
	// background-color: #dfe1e5;
	background-color: rgba(93, 79, 220, 1);
}
</style>
