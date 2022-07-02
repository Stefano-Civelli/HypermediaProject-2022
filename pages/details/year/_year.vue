<template>
  <div class="page">
    <GroupPageHeaderComponent
      :text="`Events of ${year}`"
      textColor="rgb(248, 249, 250)"
      img="https://i.imgur.com/csndEgx.jpg"
    />
    <div class="container page-component">
      <!-- need to add link to summer/winter events page and the one from which is possible to chose by year  -->
      <div class="row">
        <div class="col-12">
          <div class="w-100 py-3">
            <div class="mb-n2 w-100">
              <div class="p-4">
                <div class="row mx-5">
                  <div class="col-md-12 d-flex justify-content-between">
                    <nuxt-link class="my-links" to="/summer_events"
                      >prev</nuxt-link
                    >
                    <nuxt-link class="my-links" to="/events_by_year"
                      >next</nuxt-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-wrap justify-content-center">
        <GroupPageCardComponent
          v-for="event in data"
          id="-1"
          :key="event.id"
          :title="event.name"
          :img="event.img"
          :param="event.poi.address"
          :subtitle="event.starting_date"
          nuxtLink="/details/event"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GroupPageCardComponent from '~/components/GroupPageCardComponent.vue'
import GroupPageHeaderComponent from '~/components/GroupPageHeaderComponent.vue'
export default {
  components: {
    GroupPageHeaderComponent,
    GroupPageCardComponent,
  },
  async asyncData({ route, $axios }) {
    const { year } = route.params
    const { data } = await $axios.get('/api/event/year/' + year)
    return {
      data,
      year,
    }
  },
  data() {
    return {}
  },
  head() {
    return {
      title: `Events of ${this.year}`,
      meta: [
        {
          name: 'description',
          content: `Clickable list of all ${this.year} events in Milan`,
        },
        {
          name: 'keywords',
          content: `Milan events, list, attractions, event, events, events by year`,
        },
      ],
    }
  },
}
</script>

<style scoped>
.my-links {
  font-size: 1.7em;
  color: inherit;
}
.hero-section-parallax {
  background-image: url('~/assets/Gae-background.jpg');
}
.card {
  margin: 1%;
}

.itineraries-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.page-component {
  background-color: white;
  border-radius: 40px;
  margin-top: 300px;
  position: relative;
  box-shadow: 0 0 3rem 0.1rem rgb(0 0 0 / 40%);
  min-height: 65vh;
}

a {
  display: block;
  color: black;
  text-decoration: underline;
  position: relative;
}

a::after {
  content: '';
  background: white;
  mix-blend-mode: exclusion;
  width: calc(100% + 20px);
  height: 0;
  position: absolute;
  bottom: -4px;
  left: -10px;
  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

a:hover::after {
  height: calc(100% + 8px);
}
</style>
