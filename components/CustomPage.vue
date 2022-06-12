<template>
  <div class="container my-about mt-5">
    <h1 class="display-4">{{ title }}</h1>
    <img :src="image" alt="" />
    <hr class="my-4" />
    <p class="lead">{{ description }}</p>
  </div>
</template>

<style scoped>
img {
  height: 300px;
  margin: 20px 0;
}
.my-about {
  height: 100vh;
}
p {
  text-align: left;
}
</style>

<script>
export default {
  name: 'CustomPage',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>
