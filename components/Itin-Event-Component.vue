<template>
    <div>
        <nuxt-link :to="`/details/event/${name}`">
            <div class="img-container">
                <img class="event-img" :src="img" :title="name">
            </div>
        </nuxt-link>
    </div>
</template>

<style scoped>
.img-container {
    width: clamp(32px, 5.2vw, 53px);
    height: clamp(32px, 5.2vw, 53px);
    border-radius: 50%;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    background: linear-gradient(217deg, rgba(255, 0, 0, .8), rgba(255, 0, 0, 0) 70.71%),
        linear-gradient(127deg, rgba(0, 255, 0, .8), rgba(0, 255, 0, 0) 70.71%),
        linear-gradient(336deg, rgba(0, 0, 255, .8), rgba(0, 0, 255, 0) 70.71%);
}

.img-container:hover {
    width: clamp(33px, 5.5vw, 55px);
    height: clamp(33px, 5.5vw, 55px);
    transform: rotate(-2deg);
}

.event-img {
    width: clamp(30px, 5vw, 50px);
    height: clamp(30px, 5vw, 50px);
    border-radius: 50%;
    border: 1px solid grey;
    background-color: white;
    padding: 0px;
    transition: 0.2s;
}

.event-img:hover {
    width: clamp(33px, 5.5vw, 55px);
    height: clamp(33px, 5.5vw, 55px);
    transform: rotate(-2deg);
}
</style>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    }
}
</script>