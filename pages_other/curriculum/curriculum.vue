<
<template>
	<view class="page">
		<!-- 视频课 -->
		<video v-if="i.courseType === 1" id="myVideo" ref="myVideo" class="video-inst" :src="i.courseVideo"></video>
		<text lines="1" class="course-name">{{ i.taskName }}</text>
		<!-- 	<view class="course-des">
			<text lines="1" class="teacher-name">王佳老师</text>
			<view class="look-number">2345人浏览</view>
		</view> -->
		<view class="course-des-box">
			<view class="block_3"></view>
			<text lines="1" class="text_7">章节详情</text>
		</view>
		<div class="course-video-info">
			<!-- 在现有各流派太极拳的基础上，从最为核心的八法五步技术上手，即：棚、捋、挤、按、採、捌、肘、靠八种手法，以及进、退、顾、盼、定五种步法，进行了系统在现有各流派太极拳的基础上，从最为核心的八法五步技术上手，即：棚、捋、挤、按、採、捌、肘、靠八种手法，以及进、退、顾、盼、定五种步法，进行了系统在现有各流派太极拳的基础上，从最为核心的八法五步技术上手，即：棚、捋、挤、按、採、捌、肘、靠八种手法，以及进、退、顾、盼、定五种步法，进行了系统 -->
			{{ i.taskDetails }}
		</div>

		<div class="course-image-text-info"><div class="content-rich" v-html="noticeContent"></div></div>
		<!-- 底部固定高度盒子 -->
		<div class="safe"></div>
		<!-- 固定底部 -->
		<!-- 	<div class="button-wrapper">
		<view class="text-wrapper" @click="goWait()">开始考核</view> 
			<view class="active" @click="goWait()">开始练习</view>
		</div>-->
	</view>
</template>

<script>
import { studyRecordAdd, studyRecordUp } from '@/api/study-records.js';
export default {
	data() {
		return {
			i: null,
			id: null,
			startTime: null,
			endTime: null
		};
	},
	onLoad(option) {
		this.i = JSON.parse(option.i);
		this.startTime = new Date().getTime();
		this.studyRecordAdd();
	},
	onUnload() {
		this.endTime = new Date().getTime();
		this.studyRecordUp();
	},
	methods: {
		// goResult(i) {
		// 	uni.navigateTo({
		// 		url: '/pages_other/get-result/get-result?type=' + i
		// 	});
		// }
		getWait() {
			uni.navigateTo({
				url: '/pages_other/wait-result/wait-result'
			});
		},
		studyRecordAdd() {
			studyRecordAdd({ taskId: this.i.taskId }).then(res => {
				this.id = res.data;
			});
		},
		studyRecordUp() {
			studyRecordUp({ recordId: this.id, allTime: this.endTime - this.startTime }).then(res => {});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	background-color: rgba(248, 248, 248, 1);
}
.video-inst {
	width: 686rpx;
	height: 386rpx;
	border-radius: 16rpx;
	margin: 20rpx auto;
}

.course-name {
	width: 346rpx;
	height: 48rpx;
	overflow-wrap: break-word;

	font-size: 36rpx;

	font-weight: 600;
	text-align: left;
	white-space: nowrap;
	line-height: 48rpx;
	margin: 16rpx 0 0 32rpx;
}
.course-des {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 686rpx;
	height: 48rpx;
	margin: 16rpx 0 0 32rpx;
}
.single-avatar_1 {
	width: 48rpx;
	height: 48rpx;
}
.teacher-name {
	width: 112rpx;
	height: 48rpx;
	overflow-wrap: break-word;

	font-size: 28rpx;
	font-family: PingFangSC-Regular;
	font-weight: normal;
	text-align: left;
	white-space: nowrap;
	line-height: 48rpx;
	margin-left: 8rpx;
}
.look-number {
	color: rgba(177, 182, 195, 1);
	font-size: 28rpx;
	line-height: 48rpx;
}
.course-des-box {
	width: 144rpx;
	height: 40rpx;
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	margin: 32rpx 0 0 32rpx;
}
.block_3 {
	background-color: rgba(93, 79, 220, 1);
	border-radius: 8rpx;
	width: 16rpx;
	height: 36rpx;
	margin-top: 2rpx;
	display: flex;
	flex-direction: column;
}
.text_7 {
	font-size: 28rpx;
}
.course-video-info,
.course-image-text-info {
	width: 686rpx;
	color: rgba(136, 136, 136, 1);
	font-size: 28rpx;
	line-height: 46rpx;
	margin: 16rpx auto;
	.content-rich {
		width: 100%;
		word-break: break-all;
	}
}

.safe {
	width: 100%;
	height: 140rpx;
}
.button-wrapper {
	position: fixed;
	display: flex;
	width: 100%;
	height: 120rpx;
	justify-content: space-around;
	bottom: 0;
	left: 0;
	padding-top: 20rpx;
	background-color: #fff;
	box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
	.text-wrapper {
		width: 320rpx;
		height: 68rpx;
		border-radius: 36rpx;
		line-height: 66rpx;
		text-align: center;
		border: 1px solid rgba(93, 79, 220, 1);
		color: rgba(93, 79, 220, 1);
	}
	.active {
		// width: 320rpx;
		width: 640rpx;
		height: 68rpx;
		border-radius: 36rpx;
		line-height: 66rpx;
		text-align: center;
		background-color: rgba(93, 79, 220, 1);
		color: #fff;
	}
}
</style>
