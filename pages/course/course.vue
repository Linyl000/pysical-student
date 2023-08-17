<template>
	<view class="page">
		<u-tabs
			lineColor="#5d4fdc"
			:list="list1"
			lineWidth="40"
			:itemStyle="{
				height: '100rpx'
			}"
			:activeStyle="{
				fontWeight: 'bold'
			}"
			lineHeight="5"
			@change="tabChange"
		></u-tabs>
		<view class="type-list">
			<view class="text-wrapper" :class="{ active: current === 2 }" @click="current = 2">全部</view>
			<view class="text-wrapper" :class="{ active: current === 1 }" @click="current = 1">已完成</view>
			<view class="text-wrapper" :class="{ active: current === 0 }" @click="current = 0">未完成</view>
		</view>
		<!-- 未开始：不能点  未完成：去题目详情做题   完成：去题目详情可以修改  超时+已完成/待评分：去结果页/评分页  超时+未完成：去题目详情不能做题  -->
		<view class="list-item" v-for="i in paperList" @click="goCourseIntro(i)">
			<view class="title-and-time">
				<text lines="1" class="title">{{ '【' + (i.courseType == '1' ? '视频' : '理论') + '】' + i.examPaperName }}</text>
				<!-- 未开始 已完成 未完成 待评分 超时 -->
				<view
					:class="[
						'time',
						{ complete: i.finishStatus == '1' },
						{ wait: i.finishStatus == '2' },
						{ uncomplete: i.finishStatus == '0' },
						{ expired: i.finishStatus == '0' && i.lastTime == '已结束' }
					]"
				>
					{{
						i.finishStatus == '1'
							? '完成'
							: i.finishStatus == '2'
							? '待评分'
							: i.finishStatus == '0' && i.lastTime == '已结束'
							? '已超时'
							: '未完成'
					}}
				</view>
			</view>

			<view class="teacher-and-time">
				<view class="teacher-name">{{ i.teacherName }}</view>

				<span class="remaining-time" v-if="i.lastType == 0">未开始</span>
				<span class="remaining-time uncomplete-and-expired" v-if="i.lastType == 1 && i.finishStatus == '0'">
					{{ '截止时间' + i.lastTime }}
				</span>
				<span
					class="remaining-time"
					v-if="(i.lastType == 1 && (i.finishStatus == '2' || i.finishStatus == '1')) || (i.lastType == 2 && i.finishStatus !== '0')"
				>
					{{ i.workScore === -1 ? '评分中' : i.workScore === -2 ? '成绩出错，等待教师复核' : '得分' + i.workScore }}
				</span>
				<span class="remaining-time" v-if="i.lastType == 2 && i.finishStatus == '0'">已超时</span>
				<!-- {{ i.finishStatus == '1' ? '得分' + i.workScore : '截止时间' + i.lastTime }} -->
			</view>
		</view>
	</view>
</template>

<script>
import * as request from '@/api/api.js';

export default {
	data() {
		return {
			list1: [
				{
					name: '作业列表'
				},
				{
					name: '考核列表'
				}
			],
			current: 2,
			type: 0,
			paperList: []
		};
	},
	watch: {
		current: {
			handler(newValue, oldValue) {
				this.getPaperList();
			}
			// immediate:true
		}
	},
	methods: {
		goCourseIntro(i) {
			if (i.lastType == 1 && i.finishStatus == '0') {
				uni.navigateTo({
					url: `/pages_other/course-intro/course-intro?item=${JSON.stringify(i)}`
				});
			} else if (i.lastType == 0) {
				uni.showToast({
					duration: 2000,
					title: '未开始',
					icon: 'none'
				});
			} else {
				uni.showToast({
					duration: 2000,
					title: '已结束',
					icon: 'none'
				});
			}
		},
		getPaperList() {
			let body = { taskType: this.type };
			if (!this.current === 2) {
				body.finishStatus = this.current;
			}

			request.get('/work/studentWork/list', body).then(({ rows }) => {
				this.paperList = rows;
			});
		},
		tabChange({ index }) {
			this.type = index;
			this.getPaperList();
		}
	},
	mounted() {
		this.getPaperList();
	}
};
</script>

<style lang="scss" scoped>
.page {
	background-color: rgba(248, 248, 248, 1);
}
/deep/.u-tabs__wrapper__nav__item__text {
	font-size: 36rpx !important;
}
.type-list {
	display: flex;
	justify-content: space-around;
	width: 750rpx;
	height: 68rpx;
	box-sizing: border-box;
	margin: 20rpx auto;
	padding: 0 20rpx;

	.text-wrapper {
		width: 200rpx;
		// border-radius: 36rpx;
		line-height: 66rpx;
		text-align: center;
		border: 1px solid rgba(93, 79, 220, 1);
		color: rgba(93, 79, 220, 1);
	}
	.active {
		background-color: rgba(93, 79, 220, 1);
		box-shadow: 0px 4px 4px 0px rgba(93, 79, 220, 0.1);
		color: #fff;
		font-weight: 600;
	}
}
.list-item {
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	width: 686rpx;
	height: 176rpx;
	margin: 0 auto 16rpx;
	padding: 0 32rpx;
	border-radius: 16rpx;
	background: rgba(255, 255, 255, 1);
}
.title-and-time {
	width: 654rpx;
	flex-direction: row;
	display: flex;
	justify-content: space-between;

	.title {
		width: 436rpx;
		height: 48rpx;
		overflow-wrap: break-word;

		font-size: 32rpx;
		font-family: PingFangSC-Semibold;
		font-weight: 600;
		text-align: left;
		white-space: nowrap;
		line-height: 48rpx;
		margin-top: 32rpx;
	}
	.time {
		display: flex;
		flex-direction: column;
		height: 48rpx;
		width: 120rpx;
		line-height: 48rpx;
		color: #fff;
		text-align: center;
		font-weight: 600;
		border-bottom-left-radius: 20rpx;
	}
	.complete {
		background: #61ad67;
	}
	.uncomplete {
		background: #d56464;
	}
	.wait {
		background: #5c4ed9;
	}
	.expired {
		background: #dcdde1;
	}
}
.teacher-and-time {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 30rpx;

	.teacher-name {
		font-size: 28rpx;
		margin-left: 16rpx;
	}
	.remaining-time {
		font-size: 24rpx;
		text-align: right;
		color: rgba(136, 136, 136, 1);
	}
	.uncomplete-and-expired {
		color: rgba(224, 105, 105, 1);
	}
}
</style>
