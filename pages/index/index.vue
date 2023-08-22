<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<template #top>
			<view class="group_8">
				<view class="text-wrapper_1">
					<text lines="1" style="color: #000;">Hello，</text>
					<text lines="1" style="color: #5D4FDC;">{{ user.nickName }}</text>
				</view>
				<!-- <u-icon name="plus-circle" size="28" @click="goAddCourse"></u-icon> -->
			</view>
		</template>
		<view class="course-all">
			<view class="title-box">
				<view class="title-icon"></view>
				<view class="title-name">全部课程</view>
			</view>
			<!-- 	<view class="title-more">查看</view> -->
		</view>
		<div class="course">
			<!-- <view lines="1" class="co-name">主要课程</view> -->
			<div class="one-course" v-for="i in list" :key="i.courseId" @click="goMyCourse(i)">
				<image :src="i.courseJson" mode=""></image>
				<view class="title">{{ i.courseName }} - {{ i.teacherName }}</view>
				<view class="detail">{{ i.courseIntroduce }}</view>
			</div>
		</div>

		<!-- #ifdef H5 -->
		<!-- <div style="width: 100%;height: 50px;"></div> -->
		<!-- #endif -->
	</z-paging>
</template>

<script>
import { courseList } from '@/api/index.js';
import { getInfo } from '@/api/user.js';
export default {
	data() {
		return { list: [], user: { nickName: '' } };
	},
	onLoad() {
		this.getInfo();
	},
	methods: {
		getList(page, limit) {
			courseList()
				.then(res => {
					this.list = res.rows;
					this.$refs.paging.complete(res.rows);
				})
				.catch(res => {
					this.$refs.paging.complete(false);
				});
		},
		getInfo() {
			getInfo().then(res => {
				this.user = res.user;
			});
		},
		goAddCourse() {
			uni.navigateTo({
				url: '/pages_other/add-course/add-course'
			});
		},
		goMyCourse(i) {
			uni.navigateTo({
				url: '/pages_other/course-list/course-list?courseId=' + i.courseId
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
	margin: 52rpx 0 14rpx 32rpx;

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
.course-all {
	width: 680rpx;
	// display: flex;
	// flex-direction: row;
	justify-content: space-between;
	margin: 10rpx auto 20rpx;

	.title-box {
		width: 176rpx;
		height: 48rpx;
		display: flex;
		justify-content: space-between;
	}
	.title-icon {
		background-color: rgba(93, 79, 220, 1);
		border-radius: 8rpx;
		width: 16rpx;
		height: 48rpx;
		display: flex;
		flex-direction: column;
	}
	.title-name {
		width: 146rpx;
		line-height: 48rpx;
		font-weight: 600;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.title-more {
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
	position: relative;
	width: 686rpx;
	height: 280rpx;
	background-size: 702rpx 296rpx;
	display: flex;
	flex-direction: column;
	margin: 0 0 32rpx 32rpx;
	border-radius: 20rpx;
	overflow: hidden;
	image {
		position: absolute;
		width: 686rpx;
		height: 280rpx;
		top: 0;
		left: 0;
	}
	.title {
		background-color: rgba(0, 0, 0, 0.4);
		color: white;
		z-index: 100;
		height: 60rpx;
		overflow-wrap: break-word;
		font-size: 40rpx;
		font-weight: 600;
		text-align: left;
		white-space: nowrap;
		line-height: 60rpx;
		margin: 154rpx 0 0;
		padding-left: 36rpx;
	}
	.detail {
		height: 90rpx;
		background-color: rgba(0, 0, 0, 0.4);
		color: white;
		z-index: 100;
		box-sizing: border-box;
		font-size: 28rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 34rpx;
		padding: 0 32rpx 32rpx 32rpx;
	}
}
</style>
