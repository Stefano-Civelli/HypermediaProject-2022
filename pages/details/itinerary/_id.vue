<template>
    <div class="page">
        <div class="page-header">
            <div class="page-title">
                <h2 class="itinerary-title"> "{{ name }}" </h2>
            </div>
        </div>
        <div class="page-body">
            <div class="itinerary-img-container">
                <img :src="img" alt="Pinacoteca di Brera" class="itinerary-img">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb-ol">
                        <li class="breadcrumb-li">
                            <nuxt-link :to="`/itineraries`">
                                <div class="breadcrumb-btn">Itineraries</div>
                            </nuxt-link>
                        </li>
                        <li class="breadcrumb-lli"> {{ name }} </li>
                    </ol>
                </nav>
            </div>
            <hr />
            <p class="itinerary-description" lang="it"> {{ description }} </p>
            <hr />
            <p class="pois-introduction" lang="it"> Attractions proposed: </p>
            <div class="pois-container">
                <itin-poi-component class="poi-component" v-for="poi in pois" :key="poi.id" :id="poi.id"
                    :address="poi.address" :name="poi.name"
                    :description="(poi.description.length > 130 ? poi.description.slice(0, 70) + '...' : poi.description)"
                    :position="poi.position" :practical_info="poi.practical_info" :ticket_price="poi.ticket_price"
                    :poi_imgs="poi.poi_imgs" :events="poi.events" />
            </div>
            <div class="group-links">
                <div v-if="id !== 1" @click="previousItinerary()" class="previous-btn previous-btn-hov">Previous</div>
                <div v-if="id !== maxItinId" @click="nextItinerary()" class="next-btn next-btn-hov">Next</div>
            </div>
        </div>
    </div>
</template>

<script>
import ItinPoiComponent from '~/components/Itin-Poi-Component.vue'
export default {
    components: { ItinPoiComponent },
    name: 'ItineraryPage',
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/itinerary/' + id)
        const data2 = await $axios.get('/api/pois-by-itin-id/' + id)
        const data3 = await $axios.get('/api/maxItinId/')
        return {
            id: data.id,
            name: data.name,
            img: data.img,
            description: data.description,
            duration: data.duration,
            pois: data2.data,
            maxItinId: data3.data
        }
    },
    head() {
        return {
            title: this.name,
        }
    },
    mounted() {
    },
    methods: {
        nextItinerary() {
            if (this.id + 1 > this.maxItinId) {
                this.$router.push(`/details/itinerary/${this.maxItinId}`)
            }
            else {
                this.$router.push(`/details/itinerary/${this.id + 1}`)
            }
        },
        previousItinerary() {
            if (this.id === 1) {
                this.$router.push(`/details/itinerary/1`)
            }
            else {
                this.$router.push(`/details/itinerary/${this.id - 1}`)
            }
        },
    },
}
</script>

<style scoped>
.pois-introduction {
    font-size: 3.5ch;
}

.pois-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: clamp(5px, 5vw, 10px);
}

.poi-component {
    margin: 4px;
}

.page-header {
    justify-content: center;
}

.itinerary-title {
    font-size: 25px;
    font-weight: 400;
    padding: 7px;
    padding-top: 8px;
    margin: 0px;
}

.page-title {
    background-color: rgb(0, 140, 255);
    text-align: center;
    width: 100vw;
    color: rgb(255, 255, 255);
}

.page-body {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: rgb(233, 233, 233);
}

.itinerary-img-container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: rgb(255, 242, 225);
    padding: 4px;
    padding-bottom: 6px;
}

.itinerary-img {
    width: 60vw;
    min-width: 120px;
    max-width: 600px;
    height: 40vw;
    min-height: 80px;
    max-height: 400px;
    border-radius: 16px;
    border: 1px solid rgb(189, 189, 189);
}

hr {
    margin: 0px;
    color: rgb(85, 85, 85);
    height: 1px;
    width: 30%;
}

.breadcrumb-navbar {
    display: block;
}

.breadcrumb-ol {
    margin: 10px;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    list-style: none;
}

.breadcrumb-li {
    list-style: none;
}

.breadcrumb-li::after {
    content: url(assets\breadrumb-divider.svg);
    margin-left: 6px;
    margin-right: 6px;
}

.breadcrumb-btn,
.previous-btn,
.next-btn {
    color: #616161;
    background-color: #ffffffd8;
    border: 2px solid #616161;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    padding: 0.300rem 0.60rem;
    font-size: 1rem;
    border-radius: 1.25rem;

    transition-duration: 0.3s;
    transition-timing-function: ease;
}

.breadcrumb-btn:hover,
.previous-btn-hov:hover {
    background-color: #616161;
    color: #ffffffd8;
}

.next-btn {
    color: #0d6efd;
    border-color: #0d6efd;
}

.next-btn-hov:hover {
    background-color: #0d6efd;
    color: #ffffffd8;
}

.group-links {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 80vw;
    padding-bottom: 0.8%;
}

.itinerary-description {
    font-size: 20px;
    padding: 1.5vw;
    margin: 0px;
    padding-left: 3vw;
    padding-right: 3vw;
}
</style>
