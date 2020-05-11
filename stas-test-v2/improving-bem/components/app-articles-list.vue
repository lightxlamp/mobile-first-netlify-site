<template>
  <!-- can't read property "length" of undefined - reproduced to me, so I've understood Adilet's advice/concern about v-if :P -->
  <div :class="containerClass" v-if="articles && articles.length"> 
    <article class="card" :class="articleClass" v-for="article in articles" :key="article.fileName">
      <img v-if="withImages == true" :src="require(`../assets/img/${article.imgName}.jpg`)" alt="" class="card__backgroundImage" />
      <div class="card__overlay"></div>
      <div class="card__overlay-details fadeIn-top">
        <h3>Subscribe</h3>
        <p>To see a full text of the article</p>
      </div>

      <div class="card__header">
        <div class="card__header--flipper">
          <div class="card__header--front">
            <figure class="card__figure">
              <img v-if="withImages == true" class="card__image" :src="require(`../assets/img/${article.imgName}.jpg`)" :alt="article.imgAlt" />
            </figure>
          </div>
          <div class="card__header--back">
            <p class="card__header--text">{{ article.text }}</p>
          </div>
        </div>
      </div>
      <div class="card__body">
        <div class="card__category">{{ article.category }}</div>
        <h2 class="card__title">{{ article.title }}</h2>
        <h3 class="card__subtitle">{{ article.text }}</h3>
        <p class="card__copy"></p>
        <div class="card__date">
          <dateTimeAuthor :time="article.dateTime" :author="article.author"/>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import dateTimeAuthor from '~/components/date-time-author'

