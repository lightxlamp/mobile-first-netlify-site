<template>
  <div class="container">
    <section class="main-article-and-news">
      <mainArticle />

      <div class="news">
        <div class="news__wrapper">
          <sectionHeader title="More news"/> 

          <appArticlesList
            :articles="more_news_articles"
            articlesType="textOnly"
            containerClass="news__content"
          />
        </div>
      </div>
    </section>

    <section class="trending">
      <sectionHeader title="Trending"/> 
      <appArticlesList 
          :articles="trending_articles" 
          articlesType="primary"
          :withImages="true"
          containerClass="trending__content" 
      />
    </section>

    <section class="happening-now">
      <sectionHeader title="Happening Now"/> 
      <div class="happening-now__content-wrapper">
        <appArticlesList 
          :articles="happening_now_articles_column_1" 
          :withImages="true"
          articlesType="fullImage"
          containerClass="happening-now__column-1" 
        />

        <appArticlesList 
          :articles="happening_now_articles_column_2" 
          :withImages="true"
          articlesType="withoutText"
          containerClass="happening-now__column-2" 
        />
      </div>
    </section>
  </div>
</template>

<script>
import appArticlesList from '~/components/app-articles-list'
import dateTimeAuthor from '~/components/date-time-author'
import mainArticle from "~/components/main-article"
import sectionHeader from "~/components/section-header"

export default {
  components: {
    appArticlesList,
    dateTimeAuthor ,
    mainArticle,
    sectionHeader
  },
  computed: {
    imgSourceset() {
      return `${require(`@/assets/img/bridge.jpg`)}`
    },
    imgSourcesetSmall() {
      return `${require(`@/assets/img/bridge_300.jpg`)}`
    },
    happening_now_articles_column_1() {
      return this.$store.state.happening_now_articles_column_1;
    },
    happening_now_articles_column_2() {
      return this.$store.state.happening_now_articles_column_2;
    },
    more_news_articles() {
      return this.$store.state.more_news_articles;
    },
    trending_articles() {
      return this.$store.state.trending_articles;
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/mixins.scss';

.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $color-secondary;
  max-width: 182rem;
  min-width: 34rem;
  min-height: 100vh;
  overflow: auto;
  padding-bottom: 8rem;
}

.trending {
  &__content {
    & > article:last-child {
      display: none; // To hide the third card on a lower resolutions

      @media only screen and (min-width: $bp-desktop) {
        display: inline-flex;
      }
    }

    @media only screen and (min-width: $bp-tablet) {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;

      & > article:not(:first-child)  {
        margin-left: 4rem;
      }
    }
  }
}

.happening-now {
  //@include section-padding;

  @media only screen and (min-width: $bp-tablet) {
    width: 60.8rem;
  }

  @media only screen and (min-width: $bp-desktop) {
    width: 116rem;
    flex-direction: column;
  }

  &__content-wrapper {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: $bp-desktop) {
      flex-direction: row;
    }
  }

  &__column-2 {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: $bp-tablet) {
      flex-direction: row;

      & > article:not(:first-child) {
        margin-left: 4rem;
      }
    }

    @media only screen and (min-width: $bp-desktop) {
      flex-direction: column;

      & > article {
        margin-left: 4rem;
      }
    }

    & > article:last-child {
      display: none; // To hide a third card on a lower resolutions

      @media only screen and (min-width: $bp-desktop) {
        display: block;
      }
    }
  }

  &__column-1 {
    @media only screen and (min-width: $bp-desktop) {
      // flex-basis: 0;
      // flex-grow: 2;
    }
  }
}

.main-article-and-news {
  @media only screen and (min-width: $bp-desktop) {
    display: flex;
  }
}

.news {
  background-color: $color-white;
  padding: 0 2rem;

  @media only screen and (min-width: $bp-tablet) {
    padding: 0 8rem;
  }

  @media only screen and (min-width: $bp-desktop) {
    flex-basis: 0;
    flex-grow: 4;
    padding: 6rem 6rem 10rem 10rem;
  }

  &__wrapper {
    width: 32.7rem;
    margin: 0 auto;

    @media only screen and (min-width: $bp-tablet) {
      width: 60.8rem;
    }

    @media only screen and (min-width: $bp-desktop) {
      width: auto;
    }
  }

  &__content {
    border-top: 2px solid #EBEDED;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > article:first-child {
      @media only screen and (min-width: $bp-tablet) {
        margin-right: 6rem;
      }
    }
    @media only screen and (min-width: $bp-tablet) {
      flex-direction: row;
      //justify-content: space-between;
      justify-content: center;
      align-items: end;
    }
    @media only screen and (min-width: $bp-desktop) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__content > div {
    // to set equal width to both news-blocks
    flex-grow: 1;
    flex-basis: 0;
  }

  &__content > div:not(:first-child) {
    margin-left: 4rem;
  }
}
</style>
