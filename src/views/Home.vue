<template lang="pug">
.pa-5
	.zg {{ new Date() | moment("dddd, MMMM Do, YYYY") }}
	.home
		.bl
			.hd 
				.txt Новые задания
				.dig &darr; 4
			.big 12
		.bl
			.hd 
				.txt Срочные задания
				.dig &darr; 4
			.big 12
		.bl
			.hd
				.txt Контроль
				.dig &darr; 4
			.big 12

	//- .inf

</template>

<script>

export default {
	components: {
	},
	data: () => ({
		msg: ''
	}),
	methods:{
	},
	mounted () {
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.home {
	margin-top: 2rem;
	display: flex;
	height: 75vh;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;
}
.zg {
	text-align: center;
	font-size: 1.3rem;
	color: #666;
}
.bl {
	width: 300px;
	background: #fff;
	border-radius: 4px;
	padding: 1rem;
	cursor: pointer;
	&:hover {
		box-shadow: 0 3px 10px #ccc;
	}
}
.hd {
	display: flex;
	justify-content: space-between;
}
.big {
	font-size: 2.3rem;
	line-height: 100%;
	margin-top: .5rem;
	color: $accent;
}
</style>
