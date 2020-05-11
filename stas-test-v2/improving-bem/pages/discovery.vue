<template>
  <div class="container">
    <mainStory />
    <storiesBlock />
  </div>
</template>

<script>

export default {
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
