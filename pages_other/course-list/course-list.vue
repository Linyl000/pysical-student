<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<!-- 		<template #top>
			<view class="type-list">
				<view class="text-wrapper" :class="{ active: current === 0 }" @click="current = 0">课时</view>
				<view class="text-wrapper" :class="{ active: current === 1 }" @click="current = 1">作业成绩</view>
				<view class="text-wrapper" :class="{ active: current === 2 }" @click="current = 2">考核成绩</view>
			</view>
		</template> -->

		<div v-if="current == 0" class="type">
			<div class="title">【课程】{{ list[0].courseName }}</div>
			<div class="type-item" v-for="(i, index) in list" :key="index" @click="goCurriculum(i)">
				<div class="item-title">{{ index + 1 }}.{{ i.taskName }}</div>
				<u-icon v-if="i.courseType == 0" name="file-text" color="#5d4fdc" size="26"></u-icon>
				<u-icon v-if="i.courseType == 1" name="play-circle" color="#5d4fdc" size="24"></u-icon>
			</div>
		</div>
		<div v-if="current == 1 || current == 2" class="type">
			<div v-if="current == 1" class="title">【历史练习成绩】xxxxxxxxxxxxx</div>
			<div v-if="current == 2" class="title">【历史考核成绩】xxxxxxxxxxxxx</div>
			<div class="small-colum">
				<div>练习日期</div>
				<div>章节</div>
				<div>练习时常</div>
				<div>分数</div>
			</div>
			<div class="small-colum" v-for="i in list" :key="i">
				<div>111</div>
				<div>222</div>
				<div>333</div>
				<div>
					<span class="score">4444</span>
					<span class="colums">分</span>
				</div>
			</div>
		</div>
	</z-paging>
</template>

<script>
import { coureseTaskList } from '@/api/course-list.js';
export default {
	data() {
		return {
			current: 0,
			list: [],
			courseId: null
		};
	},
	onLoad(option) {
		this.courseId = option.courseId;
	},
	// this.$refs.paging.reload();
	methods: {
		getList(page, limit) {
			console.log(111);
			if (this.current === 0) {
				coureseTaskList({ courseId: this.courseId })
					.then(res => {
						this.list = res.rows;
						this.$refs.paging.complete(res.rows);
					})
					.catch(res => {
						this.$refs.paging.complete(false);
					});
			} else if (this.current === 1) {
				console.log(111);
			} else {
				console.log(222);
			}
		},
		goCurriculum(i) {
			uni.navigateTo({
				url: '/pages_other/curriculum/curriculum?i=' + JSON.stringify(i)
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	background-color: rgba(248, 248, 248, 1);
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
		width: 218rpx;
		// width: 322rpx;
		border-radius: 36rpx;
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
.type {
	width: 718rpx;
	background: #ffffff;
	box-shadow: 0rpx 0rpx 8rpx 0rpx rgba(0, 0, 0, 0.1);
	border-radius: 16rpx;
	padding: 32rpx;
	box-sizing: border-box;
	margin: 0 auto;
	.title {
		height: 48rpx;
		font-size: 32rpx;
		color: #2a2a2a;
		line-height: 48rpx;
	}
	.type-item {
		display: flex;
		height: 90rpx;
		align-items: center;
		.item-title {
			flex: 1;
			color: #888888;
		}
	}
	.small-colum {
		display: flex;
		justify-content: space-between;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 28rpx;
		color: #888888;
		div {
			width: 25%;
			text-align: center;
		}
		.score {
			color: rgba(224, 105, 105, 1);
			font-size: 36rpx;
		}
		.colums {
			color: rgba(224, 105, 105, 1);
			font-size: 28rpx;
		}
	}
}
</style>
