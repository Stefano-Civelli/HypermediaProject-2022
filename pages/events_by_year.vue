<template>
  <div>
    <div class="container page-component pt-5">
      <div class="component d-flex flex-wrap justify-content-center">
        <GroupPageCardComponent
          v-for="year in data"
          :key="year.year"
          :title="year.year"
          nuxtLink="/details/year"
          param="Check out the events of the year"
          id="-1"
          :img="year.img"
          :subtitle="`Up to now there ${year.events > 1 ? 'are' : 'is'} ${
            year.events
          } ${year.events > 1 ? 'events' : 'event'}  available this year`"
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
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/event/list/years')
    return {
      data,
    }
  },
}
</script>

<style scoped></style>
