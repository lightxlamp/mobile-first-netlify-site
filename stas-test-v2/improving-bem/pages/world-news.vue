<template>
  <div class="container-world-news-page">
    <div class="container-world-news-page-top">
      <appBreadcrumbs />

      <searchNewsH />

      <section class="three-columns-section">
        <div class="three-columns-section__col-1">
          <appAuthor 
            avatarFile="boy.jpg"
            authorName="Jonathan Walker"
            modifier="story"
            hideName="true"
          />

          <h2>Phasellus eu nulla malesuada, luctus diam.</h2>

        </div>
        <div class="three-columns-section__col-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit,
          condimentum mauris convallis cras iaculis at tempus dignissim arcu,
          sollicitudin posuere porta non tellus dictumst penatibus. Commodo ante
          quis senectus quisque semper dapibus porttitor libero lacus hendrerit
          volutpat, in cras a himenaeos leo ridiculus taciti ultrices cursus
          mattis. Tempor mi fames senectus taciti
        </div>
        <div class="three-columns-section__col-3">
          himenaeos leo ridiculus taciti ultrices cursus mattis. Tempor mi fames
          senectus taciti condimentum lacinia ante, non netus rhoncus eget
          habitant sollicitudin, cubilia luctus consequat pharetra natoque
          porta. Sodales tristique habitasse massa ultrices ligula semper
          interdum dictumst.
          <dateTimeAuthor time="2m ago" />
        </div>
      </section>

      <section class="image-and-two-text-block-section">
        <div class="image-and-two-text-block-section__col-1"></div>
        <div class="image-and-two-text-block-section__col-2">
          Lorem ipsum dolor sit amet, consectetur opikhfkseo adipisifwcing elit,
          sed do eiusmod temporeop iodkjnl incididunt ut labore et dolore roipi
          magnaropi aliquia. Ut enim ad minim veeniam, quiswepo nostruklad uio
          exercitation ullamco laboris nisi ut aliquip ex eawiopl commodo
          consequat. Duis ropil aute irure dolor inop reprehenderit in
          tufpoyiopy voluptate velit esse plijxn cillum dolore eu fugiatupi
          nulla parieratur. Excepteuri sint. <br /><br />
          Culpa qui officia deserunt mollit anim id estio ropiluyl laborum. Sed
          ut perspiciatis unde omnis iste natuswi error sit voluptartem
          accusantium polu doloremquep laudantium, totam rem aperiam, eaque
          ipsa.
        </div>
        <div class="image-and-two-text-block-section__col-3">
          In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla
          faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus.
        </div>
      </section>

      <appPagination />
    </div>

    <Footer />
  </div>
</template>

<script>

export default {
  
  computed: {
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
  },

  head: {
    title: "My first mobile-first web site :P"
  }
};
</script>

<style lang="scss" scoped>
.container-world-news-page {
  background-color: $color-secondary;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 182rem;
  min-height: 100vh;
}

h2 {
  color: $color-black;
  //font-family: "Acumin Pro";
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 3.4rem;
  padding: 1.4rem 0 4rem;
  text-align: left;
}

.container-world-news-page-top {
  display: flex;
  flex-direction: column;
  color: $color-grey-dark-2;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.6rem;

  @media only screen and (min-width: $bp-tablet) {
    padding: 0 8rem 3rem 8rem;
  }

  @media only screen and (min-width: $bp-desktop) {
    padding: 0 14rem 3rem 14rem;
  }

  @media only screen and (min-width: $bp-large-desktop) {
    padding: 0 32rem 4rem 32rem;
  }
 
}

.three-columns-section {
  border-top: 2px solid $color-grey-light-1;
  margin: 4rem 2.4rem;
  padding-top: 3rem;

  @media only screen and (min-width: $bp-tablet) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 4rem 0rem;
  }

  &__col-1 {
    @media only screen and (min-width: $bp-tablet) {
      width: 56%;
    }

    @media only screen and (min-width: $bp-desktop) {
      width: 30%;
    }
  }

  &__col-2 {
    @media only screen and (min-width: $bp-tablet) {
      width: 45%;
    }
    @media only screen and (min-width: $bp-desktop) {
      width: 30%;
    }
  }

  &__col-3 {
    margin-top: 2rem;

    @media only screen and (min-width: $bp-tablet) {
      margin-top: 0;
      width: 45%;
    }
    @media only screen and (min-width: $bp-desktop) {
      width: 30%;
    }
  }

  &__col-3 > div:first-child {
    margin-top: 1rem;
  }
}

.image-and-two-text-block-section {
  border-top: 2px solid $color-grey-light-1;
  margin: 0rem 2.4rem 3rem;
  padding-top: 3rem;

  @media only screen and (min-width: $bp-tablet) {
    margin: 0rem 0rem 3rem;
  }

  @media only screen and (min-width: $bp-desktop) {
    display: flex;
    flex-wrap: wrap;
  }

  &__col-1 {
    background-image: url("../assets/img/elephant.jpg");
    background-position: center;
    background-size: cover;
    min-height: 18rem;
    padding-top: 55.04%; /* Aspect Ratio */
    position: relative;
    width: 100%;

    @media only screen and (min-width: $bp-tablet) {
      min-height: 26rem;
      padding-top: 42.76%; /* Aspect Ratio */
    }

    @media only screen and (min-width: $bp-desktop) {
      width: 100%;
    }

    border-radius: $border-radius;
    overflow: hidden;
  }

  &__col-2 {
    margin: 2.4rem 0;
    @media only screen and (min-width: $bp-desktop) {
      width: 70%;
      padding-right: 3rem;
    }
  }

  &__col-3 {
    color: $color-black;
    font-size: 1.6rem;
    font-style: oblique;
    font-weight: 400;
    line-height: 3rem;

    @media only screen and (min-width: $bp-desktop) {
      margin: 2.4rem 0;
      width: 30%;
    }
  }
}
</style>