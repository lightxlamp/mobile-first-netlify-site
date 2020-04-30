<template>
    <div class="items-navigation">
      <i class="items-navigation__left-arrow"></i>
      <i class="items-navigation__right-arrow"></i>
    </div>
</template>

<style scoped lang="scss">
@import '../assets/scss/mixins.scss';

.items-navigation {
  display: flex;
  cursor: pointer;

  &__left-arrow { 
    @include icon-box-settings;
    background-image: url("../assets/img/svg/navigate_before.svg");
    margin-right: 0.5rem;

    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url("../assets/img/svg/navigate_before.svg");
      @include support-settings;
      background-color: $color-black;
      mask-image: url("../assets/img/svg/navigate_before.svg"); 
    }
  }

  &__right-arrow {
    @include icon-box-settings;
    background-image: url("../assets/img/svg/navigate_next.svg");

    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url("../assets/img/svg/navigate_next.svg");
      @include support-settings;
      background-color: $color-black;
      mask-image: url("../assets/img/svg/navigate_next.svg");
    }
  }
}
</style>