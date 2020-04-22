<template>
  <div>
    <appHeader />
    <nuxt />
    <appFooter />
  </div>
</template>

<script>
import appFooter from '~/components/app-footer'
import appHeader from '~/components/app-header'
// import sideBar from '~/components/SideBar'

export default {
  components: {
    appFooter,
    appHeader
  }
}
</script>

<style lang="scss">
html {
  -moz-osx-font-smoothing: grayscale;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  box-sizing: border-box;
  font-family: $font-display;
  font-size: 62.5%; // 10px
  font-weight: 300;
  word-spacing: 1px;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

.container-world-news-page {
  background-color: $color-secondary;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 182rem;
  min-height: 100vh;
}

.container-world-news-page-top {
  @media only screen and (min-width: $bp-tablet) {
    padding: 0 8rem 3rem 8rem;
  }
  display: flex;
  flex-direction: column;
}

.container-world-news-page-bottom {
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: $color-grey-dark-1;
  opacity: 0.5; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: $color-grey-dark-1;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: $color-grey-dark-1;
}

.input:focus {
  border: 1px solid red !important;
  box-shadow: 0 0 10px red !important;
  outline: none !important;
}
</style>
