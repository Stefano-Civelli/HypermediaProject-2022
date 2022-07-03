<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="hero">
          <!-- title and short text -->
          <div class="text">
            <p class="text__short">Start Exploring Today!</p>
            <h1 class="text__title">About the city</h1>
            <p class="text__description">
              {{ description }}
            </p>
          </div>

          <!-- random image grid -->
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

    <!-- grid in second half of the page -->
    <div class="row">
      <div class="col-12 grid-container">
        <BoxGridComponent
          title1="History"
          :subtitle1="historySubtitle"
          :description1="history"
          title2="Art"
          :subtitle2="artSubtitle"
          :description2="art"
          title3="Nature"
          :subtitle3="natureSubtitle"
          :description3="nature"
          title4="Business"
          :subtitle4="businessSubtitle"
          :description4="business"
          title5="Music"
          :subtitle5="musicSubtitle"
          :description5="music"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BoxGridComponent from '~/components/BoxGridComponent.vue'
export default {
  name: 'AboutPage',
  components: { BoxGridComponent },
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
  head() {
    return {
      title: 'About',
      meta: [
        {
          name: 'description',
          content: `In this page you can find some information on us`,
        },
        {
          name: 'keywords',
          content: `About page, milan guide, about us, about`,
        },
      ],
    }
  },
}
</script>

<style scoped>
/** page header and image grid styling ----------------- */
.hero {
  display: flex;
  max-width: 1440px;
  gap: 2em;
  justify-content: space-between;
  margin: 2em 2em;
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

/** media queries-------------------------------------- */
@media (max-width: 900px) {
  .grid__container {
    min-width: 50%;
    height: 400px;
    margin-top: 50px;
  }
}

@media (max-width: 780px) {
  .hero {
    flex-direction: column;
    margin: 2em 2em;
  }

  .text {
    margin-top: -80px;
    width: 100%;
    margin-bottom: -120px;
  }
}
</style>
