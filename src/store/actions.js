import Vue 						from 'vue';
import * as fromTypes from './types.js';



export const actions = {

	// [fromTypes.UPDATE_TEST]({commit}, payload){
	// 	commit(
	// 		fromTypes.UPDATE_TEST,
	// 		payload
	// 	);
	// },

	[fromTypes.LOGIN_USER]({commit}, payload){

		Vue.http
		.post(
			'http://10.12.1.190/login',
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
			alert('error in LOGIN_USER')
			console.log(response)
		});

	},

	//API EXEMPLE
	// [fromTypes.POST_API_SUGGEST]({commit, state}, payload){

	// 	Vue.http.post(
	// 		state.endpoints.suggest,
	// 		payload, 
	// 		{
	// 			emulateJSON  : true,
	// 			responseType : 'json'
	// 		}
	// 	).then(response => {
	// 		commit(
	// 			fromTypes.API_STATUS_SUGGEST_CODE,
	// 			response.status
	// 		);
	// 		commit(
	// 			fromTypes.UPDATE_DOCUMENTS_DOCUMENTTYPE_DATAS,
	// 			response.body.Result.datas
	// 		);
	// 	}, (response) => {
	// 		commit(
	// 			fromTypes.API_STATUS_SUGGEST_CODE,
	// 			response.status
	// 		);
	// 	});
	// },
	
	
};