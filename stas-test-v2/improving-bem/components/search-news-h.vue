<template>
  <section class="search-news">
    <div class="search-news-main">
      <div class="search-news-main__title">World news</div>
      <div class="search-news-main__line"></div>
      <div class="search-news-main__text">
        Stay informed without overdosing on the news vix id nullam detracto
        vidit.
      </div>

      <appAuthor
        avatarFile="boy.jpg"
        authorName="Jonathan Walker"
        modifier="bordered"
        hideName="true"
      />
    </div>

    <div class="search-news-fields">
      <div class="input-box">
        <div class="input-box__title">Select a date</div>
        <input class="input-box__field" type="text" placeholder="Select..." />
        <div class="input-box__icon input-box__icon--down"></div>
      </div>

      <div class="input-box">
        <div class="input-box__title">Enter the first keywords</div>
        <input class="input-box__field" />
      </div>
      <appButton btnText="Search" startPosition="down" />
    </div>
  </section>
</template>

<script>
import appAuthor from '~/components/app-author'
import appButton from '~/components/app-button'
export default {
  components: {
    appAuthor,
    appButton
  }
}
</script>

<style lang="scss" scoped>
.search-news {
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: $bp-tablet) {
    border-radius: $border-radius;
    overflow: hidden;
  }
  @media only screen and (min-width: $bp-desktop) {
    display: flex;
    flex-direction: row;
  }
}

.search-news-main {
  align-items: center;
  color: $color-white;
  display: flex;
  flex-direction: column;
  padding: 9rem 2.4rem;

  @media only screen and (min-width: $bp-desktop) {
    flex-basis: 0;
    flex-grow: 1;
    padding: 15rem 11rem;
  }

  background-image: url('../assets/img/yellow_mountain.jpg');
  background-position: center;
  background-size: cover;

  &__title {
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 4.2rem;
    text-align: center;
    text-transform: uppercase;
  }

  &__line {
    border: 2px solid $color-primary;
    height: 0;
    margin-top: 3rem;
    width: 4rem;
  }

  &__text {
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 2.6rem;
    margin: 3rem 0;
    max-width: 44rem;
    text-align: center;
    word-break: break-all;
  }

  &__author {
    margin-top: 3rem;
  }
}

.search-news-fields {
  border-bottom-left-radius: $border-radius;
  background-color: $color-white;
  border-bottom-right-radius: $border-radius;
  padding: 4rem 2.4rem;

  @media only screen and (min-width: $bp-tablet) {
    padding: 8rem;
  }

  @media only screen and (min-width: $bp-desktop) {
    flex-basis: 0;
    flex-grow: 1;
    padding: 12rem 11rem 14rem;
  }

  &__btn {
    width: 15rem;
    text-align: center;
  }
}

.input-box {
  color: $color-black;
  //font-family: "Acumin Pro";
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 2rem;
  position: relative;
  text-align: left;

  &__title {
    margin-bottom: 1rem;
  }

  &__field {
    border-radius: $border-radius;
    border: 2px solid $color-grey-light-1;
    height: 4rem;
    margin-bottom: 4rem;
    padding: 1.4rem;
    width: 100%;
  }

  &__icon {
    background-size: cover;
    border: 2px solid red;
    height: 1.6rem;
    margin-right: 3rem;
    position: absolute;
    right: -1rem;
    top: 4rem;
    width: 1.6rem;
    z-index: 10;

    &--down {
      background-image: url('../assets/img/svg/chevron-thin-down.svg');

      @supports (-webkit-mask-image: url()) or (mask-image: url()) {
        -webkit-mask-image: url('../assets/img/svg/chevron-thin-down.svg');
        -webkit-mask-size: cover;
        background-color: $color-grey-dark-2;
        background-image: none;
        mask-image: url('../assets/img/svg/chevron-thin-down.svg');
        mask-size: cover;
      }
    }
  }
}
</style>