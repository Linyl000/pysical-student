<template>
	<view class="page">
		<view class="my-ava-info">
			<view class="single-avatar_1">
				<image class="ava" src="@/static/study.png"></image>
				<div class="camera"><u-icon name="camera-fill" color="#5d4fdc" size="28"></u-icon></div>
			</view>
			<!-- <text lines="1" class="my-name">杜若</text> -->
		</view>
		<u--form labelPosition="left" :model="form" :rules="rules" ref="uForm">
			<u-form-item prop="name" borderBottom ref="item1">
				<view class="input_1">
					<u--input placeholder="请输入真实姓名" v-model="value2" @change="change" border="none" fontSize="18"></u--input>
				</view>
			</u-form-item>
			<u-form-item prop="name" borderBottom ref="item1">
				<view class="input_1">
					<u--input placeholder="请输入您的学号" v-model="value2" @change="change" border="none" fontSize="18"></u--input>
				</view>
			</u-form-item>
			<u-form-item prop="name" borderBottom ref="item1">
				<view class="input_1">
					<u--input placeholder="请输入您所在的学院" v-model="value2" @change="change" border="none" fontSize="18"></u--input>
				</view>
			</u-form-item>
			<u-form-item prop="name" borderBottom ref="item1">
				<view class="input_1">
					<u--input placeholder="请输入您所学的专业" v-model="value2" @change="change" border="none" fontSize="18"></u--input>
				</view>
			</u-form-item>
			<u-form-item prop="name" borderBottom ref="item1">
				<u-radio-group v-model="value3" placement="row" size="24" labelSize="24">
					<u-radio activeColor="#5d4fdc" label="男"></u-radio>
					<u-radio activeColor="#5d4fdc" label="女"></u-radio>
				</u-radio-group>
			</u-form-item>
		</u--form>
		<view class="button_1">保存信息</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: [],
			rules: {
				name: [
					{
						required: true,
						message: '请输入真实姓名',
						trigger: ['blur', 'change']
					}
				]
			}
		};
	},
	methods: {}
};
</script>

<style scoped lang="scss">
.my-ava-info {
	width: 160rpx;
	height: 224rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 52rpx 0 0 296rpx;
}
.single-avatar_1 {
	position: relative;
	height: 160rpx;
	width: 160rpx;
	border-radius: 50%;

	image {
		height: 160rpx;
		width: 160rpx;
	}
	.camera {
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		right: 0;
		bottom: 0;
	}
}
.my-name {
	width: 72rpx;
	height: 48rpx;
	overflow-wrap: break-word;
 
	font-size: 36rpx;
	font-family: PingFangSC-Semibold;
	font-weight: 600;
	text-align: left;
	white-space: nowrap;
	line-height: 48rpx;
	margin: 16rpx 0 0 44rpx;
}
.input_1 {
	width: 630rpx;
	margin: auto;
	padding: 0 30rpx;
	background-color: rgba(248, 248, 248, 1);
	border-radius: 16rpx;
	height: 120rpx;
}
/deep/.u-input {
	height: 100%;
}
/deep/.u-form-item__body {
	padding: 0;
}
/deep/.u-line {
	border: 0 !important;
}
/deep/.u-radio-group {
	flex: 0 !important;
}
/deep/.u-radio-group--row {
	margin: 0 130rpx 0;
	justify-content: space-around;
	height: 120rpx;
}
.button_1 {
	border-radius: 48rpx;
	width: 448rpx;
	height: 96rpx;
	margin: 40rpx auto;
	font-size: 32rpx;
	font-weight: 600;
	text-align: center;
	line-height: 96rpx;
	color: rgba(255, 255, 255, 1);
	// background-color: #dfe1e5;
	background-color: rgba(93, 79, 220, 1);
}
</style>
