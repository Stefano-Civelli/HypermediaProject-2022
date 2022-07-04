<template>
  <div>
    <GroupPageHeaderComponent
      text="Itineraries"
      textColor="rgb(248, 249, 250)"
      img="https://i.imgur.com/4xKFSXV.jpg"
    />
    <div class="container page-component pt-5">
      <div class="component d-flex flex-wrap justify-content-center">
        <GroupPageCardComponent
          v-for="itinerary in data"
          :key="itinerary.id"
          :title="itinerary.name"
          :img="itinerary.img"
          :subtitle="'Duration: ' + itinerary.duration + ' hours'"
          :param="itinerary.description"
          :id="itinerary.id.toString()"
          :altDesc="itinerary.alt_desc"
          nuxtLink="/details/itinerary"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GroupPageCardComponent from '~/components/GroupPageCardComponent.vue'
import GroupPageHeaderComponent from '~/components/GroupPageHeaderComponent.vue'
export default {
  components: { GroupPageCardComponent, GroupPageHeaderComponent },
  async asyncData({ $axios }) {
    /** fetching list of itineraries to be displayed in the cards of the group page */
    const { data } = await $axios.get('/api/itinerary/list')
    return {
      data,
    }
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Itineraries',
      meta: [
        {
          name: 'description',
          content: `In this page you can find a list of all the we suggest for Milan's visitors`,
        },
        {
          name: 'keywords',
          content: `Itineraries, list, attractions, Milan, tourists, tourism`,
        },
      ],
    }
  },
}
</script>

<style scoped>
.page-component {
  background-color: white;
  border-radius: 40px;
  margin-top: 300px;
  position: relative;
  box-shadow: 0 0 3rem 0.1rem rgb(0 0 0 / 40%);
}
</style>
