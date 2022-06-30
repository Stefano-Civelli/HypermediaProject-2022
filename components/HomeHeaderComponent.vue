<template>
  <div class="head-element">
    <section class="my-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 header-text mt-5">
            <h1 class="mt-5">Welcome to Milan!</h1>
            <p>
              This <kbd>Milan guide</kbd> is all you need to discover all the
              amazing activities and attractions available in the city. To learn
              more check out our <mark>Outstanding itineraries</mark> and events
              and if you find yourself in need of some service don't hesitate to
              check out our services setion.
            </p>
            <a href="/about" class="btn btn-dark">Read More</a>
          </div>
          <div class="col-md-6">
            <img
              class="my-img"
              src="https://cdn-icons-png.flaticon.com/512/444/444707.png"
              width="75%"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
.my-img {
  border-radius: 40px;
  margin-top: 20px;
  margin-left: 120px;
  filter: brightness(1.5) saturate(0) contrast(0.85);
}
.head-element {
  background-color: rgb(
    243,
    134,
    48
  ); /* For browsers that do not support gradients */
  background-image: linear-gradient(172deg, rgb(250, 215, 15) 60%, white 60.1%);
  height: 600px;
  margin-top: -32px;
}
.container {
  padding: 0 2rem;
}

.my-section {
  margin: 2rem 0;
}

.my-section h1 {
  font-size: 4rem;
  color: var(--primary-color);
}

.my-section p {
  margin: 1rem 0;
}
@media (max-width: 991.98px) {
  .my-img {
    display: none;
  }
  .header-text {
    text-align: center;
    width: 100%;
  }
  .header-text h1 {
    margin-top: 0px !important;
  }
}
</style>
