import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/store'
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
        }
      },
      {
        path: '/posts',
        name: 'posts',
        component: Posts,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '/posts/category',
        name: 'category',
        component: PostsCategory,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '/posts/category/add',
        name: 'AddCategory',
        component: AddCategory,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '/comments',
        name: 'comments',
        component: Comments,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '/users',
        name: 'users',
        component: Users,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/users/add',
        name: 'adduser',
        component: () => import('@/views/Users/AddUser.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '/statistics',
        name: 'statistics',
        component: Statistics,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '/settings',
        name: 'settings',
        component: Settings,
        meta: {
          requiresAuth: true,
        }
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   const userStore = useUserStore();
//   const token = userStore.getToken();

//   const isAuthenticated = token !== null;

//   if (to.meta.requiresAuth && !isAuthenticated) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router