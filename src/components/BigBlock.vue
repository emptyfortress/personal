<template lang="pug">
Flipped(:flipId="`big-${index}`" v-if="focused1 === index" @on-start="")
	.block
</template>

<script>
import { Flipper, Flipped } from "vue-flip-toolkit"

export default {
	props: ['index', 'focused1'],
	data() {
		return {
		}
	},
	components: {
		Flipped,
		Flipper,
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.block {
	position: absolute;
	left: 0;
	top: 100px;
	background: #fff;
	width: 100%;
	height: 500px;
	border-radius: 4px;
	padding: 2rem;
	z-index: 7;
	box-shadow: 0 3px 10px #ccc;
	border: 1px solid #dedede;
	.hd {
		display: flex;
		justify-content: space-between;
	}
	.dig {
		margin-top: 5px;
	}
	.txt {
		font-size: 1.3rem;
		margin-right: 2rem;
	}
	.close {
		position: absolute;
		top: -20px;
		right: -20px;
		/* opacity: 0; */
	}
}
</style>
