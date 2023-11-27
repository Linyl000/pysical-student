<template>
	<view><web-view :src="localHtmlPath"></web-view></view>
</template>

<script>
export default {
	data() {
		return {
			localHtmlPath: '/static/test.html'
		};
	},
	mounted() {
		window.addEventListener('message', event => {
			var message = event.data;
			// 在这里处理接收到的消息
			if (message.source === 'native-h5' && message.action === 'message') {
				// 处理消息
				console.log('Received message:', message.data.action);
				window.parent.postMessage(
					{
						action: 'message',
						data: {
							action: message.data.action
						},
						source: 'testBack'
					},
					'*'
				);

				return;
			}
		});
	},
	methods: {}
};
</script>

<style></style>
