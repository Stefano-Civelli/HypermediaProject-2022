<template>
  <div class="container">
    <div
      class="top-img-container my-4 text-white rounded shadow-lg d-flex justify-content-center align-items-center"
    >
      <img
        class="my-img rounded"
        :src="imgs[1].img_path"
        :alt="imgs[1].alt_desc"
      />
      <div class="display-4 my-title">
        {{ name }}
      </div>
    </div>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/pois">Points of Interest</a></li>
        <li class="breadcrumb-item">
          {{ name }}
        </li>
      </ol>
    </nav>

    <div class="row g-5 mt-3">
      <div class="col-md-8">
        <h2 class="pb-4 mb-4 border-bottom fw-bold">
          What there is to know about {{ name }}
        </h2>

        <div>
          <h2 class="mb-1">Description</h2>
          <br />
          <p>
            {{ longDescription }}
          </p>
          <br />
          <br />
          <h2 class="mb-1">Where is it?</h2>
          <div class="px-4 py-2">
            <iframe
              :src="mapSrc"
              width="100%"
              height="400"
              referrerpolicy="no-referrer-when-downgrade"
              class="border my-map rounded-4"
            ></iframe>
          </div>
          <br />
          <br />
          <h2 class="mb-4">Related Events</h2>
          <br />
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
              :altDesc="event.alt_desc"
              :description="event.description"
            />
          </div>
          <!-- /.row -->
        </div>

        <nav class="d-flex mt-5 justify-content-end gap-1">
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

      <div class="col-md-4 border-start">
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
      meta: [
        {
          name: 'description',
          content: `Detailed information about ${this.name}: opening hours, tickets, and other practical informations.`,
        },
        {
          name: 'keywords',
          content: `${this.name}, hours, address, practical info, events, POI, point of interest, attraction, location`,
        },
      ],
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
}
.top-img-container {
  height: 300px;
  position: relative;
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
