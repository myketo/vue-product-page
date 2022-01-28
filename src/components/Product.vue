<template>
  <div class="product">
    <Gallery
      v-model:activeImageId="activeImageId"
      :images="product.images"
      @toggleLightbox="toggleLightbox"
    ></Gallery>
    <Details :product="product"></Details>
  </div>

  <div v-show="lightboxActive" class="lightbox-container">
    <Gallery
      v-model:activeImageId="activeImageId"
      :images="product.images"
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

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      lightboxActive: false,

      activeImageId: 1,
    };
  },

  methods: {
    toggleLightbox() {
      if (!this.isMobile) {
        this.lightboxActive = !this.lightboxActive;
      }
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

  @media (max-width: $mobile-max) {
    grid-template-columns: none;
    margin: 0;
    gap: 0;
  }
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
  z-index: 2;
}
</style>
