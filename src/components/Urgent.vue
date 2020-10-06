<template lang="pug">
v-expansion-panels(:value="pan").mt-3
	v-expansion-panel(v-for="panel in panels" :key="panel.id").slide
		v-expansion-panel-header().blockhd 
			span {{ panel.title }} &mdash; {{ panel.digit }}
		v-expansion-panel-content
			v-simple-table(fixed-header).mytab
				template(v-slot:default)
					thead.slide
						tr.head
							th(v-for="header in headers" @click="setSort(header.value)" :class="sortKey === header.value ? 'active' : ''" )
								span {{ header.text }}
								span(v-if="sortKey === header.value && !reverse").ml-2 &darr;
								span(v-if="sortKey === header.value && reverse").ml-2 &uarr;
					transition-group( name="list-complete" tag="tbody").mysort
						tr(v-for="item in arrr(panel.id)" :key="item.id").slide
							td.nowrap {{ item.type }}
							td.nowrap.today {{ item.deadline }}
							td.nowrap {{ item.executor }}
							td.py-2
								router-link(to="/").my {{ item.title }}

</template>

<script>
import {headers, items} from '@/data.js'

export default {
	data() {
		return {
			pan: 0,
			headers,
			items,
			sortKey: 'type',
			reverse: false,
			panels: [
				{ id: 0, title: 'Сегодня', digit: 2 },
				{ id: 1, title: 'Завтра', digit: 1 },
				{ id: 2, title: 'На этой неделе', digit: 3 },
			],
		}
	},
	computed: {
		sorted:  {
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
		}
	},
	methods: {
		arrr (e) {
			if (e === 0) {
				return this.sorted.filter( item => item.deadline === '2020-08-17')
			} else if (e === 1) {
				return this.sorted.filter( item => item.deadline === '2020-08-18')
			} else {
				return this.sorted.filter( item => item.deadline >= '2020-08-26')
			}
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

.blockhd {
	text-transform: uppercase;
	font-size: .8rem;
	font-weight: 600;
	letter-spacing: .15rem;
	color: #0077ce;
	/* border-bottom: 1px solid #ccc; */
}
.v-expansion-panel--active {
	/* border-top: 1px solid #ccc; */
	border-bottom: 1px solid #ccc;
	
}
.v-expansion-panel::before {
	box-shadow: none;
}
.nowrap {
	white-space: nowrap;
}
.today {
	color: orange;
}

</style>
