<template>
  <div>
    <OldGPHeader
      :text="name"
      textColor="rgb(33, 37, 41)"
      bgColor="rgb(105, 210, 231)"
    />
    <div class="container">
      <service-component
        v-for="service in serviceList"
        :key="service.id"
        :name="service.name"
        :timetable="service.timetable"
        :phone_number="service.phone_number"
        :address="service.address"
        :map_src="service.map_src"
      />
    </div>
  </div>
</template>

<script>
import OldGPHeader from '~/components/OldGPHeader.vue'
import ServiceComponent from '~/components/ServiceComponent.vue'
export default {
  components: { ServiceComponent, OldGPHeader },
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
