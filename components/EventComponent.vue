<template>
  <nuxt-link class="card" :to="`/details/event/${name}`">
    <img class="card__background" :src="img" :alt="altDesc" />

    <div class="card__content">
      <p class="card__description">{{ description }}</p>
    </div>
    <h3 class="card__heading">{{ name }}</h3>
  </nuxt-link>
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
.card {
  position: relative;
  height: 400px;
  border: none;
}

.card:before {
  display: block;
  width: 100%;
}

.card__background {
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  bottom: 0;
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  transition: filter 200ms linear, transform 200ms linear;
}

.card:hover .card__background {
  filter: brightness(0.95) saturate(1.2) contrast(0.85);
}

.card__content {
  left: 10px;
  position: absolute;
  top: 0;
}

.card__description {
  color: rgb(255, 255, 255);
  font-size: 1rem;
  margin-bottom: 8px;
  text-transform: uppercase;
  padding: 20px;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
}

.card__heading {
  color: rgb(255, 255, 255);
  position: absolute;
  right: 0;
  padding: 10px;
  bottom: 0;
  font-size: 1.9rem;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
  line-height: 1.4;
}
</style>
