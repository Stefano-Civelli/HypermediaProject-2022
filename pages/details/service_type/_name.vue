<template>
  <div>
    <group-page-header-component :text="name" />
    <div class="container">
      <service-component
        v-for="service in serviceList"
        :key="service.id"
        :name="service.name"
        :timetable="service.timetable"
        :phone_number="service.phone_number"
        :address="service.address"
      />
    </div>
  </div>
</template>

<script>
import ServiceComponent from '~/components/ServiceComponent.vue'
export default {
  components: { ServiceComponent },
  async asyncData({ route, $axios }) {
    const { name } = route.params
    const { data } = await $axios.get('/api/service_type/' + name)
    console.log(data)
    const serviceList = data
    return {
      name,
      serviceList,
    }
  },
}
</script>

<style scoped>
.my-border {
  border: 1px solid red;
}
</style>
