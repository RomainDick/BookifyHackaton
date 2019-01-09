import Vue 						from 'vue';
import * as fromTypes from './types.js';

export const actions = {

	[fromTypes.LOGIN_USER]({commit}, payload){
		
		//for test
		// commit(
		// 	fromTypes.LOGIN_USER_BOLEAN,
		// 	true
		// );
		//end for test

		Vue.http
		.post(
			Vue.config.environments.baseURL+'login',
			payload
		)
		.then(response => {
			commit(
				fromTypes.LOGIN_USER,
				response.body
			);
			commit(
				fromTypes.LOGIN_USER_BOLEAN,
				true
			);
		}, response => {
			console.log(response)
		});
	},

};