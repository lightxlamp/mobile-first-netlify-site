<template>
  <article class="card" :class="articleType">
    <img src="" alt="" class="card__backimage" />
    <div class="card__header">
      <figure class="card__figure">
        <img src="../assets/img/green_lake.jpg" alt="" class="card__image" />
      </figure>
    </div>
    <div class="card__body">
      <div class="card__category"></div>
      <h2 class="card__title">Dolore magna aliqua</h2>
      <h3 class="card__subtitle">
        Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has
        appareat.
      </h3>
      <p class="card__copy"></p>
      <div class="card__date">
        <div class="date-time-author">1h ago</div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    articleType: {
      type: String,
      default: ''
    }
  }
  //   computed: {
  //     prefix: function() {
  //       return '--' + articleType
  //     }
  //   }
}
</script>
