import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Product from '@/views/Product'
import ProductHome from '@/views/Product/Home'
import ProductReview from '@/views/Product/Review'
import ProductReviewDetail from '@/views/Product/ReviewDetail'
import ProductList from '@/views/ProductList'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/product', component: ProductList },
    {
      path: '/product/:id(\\d+)',
      component: Product,
      props: route => ({ id: Number(route.params.id) }),
      children: [
        {
          name: 'product-home',
          path: '',
          component: ProductHome,
        },
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview,
        },
        {
          name: 'review-detail',
          path: 'review/:rid',
          component: ProductReviewDetail,
        },
      ]
    },
  ]
})

export default router