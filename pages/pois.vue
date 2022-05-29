<template>
  <div>
    <poi-component />
    <h1 v-for="poi in data" :key="poi.id">{{ poi.name }}</h1>
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
    const name = data.name
    return {
      data,
    }
  },
}
</script>

<style></style>
