<template>
  <div>  
    <event-component />
    <h1 v-for="event in data" :key="event.name">{{ event }}</h1>
  </div>
</template>

<script>
import EventComponent from '~/components/EventComponent.vue'
export default {
  components: { EventComponent },
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/event/list')
    return {
      data
    }
  },
}
</script>

<style></style>
