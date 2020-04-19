<template>
  <div class="container">
    <article class="card">
      <img src="" alt="" class="card__backimage" />
      <div class="card__header">
        <figure class="card__figure">
          <img src="../assets/img/green_lake.jpg" alt="" class="card__image" />
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
    </article>

    <article class="card card--fullImage">
      <!-- <img src="../assets/img/bridge.jpg" alt="" class="card__backimage" /> -->

      <picture>
        <source :srcset="imgSourceset" media="(min-width: 768px)" />
        <!-- Define an <img> element for browsers that do not support the <picture> element. -->
        <!-- Lie from W3? :p -->
        <img :src="imgSourcesetSmall" />
      </picture>

      <div class="card__header">
        <figure class="card__figure">
          <img src="../assets/img/bridge.jpg" alt="" class="card__image" />
        </figure>
      </div>
      <div class="card__body">
        <h2 class="card__title">Large article title mobile layout</h2>
        <h3 class="card__subtitle">
          Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto,
          vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu,
          inermis eloquentiam.
        </h3>
        <p class="card__copy"></p>
        <div class="card__date">
          <div class="date-time-author">
            1h ago
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {},
  computed: {
    // https://blog.lichter.io/posts/dynamic-images-vue-nuxt/
    imgSourceset() {
      // const baseName = this.selectedDog.toLowerCase()
      return `${require(`@/assets/img/bridge.jpg`)}`
    },
    imgSourcesetSmall() {
      return `${require(`@/assets/img/bridge_300.jpg`)}`
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: bisque;
  border: 5px solid red;
  width: 500px;
  resize: horizontal;
  overflow: auto;
}

.card {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  width: 327px;
  border-radius: 6px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 10px -5px rgba(0, 0, 0, 0.2);

  &__title {
    font-size: 16px;
    line-height: 20px;
    color: #202124;
    text-align: left;
    font-weight: bold;
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

  &__date {
    color: #a6adb4;
  }
}

.card--fullImage {
  background-color: yellow;
  display: block;
  overflow: hidden;
  position: relative;
  height: 300px;

  .card {
    &__backimage {
      // pointer-events: none;
      // position: absolute;
      // width: 100%;
      // height: 100%;
    }

    &__image {
      display: none;
    }

    &__title {
      color: #fff;
      font-size: 24px;
      line-height: 34px;
    }
    &__subtitle {
      color: #fff;
    }

    &__body {
      position: absolute;
      top: 10px;
    }

    &__date {
      color: #cbd0d3;
    }
  }
}

.date-time-author {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  line-height: 26px;
  //color: #a6adb4;
  color: inherit;
  text-align: left;
  font-weight: normal;
  margin-top: 5px;
}
</style>
