<template>
  <div>
    <GroupPageHeaderComponent
      text="Events by Year"
      textColor="rgb(33, 37, 41)"
    />
    <div class="container page-component pt-5">
      <div class="d-flex flex-wrap align-items-center justify-content-center">
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
import GroupPageHeaderComponent from '~/components/GroupPageHeaderComponent.vue'
export default {
  components: {
    GroupPageCardComponent,
    GroupPageHeaderComponent,
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

<style scoped>
.hero-section-parallax {
  background-image: url('~/assets/Gae-Aulenti.jpg');
}

.page-component {
  background-color: white;
  border-radius: 40px;
  margin-top: 300px;
  position: relative;
  box-shadow: 0 0 3rem 0.1rem rgb(0 0 0 / 40%);
  min-height: 65vh;
}
</style>
