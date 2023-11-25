import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/GamesView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')

    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/games/memory',
      name: 'memory',
      component: () => import('../views/MemoryGame.vue')
    },
    {
      path: '/games/quiz',
      name: 'quiz',
      component: () => import('../components/Quizzes.vue')
    }
  ]
})

export default router
