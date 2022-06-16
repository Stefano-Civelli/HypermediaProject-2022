<template>
  <div></div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/event/list/years')
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
