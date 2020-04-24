import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible';
import { Tab, Tabs, List, Cell, Icon } from 'vant';
import api from './services';
import fastclick from 'fastclick';

fastclick.attach(document.body);

Vue.config.productionTip = false;

Vue.prototype.$api = api;

const VantComponents = [
  Tab,
  Tabs,
  List,
  Cell,
  Icon
];

VantComponents.map(Component => Vue.use(Component));

new Vue({
  render: h => h(App),
}).$mount('#app')
