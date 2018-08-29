import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
/* import firebaseui from 'firebaseui'; */
import Routes from './routes'
import {config} from './helpers/firebaseConfig'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});
firebase.initializeApp(config);
new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
