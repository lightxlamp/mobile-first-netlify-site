<template>
  <div class="test-div">
    <picture>
      <source srcset="../assets/img/bridge.jpg" media="(max-width: 400px)" />
      <source srcset="../assets/img/bridge_300.jpg" />
      <!-- Define an <img> element for browsers that do not support the <picture> element. -->
      <!-- <img
          src="../assets/img/bridge.jpg"
          alt="Flowers"
          class="card__backimage"
          style="width:auto;"
        /> -->
    </picture>
  </div>
</template>
