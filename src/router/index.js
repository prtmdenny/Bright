import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
        {
          path: '/',
          name: 'Kelola',
          component: () => import('../views/Kelola/index.vue'),
          meta: {
            title: 'Kelola',
          },
        },
        {
          path: 'Produk',
          name: 'Kelola Produk',
          component: () => import('../views/Kelola/produk.vue'),
          meta: {
            title: 'Kelola Produk',
          },
        },
        {
          path: 'Pelanggan',
          name: 'Kelola Pelanggan',
          component: () => import('../views/Kelola/pelanggan.vue'),
          meta: {
            title: 'Kelola Pelanggan',
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
        // {
        //   path: 'Produk',
        //   name: 'Kelola Produk',
        //   component: () => import('../views/Kelola/produk.vue'),
        //   meta: {
        //     title: 'Kelola Produk',
        //   },
        // },
        // {
        //   path: 'Pelanggan',
        //   name: 'Kelola Pelanggan',
        //   component: () => import('../views/Kelola/pelanggan.vue'),
        //   meta: {
        //     title: 'Kelola Pelanggan',
        //   },
        // },
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
        // {
        //   path: 'Produk',
        //   name: 'Kelola Produk',
        //   component: () => import('../views/Kelola/produk.vue'),
        //   meta: {
        //     title: 'Kelola Produk',
        //   },
        // },
        // {
        //   path: 'Pelanggan',
        //   name: 'Kelola Pelanggan',
        //   component: () => import('../views/Kelola/pelanggan.vue'),
        //   meta: {
        //     title: 'Kelola Pelanggan',
        //   },
        // },
      ],
    },
  ],
  
})

export default router
