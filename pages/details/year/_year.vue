<template>
  <div class="page">
    <GroupPageHeaderComponent
      :text="`Events of ${year}`"
      textColor="rgb(248, 249, 250)"
      img="https://i.imgur.com/JHmXyvv.jpg"
    />
    <div class="container page-component">
      <!-- Section that contains previous year and next year buttons -->
      <div class="row">
        <div class="col-12">
          <div class="w-100 py-3">
            <div class="mb-n2 w-100">
              <div class="p-4">
                <div class="row year-switch-container">
                  <div class="col-6 d-flex">
                    <NuxtLink
                      v-if="previous != null"
                      class="my-links"
                      :to="`/details/year/${previous}`"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        class="bi bi-caret-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"
                        />
                      </svg>
                      {{ previous }}</NuxtLink
                    >
                  </div>
                  <div class="col-6 d-flex justify-content-end">
                    <NuxtLink
                      v-if="next != null"
                      class="my-links"
                      :to="`/details/year/${next}`"
                      >{{ next }}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        class="bi bi-caret-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
                        />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-wrap justify-content-center">
        <!-- Breadcrumb element -->
        <nav class="bread-container position-absolute">
          <ol class="breadcrumb p-2 border rounded-4 shadow">
            <li class="breadcrumb-item">
              <NuxtLink to="/events">All events</NuxtLink>
            </li>
            <li class="breadcrumb-item">
              <NuxtLink to="/events_by_year">Events by year</NuxtLink>
            </li>
            <li class="breadcrumb-item">Events of {{ year }}</li>
          </ol>
        </nav>

        <GroupPageCardComponent
          v-for="event in data"
          id="-1"
          :key="event.id"
          :title="event.name"
          :img="event.img"
          :param="event.poi.address"
          :subtitle="event.starting_date"
          :altDesc="event.alt_desc"
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
    // param taken from dynamic page rendering
    const { year } = route.params
    /** fetching list of events to be displayed in the cards of the group page */
    const { data } = await $axios.get('/api/event/year/' + year)
    /** fetching next year related to the one that is being displayed */
    const nextData = await $axios.get('/api/event/year/next/' + year)
    /** fetching previous year related to the one that is being displayed */
    const previousData = await $axios.get('/api/event/year/previous/' + year)
    const next = nextData.data == null ? null : nextData.data.next
    const previous =
      previousData.data == null ? null : previousData.data.previous
    return {
      data,
      year,
      next,
      previous,
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

.year-switch-container a {
  display: block;
  color: black;
  text-decoration: underline;
  position: relative;
}

.year-switch-container a::after {
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

.year-switch-container a:hover::after {
  height: calc(100% + 8px);
}

/** breadcrumb styling ---------------*/
.bread-container {
  margin: 0px 0px 0px 10px;
  left: 0px;
  top: -50px;
}

.rounded-4 {
  border-radius: 15px;
}

.breadcrumb {
  margin-bottom: -30px;
  background-color: white;
}

.breadcrumb a {
  color: inherit;
  text-decoration: none;
}

.breadcrumb a,
li a {
  color: inherit;
  text-decoration: none;
  background: linear-gradient(to right, white, white),
    linear-gradient(to right, rgb(72, 85, 106), rgb(72, 85, 106));
  background-size: 100% 1px, 0 1px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 500ms;
}

.breadcrumb a:hover,
li a:hover {
  background-size: 0 1px, 100% 1px;
}
/** breadcrumb styling ---------------*/
</style>
