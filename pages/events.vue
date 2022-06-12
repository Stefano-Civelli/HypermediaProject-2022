<template>
  <div class="page">
    <group-page-header-component
      text="Events"
      textColor="rgb(248, 249, 250)"
      bgColor="rgb(167, 219, 216)"
    />
    <div
      class="container d-flex flex-wrap justify-content-center page-component pt-5"
    >
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
.hero-section-parallax {
  background-image: url('~/assets/Gae-background.jpg');
}
.card {
  margin: 1%;
}

.itineraries-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.page-component {
  background-color: white;
  border-radius: 40px;
  margin-top: 300px;
  position: relative;
  box-shadow: 0 0 3rem 0.1rem rgb(0 0 0 / 40%);
}
</style>
