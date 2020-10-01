const headers = [
	{
		id: 0,
		text: 'id',
		align: 'start',
		sortable: true,
		value: 'id',
	},
	{
		id: 1,
		text: 'header 1',
		align: 'start',
		sortable: true,
		value: 'number',
	},
	{
		id: 2,
		text: 'header 2',
		align: 'start',
		sortable: true,
		value: 'status',
	},
	{
		id: 3,
		text: 'header 3',
		align: 'start',
		sortable: false,
		value: 'title',
	},
]
const items = [
	{
		'id': 0,
		'number': '№ 122',
		'unread': false,
		'selected': false,
		'author': '<Я>',
		'executor': 'Орлов П.Ф.',
		'status': 'Не начато',
		'deadline': '2018-08-28',
		'created': '2018-08-05',
		'title': 'Об эксплуатации автоматизированной информационной системы государственного заказа Санкт-Петербурга',
		'files': '3'
	},
	{
		'id': 1,
		'number': '№ 133',
		'unread': false,
		'selected': false,
		'author': '<Я>',
		'executor': 'Воробьев К.А.',
		'status': 'В работе',
		'deadline': '2018-08-17',
		'created': '2018-08-07',
		'title': 'О вводе в действие Перечня товаров, работ, услуг закупки которых осуществляются только у субъектов малого и среднего предпринимательства',
		'files': ''
	},
	{
		'id': 2,
		'number': '№ 128',
		'unread': false,
		'selected': false,
		'author': '<Я>',
		'executor': 'Соловьева А.А.',
		'status': 'Не начато',
		'deadline': '2018-08-16',
		'created': '2018-08-13',
		'title': 'Об организации осеннего месячника по благоустройству, озеленению и уборке городских территорий после летнего периода',
		'files': '2'
	},
	{
		'id': 3,
		'number': '№ 144',
		'unread': false,
		'selected': false,
		'author': 'Петров',
		'executor': 'Гусев П.И.',
		'status': 'Завершено',
		'deadline': '2018-08-14',
		'created': '2018-08-06',
		'title': 'О согласовании финансового плана Автобазы на 2019 год',
		'files': '28'
	},
	{
		'id': 4,
		'number': '№ 127',
		'unread': true,
		'selected': false,
		'author': '<Я>',
		'executor': 'Синичкина Г.И.',
		'status': 'Не начато',
		'deadline': '2018-08-24',
		'created': '2018-08-05',
		'title': 'Об организации осеннего месячника по благоустройству, озеленению и уборке городских территорий после летнего периода',
		'files': ''
	},
	{
		'id': 5,
		'number': '№ 126',
		'unread': false,
		'selected': false,
		'author': 'Петров',
		'executor': 'Воробьев К.А.',
		'status': 'В работе',
		'deadline': '2018-08-19',
		'created': '2018-07-21',
		'title': 'Протокол совещания по вопросу выполнения третьей очереди работ по созданию ГИС СПб 27.09.2018 № ***',
		'files': '1'
	},
	{
		'id': 6,
		'number': '№ 185',
		'unread': false,
		'selected': false,
		'author': 'Петров',
		'executor': 'Воробьев К.А.',
		'status': 'В работе',
		'deadline': '2018-08-26',
		'created': '2018-08-12',
		'title': 'О восстановлении работоспособности системы подогрева приточной вентиляции',
		'files': '5'
	},
	{
		'id': 7,
		'number': '№ 158',
		'unread': true,
		'selected': false,
		'author': '<Я>',
		'executor': 'Гусев П.И.',
		'status': 'Делегировано',
		'deadline': '2018-08-27',
		'created': '2018-08-11',
		'title': 'О вызове представителя',
		'files': '3'
	},
	{
		'id': 8,
		'number': '№ 160',
		'unread': false,
		'selected': false,
		'author': '<Я>',
		'executor': 'Синичкина Г.И.',
		'status': 'Завершено',
		'deadline': '2018-08-17',
		'created': '2018-08-12',
		'title': 'Совещание по вопросу исполнения договора от 24.06.2015 № *** на оказание услуги по размещению кабелей на территории Петербургского метрополитена и их техническому обслуживанию, тзаключенного с ПАО Мегфон',
		'files': '8'
	},
	{
		'id': 9,
		'number': '№ 150',
		'unread': true,
		'selected': false,
		'author': '<Я>',
		'executor': 'Воробьев К.А.',
		'status': 'В работе',
		'deadline': '2018-08-04',
		'created': '2018-08-13',
		'title': 'О срабатывании автоматического выключателя SF58',
		'files': ''
	},
	{
		'id': 10,
		'number': '№ 225',
		'unread': false,
		'selected': false,
		'author': 'Петров',
		'executor': 'Жаворонков К.К',
		'status': 'На проверке',
		'deadline': '2018-08-19',
		'created': '2018-08-05',
		'title': 'О рассмотрении РД по ЛПЛ',
		'files': ''
	},

]

export {
	headers, items
}