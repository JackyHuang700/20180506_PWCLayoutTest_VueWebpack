export default {
  items: [{
    name: 'Dashboard',
    url: '/homeindex',
    icon: 'icon-speedometer',
    badge: {
      variant: 'primary',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'UI elements'
  },
    // {
    //   name: 'Components',
    //   url: '/homeindex',
    //   icon: 'icon-puzzle',
    //   children: [{
    //     name: 'Buttons',
    //     url: '/homeindex',
    //     icon: 'icon-puzzle'
    //   },
    //   {
    //     name: 'Social Buttons',
    //     url: '/components/social-buttons',
    //     icon: 'icon-puzzle'
    //   },
    //   {
    //     name: 'Cards',
    //     url: '/components/cards',
    //     icon: 'icon-puzzle'
    //   },
    //   {
    //     name: 'Forms',
    //     url: '/components/forms',
    //     icon: 'icon-puzzle'
    //   },
    //   {
    //     name: 'Modals',
    //     url: '/components/modals',
    //     icon: 'icon-puzzle'
    //   },
    //   {
    //     name: 'Switches',
    //     url: '/components/switches',
    //     icon: 'icon-puzzle'
    //   },
    //   {
    //     name: 'Tables',
    //     url: '/components/tables',
    //     icon: 'icon-puzzle'
    //   }
    //   ]
    // },
  {
    name: 'CopyTemplate',
    url: '/CopyForm',
    children: [
      {
        name: 'copyform',
        url: '/CopyForm',
        icon: 'icon-star'
      },
      {
        name: 'copytemplate',
        url: '/CopyTemplate',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'orderIndex2',
    url: '/OrderIndex2',
    icon: 'icon-puzzle',
    children: [{
      name: 'orderIndex2(訂單瀏覽、有子項目)',
      url: '/OrderIndex2',
      icon: 'icon-puzzle'
    }, {
      name: 'orderIndex2(一般Table、無子項目)',
      url: '/OrderIndex2_1',
      icon: 'icon-puzzle'
    }]
  },
  {
    name: 'Form',
    url: '/form',
    children: [{
      name: '表單',
      url: '/form',
      icon: 'icon-star'
    },
    {
      name: '表單2',
      url: '/form2',
      icon: 'icon-star'
    }
    ]
  },
  {
    name: 'Order',
    url: '/order',
    children: [{
      name: '新建/編輯/瀏覽訂單(三欄)',
      url: '/Order',
      icon: 'icon-star'
    }, {
      name: '新建/編輯/瀏覽訂單',
      url: '/Order2',
      icon: 'icon-star'
    }, {
      name: '訂製單',
      url: '/Order3',
      icon: 'icon-star'
    }
    ]
  },
  {
    name: '收款單管理',
    url: '/ReceiptIndex',
    children: [{
      name: '收款單管理',
      url: '/ReceiptIndex',
      icon: 'icon-star'
    },
    {
      name: '收款單沖帳',
      url: '/',
      icon: 'icon-star'
    }
    ]
  },
  {
    name: '收款瀏覽',
    url: '/CollectDetail',
    children: [{
      name: '收款瀏覽',
      url: '/CollectDetail',
      icon: 'icon-star'
    }
    ]
  },
  {
    name: '客訴管理',
    url: '/complaintsIndex',
    children: [{
      name: '客訴管理首頁',
      url: '/ComplaintsIndex',
      icon: 'icon-star'
    },
    {
      name: '新增客訴單',
      url: '/ComplaintsCreate',
      icon: 'icon-star'
    }
    ]
  },
  {
    name: '收款管理',
    url: '/collectionbalance',
    children: [{
      name: '收款單沖帳',
      url: '/Collectionbalance',
      icon: 'icon-star'
    },
    {
      name: '檢視收款單',
      url: '/Collectionbalance2',
      icon: 'icon-star'
    }
    ]
  },
  {
    name: '供應商管理',
    url: '/Supplier',
    children: [{
      name: '建立供應商',
      url: '/Supplier',
      icon: 'icon-star'
    },
    {
      name: '供應商清單',
      url: '/Supplier2',
      icon: 'icon-star'
    }
    ]
  },
  {
    name: '採購管理',
    url: '/Purchase',
    children: [
      {
        name: '採購清單',
        url: '/Purchase',
        icon: 'icon-star'
      },
      {
        name: '建立採購單',
        url: '/Purchase2',
        icon: 'icon-star'
      },
      {
        name: '採購原物料建立',
        url: '/Materials',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: '訂單流程管理',
    url: '/OrderProcessManagement',
    children: [
      {
        name: 'Detail',
        url: '/OrderProcessManagement',
        icon: 'icon-star'
      },
      {
        name: '訂單asfasfdasdf',
        url: '/OrderProcessManagement2',
        icon: 'icon-star'
      },
      {
        name: 'Index',
        url: '/OrderProcessManagement3',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: '上傳測試',
    url: '/FileUpload',
    children: [
      {
        name: '圖片上傳測試',
        url: '/FileUpload',
        icon: 'icon-star'
      }

    ]
  },
  {
    name: '生產',
    url: '/Product',
    children: [
      {
        name: '生產首頁',
        url: '/Product',
        icon: 'icon-star'
      },
      {
        name: '生產建立',
        url: '/Product2',
        icon: 'icon-star'
      }

    ]
  },
  {
    name: '工序',
    url: '/Process',
    children: [
      {
        name: '工序首頁',
        url: '/Process',
        icon: 'icon-star'
      },
      {
        name: '工序建立',
        url: '/Process2',
        icon: 'icon-star'
      },
      {
        name: '工序狀態管理',
        url: '/Process3',
        icon: 'icon-star'
      },
      {
        name: '生產工序清單',
        url: '/Process4',
        icon: 'icon-star'
      }

    ]
  }
    // {
    //   name: 'Icons',
    //   url: '/icons',
    //   icon: 'icon-star',
    //   children: [{
    //     name: 'Font Awesome',
    //     url: '/icons/font-awesome',
    //     icon: 'icon-star'
    //   },
    //   {
    //     name: 'Simple Line Icons',
    //     url: '/icons/simple-line-icons',
    //     icon: 'icon-star'
    //   }
    //   ]
    // },
    // {
    //   name: 'Widgets',
    //   url: '/widgets',
    //   icon: 'icon-calculator',
    //   badge: {
    //     variant: 'danger',
    //     text: 'NEW'
    //   }
    // },
    // {
    //   name: 'Charts',
    //   url: '/charts',
    //   icon: 'icon-pie-chart'
    // },
    // {
    //   divider: true
    // },
    // {
    //   title: true,
    //   name: 'Extras'
    // },
    // {
    //   name: 'Pages',
    //   url: '/pages',
    //   icon: 'icon-star',
    //   children: [{
    //     name: 'Login',
    //     url: '/pages/login',
    //     icon: 'icon-star'
    //   },
    //   {
    //     name: 'Register',
    //     url: '/pages/register',
    //     icon: 'icon-star'
    //   },
    //   {
    //     name: 'Error 404',
    //     url: '/pages/404',
    //     icon: 'icon-star'
    //   },
    //   {
    //     name: 'Error 500',
    //     url: '/pages/500',
    //     icon: 'icon-star'
    //   }
    //   ]
    // }
  ]
}
