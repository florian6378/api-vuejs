import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CategoryList from '../views/CategoryListView.vue';
import CategoryDetails from '../views/CategoryDetailsView.vue';
import CategoryForm from '../views/CategoryFormView.vue';
import ProductList from '../views/ProductListView.vue';
import ProductDetails from '../views/ProductDetailsView.vue';
import ProductForm from '../views/ProductFormView.vue';
import UserList from '../views/UserListView.vue';
import LoginForm from '../views/LoginFormView.vue'; // Suppose que vous avez un composant Vue appelé LoginView.vue pour le formulaire de connexion
import UserCreateForm from '../views/UserCreateFormView.vue'; // Importez le formulaire de création d'utilisateur
import UserUpdateForm from '../views/UserUpdateFormView.vue'; // Importez le formulaire de mise à jour d'utilisateur
import UserDeleteForm from '../views/UserDeleteFormView.vue'; // Importez le formulaire de suppression d'utilisateur

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/categories',
      name: 'CategoryList',
      component: CategoryList
    },
    {
      path: '/categories/:id',
      name: 'CategoryDetails',
      component: CategoryDetails
    },
    {
      path: '/categories/create',
      name: 'CreateCategory',
      component: CategoryForm
    },
    {
      path: '/categories/:id/edit',
      name: 'EditCategory',
      component: CategoryForm
    },
    
    {
      path: '/products',
      name: 'ProductList',
      component: ProductList
    },
    
    {
      path: '/products/:id',
      name: 'ProductDetails',
      component: ProductDetails
    },

    {
      path: '/products/create',
      name: 'CreateProduct',
      component: ProductForm
    },
    {
      path: '/products/:id/edit',
      name: 'EditProduct',
      component: ProductForm
    },

    {
      path: '/users',
      name: 'UserList',
      component: UserList
    },

    {
      path: '/users/login',
      name: 'UserLoginForm',
      component: LoginForm
    },

    {
      path: '/users/create',
      name: 'UserCreateForm',
      component: UserCreateForm
    },
    {
      path: '/users/:id/update',
      name: 'UserUpdateForm',
      component: UserUpdateForm
    },
    {
      path: '/users/:id/delete',
      name: 'UserDeleteForm',
      component: UserDeleteForm
    }
  ]
});

export default router;
