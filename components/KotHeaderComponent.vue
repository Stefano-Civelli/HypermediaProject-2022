<template>
  <div
    class="top-img-container my-4 text-white rounded shadow-lg d-flex justify-content-center align-items-center"
  >
    <img
      class="my-img rounded"
      :src="require(`~/assets/images/${background}`)"
      :alt="altDesc"
    />
    <div class="display-4 my-title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
    },
    altDesc: {
      type: String,
    },
    title: {
      type: String,
    },
  },
}
</script>

<style scoped>
.my-title {
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Lobster', Georgia, Times, serif;
  font-size: 56px;
}

.my-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: center 60%;
  filter: brightness(0.85) saturate(1.2) contrast(0.85);
}

.top-img-container {
  height: 300px;
  position: relative;
}
</style>
