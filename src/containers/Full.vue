<template>
  <div class="app">
    <!-- <Navbar :narbarList="narbarList" /> -->
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
// import { Header as AppHeader } from '../components/'
import {
  Header as AppHeader,
  Footer as AppFooter,
  Navbar
} from '../components/'

export default {
  name: 'full',
  components: {
    Navbar,
    AppHeader,
    AppFooter
  },
  data () {
    return {

      narbarList: [

      ]

    }
  }
}
</script>


