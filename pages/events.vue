<template>
  <div class="page">
    <group-page-header-component
      text="Events"
      textColor="rgb(33, 37, 41)"
      bgColor="rgb(167, 219, 216)"
    />
    <div class="container mt-5 d-flex flex-wrap justify-content-center">
      <!-- need to add link to summer/winter events page and the one from which is possible to chose by year  -->

      <event-component
        class="card"
        v-for="event in data"
        :key="event.id"
        :name="event.name"
        :img="event.img"
        :start="event.start"
        :end="event.end"
        :location="event.location"
      />
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
      data,
    }
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.card {
  margin: 1%;
}

.itineraries-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
