<template>
	<view class="page">
		<!-- 上传结果 -->
		<view class="result-logo"><image src="@/static/get-result.png"></image></view>
		<view class="timer-and-long">
			<view class="left">
				<text lines="1" class="show-des-long">2月22日</text>
				<text lines="1" class="show-des-title">{{ type == '1' ? '考核' : '作业' }}时间</text>
			</view>
			<view class="middle">
				<text lines="1" class="text_6">98</text>
				<text lines="1" class="show-des-title">{{ type == '1' ? '考核' : '作业' }}分数</text>
			</view>
			<view class="right">
				<text lines="1" class="show-des-long">11分11秒</text>
				<text lines="1" class="show-des-title">{{ type == '1' ? '考核' : '作业' }}用时</text>
			</view>
		</view>
		<view class="result-tips">
			<view lines="1" class="tips-title">您已顺利完成本次{{ type == '1' ? '考核' : '作业' }}</view>
			<!-- 	<view class="course-name">
				<view lines="1" class="text_10">太极八法五步-第六式</view>
				<view lines="1" class="text_11">考核</view>
			</view> -->
		</view>
		<view class="button_1">查看详情</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			type: ''
		};
	},
	onLoad(options) {
		this.type = options.type;
	}
};
</script>

<style lang="scss" scoped>
.result-logo {
	height: 430rpx;
	width: 430rpx;
	margin: 140rpx auto 40rpx;
	image {
		width: 100%;
		height: 100%;
	}
}
.timer-and-long {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 686rpx;
	height: 192rpx;

	border-radius: 32rpx;
	margin: 0 auto;
}
.left,
.middle,
.right {
	width: 30%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 46rpx 0;
	// padding: 10rpx 0;
	.show-des-title {
		overflow-wrap: break-word;
		color: rgba(136, 136, 136, 1);
		font-size: 28rpx;
	}
	.text_6 {
		color: rgba(224, 105, 105, 1);
		font-size: 72rpx;
		font-weight: 600;
	}
	.show-des-long {
		// margin-top: 44rpx;

		font-size: 36rpx;
		font-weight: 600;
	}
}

.result-tips {
	width: 750rpx;
	height: 136rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.tips-title {
		font-size: 48rpx;
		font-weight: 600;
		text-align: center;
		padding: 20rpx;
		margin-top: 40rpx;
	}
	.course-name {
		width: 750rpx;
		height: 48rpx;
		overflow-wrap: break-word;
		font-size: 0rpx;

		font-weight: 600;
		text-align: center;
		white-space: nowrap;
		line-height: 50rpx;
		margin-top: 16rpx;
	}
	.text_10 {
		overflow-wrap: break-word;
		color: rgba(93, 79, 220, 1);
		font-size: 36rpx;
		font-weight: 600;
		white-space: nowrap;
		line-height: 50rpx;
	}
	.text_11 {
		overflow-wrap: break-word;

		font-size: 36rpx;
		font-weight: 600;
		white-space: nowrap;
		line-height: 50rpx;
	}
}
.button_1 {
	// position: absolute;
	// left: 50%;
	// transform: translateX(-50%);
	// bottom: 180rpx;
	width: 448rpx;
	height: 96rpx;
	margin: 80rpx auto;
	font-size: 32rpx;
	font-weight: 600;
	text-align: center;
	line-height: 96rpx;
	color: rgba(255, 255, 255, 1);
	border-radius: 48rpx;
	// background-color: #dfe1e5;
	background-color: rgba(93, 79, 220, 1);
}
</style>
