<template lang="pug">
table.listtable
	thead
		tr.slide
			th zag
			th zag
			th zag
			th zag
	tbody
		tr(v-for="n in 7").slide
			td one
			td one
			td one
			td one
</template>

<script>

export default {
	data: () => ({
		
	}),
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.listtable {
	width: 100%;
	margin-top: 1rem;
}
</style>
