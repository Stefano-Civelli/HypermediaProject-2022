<template>
  <div>
    <group-page-header-component
      text="Points of Interest"
      textColor="rgb(248, 249, 250)"
      bgColor="rgb(250, 105, 0)"
    />
    <div class="container mt-5">
      <div class="component d-flex flex-wrap justify-content-center">
        <poi-component
          v-for="poi in data"
          :key="poi.id"
          :name="poi.name"
          :id="poi.id"
          :imgs="poi.poi_imgs"
          :address="poi.address"
          :info="poi.practical_info"
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
  background-color: rgb(243, 134, 48);
}
</style>
