<template>
  <div>
    <div class="container page-component pt-5">
      <h1>Talla</h1>
      <div class="component d-flex flex-wrap justify-content-center">
        <GroupPageCardComponent
          v-for="event in data"
          id="-1"
          :key="event.id"
          :title="event.name"
          nuxtLink="/details/event"
          :param="event.location"
          :img="event.img"
          :subtitle="event.start"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GroupPageCardComponent from '~/components/GroupPageCardComponent.vue'
export default {
  components: {
    GroupPageCardComponent,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/event/summer')
    console.log(data)
    return {
      data,
    }
  },
  data() {
    return {}
  },
}
</script>

<style scoped></style>
