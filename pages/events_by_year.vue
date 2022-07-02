<template>
  <div>
    <GroupPageHeaderComponent
      text="Events by Year"
      textColor="rgb(248, 249, 250)"
      img="https://i.imgur.com/ojb6cuI.jpg"
    />
    <div class="container page-component pt-5">
      <div class="d-flex flex-wrap align-items-center justify-content-center">
        <nav class="bread-container position-absolute">
          <ol class="breadcrumb p-2 border rounded-4 shadow">
            <li class="breadcrumb-item">
              <a href="/events">Events</a>
            </li>
            <li class="breadcrumb-item">Events by Year</li>
          </ol>
        </nav>
        <GroupPageCardComponent
          v-for="year in data"
          :key="year.year"
          :title="year.year"
          nuxtLink="/details/year"
          param="Check out the events of the year"
          id="-1"
          :img="year.img"
          :subtitle="`Up to now there ${year.events > 1 ? 'are' : 'is'} ${
            year.events
          } ${year.events > 1 ? 'events' : 'event'}  available this year`"
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
    GroupPageCardComponent,
    GroupPageHeaderComponent,
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Events by Year',
      meta: [
        {
          name: 'description',
          content: `Events in Milan grouped by year`,
        },
        {
          name: 'keywords',
          content: `Milan events, list, attractions, events, events groups, events by year`,
        },
      ],
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/event/list/years')
    return {
      data,
    }
  },
}
</script>

<style scoped>
.hero-section-parallax {
  background-image: url('~/assets/Gae-Aulenti.jpg');
}

.page-component {
  background-color: white;
  border-radius: 40px;
  margin-top: 300px;
  position: relative;
  box-shadow: 0 0 3rem 0.1rem rgb(0 0 0 / 40%);
  min-height: 65vh;
}
/** breadcrumb styling */
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

.breadcrumb a {
  background: linear-gradient(to right, rgb(33, 37, 41), rgb(33, 37, 41)),
    linear-gradient(
      to right,
      rgba(105, 210, 231, 0.527),
      rgba(105, 210, 231, 0.527)
    );
  background-size: 100% 1px, 0 1px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 500ms;
}

.breadcrumb a:hover {
  background-size: 0 1px, 100% 1px;
}
</style>
