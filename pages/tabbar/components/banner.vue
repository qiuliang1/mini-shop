<template>
	<view class="home-banner">
		<swiper
			class="swiper" 
			circular 
			autoplay 
			interval="5000"
			previous-margin="50rpx"
			next-margin="50rpx"
			@change="onSwiperChange"
		>
			<swiper-item class="item" v-for="(item, index) in list" :key="index" >
				<image 
					class="pic" 
					:class="{current: current === index}"
					:src="item.image" 
					mode="aspectFill"
					@click="navTo(item.link)"
				></image>
			</swiper-item>
		</swiper>
		<view class="dots row center">
			<view class="dot" :class="{current: current === index}" v-for="(item, index) in list" :key="index"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'HomeBanner',
		data() {
			return {
				current: 0
			};
		},
		props: {
			list: {
				type: Array,
				default(){
					return []
				}
			}
		},
		methods: {
			onSwiperChange(e){
				this.current = e.detail.current;
			}
		}
	}
</script>

<style scoped lang="scss">
	.home-banner{
		position: relative;
		background-color: #fff;
	}
	.swiper{
		width: 750rpx;
		height: 310rpx;
		padding-top: 10rpx;
	}
	.pic{
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 16rpx;
		transform: scale(0.94, 0.88);
		transition: transform .36s;
		
		&.current{
			transform: scale(1);
		}
	}
	.dots{
		position: absolute;
		left: 0;
		bottom: 12rpx;
		width: 100%;
	}
	.dot{
		width: 32rpx;
		height: 8rpx;
		margin: 0 6rpx;
		background-color: #fff;
		border-radius: 10px;
		
		&.current{
			background-color: $base-color;
		}
	}
</style>
