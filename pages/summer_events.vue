<template>
  <div class="page">
    <GroupPageHeaderComponent
      text="Summer Events"
      textColor="rgb(248, 249, 250)"
    />
    <div
      class="container d-flex flex-wrap justify-content-center page-component pt-5"
    >
      <!-- need to add link to summer/winter events page and the one from which is possible to chose by year  -->

      <GroupPageCardComponent
        v-for="event in data"
        :key="event.id"
        :title="event.name"
        :img="event.img"
        :param="event.location"
        id="-1"
        :subtitle="`From: ${event.start}`"
        nuxtLink="/details/event"
        :secondLineSubtitle="`To: ${event.end}`"
      />
      <h1 v-if="data.length == 0">
        At the moment no summer events are planned
      </h1>
      <br />
      <h1 v-if="data.length == 0">Come check later!</h1>
    </div>
  </div>
</template>

<script>
import GroupPageHeaderComponent from '~/components/GroupPageHeaderComponent.vue'
import GroupPageCardComponent from '~/components/GroupPageCardComponent.vue'
export default {
  components: {
    GroupPageHeaderComponent,
    GroupPageCardComponent,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/event/summer')
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
