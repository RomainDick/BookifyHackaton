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

	[fromTypes.CREATE_PRODUCT](state, payload) {
		state.create_product = {
			...state.create_product,
			results : payload,
		};
	},
	

	[fromTypes.GET_CATEGORIES](state, payload) {
		state.categories = {
			...state.categories,
			results : payload,
		};
	},
	[fromTypes.GET_CATEGORIES_LOADING](state, payload) {
		state.categories.loading = payload;
	},
	[fromTypes.GET_CATEGORIES_LOADED](state, payload) {
		state.categories.loaded = payload;
	},

	[fromTypes.GET_ITEMS](state, payload) {
		state.items = {
			...state.items,
			results : payload,
		};
	},
	[fromTypes.GET_ITEMS_LOADING](state, payload) {
		state.items.loading = payload;
	},
	[fromTypes.GET_ITEMS_LOADED](state, payload) {
		state.items.loaded = payload;
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

	[fromTypes.USER_INFO](state, payload) {
		state.user = {
			...state.user,
			data : payload,
		};
	},

	[fromTypes.CREATE_MEDIA](state, payload) {
		state.media = payload
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