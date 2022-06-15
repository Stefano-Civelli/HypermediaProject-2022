<template>
  <div>
    <nav
      class="my-navbar navbar navbar-expand-lg navbar-dark px-3 header position-fixed w-100 top-0"
    >
      <a class="navbar-brand navbar-text navbar-home-button" href="/"
        >Milano City</a
      >
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
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Events
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-caret-down"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
                />
              </svg>
            </a>
            <ul class="dropdown-menu">
              <li>
                <nuxt-link class="dropdown-item" to="/events"
                  >All events</nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="dropdown-item" to="/summer_events"
                  >Summer Events</nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="dropdown-item" to="/winter_events"
                  >Winter Events</nuxt-link
                >
              </li>
              <li></li>
              <li>
                <nuxt-link class="dropdown-item" to="/events_by_year"
                  >Events by Year</nuxt-link
                >
              </li>
              <li></li>
            </ul>
          </li>

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
.navbar-home-button {
  font-family: 'Lobster', Georgia, Times, serif;
}
.spacer {
  height: 62px;
  width: 100%;
}
.header {
  background: rgba(41, 42, 45, 0.966);
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

.dropdown-menu {
  border-radius: 0px 0px 15px 15px;
  background-color: rgba(41, 42, 45, 0.966);
  margin-top: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
}

.dropdown-item {
  margin-top: -0.5vh;
  margin-bottom: -0.5vh;
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
