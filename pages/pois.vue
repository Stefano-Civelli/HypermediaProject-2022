<template>
  <div>
    <group-page-header-component text="Points of Interest" />
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

<script>
import GroupPageHeaderComponent from '~/components/GroupPageHeaderComponent.vue'
import PoiComponent from '~/components/PoiComponent.vue'
export default {
  components: { PoiComponent, GroupPageHeaderComponent },
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

<style scoped>
.page-title {
  background-color: rgb(0, 165, 91);
}
</style>
