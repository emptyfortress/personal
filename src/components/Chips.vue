<template lang="pug">
v-chip-group(active-class="sel" v-model="selection")
	v-chip(v-for="(chip,index) in chips" :value="index" :key="index" @click="click")
		v-avatar {{ chip.value }}
		|{{ chip.title }}
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
.v-chip {
	cursor: pointer;
	margin-right: .25rem;
	margin-bottom: .25rem;
	padding-left: 4px;
	.v-avatar {
		margin-right: .5rem;
	}
}

</style>
