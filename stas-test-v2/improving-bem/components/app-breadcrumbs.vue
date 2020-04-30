<template>
    <div class="app-breadcrumbs">
        <div class="back-btn"></div>

        <div class="path-and-settings">
          <div class="path-and-settings__icon"></div>
          <div class="path-and-settings__path">
            <span class="path-and-settings__path--root">
              Story &nbsp; / &nbsp;</span
            >
            <span class="path-and-settings__path--page"> World News </span>
          </div>
        </div>

        <div class="app-breadcrumbs__settings-icon-wrapper">
          <div class="app-breadcrumbs__settings-icon"></div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.app-breadcrumbs {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.6rem;

  @media only screen and (min-width: $bp-tablet) {
    margin-bottom: 2rem;
    padding: 0;
  }

  @media only screen and (min-width: $bp-desktop) {
    display: flex;
  }

  color: $color-black;
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 2rem;
  text-transform: uppercase;

  &__settings-icon-wrapper {
    border-radius: $border-radius;
    border: 2px solid $color-grey-light-1;
    padding: 1rem;
  }

  &__settings-icon {
    height: 1.6rem;
    width: 1.6rem;

    background-image: url("../assets/img/svg/equalizer.svg");
    background-position: center;
    background-size: cover;

    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url("../assets/img/svg/equalizer.svg");
      -webkit-mask-size: cover;
      background-color: #575f66;
      background-image: none;
      mask-image: url("../assets/img/svg/equalizer.svg");
      mask-size: cover;
    }
  }
}
.back-btn {
  @media only screen and (min-width: $bp-tablet) {
    display: none;
  }

  // We can't change color of icon when we adding it this way. So just leave this for older browsers
  background-image: url("../assets/img/svg/arrow-left.svg");
  background-size: cover;
  height: 2.6rem;
  margin-right: 3rem;
  width: 2.6rem;

  @supports (-webkit-mask-image: url()) or (mask-image: url()) {
    -webkit-mask-image: url("../assets/img/svg/arrow-left.svg");
    -webkit-mask-size: cover;
    background-color: $color-black;
    background-image: none;
    mask-image: url("../assets/img/svg/arrow-left.svg");
    mask-size: cover;
  }
}

.path-and-settings {
  display: none;

  @media only screen and (min-width: $bp-tablet) {
    display: flex;
  }

  &__path--page {
    color: $color-grey-dark-2;
  }

  &__icon {
    background-size: cover;
    height: 1.6rem;
    margin-right: 3rem;
    width: 1.6rem;

    // We can't change color of icon when we adding it this way. So just leave this for older browsers
    background-image: url("../assets/img/svg/home.svg");

    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url("../assets/img/svg/home.svg");
      -webkit-mask-size: cover;
      background-color: $color-black;
      background-image: none;
      mask-image: url("../assets/img/svg/home.svg");
      mask-size: cover;
    }
  }
}
</style>