import type { RouteRecordRaw } from 'vue-router'
import getRoutePath from '@/helpers/routes'

const routes: RouteRecordRaw[] = [
  {
    path: getRoutePath('storageSystems'),
    name: 'Storage Systems',
    component: () => import('@/pages/storage-systems/index.vue'),
    meta: {
      layout: 'main',
      title: 'Система Хранения'
    },
  },
  {
    path: getRoutePath('rackSystems'),
    name: 'Racking System',
    component: () => import('@/pages/storage-systems/rack-systems/index.vue'),
    meta: {
      layout: 'main',
      title: 'Комплекты стеллажных систем'
    },
  },
  {
    path: getRoutePath('rackSystemItem'),
    name: 'Racking System Item',
    component: () => import('@/pages/storage-systems/rack-systems/_id.vue'),
    meta: {
      layout: 'main',
      title: 'Комплекты стеллажных систем'
    },
  },
]

export default routes