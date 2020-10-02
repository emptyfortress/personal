<template lang="pug">
v-simple-table(fixed-header height="400").mytab
	template(v-slot:default)
		thead
			tr.head
				th.sm
					v-simple-checkbox(:value="all" @input="setAll" :indeterminate="indeterminate" v-ripple).check
				th(v-for="header in headers" @click="setSort(header.value)" :class="sortKey === header.value ? 'active' : ''" )
					span {{ header.text }}
					span(v-if="sortKey === header.value && !reverse").ml-2 &darr;
					span(v-if="sortKey === header.value && reverse").ml-2 &uarr;
		transition-group( name="list-complete" tag="tbody").mysort
			tr(v-for="item in sorted" :key="item.id" :class="{selected : item.selected}").slide
				td.sm
					v-simple-checkbox(v-model="item.selected" color="primary" v-ripple).check
				td.nowrap {{ item.type }}
				td.nowrap {{ item.deadline }}
				td.nowrap {{ item.executor }}
				td.py-2
					router-link(to="/").my {{ item.title }}
</template>

<script>
import {headers, items} from '@/data.js'

export default {
	props: ['type'],
	data: () => ({
		singleselect: false,
		headers,
		items,
		all: false,
		sortKey: 'deadline',
		reverse: false,
		// results: [],
	}),
	created () {
		// this.$store.commit('setTasks', this.items)
		// this.results = [...this.sorted]
	},
	computed: {
		// results () {
		// 	return [...this.sorted]
		// },
		tasks () {
			return this.$store.getters.tasks
		},
		selected () {
			return this.sorted.filter( item => item.selected).length
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
		indeterminate () {
			let sel = this.items.reduce((total, item) => {
				if (item.selected === true) {
					return total += 1
				} else return total
			}, 0)
			if (sel > 0 && !this.all) {
				return true
			} else return false
		}
	},
	methods: {
		setAll () {
			if (this.all) {
				this.items.map((item) => {return item.selected = false })
				this.all = false
				// this.selectItem()
			} else {
				this.items.map((item) => {return item.selected = true })
				this.all = true
				// this.selectItem()
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
		// selectItem () {
		// 	this.$emit('change', this.selected)
		// }
	}
}

</script>

<style scoped lang="scss">
/* @import '@/assets/css/colors.scss'; */
.mytab {
	margin-top: 2rem;
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

</style>
