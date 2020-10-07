<template lang="pug">
div
	Chips(:chips="chips" @select="setFilter").slide
	v-simple-table(fixed-header height="400").mytab
		template(v-slot:default)
			thead
				tr.head
					th(v-for="header in headers" @click="setSort(header.value)" :class="sortKey === header.value ? 'active' : ''" )
						span {{ header.text }}
						span(v-if="sortKey === header.value && !reverse").ml-2 &darr;
						span(v-if="sortKey === header.value && reverse").ml-2 &uarr;
			transition-group( name="list-complete" tag="tbody").mysort
				tr(v-for="item in filtered" :key="item.id" :class="{selected : item.selected}").slide
					td.nowrap {{ item.type }}
					td(:class="{today : item.today}").nowrap {{ item.deadline }}
					td.nowrap {{ item.executor }}
					td.py-2
						router-link(to="/").my {{ item.title }}
</template>

<script>
import {headers, urgent} from '@/data.js'
import Chips from '@/components/Chips'

export default {
	data() {
		return {
			headers,
			urgent,
			sortKey: 'deadline',
			reverse: false,
			chips: [
				{ title: 'Сегодня', value: 2 },
				{ title: 'Завтра', value: 1 },
				{ title: 'На этой неделе', value: 3 },
			],
			filter: undefined,
		}
	},
	components: {
		Chips,
	},
	computed: {
		filtered () {
			switch (this.filter) {
			case 0:
				return this.sorted.filter( item => item.deadline === '2020-08-18')
			case 1:
				return this.sorted.filter( item => item.deadline === '2020-08-19')
			case 2:
				return this.sorted.filter( item => item.deadline > '2020-08-19')
			default: return this.sorted
			}
		},
		sorted () {
			let key = this.sortKey
			return this.urgent.slice().sort((a, b) => {
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
	},
	methods: {
		setFilter (e) {
			return this.filter = e
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
	border-bottom: 1px solid #ccc;
}
.nowrap {
	white-space: nowrap;
}
.my {
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
}
th {
	font-weight: normal;
}
th.active {
	font-weight: bold;
	color: black !important;
}
.slide {
	transition: transform .2s;
}
.selected {
	background: #e4f2ff;
	&:hover {
		background: darken(#e4f2ff, 5%) !important;
	}
}
.today {
	color: orange;
}

</style>
