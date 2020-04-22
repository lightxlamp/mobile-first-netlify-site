<template>
  <div v-if="location === 'header'" class="logo logo--header">Logo</div>
  <div v-else-if="location === 'sidebar'" class="logo logo--sidebar">Logo</div>
  <div v-else class="logo logo--footer">Logo</div>
</template>

<script>
export default {
  props: {
    location: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 2rem;
  text-transform: uppercase;

  &--header {
    color: $color-grey-dark-2;

    @media only screen and (min-width: $bp-tablet) {
      color: $color-primary;
    }
  }

  &--footer {
    color: $color-white;
  }

  &--sidebar {
    color: $color-primary;
  }
}
</style>
