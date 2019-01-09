import Vue 						from 'vue';
import * as fromTypes from './types.js';
import jwt_decode 		from 'jwt-decode';

export const actions = {

	[fromTypes.LOGIN_USER]({commit}, payload){
		
		Vue.http
		.post(
			Vue.config.environments.baseURL+'login',
			payload
		)
		.then(response => {
			const tokenDecoded = jwt_decode(response.body.token);
			const user = {
				id : tokenDecoded.id,
				token : response.body.token
			}
			commit(
				fromTypes.LOGIN_USER,
				user
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