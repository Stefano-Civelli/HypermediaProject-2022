<template>
  <div>
    <HomeHeaderComponent />

    <div class="main-container">
      <!-- Events section  -->
      <div class="eventsSlice">
        <div class="container">
          <h1 class="slideH1 mb-5 text-decoration-underline">
            Check out our Hottest events...
          </h1>
          <div class="hero-section">
            <div class="card-grid">
              <EventComponent
                v-for="event in eventList"
                :key="event.id"
                :name="event.name"
                :img="event.img"
                :altDesc="event.alt_desc"
                :description="event.description"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- /END Events section -->

      <!-- Itinerary section  -->
      <div class="itinerarySlice">
        <div class="container">
          <h1 class="slideH1 mb-5 text-decoration-underline">
            ...and the Coolest itineraries!
          </h1>
          <HorizontalCardComponent
            v-for="itinerary in itineraryList"
            :key="itinerary.id"
            :description="itinerary.name"
            :img="itinerary.img"
            :altDesc="itinerary.alt_desc"
            :type="itinerary.id"
            :subtitle="itinerary.description"
            nuxtLink="/details/itinerary"
          />
        </div>
      </div>
      <!-- /END Itinerary section -->
    </div>
  </div>
</template>

<script>
import EventComponent from '~/components/EventComponent.vue'
import HomeHeaderComponent from '~/components/HomeHeaderComponent.vue'
import HorizontalCardComponent from '~/components/HorizontalCardComponent.vue'
export default {
  components: { HomeHeaderComponent, EventComponent, HorizontalCardComponent },
  name: 'IndexPage',

  async asyncData({ $axios }) {
    /** fetch 3 random events to display in event cards */
    const { data } = await $axios.get('/api/event/random/-1')
    const eventList = data
    /** fetch itineraries and than slice to get only the first 3 */
    const itineraryData = await $axios.get('/api/itinerary/list')
    const itineraryList = itineraryData.data.slice(0, 3)

    return {
      eventList,
      itineraryList,
    }
  },
  head() {
    return {
      title: 'Milan Guide',
      meta: [
        {
          name: 'description',
          content: `This is the home page of the website. Here you can find some tourism informations on Milan and you can move to the other sections of the website`,
        },
        {
          name: 'keywords',
          content: `Milan, events, point of interest, itineraries, services, list, attractions, guide, milan guide`,
        },
      ],
    }
  },
}
</script>

<style scoped>
/**event cards styling ---------------------------------- */
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
  max-width: 1000px;
}

@media (max-width: 992px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
/**event cards styling ---------------------------------- */

/** backgroudn colors styling ----------*/
.slideH1 {
  font-size: 60px;
}
.eventsSlice {
  padding-top: 10px;
  margin-top: -65px;
}
.itinerarySlice {
  margin-bottom: -100px;
  padding-top: 130px;
  background-color: rgb(
    243,
    134,
    48
  ); /* For browsers that do not support gradients */
  background-image: linear-gradient(
    188deg,
    white 15%,
    rgb(251, 231, 198) 15.1%
  );
}
/** backgroudn colors styling ----------*/

/** main container styling ------------- */
.main-container .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.main-container .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}
/** main container styling ------------- */
</style>
