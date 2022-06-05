<template>
  <div class="cards">
    <nuxt-link :to="`/details/event/${name}`" class="card shadow-sm">
      <img :src="img" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>

          <div class="card__header-text">
            <h3 class="card__title">{{ name }}</h3>
            <span class="card__status">{{ start }} - {{ end }} </span>
          </div>
        </div>
        <p class="card__description">Held in: {{ location }} <br /></p>
      </div>
    </nuxt-link>
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
    start: {
      require: true,
    },
    end: {
      require: true,
    },
    location: {
      require: true,
    },
  },
}
</script>

<style scoped>
.cards {
  margin: 1rem 0.8vw;
  padding: 0;
  list-style-type: none;
  width: 24rem;
}

.card {
  border-radius: calc(40 * 1px);
  overflow: hidden;
  text-decoration: none;
  border: none;
}

.card__image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border: 1px solid white;
  border-radius: 40px;
}

.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: calc(40 * 1px);
  background-color: #fff;
  transform: translateY(100%);
  transition: 0.2s ease-in-out;
}

.card:hover .card__overlay {
  transform: translateY(0);
}

.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: calc(40 * 1px) 0 0 0;
  background-color: #fff;
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
}

.card__arc {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 1;
}

.card__arc path {
  fill: #fff;
  d: path('M 40 80 c 22 0 40 -22 40 -40 v 40 Z');
}

.card:hover .card__header {
  transform: translateY(0);
}

.card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.card__title {
  font-size: 1em;
  margin: 0 0 0.3em;
  color: #6a515e;
}

.card__tagline {
  display: block;
  margin: 1em 0;
  font-family: 'MockFlowFont';
  font-size: 0.8em;
  color: #d7bdca;
}

.card__status {
  font-size: 0.8em;
  color: #d7bdca;
}

.card__description {
  padding: 0 2em 2em;
  margin: 0;
  color: rgb(165, 141, 152);
  font-size: 0.92em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
