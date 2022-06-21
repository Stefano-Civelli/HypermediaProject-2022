<template>
  <div class="container">
    <div
      class="p-4 p-md-5 my-4 text-white rounded top-img img shadow-lg d-flex justify-content-center align-items-center"
      :style="{ 'background-image': 'url(' + imgs[1].img_path + ')' }"
    >
      <h1 class="display-4 my-title">
        {{ name }}
      </h1>
    </div>
    <nav>
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
          <pre>
            {{ longDescription }}
          </pre>
          <h2 class="mb-4">Related Events</h2>

          <!-- Events circles -->
          <div class="row eventsContainer">
            <p class="text-muted my-3" v-if="events.length == 0">
              At the moment there are no events related to this point of
              interest
            </p>
            <EventComponent
              v-for="event in events"
              :key="event.id"
              :name="event.name"
              :img="event.img"
              :description="event.description"
            />
          </div>
          <!-- /.row -->
          <h2 class="blog-post-title mb-1">Where is it?</h2>
          <br />
          <div class="px-4 py-2">
            <iframe
              :src="mapSrc"
              width="100%"
              height="400"
              referrerpolicy="no-referrer-when-downgrade"
              class="border my-map rounded-4"
            ></iframe>
          </div>
        </article>

        <nav class="blog-pagination mt-5">
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

<script>
import EventComponent from '~/components/EventComponent.vue'
export default {
  name: 'PoiPage',
  components: {
    EventComponent,
  },
  async asyncData({ route, $axios }) {
    const { name } = route.params
    const { data } = await $axios.get('/api/poi/' + name)
    const itineraryData = await $axios.get(
      '/api/poi/related_itineraries/' + name
    )
    const relatedItineraries = itineraryData.data.itineraries
    return {
      name: data.name,
      imgs: data.poi_imgs,
      description: data.description,
      practical_info: data.practical_info,
      ticket_price: data.ticket_price,
      address: data.address,
      events: data.events,
      mapSrc: data.map_src,
      relatedItineraries,
      longDescription: data.long_description,
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

<style scoped>
.eventsContainer {
  text-align: center;
}
.my-map {
  margin: auto;
}
.rounded-4 {
  border-radius: 15px;
}
.my-border {
  border: 1px solid red;
}
.my-title {
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
}
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
    linear-gradient(
      to right,
      rgba(124, 138, 150, 0.671),
      rgba(124, 138, 150, 0.671)
    );
  background-size: 100% 1px, 0 1px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 500ms;
}

a:hover {
  background-size: 0 1px, 100% 1px;
}
</style>
