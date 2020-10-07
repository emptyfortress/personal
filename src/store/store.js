import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		drawer: true,
		mini: false,
		searchMode: false,
		loading: false,
		searchItemsResults: [],
		filterResults: [],
		checked: [],
		tasks: [],
		blocks: [],
		bigblocks: [],
	},
	getters: {
		drawer: state => { return state.drawer },
		mini: state => { return state.mini },
		searchMode: state => { return state.searchMode },
		loading: state => { return state.loading },
		searchItemsResults: state => { return state.searchItemsResults },
		filterResults: state => { return state.filterResults },
		checked: state => { return state.checked },
		tasks: state => { return state.tasks },
		blocks: state => { return state.blocks },
		bigblocks: state => { return state.bigblocks },
	},
	mutations: {
		toggleDrawer (state) { state.drawer = !state.drawer },
		setMini (state, payload) { state.mini = payload },
		toggleSearchMode (state) { state.searchMode = !state.searchMode },
		setSearchMode (state, payload) { state.searchMode = payload },
		setLoading (state, payload) { state.loading = payload },
		setSearchItemsResults (state, payload) { state.searchItemsResults = payload },
		setFilterResults (state, payload) { state.filterResults = payload },
		setChecked (state, payload) { state.checked = payload },
		setTasks (state, payload) { state.tasks = payload },
		setBlocks (state, payload) { state.blocks = payload },
		setBigBlocks (state, payload) { state.bigblocks = payload },
	},
	actions: {
	},
	modules: {
	}
})
