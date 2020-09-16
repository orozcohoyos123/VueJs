import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import ServerList from './ServerList.vue'
import ServerManagement from './ServerManagement.vue'
import ServerLog from './ServerLog.vue'

Vue.component('server-header', Header);
Vue.component('server-list', ServerList);
Vue.component('server-mangement', ServerManagement);
Vue.component('server-log', ServerLog);

new Vue({
  el: '#app',
  render: h => h(App)
})
