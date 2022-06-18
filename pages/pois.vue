<template>
  <div>
    <group-page-header-component
      text="Points of Interest"
      textColor="rgb(33, 37, 41)"
    />
    <div class="container page-component pt-5">
      <div class="d-flex flex-wrap justify-content-center">
        <GroupPageCardComponent
          v-for="poi in data"
          :key="poi.id"
          :title="poi.name"
          :img="poi.poi_imgs[0].img_path"
          :param="poi.address"
          id="-1"
          subtitle="Check it out!"
          nuxtLink="/details/poi"
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
    GroupPageHeaderComponent,
    GroupPageCardComponent,
  },
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/poi/list')
    console.log(data[0])
    return {
      data,
    }
  },
  head() {
    return {
      title: 'Points of Interest',
      meta: [
        {
          name: 'description',
          content:
            'Milano is rich in art treasures waiting to be discovered and in unmissable events. Come and enjoy a very rewarding experience in a city full of unexpected surprises. Here is a list of points of interest available in the city.',
        },
        {
          name: 'keywords',
          content: 'POI, point of interest, attraction, location, must-see, ',
        },
      ],
    }
  },
}
</script>

<style scoped>
.hero-section-parallax {
  background-image: url('~/assets/life-background.jpg');
}

.page-component {
  background-color: white;
  border-radius: 40px;
  margin-top: 300px;
  position: relative;
  box-shadow: 0 0 3rem 0.1rem rgb(0 0 0 / 40%);
}
</style>
