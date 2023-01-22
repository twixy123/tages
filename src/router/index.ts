import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import storageSystemsRoutes from './storage-systems'

import setPageTitle from '@/helpers/set-page-title'

import HomePage from '@/pages/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Main',
    component: HomePage,
    meta: {
      layout: 'main',
      title: 'Главная'
    }
  },
  ...storageSystemsRoutes
]

routes.forEach(route => {
  if (!route.meta) route.meta = {}
  route.meta.breadcrumbs = findBreadcrumbs(route.path, routes)
})

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  setPageTitle(to.meta.title as string || '')  
})

function findBreadcrumbs (path: string, routes: RouteRecordRaw[]) {
  const currentRoutePath = path.split('/').filter((item, ind, pathsArr) => {
    return ind === pathsArr.length - 1 && item.startsWith(':') ? false : item ? true : false
  }).map(item => `/${item}`)

  return routes.filter((route) => {
    return cutRoutePath(route.path, JSON.parse(JSON.stringify(currentRoutePath)))
  })
}

function cutRoutePath (mathchingPath: string, path: string[]): any {
  if (path.length && mathchingPath.includes(path[0])) {
    const croppedRoutePath = mathchingPath.replace(path[0], '')

    if (croppedRoutePath.startsWith('/')) {
      return cutRoutePath(croppedRoutePath, path.splice(1))
    } else {
      return true
    }
  }

  return false
}