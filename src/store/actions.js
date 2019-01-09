import Vue 						from 'vue';
import * as fromTypes from './types.js';
import jwt_decode 		from 'jwt-decode';

export const actions = {

	[fromTypes.CREATE_USER]({commit}, payload){
		Vue.http
		.post(
			Vue.config.environments.baseURL+'users',
			payload
		)
		.then(response => {
			console.log(response);
			commit(
				// fromTypes.CREATE_USER,
				// response.body
			);
		}, response => {
			console.log(response)
		});
	},


	[fromTypes.SEARCH]({commit}, payload){
		commit(
			fromTypes.SEARCH_LOADING,
			true
		);

		Vue.http
		.get(
			Vue.config.environments.baseURL+'items?title='+payload.keyword,
			{headers:{'Authorization' : 'Bearer'+payload.token}}
		)
		.then(response => {
			console.log(response);
			commit(
				fromTypes.SEARCH,
				response.body
			);
			commit(
				fromTypes.SEARCH_LOADING,
				false
			);
			commit(
				fromTypes.SEARCH_LOADED,
				true
			);
		}, response => {
			console.log(response)
		});
	},


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

	[fromTypes.USER_INFO]({commit}, payload){
		Vue.http
		.get(
			Vue.config.environments.baseURL+'users/'+payload.id,
			{headers:{'Authorization' : 'Bearer '+ payload.token}}
		)
		.then(response => {
			commit(
				fromTypes.USER_INFO,
				response.body
			);

		}, response => {
			console.log(response)
		});
	},

};