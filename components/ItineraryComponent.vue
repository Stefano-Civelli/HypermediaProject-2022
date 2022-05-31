<template>
    <div class="card" style="width: 18rem;">
        <img :src="img" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title"> {{ name }} </h5>
            <p class="card-text"> {{ description }} </p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Duration : {{ duration }}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="btn btn-primary">Explore</a>
        </div>
    </div>
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
</style>