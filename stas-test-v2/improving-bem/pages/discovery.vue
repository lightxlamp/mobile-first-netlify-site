<template>
  <div class="container">
    <mainStory />
    <storiesBlock />
  </div>
</template>

<script>

import appArticlesList from '~/components/app-articles-list'
import dateTimeAuthor from '~/components/date-time-author'
import mainStory from "~/components/main-story"
import sectionHeader from "~/components/section-header"
import storiesBlock from "~/components/stories-block"

export default {
  components: {
    appArticlesList,
    mainStory,
    sectionHeader,
    storiesBlock
  },

  computed: {
    happening_now_articles_column_1() {
      return this.$store.state.happening_now_articles_column_1;
    },
  },

  head: {
    title: "Discovery page"
  }
};
</script>
