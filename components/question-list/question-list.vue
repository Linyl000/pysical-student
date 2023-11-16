<template>
	<view>
		<view class="exam_progress">
			<!-- <view class="slider">
				<u-slider
					height="12"
					inactiveColor="#75BDF8"
					activeColor="#fff"
					disabled
					:value="((exampagenum + 1) / answerData.length) * 100"
				></u-slider>
			</view> -->
			<view class="subject_num">
				<text>第{{ exampagenum + 1 }}题</text>
				<text>/共{{ answerData.length }}题</text>
			</view>
		</view>
		<view class="page_content">
			<swiper
				style="height: 90%;"
				:indicator-dots="false"
				:circular="false"
				:autoplay="false"
				interval="5000"
				duration="500"
				@change="changeQues"
				:current="exampagenum"
			>
				<swiper-item v-for="(item, index) in answerData" :key="index">
					<view class="" style="height: 100%; overflow: scroll;">
						<view class="subject_title" v-html="showTitleHtml(index + 1, item)"><!-- {{index}}.{{item.title}} --></view>
						<view class="answer">
							<u-radio-group v-if="item.titleType == '0'" v-model="item.myAnswer" placement="column">
								<u-radio class="answer_options" :label="`A. ${item.optionA}`" name="A"></u-radio>
								<u-radio class="answer_options" :label="`B. ${item.optionB}`" name="B"></u-radio>
								<u-radio class="answer_options" :label="`C. ${item.optionC}`" name="C"></u-radio>
								<u-radio class="answer_options" :label="`D. ${item.optionD}`" name="D"></u-radio>
							</u-radio-group>
							<u-checkbox-group v-if="item.titleType == '1'" v-model="item.myAnswer" placement="column" shape="circle">
								<u-checkbox class="answer_options" :label="`A. ${item.optionA}`" name="A"></u-checkbox>
								<u-checkbox class="answer_options" :label="`B. ${item.optionB}`" name="B"></u-checkbox>
								<u-checkbox class="answer_options" :label="`C. ${item.optionC}`" name="C"></u-checkbox>
								<u-checkbox class="answer_options" :label="`D. ${item.optionD}`" name="D"></u-checkbox>
							</u-checkbox-group>
							<u-radio-group v-if="item.titleType == '2'" v-model="item.myAnswer" placement="column">
								<u-radio class="answer_options" :label="`A. 正确`" name="0"></u-radio>
								<u-radio class="answer_options" :label="`B. 错误`" name="1"></u-radio>
							</u-radio-group>
							<view v-if="item.titleType == '3'">
								<video :src="item.correctAnswer" style="width: 360rpx; height: 220rpx;"></video>
								<div style="width: 200rpx;">
									<u-button color="#8767f5" :plain="true" text="查看视频要求" @click="need = true"></u-button>
								</div>
								<!-- 视频图片 -->
								<div v-if="item.myAnswer" class="have-video">
									<div class="icon"><u-icon name="play-right-fill" color="#fff" size="28"></u-icon></div>
									<!-- <view class="name-and-size">
										<text lines="1" class="name">{{ originalFilename }}</text>
										<text lines="1" class="size">{{ size }}M</text>
									</view> -->
									<div class="delete" @click="deleteVideo(item, index)">删除</div>
								</div>

								<div class="up-box" v-else @click="selectVideo(item, index)">
									<img v-if="vtype === 1" src="../../static/video-img.jpg" mode="" />
									<img v-if="vtype === 2" src="../../static/up-video.png" />
								</div>
								<div style="margin:20rpx 0;color:#a1a1a1;font-size: 24rpx;">
									<u-line-progress v-if="vtype === 2" :percentage="progressPercent" activeColor="#8767f5"></u-line-progress>
									<span>提示：上传时离开后台可能会造成上传失败！</span>
								</div>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
			<view class="page_bottom">
				<view class="subject_change">
					<view class="last_subject" @click="lastQue">上一题</view>
					<view class="next_subject" @click="nextQue">下一题</view>
				</view>
				<view class="bottom_btnbox">
					<view class="btnbox_left">
						<!-- 	<view class="collect btnbox_left_item" @click="collectChange">
							<image src="../../static/collect_icon_one.png" mode="" v-if="!collect"></image>
							<image src="../../static/collecr_icon_two.png" mode="" v-if="collect"></image>
							<view class="collect_text">收藏</view>
						</view> -->
						<!-- <view class="time btnbox_left_item" v-if="isRemaining">
							<image src="../../static/countDown.png" mode=""></image>
							<view class="time_text">{{ remaining }}</view>
						</view> -->
						<view class="answer_card btnbox_left_item" @click="show = true">
							<!-- <image src="../../static/answerCard.png" mode=""></image> -->
							<view class="answer_card_text">答题卡</view>
						</view>
					</view>
					<view class="btnbox_right"><view class="success_exam" @click="dialogChangeshow">交卷</view></view>
				</view>
			</view>
		</view>
		<u-popup @close="show = false" :show="show" mode="bottom" border-radius="14" height="100%">
			<view class="hide_answercard">
				<view class="hide_answercard_title">
					答题卡
					<!-- <view class="clear_answer">
						<view class="clear_answer_text">清空重做</view>
						<image src="../../static/del2.png" mode=""></image>
					</view> -->
				</view>
				<view class="hide_question">
					<!-- 每个类型的标题和题目 -->
					<view class="hide_exam_type">
						<!-- 	<view class="hide_exam_type_title">{{ i + 1 + '、' + item.text }}</view> -->

						<view class="hide_exam_content">
							<view class="hide_exam_content_item" v-for="(item, i) in examNumData" :key="i" @tap="toAnswerIndex(i + 1)">
								<view :class="['hide_exam_content_num', Changestate(item.state), i === exampagenum ? 'current' : '']">{{ i + 1 }}</view>
							</view>
						</view>
						<!-- <view style="height: 120rpx;" v-if="i + 1 == examNumData.length"></view> -->

						<view class="hide_exam_tips">
							<view class="hide_exam_tips_item">
								<view class="not_done_tip"></view>
								<view class="not_done_tip_text">未做</view>
							</view>
							<view class="hide_exam_tips_item">
								<view class="done_tip"></view>
								<view class="done_tip_text">已做</view>
							</view>
							<view class="hide_exam_tips_item">
								<view class="current_tip"></view>
								<view class="current_tip_text">当前</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</u-popup>
		<u-popup :show="need" @close="need = false" mode="center" :round="10">
			<view style="width:500rpx;padding: 20rpx;">
				<view>1.视频稳定，确保摄像头保持稳定，人物肢体不超出摄像范围。</view>
				<view>2.仅允许一个示范者出现在视频中，其他人不得入镜。</view>
				<view>3.视频清晰度至少为720p。</view>
				<view>4.在干净、无干扰的环境中进行演示。</view>
				<view>5.上传视频与模范视频同步开始，并在相同动作结束，学生可自行裁剪视频。</view>
				<view>6.统一使用mp4格式，并按章节分割上传视频。</view>
				<view>7.视频必须以正常速度完成，不得加速或减速。</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
