<template>
    <div class="next-story">
        <div class="next-story__left">
            <div class="next-story__next">Next Story</div>
            <div class="next-story__title">Morbi eleifend a libero</div>
            <div class="next-story__text">
                Quisque viverra interdum velit, et cursus magna sagittis in. In
                dui dui.
            </div>
        </div>

        <div class="next-story__right">
            <div class="next-story__icon"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.next-story {
  display: flex;
  justify-content: space-between;
  transition: all .8s;
  text-align: left;

  @media only screen and (min-width: $bp-tablet) {
    border-radius: $border-radius;
    border: 2px dashed rgba($color-white, 0.5);
    padding: 2rem;
    width: 28.4rem;
  }

  @media only screen and (min-width: $bp-desktop) {
    padding: 3rem;
    width: 36rem;
  }

  @media only screen and (min-width: $bp-large-desktop) {
    width: 44rem;
  }

  &__left {
    display: flex;
    flex-direction: column;
  }

  &__right {
    align-items: center;
    display: flex;

    @media only screen and (min-width: $bp-desktop) {
      align-items: flex-start;
    }
  }

  &__next {
    color: $color-primary;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 2rem;
    margin-right: 1rem;
    text-transform: uppercase;
  }

  &__icon {
    background-size: cover;
    height: 1.6rem;
    margin-right: 0.5rem;
    width: 1.6rem;
    background-image: url("../assets/img/svg/navigate_next.svg");
    margin-top: 2px;

    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url("../assets/img/svg/navigate_next.svg");
      -webkit-mask-size: cover; // this allowed us to change height and width from 2 px to 1px and icon still visible
      background-image: none;
      mask-size: cover; // mask allow us to see background. (throught specified shape (mask-image))
      background-color: $color-white;
      mask-image: url("../assets/img/svg/navigate_next.svg");
    }
  }

  &__title {
    display: none;

    @media only screen and (min-width: $bp-tablet) {
      color: $color-white;
      display: inline-block;
      font-size: 1.6rem;
      font-weight: bold;
      line-height: 2rem;
      padding-top: 0.5rem;
    }
  }

  &__text {
    display: none;

    @media only screen and (min-width: $bp-desktop) {
      color: $color-white;
      display: inline-block;
      font-size: 1.6rem;
      line-height: 2.6rem;
      font-weight: 400;
      padding-top: .5rem;
    }
  }
}

.next-story:hover {
  background-color: rgba($color-black, $alpha: .4);
  @supports (-webkit-backdrop-filter: url()) or (backdrop-filter: url()) {
    background-color: transparent;
    backdrop-filter: blur(10px);
  }
}
  
</style>