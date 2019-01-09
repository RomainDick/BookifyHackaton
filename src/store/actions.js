import Vue 						from 'vue';
import * as fromTypes from './types.js';
import jwt_decode 		from 'jwt-decode';

export const actions = {

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

		//
		// commit(
		// 	fromTypes.LOGIN_USER,
		// 	{
		// 		id: 1,
		// 		token : "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NDcwMjg4NTksImV4cCI6MTU0NzAzMjQ1OSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlkIjoxfQ.cWZ-1iZFdgB3Tfr-yMlrOBJN-H6oP48-hKqjcTLMsVheYlDuOPIptzvQkBNunAi1fvm95xmAnj2G6rAyfNrIztnphBlO94m19KMnxmvR9I2SL2SY8Skoz0_Q7BrbMjiGG6S6KOis0ZXn3NxFFv1S5laJ-5Cat9DhnW29dczXYFkufitLwgz6ghlj-ji6GQJNJt9gpu0uQDfBucaFs0BjzYezaDVfiIthLOz7YgMgh1_52MMU2SkvNSUc_8RgmdGoceOU84_2IXtsmd-CKhWHc14htisFSt08-Sl7ooG1rnGj3K6lj_Cdei-MT8BBvOlYRL7HrXr-lRbW14EN7leE7vuevqadybTE4p1NL2ObuBw5qSsNRU15mLcxbzHWZLdj0-LvrbHpqz1mj2--7_TEstlu109GZe7MoMOv9YJNGBOliDxzAqeU3VW2oDv0zVrJ5pBmjeHS5PvZn-y25-m23GYwhtVIaDU9okxukWFZLg5_wKfpWsGGVEQSmB1Uff5sCaHS5U6_aY49dK2n8-H2S753CZ2ZK0PXrDIohbyOyVHQRTSvXCjSKNidpo2qXBUWKvhrlM6Dn3cDCunTznF27gcql_Q6pHIafJ0YBfiVjDAtvt_EeZDBqEKKNI4NET3UYEc9kVJdBo1WKqgCj5J57IK7Bn0YdQOPpKbyTL-xOaE"
		// 	}
		// );
		// commit(
		// 	fromTypes.LOGIN_USER_BOLEAN,
		// 	true
		// );

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