
<template src="./template.html"></template>
<script>
  /* eslint-disable */
  export default {
    props: ['url', 'title', 'content'],
    mounted () {
      this.$refs.content.innerHTML = this.content
    }
  }
</script>
<style src="./style.css"></style>