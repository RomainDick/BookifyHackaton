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

	[fromTypes.CREATE_MEDIA]({commit,dispatch}, payload){
		Vue.http
		.post(
			Vue.config.environments.baseURL+'media',
			payload.media
		)
		.then(response => {
			console.log(response)
			payload.user.media = payload.user.media + response.body.id
			commit(
				fromTypes.CREATE_MEDIA,
				response.body
			);
			dispatch(
				fromTypes.CREATE_USER,
				payload.user
			)
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
			commit(
				fromTypes.SEARCH_LOADING,
				false
			);
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

	[fromTypes.GET_ITEMS]({commit}){
		commit(
			fromTypes.GET_ITEMS_LOADING,
			true
		);

		Vue.http
		.get(
			Vue.config.environments.baseURL+'items'
		)
		.then(response => {
			setTimeout(() => {
				commit(
					fromTypes.GET_ITEMS,
					response.body
				);
				commit(
					fromTypes.GET_ITEMS_LOADED,
					true
				);
				commit(
					fromTypes.GET_ITEMS_LOADING,
					false
				);
			}, 500);
		}, response => {
			console.log(response);
			commit(
				fromTypes.GET_ITEMS_LOADING,
				false
			);
		});
	},

};