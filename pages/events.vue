<template>
  <div class="page">
    <GroupPageHeaderComponent
      text="Events"
      textColor="rgb(248, 249, 250)"
      img="https://i.imgur.com/ojb6cuI.jpg"
    />

    <div class="container page-component">
      <!-- need to add link to summer/winter events page and the one from which is possible to chose by year  -->
      <div class="row">
        <div class="col-12">
          <div class="w-100 py-3">
            <div class="mb-n2 w-100">
              <div class="p-5">
                <h2 class="fw-bold see-also">See Also</h2>

                <div class="d-flex justify-content-evenly mt-5">
                  <a class="my-links" href="/summer_events">summer events</a>
                  <a class="my-links" href="/winter_events">winter events</a>
                  <a class="my-links" href="/events_by_year">events by year</a>
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
    const { data } = await $axios.get('/api/event/list')
    console.log(data)
    return {
      data,
    }
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
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
}

.my-links {
  font-size: 1.7em;
  color: inherit;
}
.see-also {
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
  text-align: center;
}

.rounded-4 {
  border-radius: 15px;
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
