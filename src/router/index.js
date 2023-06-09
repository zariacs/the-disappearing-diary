import { createRouter, createWebHistory } from 'vue-router'
import BaseView from '../views/BaseView.vue'
import HomePageView from '@/views/HomePageView.vue'
import ProjectWikiView from '@/views/ProjectWikiView.vue'
import UserLoginView from '@/views/UserLoginView.vue'
import AboutView from '@/views/AboutView.vue'
import TheWelcomeView from '@/views/TheWelcomeView.vue'
import ContactView from '@/views/ContactView.vue'
import NewEntryView from '@/views/NewEntryView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/base',
      name: 'base',
      component: BaseView
    },
    {
      path: '/',
      name: 'journal',
      component: HomePageView
    },
    {
      path: '/home',
      name: 'home',
      component: HomePageView
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: ProjectWikiView
    },
    {
      path: '/login',
      name: 'login',
      component: UserLoginView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: TheWelcomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/write',
      name: 'write',
      component: NewEntryView
    }
  ]
})

export default router
