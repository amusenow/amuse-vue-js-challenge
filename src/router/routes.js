export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/Home.vue')
  },

  {
    path: '/categories',
    name: 'categories',
    component: () => import('@/components/Categories.vue')
  }
];
