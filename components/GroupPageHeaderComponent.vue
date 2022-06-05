<template>
  <div class="page-title d-flex justify-content-center align-items-center">
    <h1 class="display-4 fw-bold my-border text-light">
      {{ text }}
    </h1>
  </div>
</template>

<style scoped>
.page-title {
  width: 100%;
  height: 120px;
  text-align: center;
}
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
