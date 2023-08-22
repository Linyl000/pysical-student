<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<template #top>
			<view class="search-box"><u-search placeholder="搜索成绩" v-model="taskName"></u-search></view>
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
		</template>
		<view v-for="i in list" class="score-list" :key="i.id">
			<view class="list-left">
				<text lines="1" class="title">{{ i.taskName }}</text>
				<view class="teacher">{{ i.teacherName }}老师</view>
			</view>
			<view class="list-right">
				<view class="details">
					<text lines="1" class="score-1">
						{{ i.workScore == -1 ? '评分中' : i.workScore == -2 ? '成绩出错，等待教师复核' : i.workScore }}
					</text>
					<text v-if="i.workScore !== -1 && i.workScore !== -2" lines="1" class="score-2">分</text>
				</view>
				<!-- <text lines="1" class="timers">202201学期</text> -->
			</view>
		</view>
	</z-paging>
</template>

<script>
import { resultList } from '@/api/score.js';
export default {
	data() {
		return {
			list: [],
			taskName: '',
			list1: [
				{
					name: '作业成绩'
				},
				{
					name: '考核成绩'
				}
			],
			type: 0
		};
	},
	methods: {
		getList(page, limit) {
			resultList({ taskType: this.type, taskName: this.taskName })
				.then(res => {
					this.list = res.rows;
					this.$refs.paging.complete(res.rows);
				})
				.catch(res => {
					this.$refs.paging.complete(false);
				});
		},
		tabChange({ index }) {
			this.type = index;
			this.$refs.paging.reload();
		}
	}
};
</script>

<style lang="scss">
.page,
page {
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
	justify-content: flex-end;
	.details {
		white-space: nowrap;
		color: rgba(224, 105, 105, 1);

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
