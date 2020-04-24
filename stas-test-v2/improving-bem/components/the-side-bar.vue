<template>
  <div class="d"></div>
  <!-- <div
    class="side-bar"
    v-show="isSideBarVisible"
    v-click-outside="onClickOutside"
  >
    <div class="side-bar__body">
      <logo location="sidebar" />

      <nav class="side-nav">
        <div class="side-nav__item">
          <div class="side-nav__home"></div>
          <nuxt-link class="nav__link nav__link--active side-nav__link" to="/"
            >Home</nuxt-link
          >
        </div>

        <div class="side-nav__item">
          <div class="side-nav__discovery"></div>
          <a href="#" class="nav__link side-nav__link">Discovery</a>
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
          <div class="side-nav__user logged-in-user">
            <img
              src="../assets/img/blonde_girl.jpg"
              alt="User photo"
              class="logged-in-user__photo"
            />
          </div>
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
        <SocialNetworks />
      </div>
    </div>
  </div>-->
</template>

<script>
// import SocialNetworks from '~/components/social-networks'
// import vClickOutside from 'v-click-outside'
// import logo from '~/components/logo'

// export default {
//   components: {
//     logo,
//     SocialNetworks
//   },

//     directives: {
//       clickOutside: vClickOutside.directive
//     },

//   computed: {
//     isSideBarVisible() {
//       return this.$store.state.isSideBarVisible
//     }
//   },

//   methods: {
//     onClickOutside() {
//       if (this.$store.state.isSideBarVisible == true) {
//         this.$store.commit('hideSideBar')
//       }
//     }
//   }
// }
</script>
