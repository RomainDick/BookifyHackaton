import Vue            from 'vue';
import VueResource 	  from 'vue-resource';
import App            from './core/App.vue';
import router         from './core/router';
import { store } 			from './store/store';

Vue.config.productionTip = false;
Vue.use(VueResource);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
