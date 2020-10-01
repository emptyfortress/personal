<template lang="pug">
v-simple-table(fixed-header height="400").mytab
	template(v-slot:default)
		thead
			tr.head
				th.sm
					v-simple-checkbox(v-model="allSelected" color="primary" :indeterminate="indeterminate" v-ripple).check
				th(v-for="header in headers") {{ header.text }}
		tbody
			tr(v-for="(item, index) in items" :key="index").slide
				td.sm
					v-simple-checkbox(v-model="selection[index]" color="primary" v-ripple).check
				td fuck
				td fuck
				td fuck
				td fuck
</template>

<script>
import {headers, items} from '@/data.js'

export default {
	data: () => ({
		singleselect: false,
		headers,
		items,
		selection: [],
		allSelected: false,
	}),
	computed: {
		indeterminate () {
			let sel = this.selection.reduce((total, item) => {
				if (item === true) {
					return total += 1
				} else return total
			}, 0)
			if (sel > 0) {
				return true
			} else return false
		}
	}
}

</script>

<style scoped lang="scss">
/* @import '@/assets/css/colors.scss'; */
.mytab {
	margin-top: 2rem;
}
</style>
