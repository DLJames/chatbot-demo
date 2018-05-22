
<template src="./template.html"></template>
<script>
  /* eslint-disable */
  export default {
    props: ['url', 'title', 'content'],
    mounted () {
      this.$refs.content.innerHTML = this.content
    },
    methods: {
      test() {
        alert(1)
      }
    }
  }
</script>
<style src="./style.css"></style>