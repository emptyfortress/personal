<template lang="pug">
.ma-5
	Flipper(:flipKey="focused" spring="stiff")
		ul
			li(v-for="(item, index) in items" @click="toggleItem(index)" :key="index")
				Flipped(v-if="index !== focused" :flipId="`item-${index}`")
					.mycontent
						Flipped(:inverseFlipId="`item-${index}`")
							div
								Flipped(:flipId="`avatar-${index}`")
									.avatar
				Flipped(v-else :flipId="`item-${index}`" @on-start="handleStart" )
					.mycontent1
						Flipped(:inverseFlipId="`item-${index}`")
							div
								Flipped(:flipId="`avatar-${index}`")
									.avatar1
								.p Nullam eu ante vel est convallis dignissim.&nbsp;&nbsp;Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.&nbsp;&nbsp;Nunc porta vulputate tellus.&nbsp;&nbsp;Nunc rutrum turpis sed pede.&nbsp;&nbsp;Sed bibendum.&nbsp;&nbsp;Aliquam posuere.&nbsp;&nbsp;Nunc aliquet
 

</template>

<script>
import { Flipper, Flipped } from 'vue-flip-toolkit'
// import anime from 'animejs'

export default {
	data () {
		return {
			focused: null,
			items: [
				{ id: 0, title: 'laksjlakj' },
				{ id: 1, title: 'laksjlakj' },
				{ id: 2, title: 'laksjlakj' },
				{ id: 3, title: 'laksjlakj' },
			],
		}
	},
	components: {
		Flipper,
		Flipped,
	},
	methods: {
		toggleItem (index) {
			if (this.focused === index) {
				this.focused = null
			} else {
				this.focused = index
			}
		},
		handleStart ({ el }) {
			setTimeout(() => {
				el.classList.add('animated-in')
			}, 600)
		}
	},
	computed: {
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

ul {
	margin: 0;
	padding: 0;
	list-style-type: none;
	display: flex;
	flex-direction: column;
}
.mycontent {
	background: #fff;
	padding: 1rem;
	margin-bottom: 1rem;
}
.mycontent1 {
	background: #fff;
	padding: 1rem;
	margin-bottom: 1rem;
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
}
.avatar {
	width: 32px;
	height: 32px;
	background: #ccc;
	border-radius: 32px;
}
.avatar1 {
	width: 128px;
	height: 128px;
	background: #ccc;
	border-radius: 128px;
}

.test {
	width: 300px;
	height: 200px;
	background: #fff;
	cursor: pointer;
	padding: 1rem;
}
.test1 {
	width: 800px;
	height: 400px;
	background: #fff;
	padding: 1rem;
}
</style>
