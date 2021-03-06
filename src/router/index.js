import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import {
  Manage,
  ChangePassword,
  Logistics,
  Logistics2,
  Logistics3,
  Logistics4,
  Logistics5,
  Logistics6,
  Logistics7,
  Logistics8,
  QualityControl,
  QualityControl2,
  QualityControl3,
  Account,
  ProductionPreparation,
  Purchase,
  Purchase2,
  Purchase3,
  Purchase4,
  Materials,
  OrderProcessManagement,
  OrderProcessManagement2,
  OrderProcessManagement3,
  Order,
  Order2,
  Order3,
  Content,
  Product,
  Product2,
  Product3,
  Process,
  Process2,
  Process3,
  Process4,
  CopyForm,
  CopyTemplate,
  // HomeIndex,
  HomeIndeV2,
  OrderIndex2,
  OrderIndex2_1,
  ComplaintsIndex,
  ComplaintsCreate,
  CollectDetail,
  Collectionbalance,
  Collectionbalance2,
  Form,
  Form2,
  Supplier,
  Supplier2,
  FileUpload,
  System
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
          path: 'manage',
          name: 'manage',
          component: Manage
        },
        {
          path: 'changepassword',
          name: 'changepassword',
          component: ChangePassword
        },
        {
          path: 'system',
          name: 'System',
          component: System
        },
        {
          path: 'logistics',
          name: 'Logistics',
          component: Logistics
        },
        {
          path: 'logistics2',
          name: 'Logistics2',
          component: Logistics2
        },
        {
          path: 'logistics3',
          name: 'Logistics3',
          component: Logistics3
        },
        {
          path: 'logistics4',
          name: 'Logistics4',
          component: Logistics4
        },
        {
          path: 'logistics5',
          name: 'Logistics5',
          component: Logistics5
        },
        {
          path: 'logistics6',
          name: 'Logistics6',
          component: Logistics6
        },
        {
          path: 'logistics7',
          name: 'Logistics7',
          component: Logistics7
        },
        {
          path: 'logistics8',
          name: 'Logistics8',
          component: Logistics8
        },
        {
          path: 'qualitycontrol',
          name: 'QualityControl',
          component: QualityControl
        },
        {
          path: 'qualitycontrol2',
          name: 'QualityControl2',
          component: QualityControl2
        },
        {
          path: 'qualitycontrol3',
          name: 'QualityControl3',
          component: QualityControl3
        },
        {
          path: 'account',
          name: 'Account',
          component: Account
        },
        {
          path: 'productionpreparation',
          name: 'ProductionPreparation',
          component: ProductionPreparation
        },
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
        },
        {
          path: 'order3',
          name: 'Order3',
          component: Order3
        },
        {
          path: 'purchase',
          name: 'Purchase',
          component: Purchase
        },
        {
          path: 'purchase2',
          name: 'Purchase2',
          component: Purchase2
        },
        {
          path: 'purchase3',
          name: 'Purchase3',
          component: Purchase3
        },
        {
          path: 'purchase4',
          name: 'Purchase4',
          component: Purchase4
        },
        {
          path: 'materials',
          name: 'Materials',
          component: Materials
        },
        {
          path: 'orderprocessmanagement',
          name: 'OrderProcessManagement',
          component: OrderProcessManagement
        },
        {
          path: 'orderprocessmanagement2',
          name: 'OrderProcessManagement2',
          component: OrderProcessManagement2
        },
        {
          path: 'orderprocessmanagement3',
          name: 'OrderProcessManagement3',
          component: OrderProcessManagement3
        },
        {
          path: 'supplier',
          name: 'Supplier',
          component: Supplier
        },
        {
          path: 'supplier2',
          name: 'Supplier2',
          component: Supplier2
        },
        {
          path: 'fileupload',
          name: 'FileUpload',
          component: FileUpload
        },
        {
          path: 'product',
          name: 'Product',
          component: Product
        },
        {
          path: 'product2',
          name: 'Product2',
          component: Product2
        },
        {
          path: 'product3',
          name: 'Product3',
          component: Product3
        },
        {
          path: 'process',
          name: 'Process',
          component: Process
        },
        {
          path: 'process2',
          name: 'Process2',
          component: Process2
        },
        {
          path: 'process3',
          name: 'Process3',
          component: Process3
        },
        {
          path: 'process4',
          name: 'Process4',
          component: Process4
        },
        {
          path: 'copyform',
          name: 'CopyForm',
          component: CopyForm
        },
        {
          path: 'copytemplate',
          name: 'CopyTemplate',
          component: CopyTemplate
        }

      ]
    }
  ]
})
