import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        // {
        //   path: 'dashboard',
        //   name: 'Dashboard',
        //   component: HelloWorld
        // }

      ]
    }
  ]
})
