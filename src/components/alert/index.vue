<template src="./template.html"></template>
<script>
  export default {
    data: function () {
    },
    computed: {
      isAlertDisplay: function () {
        return this.$store.state.isAlertDisplay
      }
    },
    mounted () {
    },
    methods: {
      openDialog () {
        this.$store.commit('closeAlert')
        this.$store.commit('openDialog')
        this.$store.commit('updateDialogFrom', 'alert')
      }
    }
  }
</script>
<style src="./style.css"></style>