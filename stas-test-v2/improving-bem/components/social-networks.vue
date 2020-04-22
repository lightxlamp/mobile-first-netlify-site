<template>
  <ul class="social-networks">
    <li class="social-networks__instagram"></li>
    <li class="social-networks__twitter"></li>
    <li class="social-networks__facebook"></li>
    <li class="social-networks__web"></li>
  </ul>
</template>

<style scoped lang="scss">
@import './assets/scss/mixins.scss';

.social-networks {
  display: flex;
  justify-content: flex-end;

  & > li {
    display: inline-block;
  }

  & > li:not(:last-child) {
    margin-right: 3.2rem;
  }

  &__instagram {
    @include icon-box-settings;
    // We can't change color of icon when we adding it this way. So just leave this for older browsers
    background-image: url('../assets/img/svg/instagram.svg');

    // for newer browsers
    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url('../assets/img/svg/instagram.svg');
      @include support-settings;
      background-color: $color-white;
      mask-image: url('../assets/img/svg/instagram.svg'); // after 3 years mask-image, without prefix, still does not work in chrome
    }
  }

  &__twitter {
    @include icon-box-settings;
    background-image: url('../assets/img/svg/twitter.svg');

    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url('../assets/img/svg/twitter.svg');
      @include support-settings;
      background-color: $color-white;
      mask-image: url('../assets/img/svg/twitter.svg');
    }
  }

  &__facebook {
    @include icon-box-settings;
    background-image: url('../assets/img/svg/facebook.svg');

    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url('../assets/img/svg/facebook.svg');
      @include support-settings;
      background-color: $color-white;
      mask-image: url('../assets/img/svg/facebook.svg');
    }
  }

  &__web {
    @include icon-box-settings;
    background-image: url('../assets/img/svg/earth.svg');

    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url('../assets/img/svg/earth.svg');
      @include support-settings;
      background-color: $color-white;
      mask-image: url('../assets/img/svg/earth.svg');
    }
  }
}
</style>
