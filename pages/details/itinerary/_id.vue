<template>
    <div class="page">
        <div class="page-header">
            <div class="page-title">
                <h2 class="itinerary-title"> "{{ name }}" </h2>
            </div>
        </div>
        <div class="page-body">
            <div class="itinerary-img-container">
                <img :src="img" alt="" class="itinerary-img">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <nuxt-link :to="`/itineraries`">Itineraries</nuxt-link>
                        </li>
                        <li class="breadcrumb-item"> {{ name }} </li>
                    </ol>
                </nav>
            </div>
            <hr />
            <p class="itinerary-description" lang="it"> {{ description }} </p>
            <hr />
            <button @click="goToDetails()" class=""> card 1 </button>
        </div>
    </div>
</template>

<style scoped>
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
    width: 55%;
}

.breadcrumb {
    margin: 10px;
}

.itinerary-description {
    font-size: 20px;
    padding: 1.5vw;
    margin: 0px;
    padding-left: 3vw;
    padding-right: 3vw;
}
</style>

<script>
export default {
    name: 'ItineraryPage',
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/itinerary/' + id)
        const data2 = await $axios.get('/api/pois-by-itin-id/' + id)
        return {
            id: data.id,
            name: data.name,
            img: data.img,
            description: data.description,
            duration: data.duration,
            pois: data2.data
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
        goToDetails() {
            console.log(this.pois)
        },
    },
}
</script>
