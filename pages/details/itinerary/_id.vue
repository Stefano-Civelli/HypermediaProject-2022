<template>
    <div class="container">
        <div class="p-4 p-md-5 my-4 text-white rounded top-img img shadow-lg d-flex justify-content-center align-items-center"
            :style="{ 'background-image': 'url(' + img + ')' }">
            <h1 class="display-4 my-title">
                {{ name }}
            </h1>
        </div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/pois">Points of Interest</a></li>
                <li class="breadcrumb-item">
                    {{ name }}
                </li>
            </ol>
        </nav>

        <div class="row g-5 mt-3">
            <div class="col-md-8">
                <h3 class="pb-4 mb-4 fst-italic border-bottom">
                    "{{ name }}" - What to know
                </h3>

                <article class="blog-post">
                    <h2 class="blog-post-title mb-1">Description</h2>
                    <br />
                    <p>
                        {{ description }}
                    </p>
                    <h2 class="mb-4">Related attractions</h2>

                    <!-- Events circles -->
                    <div class="row">
                            <div class="pois-container">
                                <itin-poi-component class="poi-component" v-for="poi in pois" 
                                    :key="poi.id" :id="poi.id"
                                    :address="poi.address" 
                                    :name="poi.name" 
                                    :description="poi.description.length > 1000 ? poi.description.slice(0, 950) + '...' : poi.description" 
                                    :position="poi.position" :practical_info="poi.practical_info"
                                    :ticket_price="poi.ticket_price" 
                                    :poi_imgs="poi.poi_imgs" 
                                    :events="poi.events"
                                    :idx="pois.indexOf(poi) + 1" />
                            </div>
                        <h2 class="blog-post-title mb-1">Where is it?</h2>
                        <br />
                        <div class="px-4 py-2">
                            <iframe :src="map_src" width="100%" height="400" referrerpolicy="no-referrer-when-downgrade"
                                class="border my-map rounded-4"></iframe>
                        </div>
                    </div>
                    <!-- /.row -->
                </article>

                <nav class="blog-pagination mt-5" aria-label="Pagination">
                    <button class="btn btn-outline-secondary rounded-pill" @click="prev">
                        Previous
                    </button>
                    <button class="btn btn-outline-primary rounded-pill" @click="next" href="#">
                        Next
                    </button>
                </nav>
            </div>

            <div class="col-md-4">
                <div class="position-sticky" style="top: 5rem">
                    <div class="p-4 mb-3 bg-light rounded">
                        <h4 class="fst-italic">Practical Info</h4>
                        <p class="mb-0">Attractions included: {{ pois.length }}</p>
                        <p>Duration: {{ duration }} </p>
                    </div>

                    <div class="p-4">
                        <h4 class="fst-italic">Events on the way</h4>
                        <ol class="list-unstyled mb-0">
                            <li v-for="event in events" :key="event.id">
                                <nuxt-link :to="`/details/event/${event.name}`">
                                    {{ event.name }}
                                </nuxt-link>
                            </li>
                        </ol>
                    </div>

                    <div class="p-4">
                        <h4 class="fst-italic">Elsewhere</h4>
                        <ol class="list-unstyled">
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.my-map {
    margin: auto;
}

.rounded-4 {
    border-radius: 15px;
}

.my-border {
    border: 1px solid red;
}

.my-title {
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
}

.my-img {
    object-fit: cover;
    object-position: 20% 50%;
}

.top-img {
    height: 300px;
}

.img {
    background-size: cover;
    background-position: 0% 70%;
}

a {
    color: inherit;
    text-decoration: none;
}

a {
    background: linear-gradient(to right, rgb(33, 37, 41), rgb(33, 37, 41)),
        linear-gradient(to right, rgb(0, 165, 91), rgb(0, 165, 91));
    background-size: 100% 1px, 0 1px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 500ms;
}

a:hover {
    background-size: 0 2px, 100% 2px;
}
</style>

<script>
export default {
    name: 'ItineraryPage',
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/itinerary/' + id)
        const data2 = await $axios.get('/api/pois-by-itin-id/' + id)
        const data3 = await $axios.get('/api/maxItinId/')
        const eventList = []
        for(const poi of data2.data) {
            for(const evento of poi.events) {
                eventList.push(evento)
            }
        }
        return {
            id: data.id,
            name: data.name,
            img: data.img,
            description: data.description,
            duration: data.duration,
            map_src: data.map_src,
            pois: data2.data,
            maxItinId: data3.data,
            events: eventList
        }
    },
    head() {
        return {
            title: this.name,
            meta: [
                {
                    name: 'description',
                    content: `Detailed information about ${this.name} itinerary: route description, duration, involved attractions, events on the way, map of the itinerary`
                }, 
                {
                    name : 'keywords',
                    content: `${this.name}, description, map, route map, practical info, pois, attractions, events, POI, route description`
                }
            ]
        }
    },
    mounted() { },
    methods: {
        next() {
            if (this.id + 1 > this.maxItinId) {
                this.$router.push(`/details/itinerary/${this.maxItinId}`)
            } else {
                this.$router.push(`/details/itinerary/${this.id + 1}`)
            }
        },
        prev() {
            if (this.id === 1) {
                this.$router.push(`/details/itinerary/1`)
            } else {
                this.$router.push(`/details/itinerary/${this.id - 1}`)
            }
        },
    },
}
</script>
