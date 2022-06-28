<template>
  <div class="col-lg-4">
    <img
      :src="img"
      :alt="altDesc"
      class="rounded-circle border my-img"
      width="140"
      height="140"
    />

    <h2 class="fw-normal">{{ name }}</h2>
    <p>
      {{ description }}
    </p>
    <p>
      <nuxt-link :to="`/details/event/${name}`">
        <button class="btn btn-secondary my-btn">View details</button>
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    altDesc: {
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

<style scoped>
.my-img {
  object-fit: cover;
  object-position: 20% 50%;
}
</style>
