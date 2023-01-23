import type { RouteRecordRaw } from 'vue-router'
import getRoutePath from '@/helpers/routes'

const routes: RouteRecordRaw[] = [
  {
    path: getRoutePath('storageSystems'),
    name: 'Storage Systems',
    component: () => import('@/pages/storage-systems/index.vue'),
    meta: {
      layout: 'main',
      title: 'Система Хранения',
      meta: [
        {
          name: 'description',
          content: 'Раздел для систем хранения мебельных изделий'
        }
      ]
    },
  },
  {
    path: getRoutePath('rackSystems'),
    name: 'Racking System',
    component: () => import('@/pages/storage-systems/rack-systems/index.vue'),
    meta: {
      layout: 'main',
      title: 'Комплекты стеллажных систем',
      meta: [
        {
          name: 'description',
          content: 'Раздел комплектов стеллажных систем. Тут вы найдете список продуктов, выбрав которые вы никогда не будете жалеть.'
        }
      ]
    },
  },
  {
    path: getRoutePath('rackSystemItem'),
    name: 'Racking System Item',
    component: () => import('@/pages/storage-systems/rack-systems/_id.vue'),
    meta: {
      layout: 'main',
      title: 'Комплекты стеллажных систем',
      meta: [
        {
          name: 'description',
          content: 'Комплет стеллажных систем. Выбрав этот продукт вы долгие года сможете пользоваться своим изделием.'
        }
      ]
    },
  },
]

export default routes