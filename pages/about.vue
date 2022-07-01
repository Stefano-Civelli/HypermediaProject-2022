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
        <div class="item header border">
          <h3 class="card__heading">heading</h3>
        </div>
        <div class="item sidebar border">sidebar</div>
        <div class="item content-1 border">
          <h3 class="card__heading">name</h3>
          <p class="card__description">description</p>
        </div>
        <div class="item content-2 border">Content-2</div>
        <div class="item content-3 border">Content-3</div>
        <div class="item footer border">footer</div>
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
    return {
      title,
      description,
      image,
    }
  },
}
</script>

<style scoped>
.card__description {
  color: rgb(255, 255, 255);
  font-size: 1rem;
  margin-bottom: 8px;
  text-transform: uppercase;

  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
}

.card__heading {
  color: rgb(255, 255, 255);
  font-size: 1.9rem;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
}

.grid-container {
  display: grid;
  width: 100%;
  height: 850px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 1fr 1fr 200px;
  grid-gap: 1rem;
  grid-template-areas:
    'header header header'
    'sidebar content-1 content-1'
    'sidebar content-2 content-3'
    'footer footer footer';
}
/** assign elements to grid areas --------- */
.header {
  grid-area: header;
  justify-content: center;
  align-items: center;
}

.sidebar {
  grid-area: sidebar;
}

.content-1 {
  grid-area: content-1;
}

.content-2 {
  grid-area: content-2;
}

.content-3 {
  grid-area: content-3;
}
/** assign elements to grid areas --------- */

.footer {
  grid-area: footer;
  grid-row: 4 / 5;
  grid-column: 1 / 4;
}

/* OTHER STYLES */

.item {
  color: #ffffff;
  border-radius: 15px;
  background-color: rgb(94, 94, 94);
  display: flex;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}

.header {
}

.sidebar {
}

.content-1,
.content-2,
.content-3 {
}

.footer {
}

/** fare delle media query per far andare tutto su 1 colonna */
@media (max-width: 780px) {
  .grid-container {
    grid-template-areas:
      'header header heder'
      'sidebar'
      'content-1'
      'content-2'
      'content-3'
      'footer';
  }
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
  font-weight: 300;
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
  background-color: #fadee0;
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
