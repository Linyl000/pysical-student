<template>
	<view class="page">
		<div class="wait"><image src="@/static/wait-result.png"></image></div>
		<view lines="1" class="tips-title">请耐心等待评定结果...</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.wait {
	width: 312rpx;
	height: 380rpx;
	margin: 312rpx auto 80rpx;
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
</style>
