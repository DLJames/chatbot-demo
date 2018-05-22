<template src="./template.html"></template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    isLoginDisplay: function () {
      return this.$store.state.isLoginDisplay
    }
  },
  methods: {
    login () {
      this.$store.commit('hideLogin')
      this.$store.commit('openAlert')
      this.$store.commit('openMenu')
    }
  }
}
</script>
<style src="./style.css"></style>