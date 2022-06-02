<template>
    <div class="container my-5">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 pe-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1>{{ name }}</h1>
                <img :src="img" />
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/itineraries">Itineraries</a></li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItineraryPage',
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/itinerary/' + id)
        return {
            id: data.id,
            name: data.name,
            img: data.img,
            description: data.description,
            duration: data.duration,
        }
    },
    head() {
        return {
            title: this.name,
        }
    },
    mounted() {
    },
    methods: {},
}
</script>
