<template>
  <main class="container">
    <div
      class="p-4 p-md-5 my-4 text-white rounded top-img img shadow-lg d-flex justify-content-center align-items-center"
      :style="{ 'background-image': 'url(' + imgs[1].img_path + ')' }"
    >
      <h1 class="display-4 fst-italic">
        {{ name }}
      </h1>
    </div>

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
          <h2>Blockquotes</h2>
          <p>This is an example blockquote in action:</p>
          <blockquote class="blockquote">
            <p>Quoted text goes here.</p>
          </blockquote>
          <p>
            This is some additional paragraph placeholder content. It has been
            written to fill the available space and show how a longer snippet of
            text affects the surrounding content. We'll repeat it often to keep
            the demonstration flowing, so be on the lookout for this exact same
            string of text.
          </p>
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
          <a class="btn btn-outline-secondary rounded-pill">Previous</a>
          <a class="btn btn-outline-primary rounded-pill" href="#">Next</a>
        </nav>
      </div>

      <div class="col-md-4">
        <div class="position-sticky" style="top: 2rem">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">Practical Info</h4>
            <p class="mb-0">{{ practical_info }}</p>
            <p>ticket costs: {{ ticket_price }} €</p>
          </div>

          <div class="p-4">
            <h4 class="fst-italic">Itineraries</h4>
            <ol class="list-unstyled mb-0">
              <li><a href="#">it 1</a></li>
              <li><a href="#">it 2</a></li>
              <li><a href="#">it 3</a></li>
              <li><a href="#">it 4</a></li>
              <li><a href="#">it 5</a></li>
              <li><a href="#">it 6</a></li>
            </ol>
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
.top-img {
  height: 300px;
}
.img {
  background-size: cover;
  background-position: 0% 70%;
}
.poi-imgs {
  width: 200px;
  height: 200px;
  margin-top: 12px;
  background-size: cover;
}
.carousello img {
  object-fit: cover;
  height: 200px;
  width: 200px;
}
.my-border {
  border: 1px solid red;
}
.left-column {
  flex-direction: column;
}
</style>

<script>
import CommonMixin from '~/mixins/common'
export default {
  name: 'PoiPage',
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { name } = route.params
    const { data } = await $axios.get('/api/poi/' + name)
    console.log(data)
    return {
      name: data.name,
      imgs: data.poi_imgs,
      description: data.description,
      practical_info: data.practical_info,
      ticket_price: data.ticket_price,
      address: data.address,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  mounted() {},
  methods: {},
}
</script>
