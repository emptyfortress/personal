<template lang="pug">
v-simple-table(fixed-header height="400").mytab
	template(v-slot:default)
		thead
			tr.head
				th.sm
					v-simple-checkbox(:value="all" @input="setAll" :indeterminate="indeterminate" v-ripple).check
				th(v-for="header in headers" @click="setSort(header.value)" ) {{ header.text }}
		tbody
			tr(v-for="item in results" :key="item.id").slide
				td.sm
					v-simple-checkbox(v-model="item.selected" color="primary" v-ripple).check
				td.nowrap {{ item.deadline }}
				td.nowrap {{ item.executor }}
				td.py-2
					router-link(to="/").my {{ item.title }}
				//- td fuck
</template>

<script>
import {headers, items} from '@/data.js'

export default {
	data: () => ({
		singleselect: false,
		headers,
		items,
		all: false,
		sortKey: 'id',
		results: [],
	}),
	created () {
		this.results = [...this.sorted]
	},
	computed: {
		sorted () {
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
			} else {
				this.items.map((item) => {return item.selected = true })
				this.all = true
			}
		},
		setSort (e) {
			console.log(e)
			if (this.sortKey === e) {
				return this.results.reverse()
			} else {
				this.sortKey = e
				return this.results = [ ...this.sorted ]
			}
		}
	}
}

</script>

<style scoped lang="scss">
/* @import '@/assets/css/colors.scss'; */
.mytab {
	margin-top: 2rem;
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
</style>
