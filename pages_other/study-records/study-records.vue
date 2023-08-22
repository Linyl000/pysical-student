<template>
	<z-paging ref="paging" loading-more-no-more-text="THE END" v-model="list" @query="getList" class="page">
		<template #top>
			<view class="search-box"><u-search placeholder="搜索课程记录" v-model="courseName"></u-search></view>
		</template>
		<div v-for="(i, index) in list" :key="index">
			<view class="text-wrapper_1">
				{{ i.recordTime }}
				<!-- 	<text lines="1" class="text_5">02</text>
			<text lines="1" class="text_6">/23</text> -->
			</view>
			<view class="container" v-for="j in i.tkyStudyRecords" :key="j.taskId" @click="goCurriculum(j)">
				<image class="img-main" :src="j.taskVideo"></image>
				<view class="right-content">
					<view lines="1" class="title">{{ j.taskName }}</view>
					<view lines="1" class="details">
						<span>已学习{{ j.allTime }}</span>
						<!-- <text style="color: rgb(224, 105, 105);">已播放98%</text> -->
					</view>
				</view>
			</view>
		</div>
	</z-paging>
</template>

<script>
import { studyRecordList, studyRecordAdd, studyRecordUp } from '@/api/study-records.js';
export default {
	data() {
		return {
			list: [],
			courseName: ''
		};
	},
	methods: {
		getList(page, limit) {
			studyRecordList({ pageSize: page, pageNum: limit, courseName: this.courseName })
				.then(res => {
					this.list = res.data;
					this.$refs.paging.complete(res.data);
				})
				.catch(res => {
					this.$refs.paging.complete(false);
				});
		},
		goCurriculum(i) {
			uni.navigateTo({
				url: '/pages_other/curriculum/curriculum?i=' + JSON.stringify(i)
			});
		}
	}
};
</script>

<style scoped lang="scss">
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
.text-wrapper_1 {
	height: 64rpx;
	overflow-wrap: break-word;
	font-weight: 600;
	white-space: nowrap;
	line-height: 64rpx;
	margin: 32rpx 0 0 32rpx;

	.text_5 {
		font-size: 36rpx;
	}
	.text_6 {
		font-size: 24rpx;
	}
}
.container {
	display: flex;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 16rpx;
	width: 686rpx;
	height: 176rpx;
	margin: 0rpx auto 32rpx;

	.img-main {
		width: 144rpx;
		height: 144rpx;
	}
	.right-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: 16rpx;
	}
	.title {
		width: 308rpx;
		height: 48rpx;
		overflow-wrap: break-word;

		font-size: 32rpx;
		font-weight: 600;
		white-space: nowrap;
	}
	.details {
		display: flex;
		justify-content: space-between;
		overflow-wrap: break-word;
		color: rgba(136, 136, 136, 1);
		font-size: 24rpx;
		line-height: 64rpx;
	}
}
</style>
