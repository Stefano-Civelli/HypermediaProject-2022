<template>
  <div>
    <div class="page-title d-flex justify-content-center align-items-center">
      <h1 class="display-3 fw-bold my-border">Points of Interest</h1>
    </div>
    <div class="container mt-5">
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
  </div>
</template>

<style scoped>
.page-title {
  background-color: rgb(0, 255, 149);
  width: 100%;
  height: 150px;
}
</style>

<script>
import PoiComponent from '~/components/PoiComponent.vue'
export default {
  components: { PoiComponent },
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/poi/list')
    console.log(data[0])
    // const name = data.name
    return {
      data,
    }
  },
}
</script>
