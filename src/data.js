const headers = [
	{
		id: 0,
		text: 'Вид',
		align: 'start',
		sortable: true,
		value: 'type',
	},
	{
		id: 1,
		text: 'Срок',
		align: 'start',
		sortable: true,
		value: 'deadline',
	},
	{
		id: 2,
		text: 'Автор',
		align: 'start',
		sortable: true,
		value: 'executor',
	},
	{
		id: 3,
		text: 'Тема',
		align: 'start',
		sortable: true,
		value: 'title',
	},
]
const headers1 = [
	{
		id: 0,
		text: 'Исполнитель',
		align: 'start',
		sortable: true,
		value: 'executor',
	},
	{
		id: 1,
		text: 'Статус',
		align: 'start',
		sortable: true,
		value: 'executor',
	},
	{
		id: 2,
		text: 'Срок',
		align: 'start',
		sortable: true,
		value: 'deadline',
	},
	{
		id: 3,
		text: 'Тема',
		align: 'start',
		sortable: true,
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
		'type': 'На исполнение',
		'deadline': '2020-08-28',
		'urgent': true,
		'created': '2020-08-05',
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
		'type': 'На исполнение',
		'control': true,
		'deadline': '2020-08-17',
		'created': '2020-08-07',
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
		'status': 'Просрочено',
		'type': 'На ознакомление',
		'control': true,
		'deadline': '2020-08-16',
		'expired': true,
		'urgent': true,
		'created': '2020-08-13',
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
		'type': 'На согласование',
		'deadline': '2020-08-14',
		'urgent': true,
		'created': '2020-08-06',
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
		'type': 'На исполнение',
		'control': true,
		'deadline': '2020-08-24',
		'created': '2020-08-05',
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
		'type': 'На согласование',
		'control': true,
		'deadline': '2020-08-18',
		'created': '2020-07-21',
		'title': 'Протокол совещания по вопросу выполнения третьей очереди работ по созданию ГИС СПб 27.09.2020 № ***',
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
		'control': true,
		'type': 'На ознакомление',
		'deadline': '2020-08-26',
		'created': '2020-08-12',
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
		'type': 'На исполнение',
		'deadline': '2020-08-27',
		'urgent': true,
		'created': '2020-08-11',
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
		'type': 'На исполнение',
		'control': true,
		'deadline': '2020-08-17',
		'urgent': true,
		'created': '2020-08-12',
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
		'status': 'Просрочено',
		'type': 'На ознакомление',
		'deadline': '2020-08-04',
		'control': true,
		'expired': true,
		'created': '2020-08-13',
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
		'type': 'На исполнение',
		'deadline': '2020-08-19',
		'urgent': true,
		'created': '2020-08-05',
		'title': 'О рассмотрении РД по ЛПЛ',
		'files': ''
	},
]

const bl = [
	{ id: 0, active: false, title: 'Новые задания', digit: 7, down: true,  but: 'Прочитано', but1: 'Ознакомлен', },
	{ id: 1, active: false, title: 'Истекает срок', digit: 3, down: true,  but: 'Прочитать все', },
	{ id: 2, active: false, title: 'Задания на контроле', digit: 5, down: false,  but: 'Прочитать все', },
	{ id: 3, active: false, title: 'Исполнительская дисциплина', digit: 3, down: true },
	{ id: 4, active: false, title: 'Задания у подчиненных', },
	{ id: 5, active: false, title: 'Избранное', },
]

const urgent = [
	{
		'id': 0,
		'number': '№ 126',
		'unread': false,
		'selected': false,
		'author': 'Петров',
		'executor': 'Воробьев К.А.',
		'status': 'В работе',
		'type': 'На согласование',
		'today': true,
		'control': true,
		'deadline': '2020-08-18',
		'created': '2020-07-21',
		'title': 'Протокол совещания по вопросу выполнения третьей очереди работ по созданию ГИС СПб 27.09.2020 № ***',
		'files': '1'
	},
	{
		'id': 1,
		'number': '№ 185',
		'unread': false,
		'selected': false,
		'author': 'Петров',
		'executor': 'Воробьев К.А.',
		'status': 'В работе',
		'today': true,
		'control': true,
		'type': 'На ознакомление',
		'deadline': '2020-08-18',
		'created': '2020-08-12',
		'title': 'О восстановлении работоспособности системы подогрева приточной вентиляции',
		'files': '5'
	},
	{
		'id': 2,
		'number': '№ 158',
		'unread': true,
		'selected': false,
		'author': '<Я>',
		'executor': 'Гусев П.И.',
		'status': 'Делегировано',
		'type': 'На исполнение',
		'deadline': '2020-08-19',
		'urgent': true,
		'created': '2020-08-11',
		'title': 'О вызове представителя',
		'files': '3'
	},
	{
		'id': 3,
		'number': '№ 160',
		'unread': false,
		'selected': false,
		'author': '<Я>',
		'executor': 'Синичкина Г.И.',
		'status': 'Завершено',
		'type': 'На исполнение',
		'control': true,
		'deadline': '2020-08-20',
		'urgent': true,
		'created': '2020-08-12',
		'title': 'Совещание по вопросу исполнения договора от 24.06.2015 № *** на оказание услуги по размещению кабелей на территории Петербургского метрополитена и их техническому обслуживанию, тзаключенного с ПАО Мегфон',
		'files': '8'
	},
	{
		'id': 4,
		'number': '№ 150',
		'unread': true,
		'selected': false,
		'author': '<Я>',
		'executor': 'Воробьев К.А.',
		'status': 'Просрочено',
		'type': 'На ознакомление',
		'deadline': '2020-08-21',
		'control': true,
		'expired': true,
		'created': '2020-08-13',
		'title': 'О срабатывании автоматического выключателя SF58',
		'files': ''
	},
	{
		'id': 5,
		'number': '№ 225',
		'unread': false,
		'selected': false,
		'author': 'Петров',
		'executor': 'Жаворонков К.К',
		'status': 'На проверке',
		'type': 'На исполнение',
		'deadline': '2020-08-22',
		'urgent': true,
		'created': '2020-08-05',
		'title': 'О рассмотрении РД по ЛПЛ',
		'files': ''
	},
	
]

export {
	headers, headers1, items, bl, urgent
}
