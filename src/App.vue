<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link to="/">首页</router-link> 
    <router-link to="/test">test页面</router-link>
    <router-link to="/helloworld">helloworld页面</router-link>
    <router-view></router-view>
    <!---->
    <p>这里写的东西会始终出现在页面（单页面应用spa）</p>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>

</style>
