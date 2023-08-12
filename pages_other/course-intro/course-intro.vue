<template>
	<view class="page">
		<view class="title">【作业】太极八法五步-第六式</view>
		<view class="cut-off-time">最后截止时间：&nbsp;04-03&nbsp;23:59</view>
		<view class="demand-box">
			<view class="demand-img"></view>
			<text lines="1" class="demand-text">要求</text>
		</view>
		<text class="description">
			拍摄完整的八段锦练习视频上传到本作业。要求露出完整的面容，禁止代替他人完成练习，练习可在线完成也可以上传本地视频。
		</text>
		<view class="button_1" @click="goHomeworkOrTest">去完成/去修改</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		goHomeworkOrTest() {
			// uni.navigateTo({
			// 	url: '/pages_other/practice/practice' //实践
			// });
			uni.navigateTo({
				url: '/pages_other/theory/theory' //理论
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	padding: 52rpx 32rpx 0;
}
.title {
	width: 546rpx;
	height: 48rpx;
	overflow-wrap: break-word;
 
	font-size: 40rpx;
	font-family: PingFangSC-Semibold;
	font-weight: 600;
	text-align: left;
	white-space: nowrap;
	line-height: 48rpx;
}
.cut-off-time {
 
	font-size: 30rpx;
	margin-top: 16rpx;
}
.demand-box {
	display: flex;
	align-items: center;
	margin-top: 32rpx;

	.demand-img {
		width: 16rpx;
		height: 36rpx;
		border-radius: 8rpx;
		background-color: rgba(93, 79, 220, 1);
		margin-right: 12rpx;
	}
	.demand-text {
	 
		font-size: 32rpx;
	}
}
.description {
	margin-top: 26rpx;
 
	line-height: 1.7;
}

.button_1 {
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 90rpx;
	border-radius: 48rpx;
	width: 448rpx;
	height: 96rpx;
	// margin: 40rpx auto;
	font-size: 32rpx;
	font-weight: 600;
	text-align: center;
	line-height: 96rpx;
	color: rgba(255, 255, 255, 1);
	// background-color: #dfe1e5;
	background-color: rgba(93, 79, 220, 1);
}
</style>
