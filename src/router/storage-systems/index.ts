import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/storage-systems',
    name: 'Storage Systems',
    component: () => import('@/pages/storage-systems/index.vue'),
    meta: {
      layout: 'main',
      title: 'Система Хранения'
    },
  },
  {
    path: '/storage-systems/rack-systems',
    name: 'Racking System',
    component: () => import('@/pages/storage-systems/rack-systems/index.vue'),
    meta: {
      layout: 'main',
      title: 'Комплекты стеллажных систем'
    },
  },
  {
    path: '/storage-systems/rack-systems/:id',
    name: 'Racking System Item',
    component: () => import('@/pages/storage-systems/rack-systems/_id.vue'),
    meta: {
      layout: 'main',
      title: 'Комплекты стеллажных систем'
    },
  },
]

export default routes