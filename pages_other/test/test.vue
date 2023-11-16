<template>
	<view>
		<u-button type="primary" text="上传" @click="goUp"></u-button>
		<u-upload :fileList="fileList2" @afterRead="afterRead" @delete="deletePic" name="2" multiple :maxCount="1" accept="video"></u-upload>
	</view>
</template>

<script>
import { getBolb } from '@/api/upload.js';
export default {
	data() {
		return { data: null, fileList2: [] };
	},
	activated() {
		this.getBolb();
	},
	methods: {
		goUp() {
			window.open('http://127.0.0.1:5500/test.html', '_self');
		},
		getBolb() {
			getBolb().then(res => {
				if (res.code === 200) {
					this.data = res.data;
					// this.upload();
				} else {
					uni.showToast({
						title: '获取视频失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		// 删除图片
		deletePic(event) {
			this[`fileList${event.name}`].splice(event.index, 1);
		},
		// 新增图片
		async afterRead(event) {
			// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
			let lists = [].concat(event.file);
			let fileListLen = this[`fileList${event.name}`].length;
			lists.map(item => {
				this[`fileList${event.name}`].push({
					...item,
					status: 'uploading',
					message: '上传中'
				});
			});
			for (let i = 0; i < lists.length; i++) {
				const result = await this.uploadFilePromise(lists[i].url);
				let item = this[`fileList${event.name}`][fileListLen];
				this[`fileList${event.name}`].splice(
					fileListLen,
					1,
					Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					})
				);
				fileListLen++;
			}
		},
		uploadFilePromise(url) {
			console.log(url);
			return new Promise((resolve, reject) => {
				let a = uni.uploadFile({
					url: 'http://tky.yukexx.com:9100/common/upload', // 仅为示例，非真实的接口地址
					filePath: url,
					name: 'file',
					// formData: {
					// 	user: 'test'
					// },
					success: res => {
						uni.showToast({
							title: res,
							icon: 'none',
							duration: 2000
						});
						setTimeout(() => {
							resolve(res.data.data);
						}, 1000);
					}
				});
			});
		},
		upload() {
			uni.uploadFile({
				url: '',
				filePath: this.data,
				name: 'file',
				timeout: 1000 * 60 * 60,

				success: uploadFileRes => {
					uni.showToast({
						title: '视频上传成功 ',
						icon: 'none',
						duration: 2000
					});
				},
				fail() {
					uni.showToast({
						title: '视频上传失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		}
	}
};
</script>

<style></style>
