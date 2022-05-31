<template>
  <div class="container my-5">
    <div
      class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 pe-lg-5 align-items-center rounded-3 border shadow-lg"
    >
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1> {{ name }} </h1>
        <img :src= "img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
export default {
  name: 'EventPage',
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { name } = route.params
    console.log(name)
    const { data } = await $axios.get('/api/event/' + name)
    return {
      name: data.name,
      img: data.img,
      description: data.description,
      starting_date: data.starting_date,
      ending_date: data.ending_date,
      ticket_price: data.ticket_price
      // location
    }
  },
  head(){
    return {
      title: this.name
    }
  },
  mounted(){
    const date = new Date()
    // Example on hwo to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
  },
}
</script>