import { createRouter, createWebHashHistory } from 'vue-router';

import { auth } from '../firebase';

// screens
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Home from '../views/Home';
import ForgottenPassword from '../views/ForgottenPassword.vue';
import ChangePassword from '../views/ChangePassword.vue';
import ManageContact from '../views/ManageContact.vue';
import EditMe from '../views/EditMe.vue';
import ViewAlert from '../views/ViewAlert.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Signup
  },
  {
    path: '/forgotten-password',
    name: 'Forgotten',
    component: ForgottenPassword
  },
  {
    name: 'Home',
    path: '/home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: ChangePassword,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/manage-contact',
    name: 'ManageContact',
    component: ManageContact,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-me',
    name: 'EditMe',
    component: EditMe,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/view-alert',
    name: 'ViewAlert',
    component: ViewAlert
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next('/');
  } else if (!requiresAuth && auth.currentUser) {
    next('/home');
  } else {
    next();
  }
});

export default router;
