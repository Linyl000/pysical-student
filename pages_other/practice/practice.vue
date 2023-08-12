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
		<!-- 视频图片 -->
		<div class="have-video">
			<div class="icon"><u-icon name="play-right-fill" color="#fff" size="28"></u-icon></div>
			<view class="name-and-size">
				<text lines="1" class="name">八段锦视频.mp4</text>
				<text lines="1" class="size">23.0M</text>
			</view>
			<div class="delete" @click="deleteVideo">删除</div>
		</div>

		<div class="up-box" @click="selectVideo">
			<img v-if="vtype === 1" src="../../static/video-img.jpg" mode="" />
			<img v-if="vtype === 2" src="../../static/up-video.png" />
		</div>
		<view class="button_1" @click="goWait">提交</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			//显示视频上传状态
			vtype: 1
		};
	},
	methods: {
		getWait() {
			uni.navigateTo({
				url: '/pages_other/wait-result/wait-result'
			});
		},
		selectVideo() {
			//
		},
		deleteVideo() {
			//
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
.have-video {
	display: flex;
	align-items: center;
	width: 686rpx;
	height: 176rpx;
	box-sizing: border-box;
	padding: 20rpx 24rpx;
	border-radius: 16rpx;
	margin-top: 36rpx;
	border: 2rpx solid #ccc;
	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 96rpx;
		width: 96rpx;
		background-color: rgba(99, 177, 105, 1);
		border-radius: 16rpx;
		margin-right: 36rpx;
	}
	.name-and-size {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.name {
			width: 236rpx;
			height: 48rpx;
			overflow-wrap: break-word;
		 
			font-size: 32rpx;
			font-family: PingFangSC-Semibold;
			font-weight: 600;
			text-align: left;
			white-space: nowrap;
			line-height: 48rpx;
		}
		.size {
			width: 84rpx;
			height: 40rpx;
			overflow-wrap: break-word;
			color: rgba(136, 136, 136, 1);
			font-size: 28rpx;
			font-family: PingFangSC-Regular;
			font-weight: normal;
			text-align: right;
			white-space: nowrap;
			line-height: 40rpx;
			margin-top: 8rpx;
		}
	}
	.delete {
		color: rgba(224, 105, 105, 1);
	}
}
.up-box {
	margin-top: 36rpx;
	width: 220rpx;
	height: 220rpx;
	image {
		width: 100%;
		height: 100%;
	}
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
