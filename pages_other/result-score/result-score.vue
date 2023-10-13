<template>
	<view class="page">
		<div class="teacher-name" @click="listAll">
			<u-input
				v-model="teacher"
				border="none"
				disabled
				disabledColor="#fff"
				suffixIcon="arrow-down"
				placeholder="请选择要查询的课程"
				fontSize="22"
			></u-input>
		</div>
		<text lines="1" class="text_4">课程总成绩</text>
		<view v-if="finalScore" class="score-write">
			<text style="color:#333;margin-left: 10rpx;	font-weight: 500;font-size: 30rpx;">分数</text>
			<div>
				<text style="text-align: right;">{{ finalScore }}</text>
				<text style="margin-left: 10rpx;	font-weight: 500;font-size: 38rpx;text-align: right;">分</text>
			</div>
		</view>
		<view v-if="teacher && !finalScore" class="score-write">尚未查询到该课程总成绩</view>
		<!-- 选课程 -->
		<u-picker
			:show="showTeacher"
			title="请选择课程"
			:columns="cTeacher"
			immediateChange
			@cancel="showTeacher = false"
			@confirm="selectTeacher"
			keyName="courseName"
			confirmColor="#5D4FDC"
		></u-picker>
	</view>
</template>

<script>
import { listAll } from '@/api/teacher-say.js';
import { fianlResult } from '@/api/result-score.js';

export default {
	data() {
		return {
			teacher: '',
			showTeacher: false,
			cTeacher: [],
			courseId: null,
			evaluateContent: '',
			finalScore: ''
		};
	},
	methods: {
		listAll() {
			this.cTeacher = [];
			listAll().then(res => {
				if (res.data) {
					this.showTeacher = true;
					this.cTeacher.push(res.data);
				} else {
					uni.showToast({
						duration: 2000,
						title: '暂时没有可查看的课程',
						icon: 'none'
					});
				}
			});
		},
		selectTeacher(e) {
			this.courseId = e.value[0].courseId;
			this.teacher = e.value[0].courseName;
			this.showTeacher = false;
			this.fianlResult();
		},
		fianlResult() {
			fianlResult({ courseId: this.courseId }).then(res => {
				if (res.code === 200) {
					this.finalScore = res.finalScore;
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
.teacher-name {
	width: 700rpx;
	height: 100rpx;
	font-weight: 600;
	color: #2a2a2a;
	line-height: 100rpx;
	margin: 0 0 0 32rpx;
}
.text_4 {
	color: #2a2a2a;
	font-size: 32rpx;
	font-weight: 600;
	margin: 18rpx 0 8rpx 32rpx;
}
.score-write {
	display: flex;
	justify-content: space-between;
	font-size: 60rpx;
	font-weight: 600;
	line-height: 100rpx;
	margin: 0 32rpx 0;
	color: rgb(224, 105, 105);
}
</style>
