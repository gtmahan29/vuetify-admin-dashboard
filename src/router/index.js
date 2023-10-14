import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/store'
import Dashboard from '../views/Dashboard.vue'
import Posts from '../views/Posts/Posts.vue'
import Users from '../views/Users/Users.vue'
import AddUser from '@/views/Users/AddUser.vue'
import Comments from '../views/Comments.vue'
import Statistics from '../views/Statistics.vue'
import Settings from '../views/Settings.vue'
import Login from '@/views/LoginSignup.vue'
import PostsCategory from '@/views/Posts/PostsCategory.vue'
import AddCategory from '@/views/Posts/AddCategory.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/dashboard',
        alias: [''],
        name: 'dashboard',
        component: Dashboard,
        meta: {
          requiresAuth: true,
          title:"داشبورد" ,
        }
      },
      {
        path: '/posts',
        name: 'posts',
        component: Posts,
        meta: {
          requiresAuth: true,
          title:'پست‌ها' ,
        }
      },
      {
        path: '/posts/category',
        name: 'category',
        component: PostsCategory,
        meta: {
          requiresAuth: true,
          title:'دسته‌بندی‌ها' ,
        }
      },
      {
        path: '/posts/category/add',
        name: 'AddCategory',
        component: AddCategory,
        meta: {
          requiresAuth: true,
          title:'افزودن دسته‌بندی' ,
        }
      },
      {
        path: '/comments',
        name: 'comments',
        component: Comments,
        meta: {
          requiresAuth: true,
          title:'دیدگاه‌ها' ,
        }
      },
      {
        path: '/users',
        name: 'users',
        component: Users,
        meta: {
          requiresAuth: true,
          title:'کاربران' ,
        },
      },
      {
        path: '/users/add',
        name: 'adduser',
        component: () => import('@/views/Users/AddUser.vue'),
        meta: {
          requiresAuth: true,
          title:'افزودن کاربر',
        }
      },
      {
        path: '/statistics',
        name: 'statistics',
        component: Statistics,
        meta: {
          requiresAuth: true,
          title:'تجزیه و تحلیل‌ها' ,
        }
      },
      {
        path: '/settings',
        name: 'settings',
        component: Settings,
        meta: {
          requiresAuth: true,
          title:'تنظیمات' ,
        }
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router