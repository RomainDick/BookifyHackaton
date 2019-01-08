import * as fromTypes from './types.js';

export const mutations = {

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