import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import {
  Content,
  HomeIndex
} from '@/components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'content',
          name: 'Content',
          component: Content
        },
        {
          path: 'homeindex',
          name: 'HomeIndex',
          component: HomeIndex
        }

      ]
    }
  ]
})
