<template>
  <div class="csa-chatbot">
    <div class="menu-layout">
      <Login></Login>
      <Alert></Alert>
      <Menu></Menu>
      <Dialog></Dialog>
    </div>
  </div>
</template>

<script>
  import Menu from './components/menu'
  import Dialog from './components/dialog'
  import Alert from './components/alert'
  import Login from './components/login'

  export default {
    data () {
      return {
      }
    },
    components: {
      Menu,
      Dialog,
      Alert,
      Login
    }
  }
</script>

<style scoped>
  .csa-chatbot,
  .menu-layout {
    height: 100%;
  }
</style>