<template>
  <div>
    <home-carousel />
    <!-- end of carousel -->

    <div class="marketing">
      <!-- Three columns of text below the carousel -->
      <div class="eventsSlice">
        <div class="container">
          <h1 class="slideH1 mb-5 text-decoration-underline">
            Check out our Hottest events...
          </h1>
          <div class="row eventsCountainer">
            <EventComponent
              v-for="event in eventList"
              :key="event.id"
              :name="event.name"
              :img="event.img"
              :description="event.description"
            />
          </div>
          <!-- /.row -->
        </div>
      </div>
      <!-- START THE FEATURETTES -->
      <div class="itinerarySlice">
        <div class="container">
          <h1 class="slideH1 mb-5 text-decoration-underline">
            ...and the Coolest itineraries!
          </h1>
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">
                Find out about the best places to visit in Milan.
                <span class="text-muted">It’ll blow your mind.</span>
              </h2>
            </div>
            <div class="col-md-5">
              <svg
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee" />
                <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
              </svg>
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1">
                Oh yeah, it’s that good.
                <span class="text-muted">See for yourself.</span>
              </h2>
              <p class="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <svg
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee" />
                <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
              </svg>
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">
                And lastly, this one. <span class="text-muted">Checkmate.</span>
              </h2>
              <p class="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div class="col-md-5">
              <svg
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee" />
                <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
              </svg>
            </div>
          </div>

          <hr class="featurette-divider" />
        </div>
      </div>
      <!-- /END THE FEATURETTES -->
    </div>
    <!-- /.container -->
  </div>
</template>

<style scoped>
.slideH1 {
  font-size: 60px;
}
.eventsSlice {
  padding-top: 60px;
  margin-top: -65px;
}
.itinerarySlice {
  padding-top: 60px;
  background-color: rgb(228, 217, 204);
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

/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}
/* rtl:end:ignore */

/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
/* rtl:begin:remove */
.featurette-heading {
  letter-spacing: -0.05rem;
}

/* rtl:end:remove */

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
    font-size: 45px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>

<script>
import HomeCarousel from '~/components/HomeCarousel.vue'
export default {
  components: { HomeCarousel },
  name: 'IndexPage',

  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/event/list')
    const eventList = data
    return {
      eventList,
    }
  },
}
</script>
