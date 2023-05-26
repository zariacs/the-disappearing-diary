import { createRouter, createWebHistory } from 'vue-router'
import BaseView from '../views/BaseView.vue'
import WritingSection from '@/views/WritingSection.vue'
import WritingSidePanel from '@/views/WritingSidePanel.vue'
import JournalView from '@/views/JournalView.vue'
import HomePageView from '@/views/HomePageView.vue'
import ProjectWikiView from '@/views/ProjectWikiView.vue'
import UserLoginView from '@/views/UserLoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/base',
      name: 'base',
      component: BaseView
    },
    {
      path: '/writing',
      name: 'writing',
      component: WritingSection
    },
    {
      path: '/side',
      name: 'sidepanel',
      component: WritingSidePanel
    },
    {
      path: '/',
      name: 'journal',
      component: JournalView
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
    }
  ]
})

export default router
