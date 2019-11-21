import Vue from 'vue'
import store from './store'
import App from './App.vue'
//import router from './router'

new Vue({
 //router,
  store,
  el: '#app',
  render: h => h(App)
});
