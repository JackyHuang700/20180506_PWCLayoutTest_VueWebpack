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
    }]
  },
  {
    name: 'Order',
    url: '/order',
    children: [{
      name: '新建/編輯/瀏覽訂單(三欄)',
      url: '/Order',
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
