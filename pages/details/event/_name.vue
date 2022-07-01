<template>
  <div class="container">
    <div
      class="top-img-container my-4 text-white rounded shadow-lg d-flex justify-content-center align-items-center"
    >
      <img
        class="my-img rounded"
        :src="require(`~/assets/images/${background}`)"
        :alt="altDesc"
      />
      <div class="display-4 my-title">
        {{ name }}
      </div>
    </div>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/events">Events</a></li>
        <li class="breadcrumb-item">
          {{ name }}
        </li>
      </ol>
    </nav>

    <div class="row g-5 mt-3">
      <div class="col-md-8">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
          <div class="list_dates">
            <div class="caption_date">
              From
              <time datetime="2022-06-16T12:00:00Z"
                ><span class="day">{{ startingDay }} <br /></span>
                {{ startingMonth }} {{ startingYear }}</time
              >
            </div>
            <div class="caption_date">
              Until
              <time datetime="2022-06-19T12:00:00Z"
                ><span class="day">{{ endingDay }} <br /></span>
                {{ endingMonth }} {{ endingYear }}</time
              >
            </div>
          </div>
        </h3>

        <div>
          <h2 class="mb-1">Description</h2>
          <br />
          <p>
            {{ longDescription }}
          </p>
          <h2 class="mb-4">Related Events</h2>
          <div class="hero-section">
            <p class="text-muted my-3" v-if="randomEvents.length == 0">
              At the moment there are no events related to this point of
              interest
            </p>
            <div class="card-grid">
              <EventComponent
                v-for="event in randomEvents"
                :key="event.id"
                :name="event.name"
                :img="event.img"
                :altDesc="event.alt_desc"
                :description="event.description"
                :longDescription="event.longDescription"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="border-start col-md-4">
        <div class="position-sticky" style="top: 5rem">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">Practical Info</h4>
            <p>Ticket costs: {{ ticket_price }} €</p>
          </div>

          <div class="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              fill="currentColor"
              class="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
              />
              <path
                d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>

            <nuxt-link :to="`/details/poi/${poi}`" class="my-link">
              {{ poi }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <nav class="d-flex mt-5 justify-content-end gap-1">
          <button
            class="btn btn-outline-secondary rounded-pill"
            @click="prev"
            v-if="id != 1"
          >
            Previous Event
          </button>
          <button
            class="btn btn-outline-primary rounded-pill"
            @click="next"
            href="#"
          >
            Next Event
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventPage',
  async asyncData({ route, $axios }) {
    const { name } = route.params
    const { data } = await $axios.get('/api/event/' + name)
    console.log(data)
    const randomEventsData = await $axios.get('/api/event/random/' + data.id)

    const randomEvents = randomEventsData.data
    return {
      id: data.id,
      name: data.name,
      img: data.img,
      altDesc: data.alt_desc,
      description: data.description,
      startingDay: data.startingDay,
      startingMonth: data.startingMonth,
      startingYear: data.startingYear,
      endingDay: data.endingDay,
      endingMonth: data.endingMonth,
      endingYear: data.endingYear,
      ticket_price: data.ticket_price,
      poi: data.poiName,
      randomEvents,
      longDescription: data.longDescription,
      background: data.header_img,
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

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 30px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  width: 100%;
}

@media (max-width: 992px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

.my-map {
  margin: auto;
}
.rounded-4 {
  border-radius: 15px;
}
.my-border {
  border: 1px solid red;
}
.my-title {
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Lobster', Georgia, Times, serif;
  font-size: 56px;
}
.my-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: center 60%;
  filter: brightness(0.85) saturate(1.2) contrast(0.85);
}
.top-img-container {
  height: 300px;
  position: relative;
}

.breadcrumb a,
.my-link,
li a {
  color: inherit;
  text-decoration: none;
  background: linear-gradient(to right, rgb(33, 37, 41), rgb(33, 37, 41)),
    linear-gradient(
      to right,
      rgba(124, 138, 150, 0.671),
      rgba(124, 138, 150, 0.671)
    );
  background-size: 100% 1px, 0 1px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 500ms;
}

.breadcrumb a:hover,
.my-link:hover,
li a:hover {
  background-size: 0 1px, 100% 1px;
}

.caption_date {
  max-width: 170px;
  display: inline-block;
  font-weight: 600;
  line-height: 25px;
  text-align: left;
  font-size: 24px;
  padding: 0 30px 0 0;
  border-right: 1px solid #000000;
  margin-top: 20px;
  margin-bottom: 20px;
  width: auto;
  position: relative;
}

.day {
  font-size: 35px;
}
</style>
