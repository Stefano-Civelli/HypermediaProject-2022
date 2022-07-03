<template>
  <div class="my-grid">
    <article
      class="g-item grid-col-span-2 flow bg-primary-400 text-secondary-400"
    >
      <div class="d-flex">
        <div>
          <h2 class="title">{{ title1 }}</h2>
        </div>
      </div>
      <p>
        {{ subtitle1 }}
      </p>
      <p>
        {{ description1 }}
      </p>
    </article>
    <article class="g-item flow bg-secondary-400 text-neutral-100">
      <div class="d-flex">
        <div>
          <h2 class="title">{{ title2 }}</h2>
        </div>
      </div>
      <p>{{ subtitle2 }}</p>
      <p>
        {{ description2 }}
      </p>
    </article>
    <article class="g-item flow bg-neutral-100 text-secondary-400">
      <div class="d-flex">
        <div>
          <h2 class="title">{{ title3 }}</h2>
        </div>
      </div>
      <p>{{ subtitle3 }}</p>
      <p>
        {{ description3 }}
      </p>
    </article>
    <article
      class="g-item grid-col-span-2 flow bg-secondary-500 text-neutral-100"
    >
      <div class="d-flex">
        <div>
          <h2 class="title">{{ title4 }}</h2>
        </div>
      </div>
      <p>
        {{ subtitle4 }}
      </p>
      <p>
        {{ description4 }}
      </p>
    </article>
    <article class="g-item flow bg-neutral-100 text-secondary-400">
      <div class="d-flex">
        <div>
          <h2 class="title">{{ title5 }}</h2>
        </div>
      </div>
      <p>{{ subtitle5 }}</p>
      <p>
        {{ description5 }}
      </p>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    title1: {
      type: String,
      required: true,
    },
    subtitle1: {
      type: String,
      required: true,
    },
    description1: {
      type: String,
      required: true,
    },
    title2: {
      type: String,
      required: true,
    },
    subtitle2: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: true,
    },
    title3: {
      type: String,
      required: true,
    },
    subtitle3: {
      type: String,
      required: true,
    },
    description3: {
      type: String,
      required: true,
    },
    title4: {
      type: String,
      required: true,
    },
    subtitle4: {
      type: String,
      required: true,
    },
    description4: {
      type: String,
      required: true,
    },
    title5: {
      type: String,
      required: true,
    },
    subtitle5: {
      type: String,
      required: true,
    },
    description5: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

.flow > *:where(:not(:first-child)) {
  margin-top: var(--flow-spacer, 1em);
}

.bg-primary-400 {
  background: rgb(255, 230, 90);
}
.bg-secondary-400 {
  background: rgb(72, 85, 106);
}
.bg-secondary-500 {
  background: rgb(25, 33, 46);
}

.bg-neutral-100 {
  background: rgb(255, 255, 255);
}

.text-neutral-100 {
  color: rgb(255, 255, 255);
}
.text-secondary-400 {
  color: rgb(72, 85, 106);
}
.border-primary-400 {
  border: 2px solid #a775f1;
}

/* components */
.my-grid {
  display: grid;
  gap: 1.5rem;
  grid-auto-columns: 1fr;
  grid-template-areas:
    'one'
    'two'
    'three'
    'four'
    'five';

  padding-block: 2rem;
  width: min(95%, 70rem);
  margin-inline: auto;
}

.g-item {
  font-size: 0.88rem;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(217 19% 35% / 0.25);
}

.g-item:nth-child(1) {
  grid-area: one;
}
.g-item:nth-child(2) {
  grid-area: two;
}
.g-item:nth-child(3) {
  grid-area: three;
}
.g-item:nth-child(4) {
  grid-area: four;
}
.g-item:nth-child(5) {
  grid-area: five;
}

@media screen and (min-width: 33em) {
  .my-grid {
    grid-template-areas:
      'one one'
      'two three'
      'five five'
      'four four';
  }
}

@media screen and (min-width: 38em) {
  .my-grid {
    grid-template-areas:
      'one one'
      'two five'
      'three five'
      'four four';
  }
}

@media screen and (min-width: 54em) {
  .my-grid {
    grid-template-areas:
      'one one two'
      'five five five'
      'three four four';
  }
}

@media screen and (min-width: 75em) {
  .my-grid {
    grid-template-areas:
      'one one two five'
      'three four four five';
  }
}

.g-item {
  background-repeat: no-repeat;
  background-position: top right 10%;
}

.g-item img {
  width: 1.75rem;
  border-radius: 50%;
}

.title {
  font-size: 1.8rem;
  line-height: 1;
}

.g-item .position {
  font-size: 0.6875rem;
  opacity: 0.5;
}

.g-item > p:first-of-type {
  font-size: 1rem;
  line-height: 1.2;
}

.g-item > p:last-of-type {
  opacity: 0.7;
}
</style>
