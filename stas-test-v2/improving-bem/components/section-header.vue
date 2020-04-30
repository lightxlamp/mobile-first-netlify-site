<template>
  <div class="section-header" v-if="title">
    <h2 class="section-header__title">{{ title }}</h2>
    <navigationArrows />
  </div>
</template>

<script>
import navigationArrows from "~/components/navigation-arrows";

export default {
  components: {
    navigationArrows
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="scss">
.section-header {
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;

  &__title {
    color: $color-black;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 2rem;
    text-transform: uppercase;
    background: url('../assets/img/text-bg-emo.png') no-repeat;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: moveBackground 90s linear infinite;
    -webkit-animation: moveBackground 90s linear infinite;
  }
}

@keyframes moveBackground {
  0% {
    background-position: 0% 30%;
  }

  100% {
    background-position: 100% 50%;
  }
}
</style>
