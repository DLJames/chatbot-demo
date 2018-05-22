<template src="./template.html"></template>
<script>
  export default {
    computed: {
      isMenuDisplay: function () {
        return this.$store.state.isMenuDisplay
      }
    },
    mounted () {
    },
    methods: {
      openConversation () {
        console.log(1)
        this.$store.commit('closeMenu')
        this.$store.commit('openDialog')
        this.$store.commit('closeAlert')
      }
    }
  }
</script>
<style src="./style.css"></style>