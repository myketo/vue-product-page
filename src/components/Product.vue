<template>
  <div class="product">
    <Gallery></Gallery>
    <Details></Details>
  </div>
</template>

<script>
import Gallery from "./Gallery.vue";
import Details from "./Details.vue";

export default {
  name: "Product",

  components: {
    Gallery,
    Details,
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
