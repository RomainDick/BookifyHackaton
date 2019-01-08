import Vue              from 'vue';
import VueResource 	    from 'vue-resource';
import App              from './core/App.vue';
import router           from './core/router';
import { store } 			  from './store/store';
import { environments } from './assets/environments';

Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.config.environments  = environments;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
