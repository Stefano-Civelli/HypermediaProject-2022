<template>
  <div>
    <group-page-header-component
      text="Services you might need "
      textColor="rgb(248, 249, 250)"
    />
    <div class="container page-component px-5 pt-4">
      <service-type-component
        v-for="serviceType in serviceTypeList"
        :key="serviceType.id"
        :type="serviceType.type"
        :img="serviceType.img"
        :description="serviceType.description"
        nuxtLink="/details/service_type"
      />
    </div>
  </div>
</template>

<script>
import ServiceTypeComponent from '~/components/ServiceTypeComponent.vue'
export default {
  components: { ServiceTypeComponent },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/service_type/list')
    const serviceTypeList = data
    return {
      serviceTypeList,
    }
  },
}
</script>

<style scoped>
.page-title {
  background-color: rgb(105, 210, 231);
}
.page-component {
  background-color: white;
  border-radius: 40px;
  margin-top: 300px;
  position: relative;
  box-shadow: 0 0 3rem 0.1rem rgb(0 0 0 / 40%);
}
.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}
.hero-section-parallax {
  background-image: url('~/assets/Tram-background.jpg');
}
</style>
