<template>
    <section class="text-only-stories">
        <div class="text-only-story">
            <div class="text-only-story__col-1-of-2">
                <div class="text-only-story__title">
                    Quisque viverra interdum velit?
                </div>
                <div class="text-only-story__text">
                    Culpa qui officia deserunt mollit anim id esto polujimi laborum.
                    Sed ut perspiciatis unde omnis iste eropluk onatuspop error sit
                    voluptartem accusantium wetrop doloremque laudantium, totam rem
                    aperiam, eaquep ipsa quaeer ab illo inventore veritatisy et quasi
                    weth ropeior architecto beatae vitae dicta sunt explicapbo. Nemo
                    popul eniem ipsam yui voluptatem quialoperyi voluptas sit
                    aspernatur aute odit aut fugit, sed quiawi consequuntur joki erty
                    magni dolores eosep quiklopii ratione wertyuil voluptatem sequi
                    nesciunt. Nequeop porro polu quisquam est, quepi dolorem ipsum
                    quiat lopi dolor srit amet, consectetur adipisci velit, topitop
                    seid quia non numquam eiuris modij tempora poluko
                </div>
            </div>

            <div class="text-only-story__col-2-of-2">
                <div class="text-only-story__text">
                    incidunt ut labore et dolore magnam aliquam mokeru quaerat iope
                    voluptatem. Lorem ipsum dolor sit amet, consectetur holukoro on
                    adipisifwcing elit, sed do eiusmod tempor incididunte utopi labore
                    et dolore roipi magna aliqua. Ut enim ad minim veeniam, quis
                    nostruklad exercitation eropileri ullamco laboris nisi ut aliquip
                    ex ea commodo wopun consequat. Duis aute irure dolor in
                    reprehenderit inie tufpoy voluptate velit esse cillum dolore eu
                    fugiat holi nulla parieratur. Excepteur sint occaecat ropukuli uki
                    cupidatat.
                </div>

                <div class="text-only-story__info">
                    <div class="article__title article__title--story">
                        Thought Experiment- VR Travel App
                    </div>
                    <dateTimeAuthor time="3h ago" author="Worldnews" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import dateTimeAuthor from '~/components/date-time-author'

export default {
  components: {
    dateTimeAuthor
  }
}
</script>

<style lang="scss" scoped>
.text-only-stories {
  padding: 4rem 2.4rem 2.4rem;

  @media only screen and (min-width: $bp-tablet) {
    border-bottom: 2px solid $color-grey-light-1;
    padding-bottom: 2.4rem;
    padding: 0;

    @media only screen and (min-width: $bp-desktop) {
      border: none;
    }
  }

  @media only screen and (min-width: $bp-desktop) {
    border-right: 2px solid $color-grey-light-1;
    display: flex;
    flex-basis: 0;
    flex-direction: column;
    flex-grow: 1;
    padding-right: 3rem;
  }
}

.text-only-story {
  @media only screen and (min-width: $bp-tablet) {
    align-items: flex-start;
    display: flex;
  }

  @media only screen and (min-width: $bp-desktop) {
    flex-direction: column;
  }

  &__title {
    color: $color-black;
    font-family: "Acumin Pro";
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 4.2rem;
    text-align: left;
    margin-bottom: 2.4rem;
  }

  &__text {
    color: $color-grey-dark-2;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.6rem;
    padding: 0 0 2.4rem 0;
    //text-align: left;
    text-align: justify;

    @media only screen and (min-width: $bp-desktop) {
      padding-bottom: 0;
    }
  }

  &__col-1-of-2 {
    @media only screen and (min-width: $bp-tablet) {
      flex-basis: 0;
      flex-grow: 1;
      margin-right: 4rem;
    }
    @media only screen and (min-width: $bp-desktop) {
      margin-right: 0;
    }
  }

  &__col-2-of-2 {
    flex-basis: 0;
    flex-grow: 1;

    & {
      @media only screen and (min-width: $bp-desktop) {
        padding-bottom: 2.4rem;
      }
    }

    & > :first-child {
      border-bottom: 2px dashed $color-grey-light-1;
    }
  }

  &__info {
    font-size: 1.6rem;
    font-family: Acumin Pro;
    color: #202124;
    font-weight: 700;
    line-height: 3.4rem;
    padding-top: 2rem;
    z-index: 1;
  }
}
</style>