<template>
  <div>
    <footer>
      <div class="footer">
        <div class="riga">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-youtube"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
        </div>

        <div class="riga">
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        <div class="riga">
          TALLARITA Copyright © 2022 TALLA - All rights reserved || Designed By:
          HyPSSS
        </div>
      </div>
    </footer>
  </div>
</template>
<style>
body {
  margin: 0;
  overflow-x: hidden;
}

.footer {
  background: #000;
  padding: 30px 0px;
  font-family: 'Play', sans-serif;
  text-align: center;
  margin-top: 20px;
}

.footer .riga {
  width: 100%;
  margin: 1% 0%;
  padding: 0.6% 0%;
  color: gray;
  font-size: 0.8em;
}

.footer .riga a {
  text-decoration: none;
  color: gray;
  transition: 0.5s;
}

.footer .riga a:hover {
  color: #fff;
}

.footer .riga ul {
  width: 100%;
}

.footer .riga ul li {
  display: inline-block;
  margin: 0px 30px;
}

.footer .row a i {
  font-size: 2em;
  margin: 0% 1%;
}

@media (max-width: 720px) {
  .footer {
    text-align: left;
    padding: 5%;
  }
  .footer .riga ul li {
    display: block;
    margin: 10px 0px;
    text-align: left;
  }
  .footer .riga a i {
    margin: 0% 3%;
  }
}
</style>
<script>
export default {}
</script>
