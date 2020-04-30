<template>
  <div class="logged-in-user">
    <img src="../assets/img/blonde_girl.jpg" alt="User's avatar" class="logged-in-user__photo" />
  </div>
</template>

<style scoped lang="scss">
.logged-in-user {
  &__photo {
    display: block;
    border-radius: 50%;
    width: 1.8rem;
    border: .2rem solid transparent;
    transition: all 0.6s;
    @media only screen and (min-width: $bp-tablet) {
      width: 3rem;
    }
  }
  &__photo:hover {
    border: .2rem solid $color-primary;
  }
}
</style>