export default {
  components: {
    dateTimeAuthor
  },
  props: {
    articlesType: {
      type: String,
      default: ''
    },
    articles: {
      type: Array,
      default: function () { return [] }
    },
    containerClass: {
      type: String,
      default: ''
    },
    withImages: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    articleClass: function() {
      return (this.articlesType ? 'card--' + this.articlesType : '');
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #fff;
  width: 32.7rem;
  border-radius: 6px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 10px -5px rgba(0, 0, 0, 0.2);

  @media only screen and (min-width: $bp-tablet) {
    width: 28.4rem;
  }

  @media only screen and (min-width: $bp-desktop) {
    width: 36rem;
  }

  &__title {
    font-size: 1.6rem;
    line-height: 2rem;
    color: #202124;
    text-align: left;
    font-weight: bold;
  }

  &__subtitle {
    font-size: 1.3rem;
    line-height: 2.3rem;
    color: #a6adb4;
    text-align: left;
    font-weight: normal;
    margin-top: .5rem;
  }

  &__category {
    display: none;
  }

  &__overlay {
    display: none;
    background: rgba(0,0,0,0.7);
    border-radius: $border-radius;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.8s ease-in-out 0s;
    -moz-transition: all 0.8s ease-in-out 0s;
    transition: all 0.8s ease-in-out 0s;
  }

  &__overlay-details {
    display: none;
    position: absolute;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    top: 50%;
    left: 50%;
    opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover &__overlay {
    opacity: 1;
  }

  &:hover &__overlay-details{
    top: 50%;
    left: 50%;
    opacity: 1;
  }

  &__overlay-details h3{
    font-size: 3rem;
    color: $color-white;
    font-weight: 500;
    letter-spacing: 0.15em;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }

  &__overlay-details p {
    color: $color-white;
    font-size: 1.5rem;
  }

  &__image {
    width: 100%;
    height: auto;
  }

  &__backgroundImage {
    display: none;
    max-height: 100%;
    @media only screen and (min-width: $bp-tablet) {
      //max-width: 100%;
      height: 100%;
    }
    @media only screen and (min-width: $bp-desktop) {
      max-width: 120%; // странный трюк - Он решает проблему только в Chrome и Opera. В FF фигня
    }
  }

  &__header {
    height: 22rem;
    overflow: hidden;
    @media only screen and (min-width: $bp-desktop) {
      height: 25rem;
    }
    &--back {
      display: none;
    }
  }

  &__body {
    padding: 3.2rem 2.4rem;
    @media only screen and (min-width: $bp-tablet) {
      //padding: 4rem;
      padding: 3.5rem;
    }
  }

  &__date {
    color: #a6adb4;
  }
}

.card--primary {
  transition: all 0.3s ease;

  .card {
    &__header {
      height: 15.4rem;
      @media only screen and (min-width: $bp-tablet) {
        height: 18rem;
      }
    }
  }
 
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 20px -15px rgba(0, 0, 0, 0.3);
  }
}

.card--textOnly {
  box-shadow: none;
  width: 32.7rem; // mobile
  @media only screen and (min-width: $bp-tablet) {
    width: 28.4rem; 
  }

  @media only screen and (min-width: $bp-desktop) {
    width: 42rem; 
  }

  .card {
    &__header {
      display: none;
    }

    &__body {
      padding: 0;
    }

    &__category {
      display: inline-block;
      text-transform: uppercase;
      color: $color-primary;
      font-size: 1.6rem;
      line-height: 2rem;
      text-align: left;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }
}

.card--withoutText {
  background-color: $color-secondary;
  box-shadow: none;
  margin-top: 0;
  margin-bottom: 0;
  //border: 1px solid red;

  .card {
    &__subtitle {
      display: none;
    }

    &__copy {
      display: none;
    }

    &__figure {
      height: 100%;
      cursor: pointer;
    }

    &__image {
      border-radius: $border-radius;
      height: 18rem;
      @media only screen and (min-width: $bp-desktop) {
        height: 21rem;
      }
    }

    &__header {
      cursor: pointer;
      perspective: 100rem;
      -webkit-perspective: 100rem;
      padding: 2rem 0;

      &--flipper {
        position: relative;
        transition: 1s ease-in-out;
        width: 100%;
        transform-style: preserve-3d;
        height: 18rem;

        @media only screen and (min-width: $bp-desktop) {
          height: 21rem;
        }
      }

      &--flipper:hover {
        transform: rotateY(180deg);
      }

      &--back, 
      &--front {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%; 
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }

      &--back {
        transform: rotateY(180deg);
        background: $color-primary;
        color: $color-white;
        display: inline-block;
        text-align: center;
        border-radius: $border-radius;
      }
      &--text {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        margin: auto;
        padding: 0 3rem;
        font-size: 1.3rem;
      }
    }

    &__title {
      line-height: normal;
    }

    &__body {
      padding: 0 0 2rem 0;
      background-color: $color-secondary;
    }
  }
}

.card--fullImage {
  height: 30rem;
  position: relative;

  @media only screen and (min-width: $bp-tablet) {
    height: 43rem;
    width: 60.8rem;
  }

  @media only screen and (min-width: $bp-desktop) {
    width: 76rem;
  }

  .card {
    &__image {
      display: none;
    }


    &__backgroundImage {
      display: inline-block;
      position:absolute;
      top:50%;
      left:50%;

      /* shifts image so that center of image is in center of container */
      transform:translateX(-50%) translateY(-50%);

      /* ensures image fully covers the parent element */
      width:auto;
      height:auto;
      min-width:100%;
      min-height:100%;
    }

    &__category {
      color: #fff;
      display: inline-block;
      font-size: 1.6rem;
      font-weight: bold;
      line-height: 2rem;
      margin-bottom: 3rem;
      text-transform: uppercase;
      @media only screen and (min-width: $bp-tablet) {
        margin-bottom: 21rem;
      }
    }

    &__title {
      color: #fff;
      font-size: 2.4rem;
      line-height: 3.4rem;
    }

    &__subtitle {
      color: #fff;
      font-size: 1.6rem;
      line-height: 2.6rem;
    }

    &__overlay {
      display: block;
      transition: all 0.8s ease-in-out 0s;
    }

    &__overlay-details {
      display: block;
      transition: all 0.8s ease-in-out 0s;
    }

    &__header {
      height: 43rem;
    }

    &__body {
      position: absolute;
      opacity: 1;
      transition: all .3s linear 0s;
    }

    &__date {
      color: #cbd0d3;
    }
  }
}

.card--fullImage:hover {
  .card__body {
    opacity: 0;
  }
}

.fadeIn-top{
  top: 20%;
}

</style>
