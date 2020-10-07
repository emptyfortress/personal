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
									.big {{ total(index) }}
				Block(:index="index" :focused="focused" @change="toggle(index)")
	Flipper(:flipKey="focused1" spring="stiff")
		.home.one
			div(v-for="(block,index) in bigblocks" :key="index")
				Flipped(:flipId="`big-${index}`")
					.bl.over(@click="togglebig(index)")
						Flipped(:inverseFlipId="`big-${index}`")
							.hd
								.txt {{block.title}}
								.dig(v-if="block.digit") &uarr; {{block.digit}}
				BigBlock(:index="index" :focused1="focused1")

		//- .bl
		//- 	.hd
		//- 		.txt Исполнительская дисциплина
		//- 		.dig &uarr; 3
		//- 	div
		//- 		apexchart(type="radialBar" height="250" :options="chartOptions" :series="series")
		//- .bl
		//- 	.hd
		//- 		.txt Задания у подчиненных
		//- 	UserLoad
		//- .bl
		//- 	.hd
		//- 		.txt
		//- 			v-icon mdi-star-outline
		//- 			span Избранное
		//- 	listFavorites
</template>

<script>
import Wave from '@/components/Wave'
import VueApexCharts from 'vue-apexcharts'
import UserLoad from '@/components/UserLoad'
import listFavorites from '@/components/listFavorites'
import { Flipper, Flipped } from "vue-flip-toolkit"
import {items, bl, bigbl} from '@/data.js'
import Block from '@/components/Block'
import BigBlock from '@/components/BigBlock'

import { mapGetters } from 'vuex'


export default {
	data: () => ({
		date: '',
		items,
		bl,
		bigbl,
		focused: null,
		focused1: null,
		color: '#6DAE50',
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
	components: {
		apexchart: VueApexCharts,
		Wave,
		UserLoad,
		listFavorites,
		Flipper,
		Flipped,
		Block,
		BigBlock,
	},
	computed: {
		...mapGetters(['tasks', 'blocks', 'bigblocks']),
		selected () {
			return this.tasks.filter( item => item.selected).length
		},
	},
	created () {
		this.$store.commit('setTasks', this.items)
		this.$store.commit('setBlocks', this.bl)
		this.$store.commit('setBigBlocks', this.bigbl)
	},
	methods:{
		toggle (e) {
			if (this.focused !== null) {
				this.focused = null
			} else this.focused = e
		},
		togglebig (e) {
			if (this.focused1 !== null) {
				this.focused1 = null
			} else this.focused1 = e
		},
		total (e) {
			switch (e) {
			case 0:
				return this.tasks.length
			case 1:
				return this.tasks.filter( item => item.urgent).length
			case 2:
				return this.tasks.filter( item => item.control).length
			default: return 0
			}
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
.big {
	font-size: 2.3rem;
	line-height: 100%;
	margin-top: .5rem;
	color: $accent;
}
.dig {
	color: green;
}
.zind {
	z-index: 3;
}
.bell {
	position: absolute;
	bottom: 1rem;
	right: 1rem;
}
.block {
	position: absolute;
	left: 0;
	top: 100px;
	background: #fff;
	width: 100%;
	height: 500px;
	border-radius: 4px;
	padding: 2rem;
	z-index: 7;
	box-shadow: 0 3px 10px #ccc;
	border: 1px solid #dedede;
}
</style>
