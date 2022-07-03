<template>
  <div>
    <footer>
      <div class="footer">
        <div class="my-row">
          <ul>
            <li><a href="/contactus">Contact us</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div class="my-row">
          MIT License || Copyright (c) 2022 - Designed By: HyPSSS
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style>
body {
  margin: 0;
  overflow-x: hidden;
}

.footer {
  background: #000;
  padding: 30px 0px;
  text-align: center;
  margin-top: 20px;
}

.footer .my-row {
  width: 100%;
  margin: 1% 0%;
  padding: 0.6% 0%;
  color: gray;
  font-size: 0.8em;
}

.footer .my-row a {
  text-decoration: none;
  color: gray;
  transition: 0.5s;
}

.footer .my-row a:hover {
  color: #fff;
}

.footer .my-row ul {
  width: 100%;
}

.footer .my-row ul li {
  display: inline-block;
  margin: 0px 30px;
}

.footer .my-row a i {
  font-size: 2em;
  margin: 0% 1%;
}

@media (max-width: 720px) {
  .footer {
    text-align: left;
    padding: 5%;
  }
  .footer .my-row ul li {
    display: block;
    margin: 10px 0px;
    text-align: left;
  }
  .footer .my-row a i {
    margin: 0% 3%;
  }
}
</style>
