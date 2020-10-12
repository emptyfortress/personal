<template lang="pug">
v-data-table( :headers="headers" :items="items" :expanded.sync="expanded" item-key="name" show-expand )
	template(v-slot:expanded-item="{ headers, item }")
		td( :colspan="headers.length" ) More info about {{ item.name }}
</template>

<script>

export default {
	data() {
		return {
			expanded: [],
			headers: [
				{
					text: 'Dessert (100g serving)',
					align: 'start',
					sortable: false,
					value: 'name',
				},
				{ text: 'Calories', value: 'calories' },
				{ text: 'Fat (g)', value: 'fat' },
				{ text: 'Carbs (g)', value: 'carbs' },
				{ text: 'Protein (g)', value: 'protein' },
				{ text: 'Iron (%)', value: 'iron' },
				{ text: '', value: 'data-table-expand' },
			],
			items: [
				{
					name: 'Frozen Yogurt',
					calories: 159,
					fat: 6.0,
					carbs: 24,
					protein: 4.0,
					iron: '1%',
				},
				{
					name: 'Ice cream sandwich',
					calories: 237,
					fat: 9.0,
					carbs: 37,
					protein: 4.3,
					iron: '1%',
				},
				{
					name: 'Eclair',
					calories: 262,
					fat: 16.0,
					carbs: 23,
					protein: 6.0,
					iron: '7%',
				},
			]
		}
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

</style>
