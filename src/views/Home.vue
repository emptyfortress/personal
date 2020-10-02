<template lang="pug">
.pa-5.rel
	.zg {{ date }}
	Flipper(:flipKey="focused" spring="stiff")
		.home
			div(v-for="(block,index) in blocks")
				Flipped(:flipId="`box-${index}`")
					.bl.over(@click="toggle(index)" :class="block.active ? 'zind' : ''")
						Wave(:color="color" v-if="index === 0 && tasks.length")
						Flipped(:inverseFlipId="`box-${index}`")
							div
								.hd
									Flipped(:flipId="`hd-${index}`")
										.txt {{ block.title }}
									Flipped(:flipId="`dig-${index}`")
										.dig(:class="block.down ? '' : 'red--text'")
											span(v-if="block.down") &darr;
											span(v-else) &uarr;
											span {{ block.digit }}
								Flipped(:flipId="`big-${index}`")
									.big {{ total }}
				Flipped(:flipId="`box-${index}`" v-if="focused === index" @on-start="handleStart")
					.block
						Flipped(:inverseFlipId="`box-${index}`")
							div
								.hd
									Flipped(:flipId="`hd-${index}`")
										.txt {{ block.title }}
									Flipped(:flipId="`dig-${index}`")
										.dig(:class="block.down ? '' : 'red--text'")
											span(v-if="block.down") &darr;
											span(v-else) &uarr;
											span {{ block.digit }}
									v-btn(fab color="dark" dark small @click="toggle(index)").close
										v-icon mdi-close
								listTable(v-if="block.id === 0 && tasks.length")

								v-slide-x-transition(mode="out-in")
									.empty(v-if="!tasks.length" @click="toggle(index)")
										img(src="@/assets/img/man.svg")
										div Нет новых заданий
								.d-flex.align-center.mt-5
									Flipped(:flipId="`big-${index}`")
										.big
											span(v-if="selected !== 0") {{ selected }}
											span(v-if="selected !== 0").iz из
											span {{ total }} 
									v-slide-x-transition(mode="out-in")
										v-btn(depressed v-if="selected !== 0" @click="read").ml-6.mt-3 {{ block.but }}
									v-slide-x-transition(mode="out-in")
										v-btn(depressed  v-if="selected !== 0").ml-2.mt-3 {{ block.but1}}
	.home.one
		.bl
			.hd
				.txt Исполнительская дисциплина
				.dig &uarr; 3
			div
				apexchart(type="radialBar" height="250" :options="chartOptions" :series="series")
		.bl
			.hd
				.txt Задания у подчиненных
			UserLoad
		.bl
			.hd
				.txt
					v-icon mdi-star-outline
					span Избранное
			listFavorites
</template>

<script>
import Wave from '@/components/Wave'
import VueApexCharts from 'vue-apexcharts'
import UserLoad from '@/components/UserLoad'
import listFavorites from '@/components/listFavorites'
import listTable from '@/components/listTable'
import { Flipper, Flipped } from "vue-flip-toolkit"
import anime from 'animejs'
import {items} from '@/data.js'

export default {
	components: {
		apexchart: VueApexCharts,
		Wave,
		UserLoad,
		listFavorites,
		Flipper,
		Flipped,
		listTable,
	},
	data: () => ({
		date: '',
		items,
		focused: null,
		color: '#6DAE50',
		blocks: [
			{ id: 0, active: false, title: 'Новые задания', digit: 7, down: true, big: 11, but: 'Прочитано', but1: 'Ознакомлен' },
			{ id: 1, active: false, title: 'Срочные задания', digit: 3, down: true, big: 2, but: 'Прочитать все' },
			{ id: 2, active: false, title: 'Контроль', digit: 5, down: false, big: 9, but: 'Прочитать все' },
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
	computed: {
		tasks () {
			return this.$store.getters.tasks
		},
		total () {
			return this.$store.getters.tasks.length
		},
		selected () {
			return this.tasks.filter( item => item.selected).length
		}
	},
	created () {
		this.$store.commit('setTasks', this.items)
	},
	methods:{
		read () {
			let temp = this.tasks.filter( item => !item.selected )
			this.$store.commit('setTasks', temp)
		},
		toggle (e) {
			this.blocks.map( item => item.active = false)
			this.blocks[e].active = true
			if (this.focused !== null) {
				this.focused = null
			} else this.focused = e
		},
		handleStart ({ el }) {
			const squares = el.querySelectorAll('.slide')
			anime({
				targets: squares,
				translateY: [30, 0],
				opacity: [0, 1],
				delay: anime.stagger(120, { start: 500, easing: 'easeInQuad' })
			})
			const close = el.querySelector('.close')
			anime({
				targets: close,
				opacity: [0, 1],
				duration: 200,
				rotate: 360,
				scale: [0,1],
				delay: 700,
			})
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
	&.one {
		margin-top: 1rem;
	}
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
	position: absolute;
	left: 0;
	top: 100px;
	background: #fff;
	width: 100%;
	height: 594px;
	border-radius: 4px;
	padding: 2rem;
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
	.close {
		position: absolute;
		top: -20px;
		right: -20px;
		opacity: 0;
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
.zind {
	z-index: 3;
}
.iz {
	margin: 0 .5rem;
	font-size: 1.0rem;
}
.empty {
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 400px;
	margin-top: 2rem;
	img {
		width: 150px;
		display: block;
	}
}
</style>
