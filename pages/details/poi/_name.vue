<template>
  <div>
    <div class="top-img">
      <div
        class="row img shadow-lg d-flex justify-content-center align-content-center"
        :style="{ 'background-image': 'url(' + imgs[1].img_path + ')' }"
      >
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3 d-flex justify-content-center">
          <h1 class="display-1 text-light fw-bold">{{ name }}</h1>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-3 col-12 border d-flex left-column">
          <div class="row pt-3">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="true"
            >
              <div class="carousel-inner carousello">
                <div class="carousel-item active">
                  <img
                    :src="imgs[2].img_path"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    :src="imgs[0].img_path"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <h3 class="mt-3">Practical Info</h3>
          <p>{{ practical_info }}</p>
          <p>ticket costs: {{ ticket_price }} €</p>
        </div>
        <div class="col-9 border">
          <div class="row">
            <h2>Description</h2>
            <p>
              {{ description }}
            </p>
          </div>
          <div class="row">
            <h2>How to Reach</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              accusamus aliquam, magnam distinctio recusandae inventore nesciunt
              quisquam ad maiores eveniet doloremque, labore modi minima
              repellat dolor eos ducimus sit harum!
            </p>
          </div>
          <div class="row">
            <h2>Map</h2>
            <p>render here google map</p>
          </div>
          <div class="row">
            <h2>Related Points Of Interest</h2>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-img {
  height: 600px;
}
.img {
  height: 100%;

  width: 100%;
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
