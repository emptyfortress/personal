<template lang="pug">
.ma-5
	h2 Folder
	<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 1052 278" fill="none">
		<g id="wave_group2">
			<g id="wave1">
				<g id="Vectorwave2">
					<path d="M-700.762 176.188C-700.762 176.188 -446.408 196.623 -281.407 196.778C6.10773 197.047 278.572 146.965 561.986 146.255C732.917 145.826 993.227 176.188 993.227 176.188V336.982H-700.762V176.188Z" fill="#8D01DA"/>
					<path d="M-2394.75 176.188C-2394.75 176.188 -2140.4 196.623 -1975.4 196.778C-1687.88 197.047 -1415.42 146.965 -1132 146.255C-961.071 145.826 -700.762 176.188 -700.762 176.188V336.982H-2394.75V176.188Z" fill="#8D01DA"/>
				</g>
			</g>
		</g>
		<g id="wave_group1">
			<g id="wave2">
				<g id="Vectorwave">
					<path d="M-700.762 176.188C-700.762 176.188 -446.408 196.623 -281.407 196.778C6.10773 197.047 278.572 146.965 561.986 146.255C732.917 145.826 993.227 176.188 993.227 176.188V336.982H-700.762V176.188Z" fill="#8D01DA"/>
					<path d="M-2394.75 176.188C-2394.75 176.188 -2140.4 196.623 -1975.4 196.778C-1687.88 197.047 -1415.42 146.965 -1132 146.255C-961.071 145.826 -700.762 176.188 -700.762 176.188V336.982H-2394.75V176.188Z" fill="#8D01DA"/>
				</g>
			</g>
		</g>
	</svg>
</template>

<script>
import anime from 'animejs'

export default {
	data () {
		return {
		}
	},
	methods: {
		start () {
			var wave1_speed = 2500;
			var wave2_speed = 2000;
			anime({
				targets: '#wave1',
				opacity:0.6,
				duration:1,
				easing: 'linear', 
			},0)

			anime({
				targets: '#wave1',
				translateX:[0, 1700],
				duration:wave1_speed,
				easing: 'linear', 
				loop: true
			},0)

			anime({
				targets: '#wave2',
				translateX:[0, 1700],
				duration:wave2_speed,
				easing: 'linear', 
				loop: true
			},0)


			var tl = anime.timeline({
				autoplay: true,
				loop: true,
			});

			tl
				.add({
					targets: '#wave_group1',
					translateY:[30, -20],
					duration:2000,
					easing: 'easeInOutCubic',
				},0)

				.add({
					targets: '#wave_group1',
					translateY:[-20, 30],
					duration:2000,
					easing: 'easeInOutCubic',
				},)

				.add({
					targets: '#wave_group2',
					translateY:[10, 0],
					duration:2000,
					easing: 'easeInOutCubic',
				},0)

				.add({
					targets: '#wave_group2',
					translateY:[0, 10],
					duration:2000,
					easing: 'easeInOutCubic',
				},)
		}
	},
	mounted () {
		this.start()
	}
}

</script>
