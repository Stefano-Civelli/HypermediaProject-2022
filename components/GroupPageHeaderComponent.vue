<template>
  <div
    class="w-100 d-flex justify-content-center align-items-start hero-section-parallax"
    :style="{ 'background-image': 'url(' + img + ')' }"
  >
    <h1 class="display-4 fw-bold my-page-title" :style="{ color: textColor }">
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
    textColor: {
      type: String,
    },
    img: {
      type: String,
    },
  },
}
</script>

<style scoped>
.my-page-title {
  margin-top: 145px;
  font-size: 5.5rem;
  padding: 10px;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
}

.hero-section-parallax {
  /** decidere a quanto settarlo */
  height: 850px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
}

@media (max-width: 768px) {
  .my-page-title {
    font-size: 4.4rem;
  }
}

@media (max-width: 576px) {
  .my-page-title {
    font-size: 3.5rem;
  }
}
</style>
