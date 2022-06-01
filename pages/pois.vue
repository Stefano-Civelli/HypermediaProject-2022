<template>
  <div class="container mt-5">
    <h1 class="display-4">Points of Interest</h1>
    <div class="row justify-content-center">
      <poi-component
        v-for="poi in data"
        :key="poi.id"
        :name="poi.name"
        :id="poi.id"
        :imgs="poi.poi_imgs"
      />
    </div>
  </div>
</template>

<script>
import PoiComponent from '~/components/PoiComponent.vue'
export default {
  components: { PoiComponent },
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/poi/list')
    console.log( data[0])
    // const name = data.name
    return {
      data,
    }
  },
}
</script>

<style></style>
