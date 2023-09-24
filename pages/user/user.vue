<template>
	<view class="page">
		<view class="section1">
			<view class="block_5">
				<image :src="list.avatar" class="image_3"></image>
				<view class="text-group_5">
					<text lines="1" class="text_3">{{ list.nickName }}</text>
					<text lines="1" class="text_4">{{ list.studentNo }}</text>
				</view>
				<u-icon name="edit-pen" color="#fff" size="28" @click="goUserInfo"></u-icon>
			</view>
		</view>
		<div class="section2">
			<u-cell-group>
				<u-cell icon="lock" title="修改密码" :isLink="true" @click="goChangeMima"></u-cell>
				<u-cell icon="../../../../../../../../../static/study.png" title="学习记录" :isLink="true" @click="goStudyRecords"></u-cell>
				<u-cell icon="../../../../../../../../../static/teachersay.png" title="课程评价" :isLink="true" @click="goTeacherSay"></u-cell>
				<u-cell icon="../../../../../../../../../static/number.png" title="积分排名" :isLink="true" @click="goNumber"></u-cell>
				<!-- 	<u-cell icon="../../../../../../../../../static/logout.png" title="退出" :isLink="true" @click="logout"></u-cell> -->
			</u-cell-group>
		</div>
	</view>
</template>

<script>
import { getInfo } from '@/api/user.js';
export default {
	data() {
		return {
			list: null
		};
	},
	onLoad() {
		this.getInfo();
	},
	methods: {
		getInfo() {
			getInfo().then(res => {
				this.list = res.user;
			});
		},
		goUserInfo() {
			uni.navigateTo({
				url: '/pages_other/user-info/user-info'
			});
		},
		goStudyRecords() {
			uni.navigateTo({
				url: '/pages_other/study-records/study-records'
			});
		},
		goTeacherSay() {
			uni.navigateTo({
				url: '/pages_other/teacher-say/teacher-say'
			});
		},
		goNumber() {
			uni.navigateTo({
				url: '/pages_other/number/number'
			});
		},
		goChangeMima() {
			uni.navigateTo({
				url: '/pages_other/changeMima/changeMima'
			});
		},
		logout() {}
	}
};
</script>

<style scoped lang="scss">
page,
.page {
	background: #f8f8f8;
}
.section1 {
	background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/c5b841efbf714a2cb7f869bcda97adb7_mergeImage.png);
	width: 750rpx;
	height: 340rpx;
	display: flex;
	flex-direction: column;
	background-size: cover;
	background-repeat: no-repeat;
}
.block_5 {
	width: 670rpx;
	height: 340rpx;
	flex-direction: row;
	display: flex;
	align-items: center;
	margin: 0 40rpx;

	.image_3 {
		width: 120rpx;
		height: 120rpx;
		border: 6rpx solid #ffffff;
		border-radius: 50%;
		margin-right: 24rpx;
	}
	.text-group_5 {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.text_3 {
			height: 64rpx;
			overflow-wrap: break-word;
			color: rgba(255, 255, 255, 1);
			font-size: 40rpx;
			font-weight: 600;
			white-space: nowrap;
			line-height: 64rpx;
		}
		.text_4 {
			height: 36rpx;
			overflow-wrap: break-word;
			color: rgba(255, 255, 255, 1);
			font-size: 28rpx;
			white-space: nowrap;
			line-height: 36rpx;
			margin-top: 8rpx;
		}
	}
}
.section2 {
	width: 686rpx;
	background: #ffffff;
	border-radius: 16rpx;
	margin: 24rpx auto;
	/deep/.u-cell {
		height: 110rpx;
		.u-line {
			border: 0 !important;
		}
		.u-cell__body {
			height: 100%;
		}
		.u-cell__title-text {
			font-size: 34rpx;
			font-weight: 600;
		}
		.u-icon {
			margin: 0 12rpx;
			width: 48rpx;
			height: 48rpx;
			text {
				font-size: 44rpx !important;
			}
		}
	}
}
</style>
