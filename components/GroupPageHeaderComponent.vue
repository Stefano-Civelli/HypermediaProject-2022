<template>
  <div
    class="w-100 d-flex justify-content-center align-items-start hero-section-parallax"
    :style="{ 'background-color': bgColor }"
  >
    <h1
      class="display-4 fw-bold my-border my-page-title"
      :style="{ color: textColor }"
    >
      {{ text }}
    </h1>
  </div>
</template>

<style scoped>
.my-page-title {
  margin-top: 145px;
  font-size: 5.5rem;
  border-radius: 20px;
  padding: 10px;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
}
.hero-section-parallax {
  background-image: url('~/assets/gallery-background.jpg');

  /* Set a specific height */
  /** decidere a quanto settarlo */
  min-height: 90vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
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
