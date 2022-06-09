<template>
  <main class="container">
    <div
      class="p-4 p-md-5 my-4 text-white rounded top-img img shadow-lg d-flex justify-content-center align-items-center"
      :style="{
        'background-image': 'url(' + img + ')',
      }"
    >
      <h1 class="display-4 fst-italic">
        {{ name }}
      </h1>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="/pois">Points of Interest</a></li>
        <li class="breadcrumb-item">
          {{ name }}
        </li>
      </ol>
    </nav>

    <div class="row g-5 mt-3">
      <div class="col-md-8">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
          What there is to know about {{ name }}
        </h3>

        <article class="blog-post">
          <h2 class="blog-post-title mb-1">Description</h2>
          <br />
          <p>
            {{ description }}
          </p>
          <br />
          <h2 class="mb-4">Events you could also be interested in</h2>

          <!-- Three columns of text below the carousel -->
          <div class="row">
            <div class="col-lg-4">
              <svg
                class="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
              </svg>

              <h2 class="fw-normal">Heading</h2>
              <p>
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <p>
                <a class="btn btn-secondary" href="#">View details &raquo;</a>
              </p>
            </div>
            <!-- /.col-lg-4 -->
            <div class="col-lg-4">
              <svg
                class="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
              </svg>

              <h2 class="fw-normal">Heading</h2>
              <p>
                Another exciting bit of representative placeholder content. This
                time, we've moved on to the second column.
              </p>
              <p>
                <a class="btn btn-secondary" href="#">View details &raquo;</a>
              </p>
            </div>
            <!-- /.col-lg-4 -->
            <div class="col-lg-4">
              <svg
                class="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
              </svg>

              <h2 class="fw-normal">Heading</h2>
              <p>
                And lastly this, the third column of representative placeholder
                content.
              </p>
              <p>
                <a class="btn btn-secondary" href="#">View details &raquo;</a>
              </p>
            </div>
            <!-- /.col-lg-4 -->
          </div>
          <!-- /.row -->
        </article>

        <nav class="blog-pagination" aria-label="Pagination">
          <button class="btn btn-outline-secondary rounded-pill" @click="prev">
            Previous
          </button>
          <button
            class="btn btn-outline-primary rounded-pill"
            @click="next"
            href="#"
          >
            Next
          </button>
        </nav>
      </div>

      <div class="col-md-4">
        <div class="position-sticky" style="top: 5rem">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">Practical Info</h4>
            <p>ticket costs: {{ ticket_price }} €</p>
          </div>

          <div class="p-4">
            <h4 class="fst-italic">About the place</h4>

            <div class="col-lg-4">
              <svg
                class="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  :style="{
                    'background-image': 'url(' + imgs[0].img_path + ')',
                  }"
                />
                <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
              </svg>

              <h2 class="fw-normal">{{ poi.name }}</h2>
              <p>
                And lastly this, the third column of representative placeholder
                content.
              </p>
              <p>
                <a class="btn btn-secondary" href="#">View details &raquo;</a>
              </p>
            </div>
          </div>

          <div class="p-4">
            <h4 class="fst-italic">Elsewhere</h4>
            <ol class="list-unstyled">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.talla {
  border: 1px solid red;
}

.top-description-spacing {
  height: 300px;
}

.top-image-descroption {
  height: 600px;
  width: 100%;
  background-size: cover;
}

.text-color {
  color: azure;
}

a {
  color: inherit;
  text-decoration: none;
}

a {
  background: linear-gradient(to right, rgb(33, 37, 41), rgb(33, 37, 41)),
    linear-gradient(to right, rgb(255, 165, 0), rgb(255, 165, 0));
  background-size: 100% 1px, 0 1px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 500ms;
}

a:hover {
  background-size: 0 2px, 100% 2px;
}
</style>

<script>
import CommonMixin from '~/mixins/common'
export default {
  name: 'EventPage',
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { name } = route.params
    console.log(name)
    const { data } = await $axios.get('/api/event/' + name)
    console.log(data)
    console.log(data.poi.name)
    const response = await $axios.get('/api/poi/' + data.poi.name)
    const relatedPoi = response.data
    console.log(relatedPoi)
    return {
      name: data.name,
      img: data.img,
      description: data.description,
      starting_date: data.starting_date,
      ending_date: data.ending_date,
      ticket_price: data.ticket_price,
      poi: data.poi,
      imgs: relatedPoi.poi_imgs,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  mounted() {},
  methods: {
    async next() {
      const { data } = await this.$axios.get('/api/event/next/' + this.name)
      this.$router.push(`/details/event/${data.name}`)
    },
    async prev() {
      const { data } = await this.$axios.get('/api/event/prev/' + this.name)
      this.$router.push(`/details/event/${data.name}`)
    },
  },
}
</script>
