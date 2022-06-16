<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="my-img"
          src="https://images.unsplash.com/photo-1613154908225-9116593e98b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80"
          alt=""
          height="100%"
          width="100%"
        />

        <div class="container">
          <div class="carousel-caption text-start">
            <div class="my-text-bg w-1">
              <h1>Example headline.</h1>
              <p>
                Some representative placeholder content for the first slide of
                the carousel.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#">Sign up today</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          class="my-img"
          src="https://images.unsplash.com/photo-1545256633-9d719bec17c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt=""
          height="100%"
          width="100%"
        />

        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>
              Some representative placeholder content for the second slide of
              the carousel.
            </p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          class="my-img"
          src="https://raw.githubusercontent.com/Stefano-Civelli/HypermediaProject-2022/master/assets/gallery-background.jpg?token=GHSAT0AAAAAABTU3KXAAOV6AAAE5DJZUM46YVLMJMQ"
          alt=""
          height="100%"
          width="100%"
        />

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>
              Some representative placeholder content for the third slide of
              this carousel.
            </p>
            <p>
              <a class="btn btn-lg btn-primary" href="#">Browse gallery</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.my-text-bg {
  background-color: #5a5a5a;
}
.my-img {
  object-fit: cover;
}
/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}

/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 42rem;
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
}
</style>
