<template>
  <div class="product">
    <Gallery></Gallery>
    <div></div>
  </div>
</template>

<script>
import Gallery from "./Gallery.vue";

export default {
  name: "Product",

  components: {
    Gallery,
  },
};
</script>

<style lang="scss">
.product {
  margin: 5.5em 3em 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9em;
}
</style>