import { ip } from '@/api/api.js';
import { upload, merge, background } from '@/api/practice.js';
import SparkMD5 from 'spark-md5';

export default {
	name: 'question-list',
	props: {
		//类型  exam考试   exercise在线练习
		exType: {
			type: String,
			default: 'exam'
		},
		//当前为第几题标识
		exampagenum: {
			type: Number,
			default: 0
		},
		// 题目选项数据
		answerData: {
			type: Array
		},
		// 倒计时
		startTime: {
			type: Number,
			default: 0
		},
		//是否显示倒计时
		isRemaining: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			// 答题卡是否显示
			show: false,
			//答题卡数据
			examNumData: [],
			//交卷提示词
			content: '是否确认交卷？',
			//交卷对话框是否显示
			dialogshow: false,
			// 收藏功能状态
			collect: false,
			//倒计时时间
			remaining: '',
			thisStartTime: this.startTime,
			vtype: 1,
			upMediaOrImg: false,
			need: false,
			//-----
			chunkSize: 10 * 1024 * 1024, // 每个切片的大小（这里设置为10MB）
			fileIndex: 0, // 当前切片索引
			totalChunks: 0, // 总切片数
			fileKey: Date.now(), // 文件的唯一标识
			fileChunks: [], // 存储切片的数组
			uploaded: 0, // 已上传块数
			md5: null,
			file: null,
			progressPercent: 0,
			alreadyUpChunks: [] //已上传的文件块索引
		};
	},
	mounted() {
		this.init();
		if (this.isRemaining) {
			this.getTime();
		}
	},
	watch: {
		answerData: {
			handler(newValue, oldValue) {
				this.init();
			},
			deep: true
		}
	},
	methods: {
		init() {
			this.examNumData = this.answerData.map(item => ({ id: item.id, state: item.myAnswer.length > 0 ? 1 : 0, myAnswer: item.myAnswer }));
			if (this.exampagenum == 0) {
				this.isQuestionCollect(0);
			}
			console.log(this.examNumData);
		},

		//获取考试时间
		getTime() {
			let that = this;
			setInterval(function() {
				that.countDown();
			}, 1000);
		},
		//倒计时
		countDown() {
			var dj = this.thisStartTime;
			let that = this;
			that.remaining = that.djs(that.thisStartTime);
			if (dj <= 0) {
				this.remaining = '已结束';
			} else {
				var ddf = this.djs(dj); //格式化过后的时间
				this.remaining = ddf;
				//当前时间减去时间
				dj = dj - 1;
				this.timeRange++;
				this.thisStartTime = dj;
			}
		},

		//得到的秒换算成时分秒
		djs: function(ms) {
			var h = parseInt(ms / (60 * 60));
			var m = parseInt((ms % (60 * 60)) / 60);
			var s = (ms % (60 * 60)) % 60;
			if (h < 10) {
				h = '0' + h;
			}
			if (m < 10) {
				m = '0' + m;
			}
			if (s < 10) {
				s = '0' + s;
			}
			return h + ':' + m + ':' + s;
		},
		getCurrentTime() {
			let yy = new Date().getFullYear();
			let mm = new Date().getMonth() + 1;
			let dd = new Date().getDate();
			let hh = new Date().getHours();
			let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
			let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
			return yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
		},
		showTitleHtml(index, item) {
			// return '<p style="float: left;">' + index + '：</p >' + value;

			let typeText = '：';
			if (item.titleType == '0') {
				typeText = '：（单选题）';
			} else if (item.titleType == '1') {
				typeText = '：（多选题）';
			} else if (item.titleType == '2') {
				typeText = '：（判断题）';
			} else if (item.titleType == '3') {
				typeText = '：（视频题）【标准视频如下】';
			}
			return '<p style="float: left;">' + index + typeText + '</p>' + item.titleContent + '（' + item.titleScore + '分）';
		},
		// 答案选项初始样式
		changeAnswer(state) {
			if (state == 0) {
				return 'answer_options';
			} else if (state == 1) {
				return 'answer_options_active';
			} else if (state == 2) {
				return 'answer_options_error';
			}
		},
		// 答题卡控制选项样式
		Changestate(state) {
			// console.log(state);
			if (state == 0) {
				return 'not_done';
			} else if (state == 1) {
				return 'done';
			} else if (state == 2) {
				return 'current';
			} else if (state == 3) {
				return 'correct';
			} else if (state == 4) {
				return 'error';
			}
		},
		//题目轮播切换
		changeQues(event) {
			this.$emit('changeQues', event.detail.current);
			this.isQuestionCollect(event.detail.current);
		},
		//上一题
		lastQue() {
			if (this.exampagenum > 0) {
				this.$emit('changeQues', this.exampagenum - 1);
				this.isQuestionCollect(this.exampagenum - 1);
			}
		},
		//下一题
		nextQue() {
			if (this.exampagenum < this.answerData.length - 1) {
				this.$emit('changeQues', this.exampagenum + 1);
				this.isQuestionCollect(this.exampagenum + 1);
			}
			this.isOne = false;
		},
		toAnswerIndex: function(index) {
			this.$emit('changeQues', index - 1);
			this.show = false;
			this.isQuestionCollect(index - 1);
		},
		isQuestionCollect(index) {},
		//交卷对话框显示
		dialogChangeshow() {
			this.$emit('showRes', true);
		},
		selectVideo(item, index) {
			if (this.vtype === 2) {
				return;
			}
			let chunkSize;
			uni.chooseFile({
				count: 1,
				type: 'video',
				sourceType: ['album', 'camera'],
				extension: ['mp4', 'avi'],
				success: r => {
					this.vtype = 2;
					this.file = r.tempFiles[0];
					this.getMD5(this.file).then(res => {
						this.md5 = res;
						background({ identifier: this.md5 }).then(res => {
							if (res.skipUpload) {
								this.merge(index);
							} else {
								this.alreadyUpChunks = res.uploaded;
								this.totalChunks = Math.ceil(this.file.size / this.chunkSize);
								this.upload(index);
							}
						});
					});
				}
			});
		},
		async upload(index) {
			for (let i = 0; i < this.totalChunks; i++) {
				console.log('------' + i);
				if (this.alreadyUpChunks.includes(i)) {
					this.uploaded++;
					this.progressPercent = Math.floor((this.uploaded / this.totalChunks) * 99);
					continue;
				}
				const start = i * this.chunkSize;
				// 获取当前切片数据 如果前者大则以this.file.size作为结尾
				const end = Math.min(start + this.chunkSize, this.file.size);
				const chunkData = this.file.slice(start, end); //块数据

				let obj = {
					chunkNumber: i,
					filename: this.file.name ? this.file.name : new Date().getTime(),
					identifier: this.md5,
					chunkSize: this.chunkSize,
					currentChunkSize: end - start,
					relativePath: this.file.name ? this.file.name : new Date().getTime(),
					totalChunks: this.totalChunks,
					totalSize: this.file.size
				};
				this.fileChunks.push(
					new Promise((resolve, reject) => {
						uni.uploadFile({
							url: ip + '/background/file/upload',
							file: chunkData,
							formData: obj,
							timeout: 1000 * 60 * 60,
							header: {
								Authorization: uni.getStorageSync('token')
							},
							success: uploadFileRes => {
								this.uploaded++;
								this.progressPercent = Math.floor((this.uploaded / this.totalChunks) * 99);

								resolve();
							},
							fail(err) {
								reject(err);
							}
						});
					})
				);
			}
			try {
				await Promise.all(this.fileChunks);
				this.merge(index);
			} catch (error) {
				this.vtype = 1;
				this.upMediaOrImg = false;
				uni.showToast({
					title: '视频上传失败，请重试！',
					icon: 'none',
					duration: 2000
				});
			}
		},
		merge(index) {
			merge({ identifier: this.md5 }).then(res => {
				if (res.code === 200) {
					this.progressPercent = 100;
					this.vtype = 1;
					this.answerData[index].myAnswer = res.url;
					this.upMediaOrImg = false;
				} else {
					this.vtype = 1;
					this.upMediaOrImg = false;
					uni.showToast({
						title: '视频切片合并失败，请重试！',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		getMD5(file) {
			return new Promise((resolve, reject) => {
				var fileReader = new FileReader();
				var spark = new SparkMD5.ArrayBuffer();
				fileReader.onload = e => {
					spark.append(e.target.result);
					const md5 = spark.end();
					resolve(md5);
				};
				fileReader.onerror = error => {
					reject(error);
				};
				// 获取文件二进制数据
				fileReader.readAsArrayBuffer(file);
			});
		},

		deleteVideo(item, index) {
			this.answerData[index].myAnswer = '';
		}
	}
};
</script>

<style lang="scss">
.exam_progress {
	padding-left: 10rpx;
	display: flex;

	.slider {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.subject_num {
		color: #ffffff;
		padding-left: 10rpx;
		white-space: nowrap;
	}
}

.page_content {
	width: 100%;
	height: 88%;
	background: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0rpx 5rpx 20rpx 1rpx rgba(0, 0, 0, 0.1);
	margin-top: 20rpx;
	padding: 40rpx 0rpx 0rpx 0rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.subject_title {
		padding: 0 30rpx 0 30rpx;
		word-break: break-all;
	}

	.answer {
		width: 100%;
		margin-top: 30rpx;
		box-sizing: border-box;
		// border: 1rpx solid;
		padding: 0 30rpx 0 30rpx;

		.answer_options {
			width: 100%;
			box-sizing: border-box;
			padding: 10rpx 20rpx 10rpx 20rpx;
			background: #f0f5fb;
			border: 4rpx solid #f0f5fb;
			margin-top: 30rpx;
			display: flex;
			// /deep/ .u-radio__text {
			// 	display: block;
			// 	width: 100%;
			// }
			// /deep/ .u-checkbox {
			// 	&:nth-child(2) {
			// 		background-color: #ccc;
			// 	}
			// }
			.answer_detail {
				padding-left: 20rpx;
				word-break: break-all;
			}
		}

		.answer_options_active {
			width: 100%;
			box-sizing: border-box;
			padding: 10rpx 20rpx 10rpx 20rpx;
			background: #ffffff;
			border: 4rpx solid #8767f5;
			margin-top: 30rpx;
			display: flex;

			.answer_detail {
				padding-left: 20rpx;
				word-break: break-all;
			}
		}
		.answer_options_error {
			width: 100%;
			box-sizing: border-box;
			padding: 10rpx 20rpx 10rpx 20rpx;
			background: #ffffff;
			border: 4rpx solid #eb0003;
			margin-top: 30rpx;
			display: flex;

			.answer_detail {
				padding-left: 20rpx;
				word-break: break-all;
			}
		}

		.short_answer_questions {
			width: 100%;
			padding: 20rpx 20rpx 20rpx 20rpx;
			border: 1rpx solid #bbbbbb;
			color: #bbbbbb;
			box-sizing: border-box;
			border-radius: 20rpx;
			font-size: 28rpx;
		}
	}

	.analysis {
		padding: 0 30rpx 0 30rpx;

		.analysis_answer {
			display: flex;
			margin-top: 30rpx;
			// border: 1px solid;
			justify-content: space-around;

			.correct_answer_title {
				font-size: 32rpx;
			}

			.correct_answer_num {
				font-size: 32rpx;
				font-weight: bold;
				text-align: center;
				padding-top: 30rpx;
			}
		}

		.analysis_detail {
			margin-top: 20rpx;

			.analysis_title {
				font-size: 32rpx;
			}

			.analysis_text {
				font-size: 28rpx;
				margin-top: 10rpx;
				word-break: break-all;
			}
		}
	}

	.short_analysis {
		// border: 1rpx solid;
		padding: 20rpx 30rpx 0 30rpx;
		width: 100%;
		// height: 200rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		.short_analysis_btn {
			// border: 1rpx solid;
			color: #e50000;
		}

		.short_analysis_text {
			width: 100%;
			margin-top: 20rpx;

			.short_analysis_detail {
				margin-top: 20rpx;
				word-break: break-all;
			}
		}
	}

	.page_bottom {
		width: 100%;

		// border: 1px solid;
		.subject_change {
			display: flex;
			justify-content: flex-end;
			padding-right: 30rpx;
			color: #878887;
			padding-bottom: 20rpx;

			.next_subject {
				padding-left: 60rpx;
			}
		}

		.bottom_btnbox {
			display: flex;
			width: 100%;

			.btnbox_left {
				width: 75%;
				border-top: 1rpx dashed #8767f5;
				display: flex;
				justify-content: space-around;
				padding: 30rpx 0 30rpx 0;

				.btnbox_left_item {
					text-align: center;
					color: #bbbbbb;

					image {
						width: 40rpx;
						height: 40rpx;
					}
				}
			}

			.btnbox_right {
				width: 25%;
				display: flex;
				align-items: center;
				padding-right: 20rpx;
				padding-left: 10rpx;

				.success_exam {
					width: 100%;
					text-align: center;
					background: #8767f5;
					color: #ffffff;
					border-radius: 10rpx;
					padding: 10rpx 0 10rpx 0;
				}
			}
		}
	}
}
.hide_answercard {
	.hide_answercard_title {
		width: 100%;
		text-align: center;
		font-weight: bold;
		// position: fixed;
		// z-index: 999;
		// top: 0;
		background: #ffffff;
		padding: 40rpx 0 20rpx 0;
		.clear_answer {
			display: flex;
			position: absolute;
			top: 40rpx;
			right: 20rpx;
			// border: 1px solid;
			font-weight: normal;
			color: #acacac;
			font-size: 24rpx;

			.clear_answer_text {
				padding-right: 10rpx;
			}

			image {
				width: 30rpx;
				height: 32rpx;
			}
		}
	}
	.hide_question {
		// margin-top: 100rpx;
		height: 1000rpx;
		overflow: scroll;
		.hide_exam_type {
			margin-top: 20rpx;
			.hide_exam_type_title {
				padding-left: 20rpx;
			}

			.hide_exam_content {
				padding: 0rpx 0rpx 60rpx 0rpx;
				display: flex;
				// border: 1px solid;
				justify-content: flex-start;
				flex-wrap: wrap;

				.hide_exam_content_item {
					width: 20%;
					// border: 1px solid;
					text-align: center;
					display: flex;
					justify-content: center;
					// margin-top: 40rpx;
					margin-bottom: 40rpx;

					.hide_exam_content_num {
						width: 78rpx;
						height: 78rpx;
						border-radius: 10rpx;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					.not_done {
						background: #f4f4f4;
						border: 1rpx solid #f4f4f4;
					}

					.done {
						background: #ffffff;
						border: 1rpx solid #8767f5;
						color: #8767f5;
					}

					.current {
						border: 1rpx solid #8767f5;
						background: #8767f5;
						color: #ffffff;
					}

					.correct {
						background: #ffffff;
						border: 1rpx solid #10c600;
						color: #10c600;
					}

					.error {
						background: #ffffff;
						border: 1rpx solid #e50000;
						color: #e50000;
					}
				}
			}
		}
		.hide_exam_tips {
			width: 100%;
			display: flex;
			justify-content: space-around;
			box-sizing: border-box;
			padding: 20rpx 40rpx 60rpx 40rpx;
			position: fixed;
			bottom: 0;
			z-index: 999;
			background: #ffffff;

			.hide_exam_tips_item {
				display: flex;
				font-size: 24rpx;
				align-items: center;

				.not_done_tip {
					width: 24rpx;
					height: 24rpx;
					background: #f4f4f4;
					border-radius: 50%;
				}

				.not_done_tip_text {
					padding-left: 10rpx;
				}

				.done_tip {
					width: 23rpx;
					height: 23rpx;
					background: #ffffff;
					border-radius: 50%;
					border: 1rpx solid #8767f5;
				}

				.done_tip_text {
					padding-left: 10rpx;
					color: #8767f5;
				}

				.current_tip {
					width: 24rpx;
					height: 24rpx;
					background: #8767f5;
					border-radius: 50%;
				}

				.current_tip_text {
					padding-left: 10rpx;
					color: #8767f5;
				}

				.correct_tip {
					width: 23rpx;
					height: 23rpx;
					background: #ffffff;
					border-radius: 50%;
					border: 1rpx solid #10c600;
				}

				.correct_tip_text {
					padding-left: 10rpx;
					color: #10c600;
				}

				.error_tip {
					width: 23rpx;
					height: 23rpx;
					background: #ffffff;
					border-radius: 50%;
					border: 1rpx solid #e50000;
				}

				.error_tip_text {
					padding-left: 10rpx;
					color: #e50000;
				}
			}
		}
	}
}

.have-video {
	display: flex;
	align-items: center;
	width: 260rpx;
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
	margin-top: 30rpx;
	width: 220rpx;
	height: 220rpx;
	image,
	img {
		width: 100%;
		height: 100%;
	}
}
</style>
