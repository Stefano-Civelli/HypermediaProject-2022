<template>
  <div>
    <group-page-header-component
      text="Itineraries"
      textColor="rgb(248, 249, 250)"
      bgColor="rgb(243, 134, 48)"
    />
    <div class="container page-component pt-5">
      <div class="component d-flex flex-wrap justify-content-center">
        <Itinerary-component
          v-for="itinerary in data"
          :key="itinerary.id"
          :id="itinerary.id"
          :name="itinerary.name"
          :img="itinerary.img"
          :description="itinerary.description"
          :duration="itinerary.duration"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ItineraryComponent from '~/components/ItineraryComponent.vue'
export default {
  components: { ItineraryComponent },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/itinerary/list')
    return {
      data,
    }
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.hero-section-parallax {
  background-image: url('~/assets/Bosco-background.jpg');
}
.page-title {
  background-color: rgb(6, 109, 226);
}
.page-component {
  background-color: white;
  border-radius: 40px;
  margin-top: 300px;
  position: relative;
  box-shadow: 0 0 3rem 0.1rem rgb(0 0 0 / 40%);
}
</style>
