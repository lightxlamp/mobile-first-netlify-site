<template>
    <section class="app-stories">
        <div class="app-story">
          <appAuthor 
            avatarFile="boy.jpg"
            authorName="Jonathan Walker"
            modifier="story"
          />

          <div class="app-story__text">
            In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla
            faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa
            vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est
            rhoncus massa
          </div>

          <dateTimeAuthor time="2m ago" />
        </div>

        <div class="app-story">
          <appAuthor 
            avatarFile="girl.jpg"
            authorName="Brenda Mercer"
            modifier="story"
          />

          <div class="app-story__text">
            In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla
            faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa
            vitae lobortis. Duis consequat, nunc a pretium imperdiet.
          </div>

          <dateTimeAuthor time="1h ago" />
        </div>

        <videoStory src="https://www.youtube.com/embed/oSmUI3m2kLk"/>
    </section>
</template>

<script>
import appAuthor from '~/components/app-author'
import dateTimeAuthor from '~/components/date-time-author'
import videoStory from '~/components/video-story'

export default {
   components: {
    appAuthor,
    dateTimeAuthor,
    videoStory
  }
}
</script>

<style lang="scss" scoped>
.app-stories {
  background-color: #f6f8f9;
  flex-basis: 0;
  flex-grow: 2;
  padding: 1rem 2.4rem 2.4rem 2.4rem;

  @media only screen and (min-width: $bp-tablet) {
    padding: 2.4rem 0 0 0;
  }

  @media only screen and (min-width: $bp-desktop) {
    padding: 0 0 0 4rem;
  }
}

.app-story {
  margin-bottom: 3.4rem;

  &__text {
    color: $color-black;
    font-size: 1.6rem;
    font-style: oblique;
    font-weight: 400;
    line-height: 3rem;
    margin-top: 1rem;
    text-align: left;
  }
}
</style>