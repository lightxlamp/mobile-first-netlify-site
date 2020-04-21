<template>
  <div>
    <header class="header">
      <div class="button-or-menu">
        <input id="navi-toggle" type="checkbox" class="navigation__checkbox" />

        <label
          for="navi-toggle"
          class="navigation__button"
          @click="showSideBar"
        >
          <span class="navigation__icon">&nbsp;</span>
        </label>

        <ul class="nav">
          <li class="nav__item">
            <nuxt-link class="nav__link nav__link--active" to="/"
              >Home</nuxt-link
            >
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
      </div>

      <div class="logo logo--header">Logo</div>

      <div class="logged-in-user">
        <img
          src="../assets/img/blonde_girl.jpg"
          alt="User photo"
          class="logged-in-user__photo"
        />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    showSideBar() {
      if (this.$store.state.isSideBarVisible === false) {
        this.$store.commit('showSideBar')
      }
    }
  }
}
</script>

<style lang="scss">
.header {
  align-items: center;
  background-color: $color-secondary;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  width: 100%;

  &__logo {
    color: $color-grey-dark-2;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 2rem;
    text-transform: uppercase;

    @media only screen and (min-width: $bp-tablet) {
      & {
        color: $color-primary;
      }
    }
  }

  @media only screen and (min-width: $bp-tablet) {
    & > :nth-child(1) {
      order: 2;
    }

    & > :nth-child(3) {
      order: 2;
    }
  }

  @media only screen and (min-width: $bp-tablet) {
    & > :nth-child(1) {
      margin-left: auto; // to move footer-navigation to right side. To user avatar
    }
  }
}

.nav-btn {
  background-color: $color-black;
  border-radius: 0;
  border: none;
  cursor: pointer;
  height: 1.2px;
  width: 1rem;

  @media only screen and (min-width: $bp-tablet) {
    & {
      display: none;
    }
  }

  &::before {
    content: '';
    background-color: $color-black;
    display: block;
    height: 1.2px;
    width: 0.6rem;
  }

  &::after {
    content: '';
    background-color: $color-black;
    display: block;
    height: 1.2px;
    width: 1rem;
  }

  &::before {
    transform: translateY(-0.45rem);
  }

  &::after {
    transform: translateY(-0.9rem);
  }
}

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

.navigation {
  &__checkbox {
    display: none;
  }

  &__button {
    background-color: $color-secondary;
    cursor: pointer;
    display: block;
    @media only screen and (min-width: $bp-tablet) {
      display: none;
    }
    height: 2rem;
    width: 1.7rem;
  }

  // Functionality
  &__checkbox:checked ~ &__background {
    transform: scale(80);
  }

  &__checkbox:checked ~ &__nav {
    opacity: 1;
    width: 100%;
  }

  // Icon
  &__icon {
    margin-top: 1rem;
    position: relative;

    & {
      width: 1rem;
    }

    &,
    &::before,
    &::after {
      background-color: $color-black;
      display: inline-block;
      height: 2px; // width of hamburger menu single line
    }

    &::before,
    &::after {
      // in order to appear on the page ::before and ::after need their "content" property be defined
      //transition: all .2s;
      content: '';
      left: 0;
      position: absolute;
      width: 1.6rem;
    }

    &::before {
      top: -0.6rem;
      //The ::before pseudo-element can be used to insert some content before the content of an element.
      //EG: inserting an image before the content of each <h1> element:
    }

    &::after {
      top: 0.6rem;
    }
  }
}
</style>
