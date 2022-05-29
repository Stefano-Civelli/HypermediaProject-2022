<template>
  <div class="page container mt-5">
    <h1 class="display-4">Events page</h1>
    <div class="row mt-3">
    <!-- need to add link to summer/winter events page and the one from which is possible to chose by year  -->

        <event-component 
            v-for="event in data" 
            :key="event.id" 
            :name="event.name" 
            :img="event.img"/> 
    </div>
  </div>
</template>

<script>
import EventComponent from '~/components/EventComponent.vue'
export default {
  components: { EventComponent },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/event/list')
    return {
      data
    }
  },
  data() {
    return {}
  },
}
</script>

<style>

</style>