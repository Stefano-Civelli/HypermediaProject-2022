<template>
  <div>
    <SimpleGPHeader
      :text="name"
      textColor="rgb(248, 249, 250)"
      bgColor="rgb(72, 85, 106)"
    />
    <div class="container">
      <nav class="d-flex bread-container">
        <ol class="breadcrumb p-2">
          <li class="breadcrumb-item">
            <NuxtLink to="/services">Services</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            {{ name }}
          </li>
        </ol>
      </nav>
      <ServiceComponent
        v-for="service in serviceList"
        :key="service.id"
        :name="service.name"
        :timetable="service.timetable"
        :phoneNumber="service.phone_number"
        :address="service.address"
        :mapSrc="service.map_src"
      />
    </div>
  </div>
</template>

<script>
import SimpleGPHeader from '~/components/SimpleGPHeader.vue'
import ServiceComponent from '~/components/ServiceComponent.vue'
export default {
  components: { ServiceComponent, SimpleGPHeader },
  async asyncData({ route, $axios }) {
    // param taken from dynamic page rendering
    const { name } = route.params
    // call to /service_type/:name API that retrieves all the information of the specific service type
    const { data } = await $axios.get('/api/service_type/' + name)
    const serviceList = data
    return {
      name,
      serviceList,
    }
  },
  head() {
    return {
      title: this.name,
      meta: [
        {
          name: 'description',
          content: `Detailed information about ${this.name} in Milan`,
        },
        {
          name: 'keywords',
          content: `${this.name}, opening time, tel number, position, map, practical info`,
        },
      ],
    }
  },
}
</script>

<style scoped>
/** breadcrumb styling ---------------*/
.bread-container {
  margin: 30px 0px 0px 10px;
}
.rounded-4 {
  border-radius: 15px;
}
.breadcrumb {
  margin-bottom: -30px;
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
