import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import JournalEntryView from '../views/JournalEntryView.vue'
import BaseView from '../views/BaseView.vue'
import WritingSection from '@/views/WritingSection.vue'
import WritingSidePanel from '@/views/WritingSidePanel.vue'
import JournalView from '@/views/JournalView.vue'
// import App from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
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
    }
  ]
})

export default router
