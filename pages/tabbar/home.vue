<template>
	<view>
		<scroll-view scroll-y="true" >
			<Banner :list="list"></Banner>
		</scroll-view>
	</view>
</template>

<script>
	import Banner from './components/banner.vue'
	import {request} from '@/common/js/request'
	export default {
		components: {
			Banner
		},
		data() {
			return {
				list: []
			};
		},
		mounted() {
			this.getBanner()
		},
		methods: {
			async getBanner() {
				const res = await request('banner','get')
				console.log(res)
				this.list = res.data
			}
		}
	}
</script>

<style lang="scss">

</style>
