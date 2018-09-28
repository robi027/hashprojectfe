import Auth from './components/Auth.vue';
import AuthSuccess from './components/Success.vue';
import mainPage from './components/MainPage.vue';
import editorPage from './components/Editor.vue';

export default[
  {
    path: '*', 
    redirect: '/'
  },
  { 
    path: '/', 
    name: 'Login',
    component: Auth 
  },
  { 
    path: '/success',
    name: 'Sukses', 
    component: AuthSuccess 
  },
  { 
    path: '/editor',
    name: 'Editor', 
    component: editorPage 
  },
  {
    path: '/main', 
    name: 'Main',
    component: mainPage,
    /* meta: {
      requiresAuth: true
    } */
  }
]