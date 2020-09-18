<template lang="pug">
Flipper(:flipKey="focused").pa-5
	.zg {{ date }}
	.home
		div(v-for="(block,index) in blocks" :key="index")
			Flipped(:flipId="`item-${index}`")
				.bl.over(@click="toggle(index)")
					Wave(:color="color" v-if="block.id === 0")
					.hd 
						.txt {{ block.title }}
						.dig(:class="block.down ? '' : 'red--text'")
							span(v-if="block.down") &darr;
							span(v-if="!block.down" ) &uarr;
							span {{ block.digit }}
					.big {{ block.big }}
			div(v-if="focused !== null")
				Flipped(:flipId="`item-${index}`")
					.block(@click="toggle(index)" v-if="index === focused")
						h2 Hello
						h2 Hello
						h2 Hello
						h2 Hello
						h2 Hello
						h2 Hello
	.home
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
import { Flipper, Flipped } from "vue-flip-toolkit"


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
	&.over:hover {
		box-shadow: 0 3px 10px #ccc;
		border: 1px solid #dedede;
	}
}
.block {
	position: fixed;
	left: 50%;
	top: 40%;
	transform: translate(-50%, -50%);
	background: #fff;
	width: 700px;
	border-radius: 4px;
	padding: 1rem;
	z-index: 7;
}
.hd {
	display: flex;
	justify-content: space-between;
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
</style>
