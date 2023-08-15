<template>
	<view class="page_big" :style="{ height: screenheight + 'px' }">
		<questionlist
			:style="{ height: screenheight - navbarHeight - 75 + 'px' }"
			:exampagenum="exampagenum"
			:answerData="answerData"
			:startTime="60"
			:isRemaining="true"
			@changeQues="changeQues"
			@changeOptions="changeOptions"
			@collectChange="collectChange"
			@runRes="runRes"
		></questionlist>
	</view>
</template>

<script>
import questionlist from '../../components/question-list/question-list.vue';
import * as request from '@/api/api.js'
export default {
	//声明组件   实例化组件
	components: {
		questionlist
	},
	onLoad({item}){
		 this.item=item
	},
	data() {
		return {
			//练习类型
			type: 'exam',
			//倒计时开始时间
			startTime: 3600,
			//倒计时时间
			remaining: '',
			// 屏幕高度
			screenheight: '',
			// 导航栏背景色
			top_bgCl: {
				background: '#8767f5'
			},
			// 答案选项数据
			answerData: null,
			//答题卡数据
			examNumData: null,
			//当前为第几题标识
			exampagenum: 0,
			item:null
		};
	},
	computed: {
		// 转换字符数值为真正的数值
		navbarHeight() {
			// #ifdef APP-PLUS || H5
			return this.height ? this.height : 44;
			// #endif
			// #ifdef MP
			// 小程序特别处理，让导航栏高度 = 胶囊高度 + 两倍胶囊顶部与状态栏底部的距离之差(相当于同时获得了导航栏底部与胶囊底部的距离)
			// 此方法有缺陷，暂不用(会导致少了几个px)，采用直接固定值的方式
			// return menuButtonInfo.height + (menuButtonInfo.top - this.statusBarHeight) * 2;//导航高度
			let height = uni.getSystemInfoSync().platform == 'ios' ? 44 : 48;
			return this.height ? this.height : height;
			// #endif
		}
	},
	mounted() {
		this.screenheight = uni.getSystemInfoSync().windowHeight;
		this.getTime();
	},
	onLoad({item}) {
		this.item=JSON.parse(item)
		this.initExam();
	},
	methods: {
		initExam() {
			console.log(this.item)
			request.get(`/exam/title/practice/work/${this.item.id}`).then(({data})=>{
				this.answerData=data.map(i=>{
					console.log(i,'li')
					 i.type=1
					 i.isAnswered=false
					 i.questionAnswerList=i.questionAnswerList.map(i=>{
						 i.id=i.content
						 i.status=0
						 return i
					 })
					 return i
					 
				})
			})
			//this.initExamNumData();
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
			var dj = this.startTime;
			let that = this;
			that.remaining = that.djs(that.startTime);
			if (dj <= 0) {
				this.remaining = '已结束';
			} else {
				var ddf = this.djs(dj); //格式化过后的时间
				this.remaining = ddf;
				//当前时间减去时间
				dj = dj - 1;
				this.timeRange++;
				this.startTime = dj;
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
		//题目轮播切换
		changeQues(event) {
			console.log('题目轮播切换>>>>>>>>>', event);
			this.exampagenum = event;
		},
		//题目选择
		changeOptions(event) {
			console.log('题目选择>>>>>>>>>', event);
		},
		//点击收藏
		collectChange(event) {
			console.log('点击收藏>>>>>>>>>', event);
			if (this.answerData[event.indexs].isCollect > 0) {
				this.answerData[event.indexs].isCollect = 0;
			} else {
				this.answerData[event.indexs].isCollect = 1;
			}
		},
		//交卷
		runRes(e) {
			
			uni.showModal({
				title: '是否交卷？',
				success: res => {
					if (res.confirm) {
						let answers=e.map(i=>{
							return {
								id:i.id,
								answer:i.myAnswer
							}
						})
						request.put('/exam/examDetail/practice/work/submit',{examRecordDetails:answers}).then(({code})=>{
							if(code!=200){
								 uni.showToast({
								 					duration: 2000,
								 					title: '提交失败',
								 					icon: 'none'
								 				});
							}
						})
						uni.navigateBack({ delta: 2 });
					}
				}
			});
		}
	}
};
</script>

<style lang="scss">
page {
	background: #8767f5;
}

.page_big {
	width: 100%;
	box-sizing: border-box;
	padding: 20rpx 30rpx 20rpx 30rpx;

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
			margin-top: 60rpx;
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
}
</style>
