<template lang="pug">
.pa-5
	//- .zg {{ new Date() | moment("dddd, MMMM Do, YYYY") }}
	.zg {{ date }}
	.home
		.bl
			Wave(:color="color")
			.hd 
				.txt Новые задания
				.dig &darr; 4
			.big 12
		.bl
			.hd 
				.txt Срочные задания
				.dig &darr; 4
			.big 12
		.bl
			.hd
				.txt Контроль
				.dig &darr; 4
			.big 12
		.bl
			.hd
				.txt Исполнительская дисциплина
				.dig &uarr; 3
			div
				apexchart(type="radialBar" height="250" :options="chartOptions" :series="series")
		.bl
			.hd
				.txt Загрузка подчиненных
			UserLoad
		.bl
			.hd
				.txt
					v-icon mdi-star-outline
					span Избранное

</template>

<script>
import Wave from '@/components/Wave'
import VueApexCharts from 'vue-apexcharts'
import UserLoad from '@/components/UserLoad'



export default {
	components: {
		apexchart: VueApexCharts,
		Wave,
		UserLoad,
	},
	data: () => ({
		date: '',
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
			labels: ['Cricket'],
		},
	}),
	methods:{
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
	/* background: #ccc; */
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
	cursor: pointer;
	position: relative;
	padding-bottom: 30px;
	overflow: hidden;
	&:hover {
		box-shadow: 0 3px 10px #ccc;
		border: 1px solid #dedede;
	}
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
</style>
