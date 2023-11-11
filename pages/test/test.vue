<template>
	<div>
		<button @click="startCamera">开始摄像头</button>
		<video ref="video" :width="canvasWidth" :height="canvasHeight" autoplay muted></video>
		<canvas canvas-id="myCanvas" ref="myCanvas" :width="canvasWidth" :height="canvasHeight"></canvas>
	</div>
</template>

<script>
export default {
	data() {
		return {
			stream: null,
			canvasWidth: null,
			canvasHeight: null,
			canvas: null,
			video: null,
			camera: null
		};
	},
	mounted() {
		this.canvasWidth = window.screen.availWidth;
		this.canvasHeight = window.screen.availHeight;

		this.canvas = uni.createCanvasContext('myCanvas', this);
		this.video = this.$refs.video;
	},
	methods: {
		async startCamera() {
			try {
				this.stream = await navigator.mediaDevices.getUserMedia({
					video: { width: { ideal: this.canvasWidth }, height: { ideal: this.canvasHeight } }
				});

				this.video.srcObject = this.stream;
				this.video.play();
			} catch (error) {
				console.error('Error accessing the camera: ', error);
			}
		}
	},
	beforeDestroy() {
		// ... （后续代码不变）
	}
};
</script>

<style lang="scss"></style>
