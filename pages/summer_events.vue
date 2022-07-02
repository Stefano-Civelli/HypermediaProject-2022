<template>
  <div class="page">
    <GroupPageHeaderComponent
      text="Summer Events"
      textColor="rgb(248, 249, 250)"
      img="https://i.imgur.com/ojb6cuI.jpg"
    />
    <div
      class="container d-flex flex-wrap justify-content-center page-component pt-5"
    >
      <!-- need to add link to summer/winter events page and the one from which is possible to chose by year  -->
      <nav class="bread-container position-absolute">
        <ol class="breadcrumb p-2 border rounded-4 shadow">
          <li class="breadcrumb-item">
            <a href="/events">Events</a>
          </li>
          <li class="breadcrumb-item">Summer Events</li>
        </ol>
      </nav>
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
      <h1 v-if="data.length == 0">
        At the moment no summer events are planned
      </h1>
      <br />
      <h1 v-if="data.length == 0">Come check later!</h1>
    </div>
  </div>
</template>

<script>
import GroupPageHeaderComponent from '~/components/GroupPageHeaderComponent.vue'
import GroupPageCardComponent from '~/components/GroupPageCardComponent.vue'
export default {
  components: {
    GroupPageHeaderComponent,
    GroupPageCardComponent,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/event/summer')
    return {
      data,
    }
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Summer Events',
      meta: [
        {
          name: 'description',
          content: `In this page you can find a list of all the summer events in Milan`,
        },
        {
          name: 'keywords',
          content: `Milan events, list, attractions, events, events groups, summer`,
        },
      ],
    }
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
