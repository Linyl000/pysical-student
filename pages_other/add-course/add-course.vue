<template>
	<view class="page">
		<view class="input_1">
			<u--input placeholder="请输入课程名" v-model="value" @change="change" border="none" fontSize="18"></u--input>
		</view>
		<view class="button_1">确认添加</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.input_1 {
	width: 630rpx;
	margin: 40rpx 0 0 32rpx;
	padding: 0 30rpx;
	border-radius: 16rpx;
	height: 120rpx;
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
/deep/.u-input {
	height: 100%;
}
</style>
