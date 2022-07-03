<template>
  <div class="container w-100">
    <div class="row mt-5">
      <div class="col-md-7">
        <h2 class="my-heading lh-1">
          {{ description }}.
          <span class="text-muted fst-italic">{{ subtitle }}</span>
        </h2>
        <div class="pt-5 justify-content-end">
          <NuxtLink :to="`${nuxtLink}/${type}`">
            <button class="btn btn-dark btn-lg my-button mb-3">
              Details >
            </button>
          </NuxtLink>
        </div>
      </div>

      <div class="col-md-5 d-flex justify-content-end">
        <img
          class="my-img img-fluid"
          :src="require(`~/assets/images/${img}`)"
          :alt="altDesc"
        />
      </div>
    </div>
    <hr class="my-divider" />
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
      type: String,
      required: true,
    },
    altDesc: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    nuxtLink: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.my-img {
  object-fit: cover;
  height: 300px;
  width: 500px;
  border-radius: 15px;
}

.my-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

.my-heading {
  letter-spacing: -0.07rem;
  font-size: 45px;
}

/* RESPONSIVE CSS -------------------------------------------------- */
@media (min-width: 62em) {
  .my-heading {
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .my-button {
    margin-top: -40px;
  }
  .my-heading {
    font-size: 40px;
    margin-top: -40px;
  }
}
</style>
