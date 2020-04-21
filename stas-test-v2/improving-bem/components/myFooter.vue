<template>
  <footer class="footer">
    <div class="footer__column-1">
      <div class="logo logo--white">Logo</div>
      <div class="footer__nav">
        <ul class="nav nav--footer">
          <li class="nav__item">
            <nuxt-link class="nav__link nav__link--footer" to="/"
              >Home</nuxt-link
            >
          </li>
          <li class="nav__item">
            <nuxt-link class="nav__link nav__link--footer" to="/discovery"
              >Discovery</nuxt-link
            >
          </li>
          <li class="nav__item">
            <nuxt-link class="nav__link nav__link--footer" to="/world-news"
              >Photos</nuxt-link
            >
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
    </div>

    <div class="footer__column-2">
      <div class="user-email-box">
        <div class="user-email-box__text-box">
          <input class="email-field" type="email" placeholder="Email" />
          <div class="user-email-box__icon-box"></div>
        </div>
        <p class="user-email-box__text">
          Stay in touch with us for the freshest products!
        </p>
      </div>

      <socialNetworks />
    </div>
  </footer>
</template>

<script>
import socialNetworks from '~/components/SocialNetworks'

export default {
  components: {
    socialNetworks
  }
}
</script>

<style lang="scss">
.footer {
  background-color: $color-grey-dark-2;
  display: none;
  padding: 6rem 8rem;

  @media only screen and (min-width: $bp-tablet) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: $bp-desktop) {
    display: flex;
    flex-direction: row;
    padding: 6rem 14rem;
  }

  @media only screen and (min-width: $bp-large-desktop) {
    padding: 6rem 32rem;
  }

  &__column-1 {
    display: flex;
    flex: 1 1 auto;

    & > div {
      flex-basis: 0;
      flex-grow: 1;
      padding: 0 2.4rem 3.4rem 2.4rem;
    }
  }

  &__column-2 {
    align-items: flex-end;
    @media only screen and (min-width: $bp-desktop) {
      align-items: flex-start;
    }
    display: flex;
    flex: 1 1 auto;

    & > div {
      flex-basis: 0;
      flex-grow: 1;
      padding: 0 2.4rem 3.4rem 2.4rem;
    }
  }

  &__nav {
    display: flex;
    justify-content: flex-start;
  }
}
</style>
