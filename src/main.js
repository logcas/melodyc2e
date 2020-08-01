import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible';
import api from './services';
import fastclick from 'fastclick';
import { installVant } from './tools';

installVant(Vue);

fastclick.attach(document.body);

Vue.config.productionTip = false;

Vue.prototype.$api = api;

new Vue({
  render: h => h(App),
}).$mount('#app')
