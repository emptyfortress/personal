<template lang="pug">
v-simple-table(fixed-header height="400").mytab
	template(v-slot:default)
		thead
			tr.head
				th.sm
					v-checkbox.check
				th(v-for="header in headers") {{ header.text }}
		tbody
			tr(v-for="item in items" :key="item.id").slide
				td.sm
					v-checkbox.check
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
	}),
}

</script>

<style scoped lang="scss">
/* @import '@/assets/css/colors.scss'; */
.mytab {
	margin-top: 2rem;
}
</style>
