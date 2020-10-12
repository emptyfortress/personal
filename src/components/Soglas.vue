<template lang="pug">
v-simple-table(fixed-header height="400").mytab
	template(v-slot:default)
		thead
			tr.head
				th.sm
				th(v-for="header in headers"  @click="setSort(header.value)" :class="sortKey === header.value ? 'active' : ''" )
					span {{ header.text }}
					span(v-if="sortKey === header.value && !reverse").ml-2 &darr;
					span(v-if="sortKey === header.value && reverse").ml-2 &uarr;
		transition-group( name="list-complete" tag="tbody").mysort
			template(v-for="row in sorted")
				tr(:key="row.id" :class="{'active' : expanded.includes(row.id) }").slide
					td.sm
						v-btn(icon small @click="expand(row.id)")
							v-icon mdi-chevron-right
					td.lnk {{ row.title }}
					td.nowrap {{ row.date }}
					td(:class="sogl(row.id)").status
						span.bag
						span.text {{ row.status }}
					td.nowrap {{ row.name }}
				tr(v-if="expanded.includes(row.id)" :key="`ex-${row.id}`").slide
					td
					td
					td
					td
						ul
							li(v-for="item in row.stat") {{ item }}
					td
						ul
							li(v-for="item in row.fio") {{ item }}
</template>

<script>

export default {
	data() {
		return {
			expanded: [],
			sortKey: 'date',
			reverse: false,
			headers: [
				{ text: 'Тема', align: 'start', sortable: false, value: 'title', },
				{ text: 'Дата старта', value: 'date' },
				{ text: 'Статус', value: 'status' },
				{ text: 'Согласующие', value: 'name' },
			],
			items: [
				{
					id: 0,
					title: 'Закупка  мебели для отдела производства',
					date: '2020-10-02',
					status: 'Согласовано (с замечаниями)',
					name: 4,
					stat: ['Согласовано', 'Согласовано', 'Согласовано с замечаниями', 'Согласовано'],
					fio: ['Орлов П.С.', 'Гусев К.Ф.', 'Уткина Т.М.', 'Воронов А.А.']
				},
				{
					id: 1,
					title: 'Договор с ООО Ромашка',
					date: '2020-10-05',
					status: 'На согласовании',
					name: 5,
					stat: ['Согласовано', 'Согласовано', 'Не начато', 'Согласовано', 'Согласовано'],
					fio: ['Орлов П.С.', 'Гусев К.Ф.', 'Уткина Т.М.', 'Воронов А.А.', 'Сорокина Ж.И.']
				},
				{
					id: 2,
					title: 'Отчет о прибылях и убытках',
					date: '2020-10-03',
					status: 'На согласовании',
					name: 3,
					stat: ['Согласовано', 'В работе', 'В работе'],
					fio: ['Орлов П.С.', 'Гусев К.Ф.', 'Уткина Т.М.']
				},
			]
		}
	},
	computed: {
		check () {
			if (this.expanded.includes(0)) {
				return true
			} else return false
		},
		sorted: {
			get () {
				let key = this.sortKey
				return this.items.slice().sort((a, b) => {
					if (a[key] > b.[key]) {
						return 1
					}
					if (a[key] < b[key]) {
						return -1
					}
					if (a[key] === b[key]) {
						return 0
					}
				})
			},
			set () {}
		},
	},
	methods: {
		sogl (e) {
			switch (e) {
			case 0: return 'finish'
			case 1: return 'some'
			case 2: return 'some1'
			default: return ''
			}
		},
		expand (e) {
			let index = this.expanded.indexOf(e)
			if (index > -1) {
				this.expanded.splice(index, 1)
			} else this.expanded.push(e)
		},
		setSort (e) {
			if (this.sortKey === e) {
				this.reverse = !this.reverse
				this.sorted.reverse()
			} else {
				this.sortKey = e
				this.reverse = false
				this.sorted = [ ...this.sorted ]
			}
		},
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.mytab {
	margin-top: 1rem;
	margin-bottom: 1rem;
	border-bottom: 1px solid #ccc;
}

.slide {
	transition: transform .2s;
}
th {
	font-weight: normal;
}
th.active {
	font-weight: bold;
	color: black !important;
}
.lnk {
	color: $link;
	cursor: pointer;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
}
.status {
	position: relative;
	white-space: nowrap;
	.bag {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		background: $taskcolor;
	}
	.text {
		position: relative;
	}
}
.finish .bag {
	width: 100%;
}
.some .bag {
	width: 80%;
	background: #B8DEFE;
}
.some1 .bag {
	width: 30%;
	background: #B8DEFE;
}
ul {
	list-style: none;
	margin: .5rem 0;
	padding: 0;
	margin-bottom: 1.5rem;
	li {
		padding: 5px 0;
	}
}
.active td {
	border-bottom: none !important;
}
.active .v-icon {
	transform: rotate(90deg);
}
</style>
