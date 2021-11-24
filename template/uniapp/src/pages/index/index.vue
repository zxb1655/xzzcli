<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
    <button type="primary" @tap="show('XBpopup')">fadeInMiddle</button>
    <XBpopup ref="XBpopup" type="fadeInMiddle">
			<view class="content" style="height: 500rpx;width: 700rpx;background-color: white;border-top-left-radius: 10rpx;border-top-right-radius: 10rpx;">
				自定义内容
			</view>
		</XBpopup>
	</view>
</template>

<script>
    import XBpopup from '../../components/XB-popup/popup.vue';
    export default {
        components:{
            XBpopup
        },
        data() {
            return {
                title: 'Hello'
            };
        },
        onLoad() {

        },
        methods: {
            show(ref) {
                this.$refs[ref].show();
            }
        }
    };
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.logo {
			height: 200rpx;
			width: 200rpx;
			margin: 200rpx auto 50rpx auto;
		}
		
		.text-area {
			display: flex;
			justify-content: center;
		}
		
		.title {
			font-size: 36rpx;
			color: #8f8f94;
		}
	}
</style>
