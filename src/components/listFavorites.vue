<template lang="pug">
.list
	.item(v-for="item in items")
		i(:class="item.clas")
		span {{ item.title }}
 
</template>

<script>

export default {
	data: () => ({
		items: [
			{ id: 0, clas: 'icon-document', title: 'Служебная записка о закупке канцелярии' },
			{ id: 1, clas: 'icon-document', title: 'Договор с ООО Ромашка № 43.32' },
			{ id: 2, clas: 'icon-task', title: 'Согласование договора с Автовазом на поставку комплектующих' },
			{ id: 3, clas: 'icon-document', title: 'Смета строительства загородного дома' },
			{ id: 4, clas: 'icon-task', title: 'Отчет за 3 квартал отдела производства' },
			{ id: 5, clas: 'icon-task', title: 'Отчет за 3 квартал коммерческого отдела' },

		],
		
	}),
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.list {
	margin-top: 1rem;
	font-size: 0.9rem;
	.item {
		color: $link;
		display: flex;
		line-height: 100%;
		margin-bottom: 1rem;
		align-items: baseline;
		i {
			font-size: 1.0rem;
			margin-right: 4px;
		}
	}

}

</style>
