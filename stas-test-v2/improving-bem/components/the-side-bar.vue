<template>
<!-- v-click-outside="onClickOutside" -->
  <div
    class="side-bar"
    v-show="isSideBarVisible"
    v-click-outside="externalClick"
  >
    <div class="side-bar__body">
      <appLogo location="sidebar" />

      <nav class="side-nav">
        <div class="side-nav__item">
          <div class="side-nav__home"></div>
          <nuxt-link class="nav__link nav__link--active side-nav__link" to="/"
            >Home</nuxt-link
          >
        </div>

        <div class="side-nav__item">
          <div class="side-nav__discovery"></div>
          <nuxt-link class="nav__link side-nav__link" to="/discovery"
            >Discovery</nuxt-link
          >
        </div>

        <div class="side-nav__item">
          <div class="side-nav__photos"></div>
          <nuxt-link class="nav__link side-nav__link" to="/world-news"
            >Photos</nuxt-link
          >
        </div>

        <div class="side-nav__item">
          <div class="side-nav__contact"></div>
          <a href="#" class="nav__link side-nav__link">Contact</a>
        </div>

        <div class="side-nav__item">
          <loggedInUser />
          <a href="#" class="nav__link side-nav__link">Profile</a>
        </div>
      </nav>
    </div>

    <div class="side-bar__footer">
      <div class="side-bar__footer-links">
        <ul class="nav nav--side-bar">
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">About</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">Help</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">Terms</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar nmb">Guidlines</a>
          </li>
        </ul>

        <ul class="nav nav--side-bar">
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">Testimonials</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">Advertise</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar">Integrations</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link nav__link--side-bar nmb">Careers</a>
          </li>
        </ul>
      </div>
      <div class="side-bar__footer-social">
        <socialNetworks />
      </div>
    </div>
  </div>
</template>

<script>
import appLogo from '~/components/app-logo'
import loggedInUser from '~/components/logged-in-user'
import socialNetworks from '~/components/social-networks'
import vClickOutside from 'v-click-outside'

export default {
  components: {
    appLogo,
    loggedInUser,
    socialNetworks
  },

  computed: {
    isSideBarVisible() {
      return this.$store.state.isSideBarVisible
    }
  },

  directives: {
    clickOutside: vClickOutside.directive
  },

  methods: {
    externalClick (event) {
      if(this.isSideBarVisible === true) {
        this.$store.commit('hideSideBar')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin icon-box-settings {
  background-size: cover;
  height: 1.6rem;
  width: 1.6rem;
}

@mixin support-settings {
  -webkit-mask-size: cover;
  background-image: none;
  mask-size: cover; // mask allow us to see background. (throught specified shape (mask-image))
}

.side-bar {
  background-color: #f6f8f9;
  box-shadow: 0px 0px 60px #00000099;
  left: 0;
  position: fixed;
  top: 0;
  width: 29rem;
  z-index: 10;

  @media only screen and (min-width: $bp-tablet) {
    display: none; // hides automatically at higher resolutions. 1 query is enough
  }

  &__body {
    margin-bottom: 10rem;
    padding: 4rem;
  }

  &__footer {
    background-color: $color-black;
    display: flex;
    flex-direction: column;
    opacity: 0.23;
    padding: 4rem 0rem 4rem 4rem;
  }

  &__footer-links {
    display: flex;
  }

  &__footer-social {
    // Bad way. Ask about this. TODO
    // и так решил
    margin-top: 6rem;
    padding-right: 8rem; // У компонента social justify-content стоит flex-end. И я не могу flex-start поставить
  }
}

.side-nav {
  margin-top: 8rem;

  &__item {
    display: flex;
    margin-top: 4rem;
  }

  &__link:link,
  &__link:visited {
    padding: 0 0 0 3rem !important;
  }

  &__home {
    @include icon-box-settings;
    // We can't change color of icon when we adding it this way. So just leave this for older browsers
    background-image: url("../assets/img/svg/home.svg");

    // for newer browsers
    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url("../assets/img/svg/home.svg");
      @include support-settings;
      background-color: $color-menu-links;
      mask-image: url("../assets/img/svg/home.svg"); // after 3 years mask-image, without prefix, still does not work in chrome
    }
  }

  &__discovery {
    @include icon-box-settings;
    // We can't change color of icon when we adding it this way. So just leave this for older browsers
    background-image: url("../assets/img/svg/compass2.svg");
    opacity: 0.5;

    // for newer browsers
    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url("../assets/img/svg/compass2.svg");
      @include support-settings;
      background-color: $color-menu-links;
      mask-image: url("../assets/img/svg/compass2.svg"); // after 3 years mask-image, without prefix, still does not work in chrome
    }
  }

  &__photos {
    @include icon-box-settings;
    // We can't change color of icon when we adding it this way. So just leave this for older browsers
    background-image: url("../assets/img/svg/image.svg");
    opacity: 0.5;

    // for newer browsers
    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url("../assets/img/svg/image.svg");
      @include support-settings;
      background-color: $color-menu-links;
      mask-image: url("../assets/img/svg/image.svg"); // after 3 years mask-image, without prefix, still does not work in chrome
    }
  }

  &__contact {
    @include icon-box-settings;
    // We can't change color of icon when we adding it this way. So just leave this for older browsers
    background-image: url("../assets/img/svg/envelop.svg");
    opacity: 0.5;

    // for newer browsers
    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url("../assets/img/svg/envelop.svg");
      @include support-settings;
      background-color: $color-menu-links;
      mask-image: url("../assets/img/svg/envelop.svg"); // after 3 years mask-image, without prefix, still does not work in chrome
    }
  }
}

.nav {
  display: none; // mobile first
  &__side-bar {
    display: flex;
  }
  flex-wrap: wrap;
  list-style: none;

  &--side-bar {
    display: flex !important;
  }

  @media only screen and (min-width: $bp-tablet) {
    & {
      display: flex;
      padding-right: 2rem;
    }

    &--footer {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
    }
  }

  align-items: center;

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

  @mixin common-link-settings-1 {
    color: $color-grey-dark-1;
    opacity: 1;
    text-transform: none;
  }

  @mixin common-link-settings-2 {
    background-color: rgba(#fff, 0.05);
    opacity: 1;
    transform: translateY(-3px);
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
