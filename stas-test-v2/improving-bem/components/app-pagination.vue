<template>
    <section class="pagination">
        <ul class="pagination__ul">
          <li class="pagination__li pagination__li--active">01</li>
          <li class="pagination__li">02</li>
          <li class="pagination__li">03</li>
          <li class="pagination__li">04</li>
          <li class="pagination__li">05</li>
          <li class="pagination__li">06</li>
          <li class="pagination__li pagination__li--more"></li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';

.pagination {
  border-top: 2px solid $color-grey-light-1;
  margin: 0rem 2.4rem 3rem; /* top | horizontal | bottom */
  padding-top: 3rem;

  @media only screen and (min-width: $bp-tablet) {
    margin: 0rem 0rem 3rem;
  }

  color: $color-grey-dark-2;
  font-size: 1.1rem;
  line-height: 2rem;

  &__ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  &__ul > li:not(:first-child) {
    margin-left: 2.4rem;
  }

  &__li {
    padding-bottom: 1rem;

    &--more {
      @include icon-box-settings;
      background-image: url("../assets/img/svg/dots-three-horizontal.svg");
      margin-top: 2px;

      @supports (-webkit-mask-image: url()) or (mask-image: url()) {
        -webkit-mask-image: url("../assets/img/svg/dots-three-horizontal.svg");
        @include support-settings;
        background-color: $color-black;
        mask-image: url("../assets/img/svg/dots-three-horizontal.svg");
      }
    }
  }

  &__li--active {
    border-bottom: 2px solid $color-primary;
    color: $color-black;
    font-weight: bold;
  }
}
</style>