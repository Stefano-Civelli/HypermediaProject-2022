<template>
  <div class="container d-flex justify-content-center">
    <section class="page_404 w-100">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-10 col-sm-offset-1 text-center w-100">
              <div class="four_zero_four_bg">
                <h1 class="text-center">404</h1>
              </div>

              <div class="contant_box_404">
                <h3 class="h2">Looks like you're lost!</h3>

                <p>the page you are looking for is not available</p>
                <NuxtLink class="link_404 btn" to="/">Go to Home</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'empty',
}
</script>

<style scoped>
/*======================
    404 page
=======================*/
.page_404 {
  padding: 40px 0;
  background: #fff;
  margin-top: 20vh;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url('~/assets/errorPageGif.gif');
  height: 400px;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.contant_box_404 {
  margin-top: -50px;
}

.btn {
  background: #39ac31;
  color: #fff;
}
</style>
