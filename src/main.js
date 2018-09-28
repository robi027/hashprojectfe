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
import JsonEditor from 'vue-json-edit'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(JsonEditor)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});
/* router.beforeEach((to, from, next) =>{
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('/')
  else if (!requiresAuth && currentUser) next('main')
  else next()
}) */
firebase.initializeApp(config);
new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
