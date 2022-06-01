<template>
  <div class="page">
    <h1 class="page-title">Itinerary page</h1>
    <div class="itinerary">
      <itinerary-component v-for="itinerary in data" :key="itinerary.id" :name="itinerary.name" :img="itinerary.img"
        :description="itinerary.description" :duration="itinerary.duration" />
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
.page-title
{
  margin-left: 4%;
}
.itinerary
{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>