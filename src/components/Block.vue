<template lang="pug">
Flipped(:flipId="`box-${index}`" v-if="focused === index" @on-start="handleStart")
	.block
		Flipped(:inverseFlipId="`box-${index}`")
			div
				.hd
					Flipped(:flipId="`hd-${index}`")
						.txt {{ block.title }}
					Flipped(:flipId="`dig-${index}`")
						.dig(:class="block.down ? '' : 'red--text'")
							span(v-if="block.down") &darr;
							span(v-else) &uarr;
							span {{ block.digit }}
					v-btn(fab color="dark" dark small @click="toggle(index)").close
						v-icon mdi-close
				listTable(v-if="block.id === 0 && tasks.length")

				v-slide-x-transition(mode="out-in")
					.empty(v-if="!tasks.length" @click="toggle(index)")
						img(src="@/assets/img/man.svg")
						div Нет новых заданий
				.d-flex.align-center.mt-5
					Flipped(:flipId="`big-${index}`")
						.big
							span(v-if="selected !== 0") {{ selected }}
							span(v-if="selected !== 0").iz из
							span {{ total }} 
					v-slide-x-transition(mode="out-in")
						v-btn(depressed v-if="selected !== 0" @click="read").ml-6.mt-3 {{ block.but }}
					v-slide-x-transition(mode="out-in")
						v-btn(depressed  v-if="selected !== 0").ml-2.mt-3 {{ block.but1}}
</template>

<script>

export default {
	data() {
		return {
		}
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

</style>
