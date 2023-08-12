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
		></u-tabs>
		<view class="type-list">
			<view class="text-wrapper" :class="{ active: current === 0 }" @click="current = 0">全部</view>
			<view class="text-wrapper" :class="{ active: current === 1 }" @click="current = 1">已完成</view>
			<view class="text-wrapper" :class="{ active: current === 2 }" @click="current = 2">未完成</view>
		</view>
		<!-- 未开始：不能点  未完成：去题目详情做题   完成：去题目详情可以修改  超时+已完成/待评分：去结果页/评分页  超时+未完成：去题目详情不能做题  -->
		<view class="list-item" v-for="i in 10" @click="goCourseIntro">
			<view class="title-and-time">
				<text lines="1" class="title">【作业】太极八法五步-第六式</text>
				<!-- 未开始 已完成 未完成 待评分 超时 -->
				<view class="time complete uncomplete wait expired">未完成</view>
			</view>
			<view class="teacher-and-time">
				<view class="teacher-name">王佳老师</view>
				<text lines="1" class="remaining-time uncomplete-and-expired other-types">剩余8小时52分钟</text>
			</view>
		</view>
	</view>
</template>

<script>
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
			current: 0
		};
	},
	methods: {
		goCourseIntro() {
			uni.navigateTo({
				url: '/pages_other/course-intro/course-intro'
			});
		}
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
		background: #61ad67;
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
	}
	.uncomplete-and-expired {
		color: rgba(224, 105, 105, 1);
	}
	.other-types {
		color: rgba(136, 136, 136, 1);
	}
}
</style>
