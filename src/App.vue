<template>
  <div id="app">
    <div>
      <Header></Header>
      <router-view></router-view>
      <!-- 路由原信息 -->
      <Footer v-show="$route.meta.show"></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
    //让请求只发一次
      this.$store.dispatch("categoryList");
  }
} 
</script>

<style>

</style>
