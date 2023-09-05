<template>
	<view class="page">
		<view class="title">{{ '【' + (item.courseType == '1' ? '视频' : '理论') + '】' + item.examPaperName }}</view>
		<view class="cut-off-time">{{ '最后截止时间：' + item.taskEndTime }}</view>
		<view class="demand-box">
			<view class="demand-img"></view>
			<text lines="1" class="demand-text">要求</text>
		</view>
		<text class="description">{{ '分数达到' + '60' + '视为合格' }}</text>
		<!-- 视频图片 -->
		<div v-if="workVideo" class="have-video">
			<div class="icon"><u-icon name="play-right-fill" color="#fff" size="28"></u-icon></div>
			<view class="name-and-size">
				<text lines="1" class="name">{{ originalFilename }}</text>
				<text lines="1" class="size">{{ size }}M</text>
			</view>
			<div class="delete" @click="deleteVideo">删除</div>
		</div>

		<div v-else class="up-box" @click="selectVideo">
			<img v-if="vtype === 1" src="../../static/video-img.jpg" mode="" />
			<img v-if="vtype === 2" src="../../static/up-video.png" />
		</div>
		<view class="button_1" @click="submit">提交</view>
	</view>
</template>

<script>
import { start, submit } from '@/api/practice.js';
import { ip } from '@/api/api.js';
export default {
	data() {
		return {
			//显示视频上传状态
			vtype: 1,
			item: null,
			workVideo: '',
			size: '',
			originalFilename: '',
			upMediaOrImg: false
		};
	},
	onLoad({ item }) {
		this.item = JSON.parse(item);
	},
	methods: {
		selectVideo() {
			this.start();
			uni.chooseFile({
				// 	maxDuration: 60,
				count: 1,
				type: 'video',
				sourceType: ['album', 'camera'],
				extension: ['mp4', 'avi'],
				// 	compressed: true,
				success: r => {
					// console.log('r');
					// console.log(r);
					this.vtype = 2;
					let linShi2 = r.tempFiles[0].path;
					const fileExtension = r.tempFiles[0].name.substring(r.tempFiles[0].name.lastIndexOf('.') + 1);
					this.size = (r.tempFiles[0].size / (1024 * 1024)).toFixed(2);
					//上传中不可提交
					this.upMediaOrImg = true;
					uni.uploadFile({
						url: ip + '/common/upload',
						filePath: linShi2,
						name: 'file',
						header: {
							Authorization: uni.getStorageSync('token')
						},
						success: uploadFileRes => {
							this.vtype = 1;
							console.log(uploadFileRes);
							this.workVideo = JSON.parse(uploadFileRes.data).url;
							let name = JSON.parse(uploadFileRes.data).originalFilename;
							if (name.length > 20) {
								this.originalFilename = name.substring(0, 8) + '...' + name.slice(-4);
							} else {
								this.originalFilename = name;
							}
							this.upMediaOrImg = false;
						},
						fail() {
							this.upMediaOrImg = false;
							uni.showToast({
								title: '视频上传失败',
								icon: 'none',
								duration: 2000
							});
						}
					});
				}
			});
		},
		deleteVideo() {
			this.workVideo = '';
		},
		start() {
			start({ id: this.item.id }).then(res => {});
		},
		submit() {
			if (!this.workVideo) {
				uni.showToast({
					duration: 2000,
					title: '请提交视频！',
					icon: 'none'
				});
			}
			if (this.upMediaOrImg) {
				uni.showToast({
					duration: 2000,
					title: '请等待视频上传完成！',
					icon: 'none'
				});
			}
			submit({ id: this.item.id, workVideo: this.workVideo }).then(res => {
				if (res.code === 200) {
					uni.navigateTo({
						url: `/pages_other/wait-result/wait-result`
					});
				} else {
					uni.showToast({
						duration: 2000,
						title: '提交失败！',
						icon: 'none'
					});
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	padding: 52rpx 32rpx 0;
}
.title {
	width: 546rpx;
	height: 48rpx;
	overflow-wrap: break-word;

	font-size: 40rpx;
	font-family: PingFangSC-Semibold;
	font-weight: 600;

	white-space: nowrap;
	line-height: 48rpx;
}
.cut-off-time {
	font-size: 30rpx;
	margin-top: 16rpx;
}
.demand-box {
	display: flex;
	align-items: center;
	margin-top: 32rpx;

	.demand-img {
		width: 16rpx;
		height: 36rpx;
		border-radius: 8rpx;
		background-color: rgba(93, 79, 220, 1);
		margin-right: 12rpx;
	}
	.demand-text {
		font-size: 32rpx;
	}
}
.description {
	margin-top: 26rpx;

	line-height: 1.7;
}
.have-video {
	display: flex;
	align-items: center;
	width: 686rpx;
	height: 176rpx;
	box-sizing: border-box;
	padding: 20rpx 24rpx;
	border-radius: 16rpx;
	margin-top: 36rpx;
	border: 2rpx solid #ccc;
	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 96rpx;
		width: 96rpx;
		background-color: rgba(99, 177, 105, 1);
		border-radius: 16rpx;
		margin-right: 36rpx;
	}
	.name-and-size {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.name {
			// width: 354rpx;
			// overflow-wrap: break-word;
			font-size: 32rpx;
			font-weight: 600;
			// white-space: normal; /* 允许文本换行 */
			// line-height: 48rpx;
			// display: -webkit-box;
			// -webkit-box-orient: vertical;
			// -webkit-line-clamp: 1; /* 设置最多显示两行文本 */
			// text-overflow: ellipsis; /* 超出两行显示省略号 */
			// overflow: hidden; /* 隐藏超出部分的文本 */
		}
		.size {
			overflow-wrap: break-word;
			color: rgba(136, 136, 136, 1);
			font-size: 28rpx;
			margin-top: 8rpx;
		}
	}
	.delete {
		color: rgba(224, 105, 105, 1);
	}
}
.up-box {
	margin-top: 36rpx;
	width: 220rpx;
	height: 220rpx;
	image,
	img {
		width: 100%;
		height: 100%;
	}
}
.button_1 {
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 90rpx;
	border-radius: 48rpx;
	width: 448rpx;
	height: 96rpx;
	// margin: 40rpx auto;
	font-size: 32rpx;
	font-weight: 600;
	text-align: center;
	line-height: 96rpx;
	color: rgba(255, 255, 255, 1);
	// background-color: #dfe1e5;
	background-color: rgba(93, 79, 220, 1);
}
</style>
