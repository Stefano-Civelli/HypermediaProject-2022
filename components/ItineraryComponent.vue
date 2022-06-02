<template>
    <div class="itinerary-card">
        <img :src="img" class="itinerary-img">
        <div class="itinerary-body">
            <h5> {{ name }} </h5>
            <!-- p> {{ description }} </p -->
        </div>
        <div class="itinerary-footer">
            <p class="itinerary-duration">Duration : {{ duration }}</p>
            <nuxt-link :to="`/details/itinerary/${id}`">
                <div class="itinerary-btn">Explore</div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Int32Array,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Int32Array,
            required: true,
        }
    }
}
</script>

<style scoped>
.itinerary-card {
    border: 2px solid rgb(211, 211, 211);
    width: 300px;
    display: inline-block;
    margin: 5px;
}

.itinerary-card:hover {
    border: 2px solid rgb(0, 162, 255);
}

.itinerary-card,
.itinerary-img {
    border-radius: 5px;
}

.itinerary-img {
    width: 98%;
    height: 200px;
    margin: 1%;
}

.itinerary-body {
    padding: 10px;
    padding-bottom: 4px;
    /* height: 15ch; */
}

.itinerary-footer {
    padding: 16px;
    padding-top: 7px;
    padding-bottom: 10px;
    background-color: rgba(0, 0, 0, .05);
    border-radius: 5px;
}

.itinerary-duration {
    margin-bottom: 7px;
}

.itinerary-btn {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
}

.itinerary-btn:hover {
    background-color: #0d59fd;
    border-color: #5a6f8f;
}
</style>