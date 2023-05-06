<template>
  <div id="app">
    <login></login>
    <notifications group="foo"/>
  </div>
</template>

<script>
import Login from './components/LoginForm.vue'

export default {
  name: 'App',
  components: {
    Login
  },
  mounted() 
  {
    this.$notify({
  group: 'top-right',
  title: 'Thông báo',
  text: 'Đây là một thông báo sử dụng Vue Notify!'
})

  }
}
</script>

<style>

</style>
