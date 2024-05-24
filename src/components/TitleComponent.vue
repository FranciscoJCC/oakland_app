<template>
  <div>
    <h2 class="mb-4 main-title" v-text="title"></h2>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.main-title {
  color: burlywood;
}
</style>
