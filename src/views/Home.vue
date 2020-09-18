<template lang="pug">
.pa-5
	.zg {{ date }}
	Flipper(:flipKey="focused" spring="stiff")
		.home
			div(v-for="(block,index) in blocks")
				Flipped(:flipId="`box-${index}`")
					.bl.over(@click="toggle(index)")
						Wave(:color="color" v-if="index === 0")
						.hd
							Flipped(:flipId="`hd-${index}`")
								.txt {{ block.title }}
							Flipped(:flipId="`dig-${index}`")
								.dig(:class="block.down ? '' : 'red--text'")
									span(v-if="block.down") &darr;
									span(v-else) &uarr;
									span {{ block.digit }}
						.big {{ block.big }}
				Flipped(:flipId="`box-${index}`" v-if="focused === index" @on-start="handleStart")
					.block(@click="toggle(index)")
						.hd
							Flipped(:flipId="`hd-${index}`")
								.txt {{ block.title }}
							Flipped(:flipId="`dig-${index}`")
								.dig(:class="block.down ? '' : 'red--text'")
									span(v-if="block.down") &darr;
									span(v-else) &uarr;
									span {{ block.digit }}
							v-btn(icon)
								v-icon mdi-close
						.mygrid
							.gridd(v-for="n in 7") fuclaks laskjd laskj dlakjsd lakjs 
						.big {{ block.big }}
</template>

<script>
import Wave from '@/components/Wave'
import VueApexCharts from 'vue-apexcharts'
import UserLoad from '@/components/UserLoad'
import listFavorites from '@/components/listFavorites'
import { Flipper, Flipped } from "vue-flip-toolkit"
import anime from 'animejs'

export default {
	components: {
		apexchart: VueApexCharts,
		Wave,
		UserLoad,
		listFavorites,
		Flipper,
		Flipped,
	},
	data: () => ({
		date: '',
		focused: null,
		color: '#6DAE50',
		blocks: [
			{ id: 0, title: 'Новые задания', digit: 7, down: true, big: 12 },
			{ id: 1, title: 'Срочные задания', digit: 3, down: true, big: 2 },
			{ id: 2, title: 'Контроль', digit: 5, down: false, big: 9 },
		],
		series: [70],
		chartOptions: {
			chart: {
				height: 250,
				type: 'radialBar',
			},
			plotOptions: {
				radialBar: {
					hollow: {
						size: '70%',
					}
				},
			},
			labels: ['Производство'],
		},
	}),
	methods:{
		toggle (e) {
			if (this.focused !== null) {
				this.focused = null
			} else this.focused = e
		},
		handleStart ({ el }) {
			const squares = el.querySelectorAll('.gridd')
			anime({
				targets: squares,
				translateX: '-=50',
				opacity: 1,
				delay: anime.stagger(100, { start: 500, easing: 'easeInQuad' })
			})
			// anime({
			// 	targets: squares,
			// 	opacity: 1,
			// 	delay: anime.stagger(100, { easing: 'easeInQuad' })
			// })
			// anime({
			// 	targets: squares,
			// 	opacity: [0, 1],
			// 	delay: anime.stagger(40, { easing: 'easeInQuad' })
			// })
			// const pic = el.querySelector('.note')
			// anime({
			// 	targets: pic,
			// 	translateY: 50,
			// 	opacity: 1,
			// 	delay: 800
			// })
			// setTimeout(() => {
			// 	el.classList.add('animated-in')
			// }, 600)
		}
	},
	mounted () {
		var date = new Date()
		var option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
		this.date = (new Intl.DateTimeFormat('ru-RU', option).format(date))
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.home {
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
}
.zg {
	text-align: center;
	font-size: 1.3rem;
	color: #666;
}
.bl {
	background: #fff;
	border-radius: 4px;
	padding: 1rem;
	position: relative;
	padding-bottom: 30px;
	overflow: hidden;
	border: 1px solid #fff;
	cursor: pointer;
	.hd {
		display: flex;
		justify-content: space-between;
	}
	&.over:hover {
		box-shadow: 0 3px 10px #ccc;
		border: 1px solid #dedede;
	}
}
.block {
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
	width: 60%;
	border-radius: 4px;
	padding: 1rem;
	z-index: 7;
	box-shadow: 0 3px 10px #ccc;
	border: 1px solid #dedede;
	.hd {
		display: flex;
		justify-content: space-between;
	}
	.dig {
		margin-top: 5px;
	}
	.txt {
		font-size: 1.3rem;
		margin-right: 2rem;
	}
}
.big {
	font-size: 2.3rem;
	line-height: 100%;
	margin-top: .5rem;
	color: $accent;
}
.txt .v-icon {
	transform: translateY(-3px);
	margin-right: .5rem;
}
.dig {
	color: green;
}
.mygrid {
	display: grid;
	grid-direction: column;
	gap: 4px;
	.gridd {
		height: 30px;
		width: 100%;
		margin-left: 50px;
		opacity: 0;
	}
}
</style>
