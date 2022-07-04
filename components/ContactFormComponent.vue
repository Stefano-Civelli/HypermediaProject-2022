<template>
  <div class="w-100 py-3">
    <div class="mt-5 mb-n2 w-100">
      <div
        class="border rounded-4 shadow"
        :style="{
          background: `linear-gradient(to bottom, ${color} 1.6%, white 0%)`,
        }"
      >
        <h2 class="fw-bold my-title mt-5">{{ title }}</h2>
        <div class="row g-3 p-5">
          <div class="col-sm-6">
            <label for="firstName" class="form-label">First name</label>
            <input
              type="text"
              class="form-control my-textfield"
              id="firstName"
              placeholder="Your name"
              required
            />
            <div class="invalid-feedback">Valid first name is required.</div>
          </div>
          <div class="col-sm-6">
            <label for="lastName" class="form-label">E-mail</label>
            <input
              type="text"
              class="form-control my-textfield"
              id="E-mail"
              placeholder="example@mail.com"
              required
            />
            <div class="invalid-feedback">Valid last name is required.</div>
          </div>
          <div class="col-12">
            <div class="textarea-container">
              <textarea
                class="form-control h-100 my-textfield"
                placeholder="Enter your message"
                id="message"
              ></textarea>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-end">
            <button
              @click="clear()"
              class="btn w-100"
              :style="{ 'background-color': color }"
            >
              {{ text }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  methods: {
    clear() {
      const arr = document.getElementsByClassName(`form-control`)
      if (this.title === 'Customer care') {
        arr[0].value = ''
        arr[1].value = ''
        arr[2].value = ''
      } else if (this.title === 'Sales & Marketing') {
        arr[3].value = ''
        arr[4].value = ''
        arr[5].value = ''
      }
    },
  },
}
</script>

<style scoped>
.btn:focus {
  border: 1px solid rgb(112, 112, 112);
  box-shadow: none;
}

.my-textfield {
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
  outline: 0;
}

.my-textfield:focus {
  border: 1px solid rgb(112, 112, 112);
}

.textarea-container {
  height: 200px;
}

.my-title {
  text-align: center;
}

.rounded-4 {
  border-radius: 15px;
}
</style>
