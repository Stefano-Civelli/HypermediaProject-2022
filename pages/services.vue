<template>
  <div>
    <group-page-header-component
      text="Services you might need "
      textColor="rgb(33, 37, 41)"
      bgColor="rgb(105, 210, 231)"
    />
    <div class="container">
      <service-type-component
        v-for="serviceType in serviceTypeList"
        :key="serviceType.id"
        :type="serviceType.type"
        :img="serviceType.img"
        :description="serviceType.description"
      />
      <hr class="featurette-divider" />
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

<style>
.page-title {
  background-color: rgb(105, 210, 231);
}

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}
</style>
