<template>
  <div class="main-article">
    <h2 class="main-article__category">World News</h2>
    <h3 class="main-article__title">Amazing places in America to visit.</h3>
    <p class="main-article__text">
      For some reason — this country, this city, this neighborhood, this
      particular street — is the place you are living a majority of your life
      in.
    </p>
    <appButton btnText="Learn more"  />
  </div>
</template>

<script>
import appButton from '~/components/app-button'
export default {
  components: {
    appButton
  }
}
</script>

<style scoped lang="scss">
.main-article {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("../assets/img/mountain.jpg");
  background-position: center; 
  background-size: cover;
  color: $color-white;
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;

  @media only screen and (min-width: $bp-tablet) {
    padding: 8rem;
  }

  @media only screen and (min-width: $bp-desktop) {
    flex-basis: 0;
    flex-grow: 6;
    padding: 14rem;
  }

  @media only screen and (min-width: $bp-large-desktop) {
    flex-basis: 0;
    flex-grow: 6;
    padding: 17rem 24rem 17rem 32rem;
  }

  &__category {
    font-size: 2.4rem;
    font-weight: bold;
    text-transform: uppercase;

    &::after {
      content: "";
      background-color: #fff;
      display: block;
      height: 2px;
      margin-top: 4rem;
    }
  }

  &__title {
    font-size: 2.4rem;
    font-weight: bold;
    margin: 3rem 0 2rem 0;
  }

  &__text {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 3rem;
    text-align: left;
  }
}
</style>