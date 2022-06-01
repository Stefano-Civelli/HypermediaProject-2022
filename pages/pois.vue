<template>
  <div class="sm">
    <div class="d-flex flex-wrap">
      <poi-component
        v-for="poi in data"
        :key="poi.id"
        :name="poi.name"
        :id="poi.id"
        :img="poi.img"
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
    // const name = data.name

    return {
      data,
    }
  },
}
</script>

<style></style>
