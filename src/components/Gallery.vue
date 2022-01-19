<template>
  <div class="gallery">
    <div class="big-photo">
      <img :src="getImage(activeImageId)" />
    </div>

    <div class="thumbnails">
      <div
        v-for="image in images"
        :key="image.id"
        class="thumbnail"
        :class="{ active: image.id === activeImageId }"
        @click="activeImageId = image.id"
      >
        <img :src="getImage(image.id, true)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",

  data() {
    return {
      images: [
        { id: 1, name: "image-product-1" },
        { id: 2, name: "image-product-2" },
        { id: 3, name: "image-product-3" },
        { id: 4, name: "image-product-4" },
      ],

      activeImageId: 1,
    };
  },

  methods: {
    getImage(id, thumbnail = false) {
      var image = "assets/images/";
      image += this.images.find((image) => {
        return image.id === id;
      }).name;

      if (thumbnail) {
        image += "-thumbnail";
      }

      return require("../" + image + ".jpg");
    },
  },
};
</script>

<style lang="scss">
.gallery {
  .big-photo {
    cursor: pointer;

    img {
      width: 100%;
      border-radius: 0.85em;
    }
  }

  .thumbnails {
    display: flex;
    justify-content: space-between;
    margin-top: 1.65em;

    .thumbnail {
      width: 20%;
      border-radius: 0.5em;
      cursor: pointer;

      &.active {
        box-shadow: inset 0px 0px 0px 2px $orange;

        img {
          opacity: 0.25;
        }
      }

      &:not(.active):hover {
        img {
          opacity: 0.5;
        }
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 0.5em;
      }
    }
  }
}
</style>
