<template>
  <div class="container my-5">
    <div
      class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 pe-lg-5 align-items-center rounded-3 border shadow-lg"
    >
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">{{ name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
export default {
  name: 'PoiPage',
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { name } = route.params
    const { data } = await $axios.get('/api/poi/' + name)
    console.log(data)
    return {
      //fare
      name: data.name,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  mounted() {},
  methods: {},
}
</script>
