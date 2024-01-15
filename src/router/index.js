import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/login/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import MukimView from '../views/Mukim/MukimView.vue'
import AddMukimView from '../views/Mukim/TambahMukimView.vue'
import EditMukimView from '../views/Mukim/EditMukimView.vue'
import AboutView from '../views/AboutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    //mukim
    {
      path: '/mukim',
      name: 'mukim',
      component: MukimView
    },
    {
      path:'/mukimadd',
      name:"tambahmukim",
      component : AddMukimView
    },
    {
      path:'/mukimedit/',
      name:"editmukim",
      component : EditMukimView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => AboutView
    }
  ]
})

export default router
