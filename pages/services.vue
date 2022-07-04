<template>
  <div>
    <GroupPageHeaderComponent
      text="Services you might need "
      textColor="rgb(248, 249, 250)"
      img="https://i.imgur.com/cmFgTb1.jpg"
    />
    <div class="container page-component px-5 pt-4">
      <HorizontalCardComponent
        v-for="serviceType in serviceTypeList"
        :key="serviceType.id"
        :type="serviceType.type"
        :img="serviceType.img"
        :altDesc="serviceType.alt_desc"
        :description="serviceType.description"
        subtitle="Click the button below!"
        nuxtLink="/details/service_type"
      />
    </div>
  </div>
</template>

<script>
import GroupPageHeaderComponent from '~/components/GroupPageHeaderComponent.vue'
import HorizontalCardComponent from '~/components/HorizontalCardComponent.vue'
export default {
  components: { GroupPageHeaderComponent, HorizontalCardComponent },
  async asyncData({ $axios }) {
    /** fetching list of service types to be displayed in the cards of the group page */
    const { data } = await $axios.get('/api/service_type/list')
    const serviceTypeList = data
    return {
      serviceTypeList,
    }
  },
  head() {
    return {
      title: 'Services',
      meta: [
        {
          name: 'description',
          content: `In this page you can find a list of the main services in Milan`,
        },
        {
          name: 'keywords',
          content: `Services, list, need, tourism, tourists, visitors`,
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
