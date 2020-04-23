<template>
  <ul v-if="location === 'header'" class="nav">
    <li class="nav__item">
      <nuxt-link class="nav__link nav__link--active" to="/">Home</nuxt-link>
    </li>
    <li class="nav__item">
      <nuxt-link class="nav__link" to="/discovery">Discovery</nuxt-link>
    </li>
    <li class="nav__item">
      <nuxt-link class="nav__link" to="/world-news">Photos</nuxt-link>
    </li>
    <li class="nav__item">
      <a href="#" class="nav__link">Contact</a>
    </li>
  </ul>

  <div v-else class="allLinks">
    <ul class="nav nav--footer">
      <li class="nav__item">
        <nuxt-link class="nav__link nav__link--footer" to="/">Home</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link class="nav__link nav__link--footer" to="/discovery">Discovery</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link class="nav__link nav__link--footer" to="/world-news">Photos</nuxt-link>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link nav__link--footer">Contact</a>
      </li>
    </ul>

    <ul class="nav nav--footer">
      <li class="nav__item">
        <a href="#" class="nav__link nav__link--footer">About</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link nav__link--footer">Help</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link nav__link--footer">Terms</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link nav__link--footer">Guidlines</a>
      </li>
    </ul>

    <ul class="nav nav--footer">
      <li class="nav__item">
        <a href="#" class="nav__link nav__link--footer">Testimonials</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link nav__link--footer">Advertise</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link nav__link--footer">Integrations</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link nav__link--footer">Careers</a>
      </li>
    </ul>
  </div>
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
@import './assets/scss/mixins.scss';

.allLinks {
  display: flex;
  justify-content: flex-start;
}

.nav {
  display: none; // mobile first
  flex-wrap: wrap;
  list-style: none;
  align-items: center;

  @media only screen and (min-width: $bp-tablet) {
    display: flex;
    padding-right: 2rem;

    &--footer {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
    }
  }

  &__link:link,
  &__link:visited {
    color: $color-menu-links;
    display: block;
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 2rem;
    opacity: 0.5;
    padding: 11px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s;
  }

  &__link--footer:link,
  &__link--footer:visited {
    @include common-link-settings-1;
    font-size: 1.3rem;
    padding: 0.2rem 1rem;
  }

  &__link--side-bar:link,
  &__link--side-bar:visited {
    @include common-link-settings-1;
    font-size: 1.1rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  &__link:hover,
  &__link:active {
    @include common-link-settings-2;
  }

  &__link {
    &--active {
      opacity: 1;
    }
  }
}

.nav__item--active {
  opacity: 0.5;
}

.nav__item--active::before {
  transform: scaleY(1);
  width: 100%;
}
</style>
