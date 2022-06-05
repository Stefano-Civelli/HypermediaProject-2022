<template>
  <div class="page">
    <h2 class="page-title">Events</h2>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <!-- need to add link to summer/winter events page and the one from which is possible to chose by year  -->

        <event-component
          class="card"
          v-for="event in data"
          :key="event.id"
          :name="event.name"
          :img="event.img"
          :start="event.start"
          :end="event.end"
        />
      </div>
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

.page-title {
  background-color: rgb(23, 212, 77);
  text-align: center;
  width: 100vw;
  font-size: 20pt;
  color: rgb(255, 255, 255);
  border: 3px solid rgb(23, 212, 77);
  padding: 5px;
}

.itineraries-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
