import Vue 						from 'vue';
import * as fromTypes from './types.js';
import jwt_decode 		from 'jwt-decode';
import router         from '../core/router';

export const actions = {

	[fromTypes.CREATE_USER](payload){
		Vue.http
		.post(
			Vue.config.environments.baseURL+'users',
			payload
		)
		.then(() => {
			//redirect user
			router.push({ path: '/login' })
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
			if (payload.user)
				payload.user.media = "/media/" + response.body.id
			if (payload.item)
				payload.item.media = "/media/" + response.body.id
			commit(
				fromTypes.CREATE_MEDIA,
				response.body
			);
			if (payload.user)
			{
				dispatch(
					fromTypes.CREATE_USER,
					payload.user
				)
			}
			if (payload.item)
			{
				dispatch(
					fromTypes.CREATE_PRODUCT,
					{
						item : payload.item,
						token : payload.token,
						id : payload.id
					}
				)
			}
		}, response => {
			console.log(response)
		});
	},

	[fromTypes.CREATE_USER](Object, payload){
		console.log("payload user " + payload)
		Vue.http
		.post(
			Vue.config.environments.baseURL+'users',
			payload
		)
		.then(response => {
			console.log(response)
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

	[fromTypes.CREATE_PRODUCT]({commit}, payload){
		Vue.http
		.post(
			Vue.config.environments.baseURL+'items',
			payload.item,
			{headers:{'Authorization' : 'Bearer '+payload.token}}
		)
		.then(response => {
			console.log(response);
			commit(
				fromTypes.CREATE_PRODUCT,
				response.body
			);
			//redirect user
			router.push({ path: '/items' })
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

			//redirect user
			router.push({ path: '/' })

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
		}, response => {
			console.log(response);
			commit(
				fromTypes.GET_ITEMS_LOADING,
				false
			);
		});
	},


	[fromTypes.GET_ITEM]({commit}, payload){
		commit(
			fromTypes.GET_ITEM_LOADING,
			true
		);

		Vue.http
		.get(
			Vue.config.environments.baseURL+'items/'+payload
		)
		.then(response => {
			commit(
				fromTypes.GET_ITEM,
				response.body
			);
			commit(
				fromTypes.GET_ITEM_LOADED,
				true
			);
			commit(
				fromTypes.GET_ITEM_LOADING,
				false
			);
		}, response => {
			console.log(response);
			commit(
				fromTypes.GET_ITEM_LOADING,
				false
			);
		});
	},


	[fromTypes.GET_MY_ITEMS]({commit}, payload){
		commit(
			fromTypes.GET_MY_ITEMS_LOADING,
			true
		);
	
		Vue.http
		.get(
			Vue.config.environments.baseURL+'items?user.id='+payload,
		)
		.then(response => {
			setTimeout(() => {
				commit(
					fromTypes.GET_MY_ITEMS,
					response.body
				);
				commit(
					fromTypes.GET_MY_ITEMS_LOADED,
					true
				);
				commit(
					fromTypes.GET_MY_ITEMS_LOADING,
					false
				);
			}, 500);
		}, response => {
			console.log(response);
			commit(
				fromTypes.GET_MY_ITEMS_LOADING,
				false
			);
		});
	},
	
	[fromTypes.GET_CATEGORIES]({commit}){
		commit(
			fromTypes.GET_CATEGORIES_LOADING,
			true
		);

		Vue.http
		.get(
			Vue.config.environments.baseURL+'categories'
		)
		.then(response => {
			setTimeout(() => {
				commit(
					fromTypes.GET_CATEGORIES,
					response.body
				);
				commit(
					fromTypes.GET_CATEGORIES_LOADED,
					true
				);
				commit(
					fromTypes.GET_CATEGORIES_LOADING,
					false
				);
			}, 500);
		}, response => {
			console.log(response);
			commit(
				fromTypes.GET_CATEGORIES_LOADING,
				false
			);
		});
	},
};