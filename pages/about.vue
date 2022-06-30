<template>
  <div class="container mt-5">
    <h1 class="display-3 my-page-title">About the city</h1>
    <div class="border"></div>
    <div class="row">
      <div class="col-12">
        <p>eddsfsdfdsfds</p>
        <p>eddsfsdfdsfds</p>
        <p>eddsfsdfdsfds</p>
        <p>eddsfsdfdsfds</p>
        <p>eddsfsdfdsfds</p>
        <p>eddsfsdfdsfds</p>
        <p>eddsfsdfdsfds</p>
        <p>eddsfsdfdsfds</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  components: {},
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/about')
    const title = data.title
    const image = data.image
    const description = data.description
    return {
      title,
      description,
      image,
    }
  },
}
</script>

<style scoped>
.my-page-title {
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
  text-align: center;
}
</style>
