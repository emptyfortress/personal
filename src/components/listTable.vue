<template lang="pug">
v-simple-table(fixed-header height="400").mytab
	template(v-slot:default)
		thead
			tr.head
				th.sm
					v-simple-checkbox.check
				th(v-for="header in headers") {{ header.text }}
		tbody
			tr(v-for="(item, index) in items" :key="index").slide
				td.sm
					v-simple-checkbox(v-model="selection[index]" color="primary").check
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
	}),
}

</script>

<style scoped lang="scss">
/* @import '@/assets/css/colors.scss'; */
.mytab {
	margin-top: 2rem;
}
</style>
