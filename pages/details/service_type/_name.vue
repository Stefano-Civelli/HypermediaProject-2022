<template>
  <div>
    <group-page-header-component text="Banks" />
    <div class="container d-flex flex-wrap">
      <service-component />
      <service-component />
      <service-component />
    </div>
  </div>
</template>

<script>
import ServiceComponent from '~/components/ServiceComponent.vue'
export default {
  components: { ServiceComponent },
}
</script>

<style scoped></style>
