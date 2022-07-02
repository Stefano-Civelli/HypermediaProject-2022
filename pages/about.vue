<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="hero">
          <div class="text">
            <p class="text__short">Start Exploring Today!</p>
            <h1 class="text__title">About the city</h1>
            <p class="text__description">
              {{ description }}
            </p>
            <a class="text__button" href="#">Learn more</a>
          </div>

          <div class="grid__container">
            <div class="grid__item one"></div>
            <div class="grid__item two"></div>
            <div class="grid__item three"></div>
            <div class="grid__item four"></div>
            <div class="grid__item five"></div>
            <div class="grid__item six"></div>
            <div class="grid__item seven"></div>
            <div class="grid__item eight"></div>
            <div class="grid__item nine"></div>
            <div class="grid__item ten"></div>
            <div class="grid__item eleven"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 grid-container">
        <div class="testimonial-grid">
          <article
            class="testimonial grid-col-span-2 flow bg-primary-400 text-secondary-400"
          >
            <div class="d-flex">
              <div>
                <h2 class="title">History</h2>
              </div>
            </div>
            <p>
              {{ historySubtitle }}
            </p>
            <p>
              {{ history }}
            </p>
          </article>
          <article class="testimonial flow bg-secondary-400 text-neutral-100">
            <div class="d-flex">
              <div>
                <h2 class="title">Art</h2>
              </div>
            </div>
            <p>{{ artSubtitle }}</p>
            <p>
              {{ art }}
            </p>
          </article>
          <article class="testimonial flow bg-neutral-100 text-secondary-400">
            <div class="d-flex">
              <div>
                <h2 class="title">Nature</h2>
              </div>
            </div>
            <p>{{ natureSubtitle }}</p>
            <p>
              {{ nature }}
            </p>
          </article>
          <article
            class="testimonial grid-col-span-2 flow bg-secondary-500 text-neutral-100"
          >
            <div class="d-flex">
              <div>
                <h2 class="title">Business</h2>
              </div>
            </div>
            <p>
              {{ businessSubtitle }}
            </p>
            <p>
              {{ business }}
            </p>
          </article>
          <article class="testimonial flow bg-neutral-100 text-secondary-400">
            <div class="d-flex">
              <div>
                <h2 class="title">Music</h2>
              </div>
            </div>
            <p>{{ musicSubtitle }}</p>
            <p>
              {{ music }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  components: {},
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/about')
    const title = data.title
    const image = data.image
    const description = data.description
    const history = data.history
    const historySubtitle = data.history_subtitle
    const art = data.art
    const artSubtitle = data.art_subtitle
    const nature = data.nature
    const natureSubtitle = data.nature_subtitle
    const music = data.music
    const musicSubtitle = data.music_subtitle
    const business = data.business
    const businessSubtitle = data.business_subtitle
    return {
      title,
      description,
      image,
      history,
      historySubtitle,
      art,
      artSubtitle,
      nature,
      natureSubtitle,
      music,
      musicSubtitle,
      business,
      businessSubtitle,
    }
  },
}
</script>

<style scoped>
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

.flow > *:where(:not(:first-child)) {
  margin-top: var(--flow-spacer, 1em);
}

.bg-primary-400 {
  background: rgb(255, 230, 90);
}
.bg-secondary-400 {
  background: rgb(72, 85, 106);
}
.bg-secondary-500 {
  background: rgb(25, 33, 46);
}

.bg-neutral-100 {
  background: rgb(255, 255, 255);
}

.text-neutral-100 {
  color: rgb(255, 255, 255);
}
.text-secondary-400 {
  color: rgb(72, 85, 106);
}
.border-primary-400 {
  border: 2px solid #a775f1;
}

/* components */
.testimonial-grid {
  display: grid;
  gap: 1.5rem;
  grid-auto-columns: 1fr;
  grid-template-areas:
    'one'
    'two'
    'three'
    'four'
    'five';

  padding-block: 2rem;
  width: min(95%, 70rem);
  margin-inline: auto;
}

.testimonial {
  font-size: 0.88rem;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(217 19% 35% / 0.25);
}

.testimonial:nth-child(1) {
  grid-area: one;
}
.testimonial:nth-child(2) {
  grid-area: two;
}
.testimonial:nth-child(3) {
  grid-area: three;
}
.testimonial:nth-child(4) {
  grid-area: four;
}
.testimonial:nth-child(5) {
  grid-area: five;
}

@media screen and (min-width: 33em) {
  .testimonial-grid {
    grid-template-areas:
      'one one'
      'two three'
      'five five'
      'four four';
  }
}

