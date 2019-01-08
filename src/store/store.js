import Vue 						from 'vue';
import Vuex           from 'vuex';

import * as fromStore from './index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state     : fromStore.states,
	actions   : fromStore.actions,
  mutations : fromStore.mutations,
	getters   : fromStore.getters
});