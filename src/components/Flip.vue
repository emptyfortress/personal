<template lang="pug">
.test
	.zag Test
	Flipper(:flipKey="focused" spring="stiff")
		div(v-for="(item,index) in list" :key="index" )
			Flipped(:flipId="1" v-if="focused" )
				.d-flex(@click="toggle")
					Small(v-for="n in 3" :key="n")
			Flipped(:flipId="1" v-if="!focused")
				.d-flex(@click="toggle")
					Big

</template>

<script>
import { Flipper, Flipped } from "vue-flip-toolkit"
import Small from '@/components/Small'
import Big from '@/components/Big'


export default {
	data () {
		return {
			focused: null,
		}
	},
	methods: {
		toggle (e) {
			if (this.focused !== null) {
				this.focused = null
			} else this.focused = e
		},
	},

	components: {
		Small,
		Big,
		Flipper,
		Flipped,
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
