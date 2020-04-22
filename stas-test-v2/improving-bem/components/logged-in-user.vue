<template>
  <div class="logged-in-user">
    <img
      src="../assets/img/blonde_girl.jpg"
      alt="User photo"
      class="logged-in-user__photo"
    />
  </div>
</template>

<style scoped lang="scss">
.logged-in-user {
  &__photo {
    border-radius: 50%;
    height: auto;
    max-width: 100%;
    width: 1.6rem;
    @media only screen and (min-width: $bp-tablet) {
      width: 30px;
    }
  }
}
</style>
