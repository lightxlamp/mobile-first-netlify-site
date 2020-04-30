<template>
  <div class="app-email">
    <div class="app-email__field">
      <input class="app-email__input" type="email" placeholder="Email" />
      <i class="app-email__icon-box"></i>
    </div>
    <p class="app-email__text">Stay in touch with us for the freshest products!</p>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/scss/mixins.scss';

.app-email {
  &__field {
    display: flex;
  }

  &__input {
    background-color: $color-grey-dark-2;
    border-radius: $border-radius;
    border: 1px solid $color-grey-dark-1;
    color: $color-grey-dark-1;
    max-width: 45rem;
    padding: 1rem;
    width: 100%;

    @media only screen and (min-width: $bp-desktop) {
      width: 26rem;
    }
  }

  &__text {
    color: $color-grey-dark-1;
    font-size: 1.1rem;
    margin-top: 1rem;
  }

  &__icon-box {
    @include icon-box-settings;
    height: 2rem;
    background-image: url('~assets/img/svg/location-arrow.svg');
    margin: 0.8rem 0 0 -2.5rem;

    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url('~assets/img/svg/location-arrow.svg');
      @include support-settings;
      background-color: $color-white;
      mask-image: url('~assets/img/svg/location-arrow.svg'); 
    }
  }
}
</style>
