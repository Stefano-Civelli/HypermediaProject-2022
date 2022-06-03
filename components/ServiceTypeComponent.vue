<template>
  <div>
    <hr class="featurette-divider" />

    <div class="row featurette mt-3">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">
          {{ description }}
          <span class="text-muted">Click the button below</span>
        </h2>
        <div class="pt-5 justify-content-end">
          <nuxt-link :to="`/details/service_type/${type}`">
            <button class="btn btn-dark btn-lg my-button">Details ></button>
          </nuxt-link>
        </div>
      </div>

      <div class="col-md-5">
        <img class="my-img img" width="600" height="100" :src="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    img: {
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.my-button {
}
.my-img {
  object-fit: cover;
  height: 300px;
  width: 500px;
  border-radius: 15px;
}
.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
/* rtl:begin:remove */
.featurette-heading {
  letter-spacing: -0.05rem;
}

.my-border {
  border: 1px solid red;
}
/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 2rem;
  }
}
</style>
