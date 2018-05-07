<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="css">
/* font-awesome */
/* Import Font Awesome Icons Set */
$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/css/font-awesome.min.css';
/* Import Simple Line Icons Set */
$simple-line-font-path: '~simple-line-icons/fonts/';
@import '~simple-line-icons/css/simple-line-icons.css';

/* google font */
@import url('https://fonts.googleapis.com/earlyaccess/notosanstc.css');
/* @import './assets/font-google/notosanstc.css'; */
body{
  font-family: 'Noto Sans TC', sans-serif;
}
</style>
