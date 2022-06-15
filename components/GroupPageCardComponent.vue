<template>
  <div class="cards">
    <nuxt-link
      :to="`${nuxtLink}/${id == -1 ? title : id}`"
      class="card shadow-lg"
    >
      <img :src="img" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>

          <div class="card__header-text">
            <h3 class="card__title">{{ title }}</h3>
            <span class="card__status">{{ subtitle }}</span>
          </div>
        </div>
        <p class="card__description">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            fill="currentColor"
            class="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
            />
            <path
              d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>
          {{ param }} <br />
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

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
  color: #b49ba8;
}

.card__status {
  font-size: 0.8em;
  color: #b49ba8;
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

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {},
    img: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    param: {
      required: true,
    },
    nuxtLink: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log(this.imgs)
  },
}
</script>
