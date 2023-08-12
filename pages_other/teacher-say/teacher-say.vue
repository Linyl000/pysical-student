<template>
	<view class="page">
		<div class="teacher-name" @click="showTeacher = true">
			<u-input
				v-model="teacher"
				border="none"
				disabled
				disabledColor="#fff"
				suffixIcon="arrow-down"
				placeholder="请选择要评价的教师"
				fontSize="22"
			></u-input>
		</div>
		<text lines="1" class="text_4">课程评价</text>
		<view class="input_1">
			<text lines="1" class="text_5">分数</text>
			<view class="score-write">
				<u--input v-model="value" @change="change" border="none" fontSize="30" inputAlign="right" color="rgb(224, 105, 105)"></u--input>
				<text style="color: rgb(224, 105, 105);margin-left: 10rpx;">分</text>
			</view>
		</view>
		<view class="stu-says"><u--textarea height="100%" v-model="value1" placeholder="请输入内容" count></u--textarea></view>
		<view class="button_1"><text lines="1" class="text_5">提交</text></view>
		<!-- 选老师 -->
		<u-picker
			:show="showTeacher"
			title="请选择老师"
			:columns="cTeacher"
			immediateChange
			@cancel="showTeacher = false"
			@confirm="selectTeacher"
		></u-picker>
	</view>
</template>

<script>
export default {
	data() {
		return {
			teacher: '太极八卦连环掌-王伊伊老师',
			showTeacher: false,
			cTeacher: [['深圳', '厦门', '上海', '拉萨']]
		};
	},
	methods: {
		selectTeacher(e) {
			console.log(e);
			this.showTeacher = false;
		}
	}
};
</script>

<style scoped lang="scss">
.teacher-name {
	width: 540rpx;
	height: 100rpx;
	font-weight: 600;
	color: #2a2a2a;
	line-height: 100rpx;
	margin: 0 0 0 32rpx;
}
/deep/.u-input {
	height: 100%;
}

.text_4 {
	color: #2a2a2a;
	font-size: 32rpx;
	font-weight: 600;
	margin: 18rpx 0 8rpx 32rpx;
}
.input_1 {
	border-radius: 16rpx;
	width: 686rpx;
	height: 122rpx;
	border: 1px solid rgba(167, 173, 188, 1);
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	margin: 16rpx 0 50rpx 32rpx;
}
.text_5 {
	height: 122rpx;
	overflow-wrap: break-word;
 
	font-size: 32rpx;
	font-family: PingFangSC-Regular;
	font-weight: normal;
	text-align: left;
	white-space: nowrap;
	line-height: 122rpx;
	margin-left: 28rpx;
}
.score-write {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	font-weight: 600;
	line-height: 100rpx;
	margin: 0 32rpx 0 0;
}

.stu-says {
	border-radius: 16rpx;
	height: 386rpx;
	border: 1px solid rgba(167, 173, 188, 1);
	width: 686rpx;
	display: flex;
	flex-direction: column;
	margin: -2rpx 0 0 32rpx;
}
/deep/.u-textarea__field {
	font-size: 36rpx !important;
}

.button_1 {
	display: flex;
	flex-direction: column;
	border-radius: 48rpx;
	width: 448rpx;
	height: 96rpx;
	margin: 40rpx auto;
	// background-color: #dfe1e5;
	background-color: rgba(93, 79, 220, 1);
}
.text_5 {
	color: rgba(255, 255, 255, 1);
	font-size: 32rpx;
	font-weight: 600;
	text-align: center;
	line-height: 96rpx;
}
</style>
