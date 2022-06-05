<template>
    <div class="poi-card">
        <div class="poi-header">
            <h3 class="poi-name"> {{ name }} </h3>
            <!-- <p class="poi-description"> Poi description: {{ description }} </p> -->
        </div>
        <hr />
        <div class="poi-img-container">
            <nuxt-link :to="`/details/poi/${name}`">
                <img :src="poi_imgs[0].img_path" class="poi-img" :title="name">
            </nuxt-link>
        </div>
        <div v-if="events.length > 0" class="events-container">
            <p class="ev"> Events: </p>
            <itin-event-component class="event-component" v-for="event in events" :key="event.id" :id="event.id"
                :img="event.img" :name="event.name"></itin-event-component>
        </div>
        <div v-else class="no-events-div">
            <p class="ev"> No events involved </p>
        </div>
    </div>
</template>

<style scoped>
p {
    margin: 0px;
    padding: 5px;
    font-size: clamp(5px, 1vw, 10px);
    font-weight: 600;
    color: white;
}

hr {
    margin-top: 0px;
    margin-bottom: 5px;
    color: rgb(0, 0, 0);
    height: 1px;
    width: 50%;
}

.poi-name {
    font-size: clamp(13px, 1.5vw, 15px);
    color: white;
    margin: 0px;
    padding: 5px;
    font-weight: 700;
}

.ev {
    color: black;
    font-size: clamp(12px, 1.1vw, 15px);
}

.poi-card {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    border: 2px solid transparent;
    border-radius: 30px;
    background: linear-gradient(to right, #5288fc, #5a6bfd);
}

.poi-card:hover {
    border: 2px solid #77c8ff;
}

.poi-description {
    font-size: clamp(15px, 1.2vw, 20px);
}

.no-events-div {
    justify-content: center;
}

.events-container,
.no-events-div {
    font-weight: 600;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgb(218, 218, 218);
    min-height: 70px;
    width: 100%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.poi-header {
    height: 40%;
    min-height: 60px;
    max-height: 180px;
    width: 16vw;
    min-width: 80px;
    max-width: 240px;
    text-align: start;
    display: flex;
    flex-flow: column;
    justify-content: center;
}

.poi-img-container {
    display: flex;
    flex-flow: row;
    justify-content: center;
}

.poi-img {
    width: 25vw;
    min-width: 100px;
    max-width: 300px;
    height: 15vw;
    min-height: 100px;
    max-height: 180px;
    border-radius: 50%;
    border: 2px solid grey;
    transition: 0.2s;
}

.poi-img:hover {
    border: 2px solid rgb(0, 171, 201);
    transform: rotate(-0.5deg);
}
</style>

<script>
import ItinEventComponent from './Itin-Event-Component.vue'
export default {
    components: { ItinEventComponent },
    props: {
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        practical_info: {
            type: String,
            required: true,
        },
        ticket_price: {
            type: Number,
            required: true,
        },
        poi_imgs: {
            type: Array,
            required: true,
        },
        events: {
            type: Array,
            required: true,
        }
    }
}
</script>