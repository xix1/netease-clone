import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView  from '../views/LoginView.vue'
import AccountView  from '../views/AccountView.vue'
import ProfileSection from '../views/account/ProfileSection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/account',
      component: AccountView,
      children: [
        {
          path: 'profile',
          name: 'ProfileSection',
          component: ProfileSection,
        }
      ]
    },

  ]
})

export default router
