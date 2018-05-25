import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import {
  Order,
  Order2,
  Content,
  HomeIndex,
  HomeIndeV2,
  OrderIndex2,
  OrderIndex2_1,
  ComplaintsIndex,
  ComplaintsCreate,
  CollectDetail,
  Collectionbalance,
  Collectionbalance2,
  Form,
  Form2
} from '@/components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homeindex',
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
          component: HomeIndeV2
        },
        {
          path: 'orderindex2',
          name: 'OrderIndex2',
          component: OrderIndex2
        },
        {
          path: 'orderindex2_1',
          name: 'OrderIndex2_1',
          component: OrderIndex2_1
        },
        {
          path: 'form',
          name: 'Form',
          component: Form
        },
        {
          path: 'form2',
          name: 'Form2',
          component: Form2
        },
        {
          path: 'complaintsIndex',
          name: 'ComplaintsIndex',
          component: ComplaintsIndex
        },
        {
          path: 'complaintsCreate',
          name: 'ComplaintsCreate',
          component: ComplaintsCreate
        },
        {
          path: 'collectDetail',
          name: 'CollectDetail',
          component: CollectDetail
        },
        {
          path: 'collectionbalance',
          name: 'Collectionbalance',
          component: Collectionbalance
        },
        {
          path: 'collectionbalance2',
          name: 'Collectionbalance2',
          component: Collectionbalance2
        },
        {
          path: 'order',
          name: 'Order',
          component: Order
        },
        {
          path: 'order2',
          name: 'Order2',
          component: Order2
        }

      ]
    }
  ]
})
