<template>
  <div class="page container">
    <h1>Itineraries</h1>
    <itinerary-component 
        v-for="itinerary in itineraryList" 
        :key="itinerary.id" 
        :name="itinerary.name" 
        :img="itinerary.img"/> 
  </div>
</template>

<script>
import ItineraryComponent from '~/components/ItineraryComponent.vue'
export default {
  components: { ItineraryComponent },
  async asyncData({ $axios }) {
    const { itineraryList } = await $axios.get('/api/itinerary/list')
    return {
      itineraryList
    }
  },
  data() {
    return {}
  }
}
</script>

<style>

</style>