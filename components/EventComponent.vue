<template>
  <div class="event-card">
    <img :src="img" class="event-img" />
    <div class="event-body">
      <h5>{{ name }}</h5>
      <!-- p> {{ description }} </p -->
    </div>
    <div class="event-footer">
      <p class="event-duration-start">From: {{ start }}</p>
      <p class="event-duration-end">To: {{ end }}</p>
      <nuxt-link :to="`/details/event/${name}`">
        <div class="event-btn">See Details</div>
      </nuxt-link>
    </div>
  </div>

  <!--
    <div class="card" style="width: 18rem">
        <div
        class="card-img-top card-image"
        :style="{ 'background-image': 'url(' + img + ')' }"
        ></div>
        <div class="card-body">
        <h5 class="card-title"> {{ name }} </h5>
         <nuxt-link :to="`/details/event/${name}`">
            <div class="btn btn-primary btn-orange">See Details</div>
        </nuxt-link> 
        </div>
    </div> -->
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    start: {
      require: true,
    },
    end: {
      require: true,
    },
  },
}
</script>

<style scoped>
.event-card {
  border: 2px solid rgb(211, 211, 211);
  width: 300px;
  display: inline-block;
  margin: 5px;
}

.event-card:hover {
  border: 2px solid rgb(255, 165, 0);
}

.event-card,
.event-img {
  border-radius: 5px;
}

.event-img {
  width: 100%;
  height: 200px;
  margin: 1%;
}

.event-body {
  padding: 10px;
  padding-bottom: 4px;
  margin-bottom: 5px;
}

.event-footer {
  padding: 16px;
  padding-top: 7px;
  padding-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  margin-bottom: 5px;
}

.event-btn {
  color: #fff;
  background-color: rgb(255, 165, 0);
  border-color: rgb(255, 165, 0);
  display: inline-block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
}

.event-btn:hover {
  background-color: rgb(255, 165, 0);
  border-color: #5a6f8f;
}

.event-duration-end {
  margin-bottom: 20px;
}

.event-duration-start {
  margin-bottom: -1px;
}
</style>
