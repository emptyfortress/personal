<template lang="pug">
.list(@click="roll")
	.bag(v-for="user in users")
		.bar
			.bgr(:style="width(user)")
			.user
				.one
					v-avatar(size="28" color="#ededed").slide
						v-img(:src="require(`@/assets/img/user${user.imgURL}.svg`)")
					span {{ user.title }}
				.digit {{ user.load }}
</template>

<script>
import anime from 'animejs'

export default {
	data: () => ({
		users: [
			{ id: 0, imgURL: '0', title: 'Орлов П.', load: '23' },
			{ id: 1, imgURL: '1', title: 'Воробьева А.', load: '14' },
			{ id: 2, imgURL: '2', title: 'Уткин Г.', load: '17' },
			{ id: 3, imgURL: '3', title: 'Сорокин К.', load: '5' },
			{ id: 4, imgURL: '4', title: 'Гусев М.', load: '20' },
			{ id: 5, imgURL: '5', title: 'Гусева И.', load: '11' },
			{ id: 6, imgURL: '6', title: 'Коршунов П.', load: '8' },
			{ id: 7, imgURL: '7', title: 'Жаворонокова И.', load: '9' },
		],
	}),
	methods: {
		width (e) {
			let arr = this.users.map( user => {
				return user.load
			})
			let max = Math.max(...arr)
			let w = e.load * 90/max
			let ww = 'width:' + w + '%'
			return ww
		},
		roll () {
			anime({
				targets: '.slide',
				left: 150,
				duration: 500,
				easing: 'easeOutQuint',
				direction: 'alternate',
				loops: false,
				delay: anime.stagger(100),
			})
		}
	},
	mounted () {
		this.roll()
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.list {
	margin-top: 1rem;
	.bag {
		background-color: #eee;
		margin-bottom: 1px;
		border-radius: 50px 0 0 50px;
		position: relative;
	}
	.user {
		position: relative;
		font-size: 0.9rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		span {
			margin-left: .5rem;
		}
	}
	.bar {
		.bgr {
			background: #B8DEFF;
			width: 0%;
			height: 100%;
			top: 0;
			left: 0;
			position: absolute;
			border-radius: 50px;
		}
	}
}
.digit {
	margin-right: 4px;
}
.slide {
	position: relative;
	left: 0;
	z-index: 3;
}
</style>

