<template>
  <div class="head-element">
    <section class="section-a">
      <div class="container">
        <div class="row">
          <div class="col-md-6 header-text mt-5">
            <h1 class="mt-5">Welcome to Milan!</h1>
            <p>
              This <kbd>Milan guide</kbd> is all you need to discover all the
              amazing activities and attractions available in the city. To learn
              more check out our <mark>Outstanding itineraries</mark> and events
              and if you find yourself in need of some service don't hesitate to
              check out our services setion.
            </p>
            <a href="#" class="btn btn-dark">Read More</a>
          </div>
          <div class="col-md-6">
            <img
              class="my-img rounded-circle"
              src="https://thumbs.dreamstime.com/b/cattedrale-di-duomo-milano-sketch-vettoriale-milan-italia-209168926.jpg"
              width="100%"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselList: [
        {
          title: 'Points of Interest',
          subtitle: '/pois',
          buttonText: '/pois',
          number: 0,
          img: 'https://images.unsplash.com/photo-1613154908225-9116593e98b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80',
        },
        {
          title: 'Points of Interest',
          subtitle: '/pois',
          buttonText: '/pois',
          number: 1,
          img: 'https://images.unsplash.com/photo-1545256633-9d719bec17c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        },
        {
          title: 'Points of Interest',
          subtitle: '/pois',
          buttonText: '/pois',
          number: 2,
          img: 'https://raw.githubusercontent.com/Stefano-Civelli/HypermediaProject-2022/master/assets/gallery-background.jpg?token=GHSAT0AAAAAABTU3KXBHLVOK2WVEO3TSVJAYVLTL7A',
        },
      ],
    }
  },
}
</script>

<style scoped>
.my-img {
  border-radius: 400px;
  margin-top: 60px;
}
.head-element {
  background-color: rgb(
    243,
    134,
    48
  ); /* For browsers that do not support gradients */
  background-image: linear-gradient(172deg, rgb(243, 134, 48) 60%, white 60.1%);
  height: 600px;
  margin-top: -32px;
}
.container {
  padding: 0 2rem;
}

.section-a {
  margin: 2rem 0;
}

.section-a h1 {
  font-size: 4rem;
  color: var(--primary-color);
}

.section-a p {
  margin: 1rem 0;
}
@media (max-width: 991.98px) {
  .my-img {
    display: none;
  }
  .header-text {
    text-align: center;
    width: 100%;
  }
  .header-text h1 {
    margin-top: 0px !important;
  }
}
</style>
