<template>
	<view class="page">
		<view class="top_bg">
			<u-tabs
				lineColor="#fff"
				:list="list1"
				lineWidth="40"
				:itemStyle="{
					height: '100rpx'
				}"
				:activeStyle="{
					color: '#fff',
					fontWeight: 'bold'
				}"
				:inactiveStyle="{
					color: 'rgba(255,255,255,0.5)'
				}"
				lineHeight="5"
			></u-tabs>
			<view class="one_box">
				<!-- 第二名 -->
				<view class="top3">
					<view class="num_two">
						<image class="huangguan2" src="@/static/two.png"></image>
						<image class="top3_head" src="http://cdn.zhoukaiwen.com/head2.jpg"></image>
						<!-- <view class="top_name">{{twoName}}</view> -->
						<view class="top_name" style="font-size: 34rpx;">李*</view>
						<view class="top_sy">运动积分:xxx</view>
					</view>
				</view>

				<!-- 第一名 -->
				<view class="top3">
					<view class="num_one">
						<image class="huangguan1" src="@/static/one.png"></image>
						<image class="top3_head" src="http://cdn.zhoukaiwen.com/head1.jpg"></image>
						<!-- <view class="top_name" style="font-size: 30rpx;">{{oneName}}</view> -->
						<view class="top_name text-bold" style="font-size: 38rpx;">王 * 鑫</view>
						<view class="top_sy">运动积分:xxx</view>
					</view>
				</view>

				<!-- 第三名 -->
				<view class="top3">
					<view class="num_three">
						<image class="huangguan2" src="@/static/three.png"></image>
						<image class="top3_head" src="http://cdn.zhoukaiwen.com/head12.jpeg"></image>
						<view class="top_name">郭 * 杰</view>
						<view class="top_sy">运动积分:xxx</view>
					</view>
				</view>
			</view>
			<div class="one-two-three"><image src="@/static/one-two-three.png" mode="aspectFit"></image></div>
		</view>
		<!-- 我 -->
		<view class="four-and-other ">
			<text lines="1" class="four-and-other-number">111</text>
			<image
				src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd4a05b8cb76ebc7804ae738c784fbd68270042c1743b48740923a5c5acc59475"
				class="label_2"
			></image>
			<text lines="1" class="text_17">名称最多十个字了啦哈</text>
			<view class="four-and-other-jifen"><text lines="1" class="text_18">150</text></view>
		</view>
		<div class="my-number"></div>
		<!-- 4~10 -->
		<view class="four-and-other" v-for="(item, index) in 7">
			<text lines="1" class="four-and-other-number">{{ index + 4 }}</text>
			<image
				src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd4a05b8cb76ebc7804ae738c784fbd68270042c1743b48740923a5c5acc59475"
				class="label_2"
			></image>
			<text lines="1" class="text_17">名称最多十个字了啦哈</text>
			<view class="four-and-other-jifen"><text lines="1" class="text_18">150</text></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list1: [
				{
					name: '班级排行'
				},
				{
					name: '院系排行'
				}
			]
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
/deep/.u-tabs__wrapper__nav__item__text {
	font-size: 36rpx !important;
}
.top_bg {
	width: 750rpx;
	height: 530rpx;
	background-color: #5842aa;
	position: relative;
}

.one_box {
	width: 750rpx;
	height: 260rpx;
	position: absolute;
	left: 0;
	bottom: 138rpx;
	display: flex;
	justify-content: space-around;
}

.one_box .top3 {
	width: 210rpx;
	height: 280rpx;
}

.top_name {
	width: 100%;
	height: 55rpx;
	line-height: 60rpx;
	color: #f2f2f2;
	font-size: 30rpx;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.top_sy {
	width: 100%;
	height: 40rpx;
	line-height: 40rpx;
	font-size: 28rpx;
	color: rgba(255, 255, 255, 0.7);
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.top_sy span {
	font-size: 20rpx !important;
}

.num_one {
	position: relative;
}

.huangguan1 {
	width: 60px;
	height: 60px;
	position: absolute;
	right: -10rpx;
	top: -18 * 2rpx;
}

.num_one .top3_head {
	width: 150rpx;
	height: 150rpx;
	border-radius: 100%;
	margin: 15rpx 0 0 30rpx;
	border: 4rpx solid #ffdd3c;
}

.num_two {
	position: relative;
}

.huangguan2 {
	width: 100rpx;
	height: 100rpx;
	position: absolute;
	right: 15rpx;
}

.num_two .top3_head {
	width: 120rpx;
	height: 120rpx;
	border-radius: 100%;
	margin: 45rpx 0 0 45rpx;
	border: 4rpx solid #bcdcdf;
}

.num_three {
	position: relative;
}

.huangguan2 {
	width: 100rpx;
	height: 100rpx;
	position: absolute;
	right: 15rpx;
}

.num_three .top3_head {
	width: 120rpx;
	height: 120rpx;
	border-radius: 100%;
	margin: 45rpx 0 0 45rpx;
	border: 4rpx solid #e29d85;
}

.xiaoding_bg {
	position: absolute;
	right: -22rpx;
	bottom: -30rpx;
	width: 180rpx;
}

.number_num1 {
	font-size: 40rpx;
	font-weight: 500;
	color: #2fc04f;
}

.number_num2 {
	font-size: 40rpx;
	font-weight: 500;
	color: #4bac7f;
}

.danwei {
	height: 60rpx;
	line-height: 60rpx;
	font-size: 26rpx;
	color: #c9c9c9;
}
.one-two-three {
	position: absolute;
	width: 750rpx;
	left: 0;
	bottom: -170rpx;
	image {
		width: 100%;
	}
}
.four-and-other {
	height: 120rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.four-and-other-number {
	width: 50rpx;
	font-size: 36rpx;
	font-weight: 600;
	margin: 0 20rpx 0;
}
.label_2 {
	width: 72rpx;
	height: 72rpx;
	background-color: #2fc04f;
	border-radius: 50%;
}
.text_17 {
	flex: 1;
 
	font-size: 32rpx;
	font-weight: 600;
	white-space: nowrap;
	padding-left: 20rpx;
}
.four-and-other-jifen {
	width: 136rpx;
	margin-right: 20rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.text_18 {
	width: 136rpx;
	height: 72rpx;
	overflow-wrap: break-word;
 
	font-size: 48rpx;
	font-family: PingFangSC-Semibold;
	font-weight: 600;
	text-align: right;
	white-space: nowrap;
	line-height: 66rpx;
}
.my-number {
	width: 750rpx;
	height: 8rpx;
	background: #f8f8f8;
}
</style>
