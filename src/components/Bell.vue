<template lang="pug">
svg( width="17" height="20" id="bell" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg" @mouseover="start")
	path(d="M9.91421 19.4142C9.53914 19.7893 9.03043 20 8.5 20C7.96957 20 7.46086 19.7893 7.08579 19.4142C6.71071 19.0391 6.5 18.5304 6.5 18H10.5C10.5 18.5304 10.2893 19.0391 9.91421 19.4142Z" fill="black")
	path(d="M13 15H4V8.5C4 6 6 4 8.5 4C11 4 13 6 13 8.5V15ZM15 14V8.5C15 5.43 12.86 2.86 10 2.18V1.5C10 1.10218 9.84196 0.720644 9.56066 0.43934C9.27936 0.158035 8.89782 0 8.5 0C8.10218 0 7.72064 0.158035 7.43934 0.43934C7.15804 0.720644 7 1.10218 7 1.5V2.18C4.13 2.86 2 5.43 2 8.5V14L0 16V17H17V16L15 14Z" fill="black")

</template>

<script>
import anime from 'animejs'

export default {
	data() {
		return {
		}
	},
	methods: {
		start () {
			anime({
				targets: '#bell',
				// rotate: 180,
				// right: 300,
				duration: 300,
				easing: 'easeOutQuint',
				direction: 'alternate',
				loop: false,
			},0)
		}
	},
	mounted () {
		// this.start()
	}

}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

#bell path {
	fill: $accent;
	/* transform: rotate(45deg); */
}

</style>
