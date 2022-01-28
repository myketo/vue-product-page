<template>
  <div class="gallery" :class="{ lightbox: isLightbox }">
    <img
      v-if="isLightbox"
      src="../assets/images/icon-close.svg"
      class="close-lightbox"
      @click="$emit('toggleLightbox')"
    />
    <div
      class="big-photo-container"
      @click="!isLightbox ? $emit('toggleLightbox') : ''"
    >
      <div
        class="arrow previous-photo"
        :class="{ 'is-active': isLightbox }"
        @click="changeImage('previous')"
      >
        <img src="../assets/images/icon-previous.svg" />
      </div>
      <img :src="getImage(activeImageId)" class="big-photo" />
      <div
        class="arrow next-photo"
        :class="{ 'is-active': isLightbox }"
        @click="changeImage('next')"
      >
        <img src="../assets/images/icon-next.svg" />
      </div>
    </div>

    <div class="thumbnails">
      <div
        v-for="image in images"
        :key="image.id"
        class="thumbnail"
        :class="{ active: image.id === activeImageId }"
        @click="$emit('update:activeImageId', image.id)"
      >
        <img :src="getImage(image.id, true)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",

  props: {
    images: {
      type: Array,
      required: true,
    },
    isLightbox: {
      type: Boolean,
      default: false,
    },
    activeImageId: Number,
  },

  emits: ["toggleLightbox", "update:activeImageId"],

  methods: {
    getImage(id, thumbnail = false) {
      var filePath = "assets/images/";
      filePath += this.images.find((image) => {
        return image.id === id;
      }).name;

      if (thumbnail) {
        filePath += "-thumbnail";
      }

      return require("../" + filePath + ".jpg");
    },

    changeImage(direction) {
      var index = this.images.findIndex(
        (image) => image.id === this.activeImageId
      );
      var lastIndex = this.images.length - 1;

      if (direction === "previous") {
        if (index > 0) {
          var previousId = this.images[index - 1].id;
          this.$emit("update:activeImageId", previousId);
        } else {
          this.$emit("update:activeImageId", this.images[lastIndex].id);
        }
      }

      if (direction === "next") {
        if (index < lastIndex) {
          var nextId = this.images[index + 1].id;
          this.$emit("update:activeImageId", nextId);
        } else {
          this.$emit("update:activeImageId", this.images[0].id);
        }
      }
    },
  },
};
</script>

<style lang="scss">
.gallery {
  .big-photo-container {
    cursor: pointer;
    position: relative;

    @media (max-width: $mobile-max) {
      display: flex;
      align-items: center;
    }

    .big-photo {
      width: 100%;
      border-radius: 0.85em;

      @media (max-width: $mobile-max) {
        border-radius: 0;
        height: 300px;
        object-fit: cover;
        cursor: default;
      }
    }

    .arrow {
      background-color: $white;
      height: 3em;
      aspect-ratio: 1;
      border-radius: 50%;
      display: none;
      align-items: center;
      justify-content: center;
      position: absolute;
      cursor: pointer;
      user-select: none;

      @media (max-width: $mobile-max) {
        display: flex;
      }

      img {
        height: 1em;
        filter: brightness(0);
      }

      &:hover {
        img {
          filter: none;
        }
      }

      &.previous-photo {
        left: -1.5em;

        @media (max-width: $mobile-max) {
          left: 1em;
        }
      }

      &.next-photo {
        right: -1.5em;

        @media (max-width: $mobile-max) {
          right: 1em;
        }
      }
    }
  }

  .thumbnails {
    display: flex;
    justify-content: space-between;
    margin-top: 1.65em;

    @media (max-width: $mobile-max) {
      display: none;
    }

    .thumbnail {
      width: 20%;
      border-radius: 0.5em;
      cursor: pointer;
      background-color: white;

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

  &.lightbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;

    .close-lightbox {
      width: 1.25em;
      align-self: flex-end;
      margin-bottom: 1.25em;
      cursor: pointer;
      filter: brightness(10);

      &:hover {
        filter: none;
      }
    }

    .big-photo-container {
      display: flex;
      align-items: center;
    }

    .thumbnails {
      padding: 0 4em;
      margin-top: 2em;
    }
  }
}
</style>
