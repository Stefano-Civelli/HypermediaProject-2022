<template>
  <div>
    <nav
      class="my-navbar navbar navbar-expand-lg navbar-dark px-3 header position-fixed w-100 top-0"
    >
      <a class="navbar-brand navbar-text" href="/">Milano City</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li
            v-for="(navItem, navItemIndex) of headerList"
            :key="`navItem${navItemIndex}`"
            class="nav-item"
          >
            <nuxt-link :to="navItem.path" class="nav-link">
              {{ navItem.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="spacer"></div>
  </div>
</template>

<style scoped>
.spacer {
  height: 62px;
  width: 100%;
}
.header {
  background: rgb(41, 42, 45);
}
.logo {
  font-size: 32px;
}
.my-navbar-text {
  color: azure;
}
/*my-navbar*/
.my-navbar {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 10000;
}

.navItems {
  position: absolute;
  right: 0px;
  height: fit-content;
}

.logo {
  position: absolute;
  left: 20px;
}

.my-navbar li {
  display: inline;
  margin: 10px;
  position: relative;
}

.my-navbar a:link,
.my-navbar a:visited {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: 0.3s;
}

.my-navbar ul a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 10;
  content: '';
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.my-navbar a:hover:after {
  width: 100%;
  left: 0;
}
@media (min-width: 991.98px) {
  .my-navbar {
    height: 62px;
  }
}
</style>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'Points of Interest',
          path: '/pois',
        },
        {
          name: 'Itineraries',
          path: '/itineraries',
        },
        {
          name: 'Events',
          path: '/events',
        },
        {
          name: 'Services',
          path: '/services',
        },
        {
          name: 'About',
          path: '/about',
        },
        {
          name: 'Contact Us',
          path: '/contactus',
        },
      ],
    }
  },
}
</script>
