<template>
  <div class="container">
    <!-- Header image element -->
    <div
      class="top-img-container my-4 text-white rounded shadow-lg d-flex justify-content-center align-items-center"
    >
      <img
        class="my-img rounded"
        :src="require(`~/assets/images/${imgs[1].img_path}`)"
        :alt="imgs[1].alt_desc"
      />
      <div class="display-4 my-title">
        {{ name }}
      </div>
    </div>

    <!-- Breadcrumb element -->
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/pois">Points of Interest</a></li>
        <li class="breadcrumb-item">
          {{ name }}
        </li>
      </ol>
    </nav>

    <!-- Major element that contains Practical Info element and Data element -->
    <div class="row g-5 mt-3">
      <!-- Practical Info element -->
      <div class="col-md-4 border-end info-container">
        <div class="position-sticky" style="top: 5rem">
          <div class="p-4 mb-3 practical-info-container rounded">
            <h4 class="fst-italic">Practical Info</h4>
            <p class="mb-0">{{ practical_info }}</p>
            <p>ticket costs: {{ ticket_price }} €</p>
          </div>

          <div class="p-4 itinerary-container rounded">
            <h4 class="fst-italic">Appears in the following Itineraries</h4>
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

      <!-- Data element -->
      <div class="col-md-8">
        <h2 class="pb-4 mb-4 border-bottom fw-bold">
          What there is to know about {{ name }}
        </h2>

        <div>
          <h2 class="mb-1">Description</h2>
          <br />
          <p class="mb-4">
            {{ longDescription }}
          </p>
          <br />

          <h2 class="mb-2">Where is it?</h2>
          <div class="px-4 py-2">
            <iframe
              :src="mapSrc"
              width="100%"
              height="400"
              referrerpolicy="no-referrer-when-downgrade"
              class="border my-map rounded-4"
            ></iframe>
          </div>

          <h2 class="mb-2 mt-5">Events held here</h2>
          <div class="hero-section">
            <p class="text-muted my-3" v-if="events.length == 0">
              At the moment there are no events related to this point of
              interest
            </p>
            <div class="card-grid">
              <EventComponent
                v-for="event in events"
                :key="event.id"
                :name="event.name"
                :img="event.img"
                :altDesc="event.alt_desc"
                :description="event.description"
              />
            </div>
          </div>

          <h2 class="mb-2 mt-3">Near by</h2>
          <p>
            You found yourself near <strong>{{ name }}</strong
            >? Check out these other incredible places near by that you might be
            interested in.
          </p>
          <p></p>
          <div class="hero-section">
            <div class="card-grid">
              <ItinPoiComponent
                v-for="poi in nearByPoisArray"
                :key="poi.id"
                :id="poi.id"
                :name="poi.name"
                :poi_imgs="poi.poi_imgs"
                :events="poi.events"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom row that contains next and prev buttons -->
    <div class="row">
      <div class="col-md-12">
        <nav class="d-flex mt-3 justify-content-end gap-1">
          <button
            class="btn btn-outline-secondary rounded-pill"
            @click="prev"
            v-if="id != 1"
          >
            Previous Attraction
          </button>
          <button
            class="btn btn-outline-primary rounded-pill"
            @click="next"
            href="#"
          >
            Next Attraction
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import EventComponent from '~/components/EventComponent.vue'
import ItinPoiComponent from '~/components/Itin-Poi-Component.vue'
export default {
  name: 'PoiPage',
  components: {
    EventComponent,
    ItinPoiComponent,
  },
  async asyncData({ route, $axios }) {
    // param taken from dynamic page rendering
    const { name } = route.params
    // call to /poi/:name API that retrieves all the information of the specific point of interest
    const { data } = await $axios.get('/api/poi/' + name)
    // call to /poi/random/:name API that retrieves information of the points of interest related to the one that is being displayed
    const nearByPoisArray = await $axios.get('/api/poi/random/' + name)
    const itineraryData = await $axios.get(
      '/api/poi/related_itineraries/' + name
    )
    console.log(nearByPoisArray.data)
    const relatedItineraries = itineraryData.data.itineraries
    return {
      id: data.id,
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
      nearByPoisArray: nearByPoisArray.data,
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
    // on click method that retrieves information related to the next point of interest
    async next() {
      const { data } = await this.$axios.get('/api/poi/next/' + this.name)
      this.$router.push(`/details/poi/${data.name}`)
    },
    // on click method that retrieves information related to the previous point of interest
    async prev() {
      const { data } = await this.$axios.get('/api/poi/prev/' + this.name)
      this.$router.push(`/details/poi/${data.name}`)
    },
  },
}
</script>

<style scoped>
h2 {
  font-size: 2.4rem;
}
.hero-section {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 30px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  width: 100%;
}

.practical-info-container {
  background-color: rgb(233, 233, 233);
}

.itinerary-container {
  background-color: rgb(72, 85, 106);
  color: white;
}

@media (max-width: 992px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 767px) {
  .card-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .info-container {
    border: none !important;
  }
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
  filter: brightness(0.85) saturate(1.2) contrast(0.85);
}
.top-img-container {
  height: 300px;
  position: relative;
}

.breadcrumb a,
li a {
  color: inherit;
  text-decoration: none;
  background: linear-gradient(to right, white, white),
    linear-gradient(to right, rgb(72, 85, 106), rgb(72, 85, 106));
  background-size: 100% 1px, 0 1px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 500ms;
}

.breadcrumb a:hover,
li a:hover {
  background-size: 0 1px, 100% 1px;
}
</style>
