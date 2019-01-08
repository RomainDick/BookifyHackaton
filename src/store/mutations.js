import * as fromTypes from './types.js';

export const mutations = {

	[fromTypes.UPDATE_TEST](state, payload) {
		state.test = {
			...state.test,
			login: payload
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