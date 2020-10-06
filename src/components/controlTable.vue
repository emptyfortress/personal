<template lang="pug">
div
	//- Chips(:chips="chips" @select="setFilter")
	v-simple-table(fixed-header height="400").mytab
		template(v-slot:default)
			thead.slide
				tr.head
					//- th.sm
					//- 	v-simple-checkbox(:value="all" @input="setAll" :indeterminate="indeterminate" v-ripple).check
					th(v-for="header in headers1" @click="setSort(header.value)" :class="sortKey === header.value ? 'active' : ''" )
						span {{ header.text }}
						span(v-if="sortKey === header.value && !reverse").ml-2 &darr;
						span(v-if="sortKey === header.value && reverse").ml-2 &uarr;
			transition-group( name="list-complete" tag="tbody").mysort
				tr(v-for="item in sorted" :key="item.id").slide
					//- td.sm
					//- 	v-simple-checkbox(v-model="item.selected" color="primary" v-ripple).check
					td.nowrap {{ item.executor }}
					td(:class="exp(item)").nowrap {{ item.status }}
					td.nowrap 
						span(:class="{active : item.expired}") {{ item.deadline }}
						v-icon(color="red" size="18" v-if="item.expired").ml-2 mdi-calendar-clock
					td.py-2
						router-link(to="/").my {{ item.title }}
</template>

<script>
import {headers1, items} from '@/data.js'
import Chips from '@/components/Chips'

export default {
	data: () => ({
		singleselect: false,
		headers1,
		items,
		all: false,
		sortKey: 'deadline',
		reverse: false,
		chips: ['На исполнение', 'На ознакомление', 'На согласование' ],
		filter: undefined,
	}),
	components: {
		Chips
	},
	computed: {
		tasks () {
			return this.$store.getters.tasks.filter( item => item.control )
		},
		sorted () {
			let key = this.sortKey
			return this.tasks.slice().sort((a, b) => {
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
		exp (e) {
			if (e.expired) {
				return 'active'
			} else if (e.status === 'Завершено') {
				return 'finished'
			} else return
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
/* @import '@/assets/css/colors.scss'; */
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
.active {
	color: red;
}
.finished {
	color: green;
}

</style>
