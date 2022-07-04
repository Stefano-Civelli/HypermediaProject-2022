<template>
  <div class="page">
    <GroupPageHeaderComponent
      text="Events"
      textColor="rgb(248, 249, 250)"
      img="https://i.imgur.com/JHmXyvv.jpg"
    />

    <div class="container page-component">
      <!-- group links to link this page to other event pages  -->
      <div class="row">
        <div class="col-12">
          <div class="w-100 py-3">
            <div class="mb-n2 w-100">
              <div class="p-5">
                <h2 class="fw-bold see-also">See Also</h2>

                <div class="row mt-5">
                  <div class="col-md-4 d-flex justify-content-end">
                    <NuxtLink class="my-links" to="/summer_events"
                      >summer events</NuxtLink
                    >
                  </div>
                  <div class="col-md-4 d-flex justify-content-center">
                    <NuxtLink class="my-links" to="/winter_events"
                      >winter events</NuxtLink
                    >
                  </div>
                  <div class="col-md-4 d-flex justify-content-start">
                    <NuxtLink class="my-links" to="/events_by_year"
                      >events by year</NuxtLink
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
          :key="event.id"
          :title="event.name"
          :img="event.img"
          :altDesc="event.alt_desc"
          :param="event.location"
          id="-1"
          :subtitle="`From: ${event.start}`"
          nuxtLink="/details/event"
          :secondLineSubtitle="`To: ${event.end}`"
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
  async asyncData({ $axios }) {
    /** fetching list of events to be displayed in the cards of the group page */
    const { data } = await $axios.get('/api/event/list')
    return {
      data,
    }
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'All Events',
      meta: [
        {
          name: 'description',
          content: `Clickable list of all the events in Milan`,
        },
        {
          name: 'keywords',
          content: `Milan events, list, attractions, event, events`,
        },
      ],
    }
  },
}
</script>

<style scoped>
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
}

.my-links {
  font-size: 1.7em;
  color: inherit;
}
.see-also {
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
  text-align: center;
  font-size: 2.8em;
}

.rounded-4 {
  border-radius: 15px;
}

/** link styling ------------------ */
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
/** link styling ------------------ */

/** media queries -----------------------------*/
@media (max-width: 767px) {
  .col-md-4 {
    justify-content: center !important;
  }
}
</style>
