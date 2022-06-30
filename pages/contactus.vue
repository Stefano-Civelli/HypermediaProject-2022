<template>
  <div class="container mt-5">
    <h1 class="display-3 my-page-title">Contact Us</h1>
    <div class="border"></div>
    <div class="row">
      <div class="col-lg-6">
        <ContactFormComponent
          title="Customer care"
          text="Submit Request"
          color="rgb(243, 134, 48)"
        />
      </div>
      <div class="col-lg-6">
        <ContactFormComponent
          title="Sales & Marketing"
          text="Contact Sales"
          color="rgb(105, 210, 231)"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="w-100 py-3">
          <div class="mt-5 mb-n2 w-100">
            <div class="border rounded-4 shadow p-5">
              <h2 class="fw-bold">Otherwise give us a call:</h2>
              <p class="tel-number">+39 333 123 45 67</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactFormComponent from '~/components/ContactFormComponent.vue'

export default {
  name: 'ContactUsPage',
  components: {
    ContactFormComponent,
  },

  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/contactus')
    const title = data.title
    const image = data.image
    const description = data.description
    return {
      title,
      description,
      image,
    }
  },
}
</script>

<style scoped>
.tel-number {
  font-size: 1.7em;
}
.my-page-title {
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
  text-align: center;
}

.rounded-4 {
  border-radius: 15px;
}
</style>
