<template lang="pug">
v-simple-table.mytab
	template(v-slot:default)
		thead
			tr.head
				th.sm
				th(v-for="header in headers"  @click="setSort(header.value)" :class="sortKey === header.value ? 'active' : ''" )
					span {{ header.text }}
					span(v-if="sortKey === header.value && !reverse").ml-2 &darr;
					span(v-if="sortKey === header.value && reverse").ml-2 &uarr;
		transition-group( name="list-complete" tag="tbody").mysort
			template(v-for="row in sorted")
				tr(:key="row.id").slide
					td.sm
						v-btn(icon small @click="expand(row.id)")
							v-icon mdi-chevron-right
					td.nowrap {{ row.title }}
					td.nowrap {{ row.date }}
					td.nowrap {{ row.status }}
					td.nowrap {{ row.name }}
				tr(v-if="expanded.includes(row.id)" :key="`ex-${row.id}`").slide
					td
					td fuck
					td fuck
					td fuck
					td fuck
</template>

<script>

export default {
	data() {
		return {
			expanded: [],
			sortKey: 'date',
			reverse: false,
			headers: [
				{ text: 'Тема', align: 'start', sortable: false, value: 'title', },
				{ text: 'Дата запуска', value: 'date' },
				{ text: 'Статус', value: 'status' },
				{ text: 'Согласующие', value: 'name' },
			],
			items: [
				{
					id: 0,
					title: 'Frozen Yogurt',
					date: 159,
					status: 6.0,
					name: 24,
				},
				{
					id: 1,
					title: 'Ice cream sandwich',
					date: 237,
					status: 9.0,
					name: 37,
				},
				{
					id: 2,
					title: 'Eclair',
					date: 262,
					status: 16.0,
					name: 23,
				},
			]
		}
	},
	computed: {
		check () {
			if (this.expanded.includes(0)) {
				return true
			} else return false
		},
		sorted: {
			get () {
				let key = this.sortKey
				return this.items.slice().sort((a, b) => {
					if (a[key] > b.[key]) {
						return 1
					}
					if (a[key] < b[key]) {
						return -1
					}
					if (a[key] === b[key]) {
						return 0
					}
				})
			},
			set () {}
		},
	},
	methods: {
		expand (e) {
			let index = this.expanded.indexOf(e)
			if (index > -1) {
				this.expanded.splice(index, 1)
			} else this.expanded.push(e)
		},
		setSort (e) {
			if (this.sortKey === e) {
				this.reverse = !this.reverse
				this.sorted.reverse()
			} else {
				this.sortKey = e
				this.reverse = false
				this.sorted = [ ...this.sorted ]
			}
		},
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.mytab {
	margin-top: 1rem;
	margin-bottom: 1rem;
	border-bottom: 1px solid #ccc;
}

.slide {
	transition: transform .2s;
}
th {
	font-weight: normal;
}
th.active {
	font-weight: bold;
	color: black !important;
}
</style>
