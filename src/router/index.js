import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'
import Home from '../views/Home.vue'
import NovoUsuario from '../views/NovoUsuario.vue'
import Login from '../views/Login.vue'
import Imovel from '../views/Imovel.vue'
import store from '@/store'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: NovoUsuario    
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      publica: true
    }
  },
  {
    path: '/imovel',
    name: 'imovel',
    component: Imovel,
    meta: {
      publica: true
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((routeTo, routeFrom, next) => {
  if(!routeTo.meta.publica && !store.state.token){
    return next({ path : '/login'})
  }
  next()
})

export default router
