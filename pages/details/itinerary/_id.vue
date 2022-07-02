<template>
  <div class="container">
    <div
      class="top-img-container my-4 text-white rounded shadow-lg d-flex justify-content-center align-items-center"
    >
      <img
        class="my-img rounded"
        :src="require(`~/assets/images/${img}`)"
        :alt="altDesc"
      />
      <div class="display-4 my-title">
        {{ name }}
      </div>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/itineraries">Itineraries</a></li>
        <li class="breadcrumb-item">
          {{ name }}
        </li>
      </ol>
    </nav>

    <div class="row g-5 mt-3">
      <div class="border-end col-md-4 info-container">
        <div class="position-sticky" style="top: 5rem">
          <div class="p-4 mb-3 practical-info-container rounded">
            <h4 class="fst-italic">Practical Info</h4>
            <p class="mb-0">Number of attractions: {{ pois.length }}</p>
            <p>Duration: {{ duration }} hours</p>
          </div>

          <div class="p-4 events-container rounded">
            <h4 class="fst-italic">Events on the way</h4>
            <ol class="list-unstyled mb-0">
              <li v-for="event in events" :key="event.id">
                <nuxt-link :to="`/details/event/${event.name}`">
                  {{ event.name }}
                </nuxt-link>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div class="col-md-8">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
          "{{ name }}" - What to know
        </h3>

        <div>
          <h2 class="mb-1">Description</h2>
          <br />
          <p>
            {{ longDescription }}
          </p>
          <h2 class="mb-3 mt-5">Related attractions</h2>

          <div class="hero-section">
            <div class="card-grid">
              <ItinPoiComponent
                class="poi-component"
                v-for="poi in pois"
                :key="poi.id"
                :id="poi.id"
                :name="poi.name"
                :poi_imgs="poi.poi_imgs"
                :events="poi.events"
                :idx="pois.indexOf(poi) + 1"
              />
            </div>
          </div>
          <h2 class="mb-1">Where is it?</h2>
          <br />
          <div class="px-4 py-2">
            <iframe
              :src="map_src"
              width="100%"
              height="400"
              referrerpolicy="no-referrer-when-downgrade"
              class="border my-map rounded-4"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <nav class="d-flex mt-5 justify-content-end gap-1">
          <button
            class="btn btn-outline-secondary rounded-pill"
            @click="prev"
            v-if="id != 1"
          >
            Previous Itinerary
          </button>
          <button
            class="btn btn-outline-primary rounded-pill"
            @click="next"
            v-if="this.id + 1 <= this.maxItinId"
          >
            Next Itinerary
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 30px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  width: 100%;
}
.practical-info-container {
  background-color: rgb(233, 233, 233);
}

.events-container {
  background-color: rgb(72, 85, 106);
  color: white;
}

@media (min-width: 540px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 1200px) {
  .card-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 767px) {
  .info-container {
    border: none !important;
  }
}

/** */
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

.img {
  background-size: cover;
  background-position: 0% 70%;
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

<script>
import ItinPoiComponent from '~/components/Itin-Poi-Component.vue'
export default {
  components: { ItinPoiComponent },
  name: 'ItineraryPage',
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/itinerary/' + id)
    const data2 = await $axios.get('/api/pois-by-itin-id/' + id)
    const data3 = await $axios.get('/api/maxItinId/')
    const eventList = []
    for (const poi of data2.data) {
      for (const evento of poi.events) {
        eventList.push(evento)
      }
    }
    console.log(data.img)
    console.log(data2.data)
    return {
      id: data.id,
      name: data.name,
      img: data.img,
      altDesc: data.alt_desc,
      description: data.description,
      longDescription: data.long_description,
      duration: data.duration,
      map_src: data.map_src,
      pois: data2.data,
      maxItinId: data3.data,
      events: eventList,
    }
  },
  head() {
    return {
      title: this.name,
      meta: [
        {
          name: 'description',
          content: `Detailed information about ${this.name} itinerary: route description, duration, involved attractions, events on the way, map of the itinerary`,
        },
        {
          name: 'keywords',
          content: `${this.name}, description, map, route map, practical info, pois, attractions, events, POI, route description`,
        },
      ],
    }
  },
  mounted() {},
  methods: {
    next() {
      if (this.id + 1 > this.maxItinId) {
        this.$router.push(`/details/itinerary/${this.maxItinId}`)
      } else {
        this.$router.push(`/details/itinerary/${this.id + 1}`)
      }
    },
    prev() {
      if (this.id === 1) {
        this.$router.push(`/details/itinerary/1`)
      } else {
        this.$router.push(`/details/itinerary/${this.id - 1}`)
      }
    },
  },
}
</script>
