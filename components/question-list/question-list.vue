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
				style="height: 500rpx;"
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
							<view class="" v-if="item.type == 1">
								<view
									:class="[changeAnswer(item2.status)]"
									v-for="(item2, i2) in item.questionAnswerList"
									:key="i2"
									@click="changeOptions(i2)"
								>
									<view class="order">{{ item2.answerTitle }}.</view>
									<view class="answer_detail" v-html="item2.content"></view>
								</view>
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
	</view>
</template>

<script>
/**
 * question-list 题库列表
 * @description 模拟考试练习题列表
 * @property {Boolean} exType 类型 ：exam考试 ,exercise在线练习 , 默认值exam
 * @property {Boolean} isRemaining 是否显示倒计时(默认 true)
 * @property {Number} exampagenum 当前为第几题标识(默认 0 )
 * @property {Array} answerData 题目列表数据
 * @property {Number} startTime 倒计时 (单位秒 , 如 60 秒 , 默认0 ,isRemaining=true时生效)
 * @event {Function()} changeQues 题目轮播切换，返回参数未当前题目的下标 index
 * @event {Function()} runRes 点击交卷按钮
 * @event {Function()} collectChange 点击收藏  返回当前题目信息和下标
 * @event {Function()} changeOptions 监听题目选择和题目作答   返回对象 indexs当前下标  answerData.myAnswer当前题目的作答  answerData.isRight当前题目是否回答正确
 */
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
			thisStartTime: this.startTime
		};
	},
	mounted() {
		if (this.isRemaining) {
			this.getTime();
		}
		this.init();
	},
	created() {},
	methods: {
		init() {
			//-----------
			this.examNumData = this.answerData.map(item => ({ id: item.id, state: 0 }));

			console.log(this.examNumData);
			//---------
			if (this.exampagenum == 0) {
				this.isQuestionCollect(0);
			}
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
			if (item.type == 1) {
				typeText = '：（单选题）';
			} else if (item.type == 2) {
				typeText = '：（多选题）';
			} else if (item.type == 3) {
				typeText = '：（判断题）';
			} else if (item.type == 4) {
				typeText = '：（简答题）';
			}
			return '<p style="float: left;">' + index + typeText + '</p>' + item.title;
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
			console.log(state);
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
		//单选题选择答案改变样式
		changeOptions(index) {
			console.log('>>>>>', index);
			let answerObj = this.answerData[this.exampagenum];
			for (let i = 0; i < answerObj.questionAnswerList.length; i++) {
				this.answerData[this.exampagenum].questionAnswerList[i].status = 0;
			}
			this.answerData[this.exampagenum].questionAnswerList[index].status = 1;
			this.answerData[this.exampagenum].isAnswered = true; //添加当前题目是否已答题
			this.answerData[this.exampagenum].myAnswer = answerObj.questionAnswerList[index].answerTitle;
			if (this.answerData[this.exampagenum].myAnswer == this.answerData[this.exampagenum].rightkey) {
				this.answerData[this.exampagenum].isRight = 1;
			} else {
				this.answerData[this.exampagenum].isRight = 2;
			}
			// let obj={
			// 	'answerData':
			// }
			let obj = {
				answerData: this.answerData[this.exampagenum],
				indexs: this.exampagenum
			};
			this.$emit('changeOptions', obj);

			this.$set(this.examNumData[this.exampagenum], 'state', 1);
		},
		handleInput: function(item) {
			if (item.myAnswer != null && item.myAnswer != undefined && item.myAnswer != '') {
				item.isAnswered = true;
				item.isRight = 1;
			} else {
				item.isAnswered = false;
				item.isRight = 2;
			}
			let obj = {
				answerData: item,
				indexs: this.exampagenum
			};
			this.$emit('changeOptions', obj);
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
			this.$emit('runRes');
		}
	}
};
</script>

<style lang="scss" scoped>
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
</style>
