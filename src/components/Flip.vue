<template lang="pug">
.test
	.zag Test
	.d-flex(v-if="focused === null")
		Small(v-for="n in 3" :key="n")
	.d-flex(v-else)
		Big

</template>

<script>
// import { Flipper, Flipped } from "vue-flip-toolkit"
import Small from '@/components/Small'
import Big from '@/components/Big'


export default {
	data () {
		return {
			focused: 1,
		}
	},
	components: {
		Small,
		Big,
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.test {
	width: 800px;
	/* background: #ccc; */
}
</style>
