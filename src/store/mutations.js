import * as fromTypes from './types.js';

export const mutations = {

	[fromTypes.SEARCH](state, payload) {
		state.search = {
			...state.search,
			results : payload,
		};
	},
	[fromTypes.SEARCH_LOADING](state, payload) {
		state.search.loading = payload;
	},
	[fromTypes.SEARCH_LOADED](state, payload) {
		state.search.loaded = payload;
	},

	
	[fromTypes.LOGIN_USER](state, payload) {
		state.user = {
			...state.user,
			infos : payload,
		};
	},
	[fromTypes.LOGIN_USER_BOLEAN](state, payload) {
		state.user = {
			...state.user,
			login : payload,
		};
	},
	
	// [fromTypes.UPDATE_LOADER](state, payload) {
	// 	state.loader = payload;
	// },

	// [fromTypes.UPDATE_SEARCH_TYPE](state, payload) {
	// 	state.args = {
	// 		...state.args,
	// 		type: payload
	// 	};
	// },

};