import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Kelola',
      children: [
        {
          path: '/',
          name: 'Kelola',
          component: () => import('../views/Kelola/index.vue'),
          meta: {
            title: 'Kelola',
          },
        },
        {
          path: '/Produk',
          name: 'Kelola Produk',
          component: () => import('../views/Kelola/produk.vue'),
          meta: {
            title: 'Kelola Produk',
          },
        },
        {
          path: '/Pelanggan',
          name: 'Kelola Pelanggan',
          component: () => import('../views/Kelola/pelanggan.vue'),
          meta: {
            title: 'Kelola Pelanggan',
          },
        },
      ],
    },
    {
      path: '/Profile',
      children: [
        {
          path: '',
          name: 'Profile',
          component: () => import('../views/Profile/index.vue'),
          meta: {
            title: 'Profile',
          },
        },
      ],
    },
    {
      path: '/Usaha',
      children: [
        {
          path: '',
          name: 'Usaha',
          component: () => import('../views/Usaha/index.vue'),
          meta: {
            title: 'Usaha',
          },
        },
      ],
    },
    {
      path: '/Laba',
      children: [
        {
          path: '',
          name: 'Laba',
          component: () => import('../views/Laba/index.vue'),
          meta: {
            title: 'Laba',
          },
        },
      ],
    },
  ],
  
})

export default router
