<template>
    <section class="stories-block">
      <textOnlyStories />
      <appStories />
    </section>
</template>

<script>
import appStories from '~/components/app-stories'
import textOnlyStories from '~/components/text-only-stories'

export default {
    components: {
        appStories,
        textOnlyStories
    }
}
</script>

<style lang="scss" scoped>
.stories-block {
  @media only screen and (min-width: $bp-tablet) {
    padding: 6rem 8rem 0rem;
  }
  @media only screen and (min-width: $bp-desktop) {
    display: flex;
    padding: 10rem 14rem 0 14rem;
  }
}
</style>