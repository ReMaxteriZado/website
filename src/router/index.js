import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import AdminView from '@/views/AdminView.vue'
import i18n, { defaultLocale, supportedLocales } from '@/i18n'

// Admin routes
import DashboardView from '@/views/admin/DashboardView.vue'
import UsersView from '@/views/admin/users/UsersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: `/${i18n.global.locale.value}/`,
    },
    {
      path: '/:locale(en|es)/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/admin',
      component: AdminView,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: DashboardView,
        },
        {
          path: 'users',
          name: 'Usuarios',
          component: UsersView,
        },
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.name === 'Home') {
    const locale = to.params.locale
    if (!supportedLocales.includes(locale)) {
      return next({ name: 'Home', params: { locale: defaultLocale }, hash: to.hash })
    }
    i18n.global.locale.value = locale
  }

  if (to.name === 'Login' && token) {
    next({ name: 'Dashboard' })
  } else if (to.meta.requiresAuth && !token) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
