<template lang="pug">
v-chip-group(active-class="sel" v-model="selection")
	v-chip(v-for="(chip,index) in chips" :value="index" :key="chip" @click="click") {{ chip }}
</template>

<script>

export default {
	props: ['chips'],
	data () {
		return {
			selection: undefined
		}
	},
	methods: {
		click () {
			this.$nextTick(function () {
				this.$emit('select', this.selection)
			})
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--light.sel {
	background: $taskcolor;
	color: #fff;
}

</style>
