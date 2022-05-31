<template>
  <div>
    <h1>Itinerary page</h1>
      <itinerary-component v-for="itinerary in data" :key="itinerary.id" :name="itinerary.name" :img="itinerary.img"
        :description="itinerary.description" :duration="itinerary.duration" />
  </div>
</template>

<script>
import ItineraryComponent from '~/components/ItineraryComponent.vue'
export default {
  components: { ItineraryComponent },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/itinerary/list')
    return {
      data
    }
  },
  data() {
    return {}
  },
}
</script>

<style>
</style>