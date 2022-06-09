<template>
  <div>
    <group-page-header-component text="Itineraries" />
    <div class="container mt-5">
      <div class="component d-flex flex-wrap justify-content-center">
        <Itinerary-component v-for="itinerary in data" 
        :key="itinerary.id" 
        :id="itinerary.id" 
        :name="itinerary.name"
        :img="itinerary.img" 
        :description="itinerary.description" 
        :duration="itinerary.duration"/>
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
.page-title {
  background-color: rgb(6, 109, 226);
}
</style>
