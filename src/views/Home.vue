<template lang="pug">
.pa-5.rel
	.zg {{ date }}
	Flipper(:flipKey="focused" spring="stiff")
		.home
			div(v-for="(block,index) in blocks" :class="block.cl")
				Flipped(:flipId="`box-${index}`")
					.bl.over(@click="toggle(index)" :class="block.active ? 'zind' : ''")
						Wave(:color="color" v-if="index === 0 && tasks.length")
						Flipped(:inverseFlipId="`box-${index}`")
							div
								.hd
									Flipped(:flipId="`hd-${index}`")
										.txt
											v-icon(v-if="index === 6").mr-2 mdi-star-outline
											span {{ block.title }}
									Flipped(:flipId="`dig-${index}`" v-if="block.digit")
										.dig(:class="block.down ? '' : 'red--text'")
											span(v-if="block.down") &darr;
											span(v-else) &uarr;
											span {{ block.digit }}

								Flipped(:flipId="`big-${index}`" v-if="index < 4")
									.big {{ total(index) }}

								Flipped(flipId="graf" v-if="index === 4")
									apexchart(type="radialBar" height="250" :options="chartOptions" :series="series")

								Flipped(flipId="people" v-if="index === 5")
									UserLoad

								Flipped(flipId="fav" v-if="index === 6")
									listFavorites

				Block(:block="block" :index="index" :focused="focused" @change="toggle(index)")
</template>

<script>
import Wave from '@/components/Wave'
import VueApexCharts from 'vue-apexcharts'
import UserLoad from '@/components/UserLoad'
import listFavorites from '@/components/listFavorites'
import { Flipper, Flipped } from "vue-flip-toolkit"
import {items, bl} from '@/data.js'
import Block from '@/components/Block'
import BigBlock from '@/components/BigBlock'

import { mapGetters } from 'vuex'


export default {
	data: () => ({
		date: '',
		items,
		bl,
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
			this.blocks.map( item => item.active = false)
			this.blocks[e].active = true
			if (this.focused !== null) {
				this.focused = null
			} 
			else if (e === 6) {
				return
			} else this.focused = e
		},
		total (e) {
			switch (e) {
			case 0:
				return this.tasks.length
			case 1:
				return this.tasks.filter( item => item.urgent).length
			case 2:
				return this.tasks.filter( item => item.control).length
			case 3:
				return 3
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
	grid-template-columns: repeat(12, 1fr);
	gap: 1rem;
}
.gr1 {grid-column: 1/4;}
.gr2 {grid-column: 4/7;}
.gr3 {grid-column: 7/10;}
.gr4 {grid-column: 10/13;}
.gr5 {grid-column: 1/5;}
.gr6 {grid-column: 5/9;}
.gr7 {grid-column: 9/13;}
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
	z-index: 6;
}
.chart {
	height: 250px;
}
</style>
