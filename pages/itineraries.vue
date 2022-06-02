<template>
  <div class="page">
    <h2 class="page-title">Suggested itineraries</h2>
    <div class="itineraries-list">
      <itinerary-component v-for="itinerary in data" :key="itinerary.id" :id="itinerary.id" :name="itinerary.name"
        :img="itinerary.img" :description="itinerary.description" :duration="itinerary.duration" />
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
      data
    }
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.page-title {
  background-color: rgb(0, 140, 255);
  text-align: center;
  width: 100vw;
  font-size: 20pt;
  color: rgb(255, 255, 255);
  border: 3px solid rgb(0, 140, 255);
  padding: 5px;
}

.itineraries-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>