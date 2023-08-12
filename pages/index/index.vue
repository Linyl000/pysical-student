<template>
	<view class="page">
		<view class="group_8">
			<view class="text-wrapper_1">
				<text lines="1" style="color: #000;">Hello，</text>
				<text lines="1" style="color: #5D4FDC;">杜若</text>
			</view>
			<u-icon name="plus-circle" size="28" @click="goAddCourse"></u-icon>
		</view>
		<view class="group_9">
			<view class="image-text_6">
				<view class="box_1"></view>
				<view class="text-group_4">全部课程</view>
			</view>
			<!-- 	<view class="image-text_7"><text lines="1" class="text-group_2">查看</text></view> -->
		</view>
		<div class="course">
			<view lines="1" class="co-name">主要课程</view>
			<div class="one-course" v-for="i in 5" :key="i" @click="goMyCourse">
				<view lines="1" class="title">跳绳 - 王老师</view>
				<view lines="1" class="detail">普拉提普拉提普拉提普拉提普拉提普拉提普拉提普拉提普拉提普拉提普拉提</view>
			</div>
		</div>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {},
	methods: {
		goAddCourse() {
			uni.navigateTo({
				url: '/pages_other/add-course/add-course'
			});
		},
		goMyCourse() {
			uni.navigateTo({
				url: '/pages_other/course-list/course-list'
			});
		}
	}
};
</script>

<style scoped lang="scss">
.group_8 {
	width: 678rpx;
	height: 48rpx;
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	margin: 52rpx 0 0 32rpx;

	.text-wrapper_1 {
		width: 218rpx;
		height: 48rpx;
		overflow-wrap: break-word;
		font-size: 48rpx;
		font-family: PingFangSC-Semibold;
		font-weight: 600;
		text-align: left;
		white-space: nowrap;
		line-height: 48rpx;
	}
}
.group_9 {
	width: 680rpx;
	flex-direction: row;
	// display: flex;
	justify-content: space-between;
	margin: 48rpx auto 20rpx;

	.image-text_6 {
		width: 176rpx;
		height: 48rpx;
		display: flex;
		justify-content: space-between;
	}
	.box_1 {
		background-color: rgba(93, 79, 220, 1);
		border-radius: 8rpx;
		width: 16rpx;
		height: 48rpx;
		display: flex;
		flex-direction: column;
	}
	.text-group_4 {
		width: 146rpx;
		line-height: 48rpx;
		font-weight: 600;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.text-group_2 {
		width: 48rpx;
		height: 48rpx;
		overflow-wrap: break-word;
		font-size: 24rpx;
		text-align: right;
		line-height: 48rpx;
	}
}
.co-name {
	height: 42rpx;
	font-size: 28rpx;
	font-weight: 600;
	line-height: 42rpx;
	margin: 0 0 14rpx 36rpx;
}
.one-course {
	width: 686rpx;
	height: 280rpx;
	background-size: 702rpx 296rpx;
	display: flex;
	flex-direction: column;
	margin: 0 0 32rpx 32rpx;
	background-color: #ccc;
	border-radius: 20rpx;
	color: rgba(255, 255, 255, 1);
	.title {
		height: 60rpx;
		overflow-wrap: break-word;
		font-size: 40rpx;
		font-weight: 600;
		text-align: left;
		white-space: nowrap;
		line-height: 60rpx;
		margin: 154rpx 0 0 36rpx;
	}
	.detail {
		width: 640rpx;
		height: 34rpx;
		font-size: 28rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 34rpx;
		margin: 0 0 32rpx 32rpx;
	}
}
</style>