@media screen and (min-width: 38em) {
  .testimonial-grid {
    grid-template-areas:
      'one one'
      'two five'
      'three five'
      'four four';
  }
}

@media screen and (min-width: 54em) {
  .testimonial-grid {
    grid-template-areas:
      'one one two'
      'five five five'
      'three four four';
  }
}

@media screen and (min-width: 75em) {
  .testimonial-grid {
    grid-template-areas:
      'one one two five'
      'three four four five';
  }
}

.testimonial {
  background-repeat: no-repeat;
  background-position: top right 10%;
}

.testimonial img {
  width: 1.75rem;
  border-radius: 50%;
}

.title {
  font-size: 1.8rem;
  line-height: 1;
}

.testimonial .position {
  font-size: 0.6875rem;
  opacity: 0.5;
}

.testimonial > p:first-of-type {
  font-size: 1rem;
  line-height: 1.2;
}

.testimonial > p:last-of-type {
  opacity: 0.7;
}
/** ------------- UPPER PART OF PAGE from here down------------- */
.hero {
  display: flex;
  max-width: 1440px;
  gap: 2em;
  justify-content: space-between;
  margin: 5em 2em;
}

.text {
  width: 40%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif;
}

.text__short {
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #479a7e;
  margin-bottom: 0;
}

.text__title {
  line-height: 1.1;
  margin: 0;
  font-size: 4em;
  margin-bottom: 10px;
}

.text__description {
  line-height: 145%;
  font-size: 1em;
  padding-bottom: 1em;
}

.text__button {
  max-width: 120px;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: #479a7e;
  padding: 10px;
  border-radius: 0.5em;
}

.grid__container {
  min-width: 60%;
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: repeat(7, 1fr);
}

.grid__item {
  background-color: grey;
  border-radius: 0.5em;
}

.one {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background-image: url(https://source.unsplash.com/random/400x400/?Milan);
  background-position: center;
  background-size: cover;
}

.two {
  grid-column: 2 / 5;
  grid-row: 1 / 4;
  background-image: url(https://source.unsplash.com/random/900x900/?Milan);
  background-position: center;
  background-size: cover;
}

.three {
  grid-column: 5 / 6;
  grid-row: 1 / 2;
  background-image: url(https://source.unsplash.com/random/500x400/?Milan);
  background-position: center;
  background-size: cover;
}

.four {
  grid-column: 6 / 7;
  grid-row: 1 / 2;
  background-color: #fdf5dd;
  border-radius: 0 0 100px 0;
  -moz-border-radius: 0 0 100px 0;
  -webkit-border-radius: 0 0 100px 0;
}

.five {
  grid-column: 5 / 7;
  grid-row: 2 / 4;
  background-image: url(https://source.unsplash.com/random/400x500/?Milan);
  background-position: center;
  background-size: cover;
}

.six {
  grid-column: 7 / 8;
  grid-row: 2 / 3;
  background-color: #d3f0ee;
  border-radius: 0 100px 0 0;
  -moz-border-radius: 0 100px 0 0;
  -webkit-border-radius: 0 100px 0 0;
}

.seven {
  grid-column: 7 / 8;
  grid-row: 3 / 4;
  background-image: url(https://source.unsplash.com/random/500x500/?Milan);
  background-position: center;
  background-size: cover;
}

.eight {
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  background-color: rgb(194, 204, 221);
  border-radius: 100px 0 0 0;
  -moz-border-radius: 100px 0 0 0;
  -webkit-border-radius: 100px 0 0 0;
}

.nine {
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  background-image: url(https://source.unsplash.com/random/300x300/?Milan);
  background-position: center;
  background-size: cover;
}

.ten {
  grid-column: 3 / 5;
  grid-row: 4 / 6;
  background-image: url(https://source.unsplash.com/random/700x700/?Milan);
  background-position: center;
  background-size: cover;
}

.eleven {
  grid-column: 5 / 6;
  grid-row: 4 / 5;
  background-image: url(https://source.unsplash.com/random/300x500/?Milan);
  background-position: center;
  background-size: cover;
}

@media (max-width: 900px) {
  .grid__container {
    min-width: 50%;
    height: 400px;
    margin-top: 50px;
  }
}

@media (max-width: 780px) {
  .grid-container {
    margin-top: -70px;
  }
  .hero {
    flex-direction: column-reverse;
    margin: 2em 2em;
  }

  .text {
    margin-top: -50px;
    width: 100%;
  }
}
/**---------------------------------------------- */
.my-page-title {
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
  text-align: center;
}
</style>
