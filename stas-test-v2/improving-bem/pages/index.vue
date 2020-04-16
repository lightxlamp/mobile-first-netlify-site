<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        improving-bem
      </h1>
      <h2 class="subtitle">
        Mobile-first-test-site with better BEM
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>

      <article class="card">
        <div class="card__header">
          <figure class="card__figure">
            <img
              src="../assets/img/green_lake.jpg"
              alt=""
              class="card__image"
            />
          </figure>
        </div>
        <div class="card__body">
          <h2 class="card__title">Dolore magna aliqua</h2>
          <h3 class="card__subtitle">
            Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has
            appareat.
          </h3>
          <p class="card__copy"></p>
          <div class="card__date">
            <div class="date-time-author">
              1h ago
            </div>
          </div>
        </div>

        <!-- <footer class="card__footer">
          <div class="card__date">
            <div class="date-time-author">
              1h ago
            </div>
          </div>
        </footer> -->
      </article>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
.card {
  background-color: #fff;
  width: 327px;
  border-radius: 6px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;

  &__title {
    font-size: 16px;
    line-height: 20px;
    color: #202124;
    text-align: left;
  }

  &__subtitle {
    font-size: 13px;
    line-height: 23px;
    color: #a6adb4;
    text-align: left;
    font-weight: normal;
    margin-top: 5px;
  }

  &__figure {
    height: 100%;
  }

  &__image {
    width: 100%;
    height: 100%;
  }

  &__header {
    flex-basis: 0;
    flex-grow: 1;
    height: 154px;
  }

  &__body {
    padding: 32px 24px;
    flex-basis: 0;
    flex-grow: 1;
    height: 154px;
  }

  // &__footer {
  //   padding: 0px 24px 32px;
  // }
}

.date-time-author {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  line-height: 26px;
  color: #a6adb4;
  text-align: left;
  font-weight: normal;
  margin-top: 5px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: bisque;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
