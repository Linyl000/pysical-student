<template>
	<view class="page">
		<view class="search-box"><u-search placeholder="搜索课程成绩" v-model="keyword"></u-search></view>

		<view class="score-list">
			<view class="list-left">
				<text lines="1" class="title">太极八法五步</text>
				<view class="teacher">王佳老师</view>
			</view>
			<view class="list-right">
				<view class="details">
					<text lines="1" class="score-1">88</text>
					<text lines="1" class="score-2">分</text>
				</view>
				<text lines="1" class="timers">202201学期</text>
			</view>
		</view>
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
.page {
	background-color: rgba(248, 248, 248, 1);
}

.search-box {
	width: 686rpx;
	height: 72rpx;
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	margin: 36rpx 0 0 32rpx;
}
.score-list {
	display: flex;
	flex-direction: row;
	box-sizing: border-box;
	width: 686rpx;
	height: 176rpx;
	border-radius: 16rpx;
	padding: 30rpx 36rpx;
	margin: 16rpx auto;
	background-color: rgba(255, 255, 255, 1);
}
.list-left {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
 
	.title {
		font-size: 32rpx;
		font-weight: 600;
	}
	.teacher {
		font-size: 26rpx;
	}
}

.list-right {
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.details {
		width: 86rpx;
		height: 48rpx;
		color: rgba(224, 105, 105, 1);
		text-align: right;
		.score-1 {
			font-size: 40rpx;
		}
		.score-2 {
			font-size: 28rpx;
		}
	}
	.timers {
		color: rgba(136, 136, 136, 1);
		font-size: 24rpx;
	}
}
</style>
