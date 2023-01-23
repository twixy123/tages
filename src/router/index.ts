import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import storageSystemsRoutes from './storage-systems'

import setPageSeo from '@/helpers/set-page-seo'
import getRoutePath from '@/helpers/routes'

import HomePage from '@/pages/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: getRoutePath('main'),
    name: 'Main',
    component: HomePage,
    meta: {
      layout: 'main',
      title: 'Главная',
      meta: [
        {
          name: 'description',
          content: 'Онлайн магазин, где вы сможете найти все для мебельных работ.'
        }
      ]
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
  setPageSeo({
    title: to.meta.title as string || to.name as string || '',
    meta: (to.meta.meta as HTMLMetaElement[]).length ? to.meta.meta as HTMLMetaElement[] : null
  })
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