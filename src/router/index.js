import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Edit from '../pages/Edit.vue'
import Preview from "../pages/Preview.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },
  {
    path:'/preview',
    name:'preview',
    component:Preview
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
