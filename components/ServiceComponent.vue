<template>
  <div class="w-100 py-3">
    <div class="mt-5 mb-n2 w-100">
      <div class="border rounded-4 shadow">
        <div class="row d-flex p-5">
          <div class="col-md-4">
            <h2 class="fw-bold mb-0">{{ name }}</h2>

            <ul class="d-grid gap-4 my-5 list-unstyled">
              <li class="d-flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  fill="currentColor"
                  class="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                  />
                </svg>
                <div>
                  <h5 class="mb-0">Hours</h5>
                  {{ timetable }}
                </div>
              </li>
              <li class="d-flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  fill="currentColor"
                  class="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <div>
                  <h5 class="mb-0">Tel. number</h5>
                  {{ phoneNumber }}
                </div>
              </li>
              <li class="d-flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                  />
                  <path
                    d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                </svg>
                <div>
                  <h5 class="mb-0">Position</h5>
                  {{ address }}
                </div>
              </li>
            </ul>
          </div>
          <div class="col-md-8 d-flex justify-content-end">
            <iframe
              :src="mapSrc"
              width="75%"
              height="300"
              referrerpolicy="no-referrer-when-downgrade"
              class="border my-map rounded-4"
            ></iframe>
          </div>
        </div>
      </div>
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
    timetable: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    mapSrc: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.rounded-4 {
  border-radius: 15px;
}
.my-border {
  border: 1px solid red;
}
@media (max-width: 992px) {
  .my-map {
    width: 90%;
  }
}
@media (max-width: 768px) {
  .my-map {
    width: 100%;
  }
}
</style>
