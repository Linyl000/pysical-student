<template>
	<view class="page">
		<view class="title">{{ item.taskName }}</view>
		<view class="cut-off-time">{{ '最后截止时间：' + item.taskEndTime }}</view>
		<view class="demand-box">
			<view class="demand-img"></view>
			<text lines="1" class="demand-text">要求</text>
		</view>
		<text class="description">{{ '分数达到' + '60' + '视为合格' }}</text>
		<view class="button_1" @click="goHomeworkOrTest">去完成</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			item: null
		};
	},
	onLoad({ item }) {
		this.item = JSON.parse(item);
	},
	methods: {
		goHomeworkOrTest() {
			// if (this.item.courseType == 0) {
			uni.navigateTo({
				url: `/pages_other/theory/theory?item=${JSON.stringify(this.item)}` //理论
			});
			// } else {
			// 	uni.navigateTo({
			// 		url: '/pages_other/practice/practice?item=' + JSON.stringify(this.item) //实践
			// 	});
			// }
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	padding: 52rpx 32rpx 0;
}
.title {
	width: 700rpx;
	overflow-wrap: break-word;
	font-size: 40rpx;
	font-weight: 600;
	white-space: wrap;
	overflow: hidden;
	text-overflow: ellipsis;
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
