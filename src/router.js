import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewTodo from './views/NewTodo.vue'
import UpdateTodo from './views/UpdateTodo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'new',
      component: NewTodo
    },
    {
      path: '/update',
      name: 'update',
      component: UpdateTodo
    }
  ]
})
