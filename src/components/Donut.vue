<template lang="pug">
apexchart(type="pie" height="240" :options="chartOptions" :series="series")
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
	data() {
		return {
			series: [44, 55, 13, 43],
			chartOptions: {
				chart: {
					type: 'pie',
				},
				colors: ['#2EA0F8', '#546E7A', '#FF9800', '#2C8435',  'green', ],
				labels: ['В работе', 'Делегировано', 'Просрочено', 'Завершено'],
			},
		}
	},
	components: {
		apexchart: VueApexCharts,
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

</style>
