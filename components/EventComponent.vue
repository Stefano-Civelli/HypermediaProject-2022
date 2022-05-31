<template>
    <div class="card" style="width: 18rem">
        <div
        class="card-img-top card-image"
        :style="{ 'background-image': 'url(' + img + ')' }"
        ></div>
        <div class="card-body">
        <h5 class="card-title"> {{ name }} </h5>
         <nuxt-link :to="`/details/event/${name}`">
            <div class="btn btn-primary btn-orange">See Details</div>
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
      img: {
          type: String,
          required: true,
      },
    },
}
</script>

<style>
.card {
  border: 2px solid lightgray;
}
.card:hover {
  border: 2px solid orange;
}
.btn-orange {
  background-color: orange;
  border: 2px solid orange;
}
.card-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
}
</style>