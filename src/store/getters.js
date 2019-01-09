export const getters = {
	
	getSearch: state => {
		return state.search.results;
	},
	getSearchLoading: state => {
		return state.search.loading;
	},
	getSearchLoaded: state => {
		return state.search.loaded;
	},

	getUserLogin: state => {
		return state.user.login;
	},
	getUserInfos: state => {
		return state.user.infos;
	},
	getUserData: state => {
		return state.user.data;
	},
	
};