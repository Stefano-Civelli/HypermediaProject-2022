<template>
  <div class="card" style="width: 18rem">
    <div
      class="card-img-top card-image"
      :style="{ 'background-image': 'url(' + imgs[0].img_path + ')' }"
    ></div>
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <nuxt-link :to="`/details/poi/${name}`">
        <btn class="btn btn-primary btn-orange">See Details</btn>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    imgs: {
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  mounted() {
      console.log(this.imgs)
  }
}
</script>

<style></style>
