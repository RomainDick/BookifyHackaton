// import Vue 						from 'vue';
import * as fromTypes from './types.js';

export const actions = {

	[fromTypes.UPDATE_TEST]({commit}, payload){
		commit(
			fromTypes.UPDATE_TEST,
			payload
		);
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