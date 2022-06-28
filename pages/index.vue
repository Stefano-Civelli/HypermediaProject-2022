<template>
  <div>
    <HomeHeaderComponent />
    <!-- end of carousel -->

    <div class="main-container">
      <!-- Three columns of text below the carousel -->
      <div class="eventsSlice">
        <div class="container">
          <h1 class="slideH1 mb-5 text-decoration-underline">
            Check out our Hottest events...
          </h1>
          <div class="row">
            <EventComponent
              v-for="event in eventList"
              :key="event.id"
              :name="event.name"
              :img="event.img"
              :description="event.description"
            />
          </div>
          <!-- /.row -->
        </div>
      </div>
      <!-- Itinerary part -->
      <div class="itinerarySlice">
        <div class="container">
          <h1 class="slideH1 mb-5 text-decoration-underline">
            ...and the Coolest itineraries!
          </h1>

          <ServiceTypeComponent
            v-for="itinerary in itineraryList"
            :key="itinerary.id"
            :description="itinerary.name"
            :img="itinerary.img"
            :type="itinerary.id"
            nuxtLink="/details/itinerary"
          />
        </div>
      </div>
      <!-- /END Itinerary part -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import HomeHeaderComponent from '~/components/HomeHeaderComponent.vue'
import ServiceTypeComponent from '~/components/ServiceTypeComponent.vue'
export default {
  components: { HomeHeaderComponent, ServiceTypeComponent },
  name: 'IndexPage',

  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/event/random/3')
    const eventList = data
    const itineraryData = await $axios.get('/api/itinerary/list')
    const itineraryList = itineraryData.data.slice(0, 3)

    return {
      eventList,
      itineraryList,
    }
  },
}
</script>

<style scoped>
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
    rgb(224, 228, 204) 15.1%
  );
}
.my-img {
  object-fit: cover;
}

body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}

.main-container .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.main-container .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}
</style>
