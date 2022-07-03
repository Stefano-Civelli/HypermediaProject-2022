<template>
  <div
    class="page-title d-flex justify-content-center align-items-center"
    :style="{ 'background-color': bgColor }"
  >
    <h1 class="display-4 fw-bold my-title" :style="{ color: textColor }">
      {{ text }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
  },
}
</script>

<style scoped>
.page-title {
  width: 100%;
  height: 120px;
  text-align: center;
}
.my-title {
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
}
</style>
