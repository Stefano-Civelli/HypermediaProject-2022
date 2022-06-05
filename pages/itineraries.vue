<template>
  <div class="page">
    <div class="title-container">
      <h1 class="page-title">Suggested itineraries</h1>
    </div>
    <div class="itineraries-list">
      <itinerary-component
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
.title-container {
  display: flex;
  flex-wrap: row wrap;
  justify-content: center;
  align-items: center;
  height: 120px;
  border: 3px solid rgb(23, 139, 212);
  background-color: rgb(23, 139, 212);
}

.page-title {
  text-align: center;
  width: 100vw;
  font-size: clamp(1.475rem, calc(1.475rem + 2.7vw), 55px);
  font-weight: 700;
  color: rgb(255, 255, 255);
  background-color: rgb(23, 139, 212);
  padding: 5px;
  line-height: 1.2;
}

.itineraries-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: auto;
}
</style>
