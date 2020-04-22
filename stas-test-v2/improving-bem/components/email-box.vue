<template>
  <div class="user-email-box">
    <div class="user-email-box__text-box">
      <input class="email-field" type="email" placeholder="Email" />
      <div class="user-email-box__icon-box"></div>
    </div>
    <p class="user-email-box__text">
      Stay in touch with us for the freshest products!
    </p>
  </div>
</template>

<style scoped lang="scss">
@import './assets/scss/mixins.scss';

.user-email-box {
  &__text-box {
    display: flex;
  }

  &__text {
    color: $color-grey-dark-1;
    font-size: 1.1rem;
    margin-top: 1rem;
  }

  &__icon-box {
    @include icon-box-settings;
    height: 2rem;
    // We can't change color of icon when we adding it this way. So just leave this for older browsers
    background-image: url('~assets/img/svg/location-arrow.svg');
    margin: 0.8rem 0 0 -2.5rem;

    // for newer browsers
    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url('~assets/img/svg/location-arrow.svg');
      @include support-settings;
      background-color: $color-white;
      mask-image: url('~assets/img/svg/location-arrow.svg'); // after 3 years mask-image, without prefix, still does not work in chrome
    }
  }
}

.email-field {
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
</style>
