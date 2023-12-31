import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListarView from '../views/ListarView.vue'
import EditarView from '../views/EditarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/listar',
      name: 'listar',
      component: ListarView
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: EditarView
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CadastrarView.vue')
    }
  ]
})

export default router
