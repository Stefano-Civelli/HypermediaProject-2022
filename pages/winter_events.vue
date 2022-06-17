<template>
  <div>Winter</div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/event/winter')
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

<style></style>
