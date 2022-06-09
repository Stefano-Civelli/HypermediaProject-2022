<template>
  <div class="container">
    <div
      class="p-4 p-md-5 my-4 text-white rounded top-img img shadow-lg d-flex justify-content-center align-items-center"
      :style="{ 'background-image': 'url(' + imgs[1].img_path + ')' }"
    >
      <h1 class="display-4 fst-italic">
        {{ name }}
      </h1>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="/pois">Points of Interest</a></li>
        <li class="breadcrumb-item">
          {{ name }}
        </li>
      </ol>
    </nav>

    <div class="row g-5 mt-3">
      <div class="col-md-8">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
          What there is to know about {{ name }}
        </h3>

        <article class="blog-post">
          <h2 class="blog-post-title mb-1">Description</h2>
          <br />
          <p>
            {{ description }}
          </p>
          <h2 class="mb-4">Related Events</h2>

          <!-- Events circles -->
          <div class="row">
            <div class="col-lg-4" v-for="event in events" :key="event.id">
              <img
                :src="event.img"
                class="rounded-circle border my-img"
                width="140"
                height="140"
              />

              <h2 class="fw-normal">{{ event.name }}</h2>
              <p>
                {{ event.description }}
              </p>
              <p>
                <nuxt-link
                  class="btn btn-secondary my-btn"
                  :to="`/details/event/${event.name}`"
                >
                  View details
                </nuxt-link>
              </p>
            </div>
          </div>
          <!-- /.row -->
        </article>

        <nav class="blog-pagination" aria-label="Pagination">
          <button class="btn btn-outline-secondary rounded-pill" @click="prev">
            Previous
          </button>
          <button
            class="btn btn-outline-primary rounded-pill"
            @click="next"
            href="#"
          >
            Next
          </button>
        </nav>
      </div>

      <div class="col-md-4">
        <div class="position-sticky" style="top: 5rem">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">Practical Info</h4>
            <p class="mb-0">{{ practical_info }}</p>
            <p>ticket costs: {{ ticket_price }} €</p>
          </div>

          <div class="p-4">
            <h4 class="fst-italic">Itineraries</h4>
            <ol class="list-unstyled mb-0">
              <li v-for="itinerary in relatedItineraries" :key="itinerary.id">
                <nuxt-link :to="`/details/itinerary/${itinerary.id}`">
                  {{ itinerary.name }}
                </nuxt-link>
              </li>
            </ol>
          </div>

          <div class="p-4">
            <h4 class="fst-italic">Elsewhere</h4>
            <ol class="list-unstyled">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-img {
  object-fit: cover;
  object-position: 20% 50%;
}
.top-img {
  height: 300px;
}
.img {
  background-size: cover;
  background-position: 0% 70%;
}

a {
  color: inherit;
  text-decoration: none;
}

a {
  background: linear-gradient(to right, rgb(33, 37, 41), rgb(33, 37, 41)),
    linear-gradient(to right, rgb(0, 165, 91), rgb(0, 165, 91));
  background-size: 100% 1px, 0 1px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 500ms;
}

a:hover {
  background-size: 0 2px, 100% 2px;
}
</style>

<script>
import CommonMixin from '~/mixins/common'
export default {
  name: 'PoiPage',
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { name } = route.params
    const { data } = await $axios.get('/api/poi/' + name)
    const itineraryData = await $axios.get(
      '/api/poi/related_itineraries/' + name
    )
    console.log(itineraryData.data.itineraries)
    const relatedItineraries = itineraryData.data.itineraries
    console.log(relatedItineraries)
    return {
      name: data.name,
      imgs: data.poi_imgs,
      description: data.description,
      practical_info: data.practical_info,
      ticket_price: data.ticket_price,
      address: data.address,
      events: data.events,
      relatedItineraries,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  mounted() {},
  methods: {
    async next() {
      const { data } = await this.$axios.get('/api/poi/next/' + this.name)
      this.$router.push(`/details/poi/${data.name}`)
    },
    async prev() {
      const { data } = await this.$axios.get('/api/poi/prev/' + this.name)
      this.$router.push(`/details/poi/${data.name}`)
    },
  },
}
</script>
