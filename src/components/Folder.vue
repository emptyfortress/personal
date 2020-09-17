<template lang="pug">
.ma-5
	h2 Folder
	.test
		<svg width="860" height="28" viewBox="0 0 860 28" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="860" height="49" fill="#B8DEFF"/>
			<rect class="slide" y="5" width="16.9706" height="16.9706" fill="#D1EAFF"/>
		</svg>

</template>

<script>
import anime from 'animejs'

export default {
	data () {
		return {
		}
	},
	mounted () {
		anime({
			targets: '.slide',
			translateX: 300,
			turn: 2,
			// width: [16, '100%'],
			duration: 4000,
			easing: 'easeInElastic(1, .4)',
			direction: 'alternate',
			loop: 1,
		})
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.test {
width: 300px;
height: 200px;
background: #fff;
position: relative;
/* svg { */
/* 	position: absolute; */
/* 	bottom: 0; */
/* 	left: 0; */
/* 	width: 100%; */
/* 	height: 100%; */
/* } */
}
</style>
