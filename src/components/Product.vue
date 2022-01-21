<template>
  <div class="product">
    <Gallery
      v-model:activeImageId="activeImageId"
      :images="images"
      @toggleLightbox="toggleLightbox"
    ></Gallery>
    <Details></Details>
  </div>

  <div v-show="lightboxActive" class="lightbox-container">
    <Gallery
      v-model:activeImageId="activeImageId"
      :images="images"
      :is-lightbox="lightboxActive"
      @toggleLightbox="toggleLightbox"
    ></Gallery>
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

  data() {
    return {
      images: [
        { id: 1, name: "image-product-1" },
        { id: 2, name: "image-product-2" },
        { id: 3, name: "image-product-3" },
        { id: 4, name: "image-product-4" },
      ],

      lightboxActive: false,

      activeImageId: 1,
    };
  },

  methods: {
    toggleLightbox() {
      this.lightboxActive = !this.lightboxActive;
    },
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

.lightbox-container {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: $black;
}
</style>
