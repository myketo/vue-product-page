<template>
  <nav
    class="navigation"
    :class="{ 'is-mobile': isMobile, 'is-visible': menuActive }"
  >
    <img
      src="../assets/images/icon-close.svg"
      class="close-menu"
      @click="$emit('closeMenu')"
    />

    <ul class="links">
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",

  props: {
    menuActive: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["closeMenu"],
};
</script>

<style lang="scss">
.navigation {
  &:not(.is-mobile) {
    @media (max-width: $mobile-max) {
      display: none;
    }

    .close-menu {
      display: none;
    }

    .links {
      li {
        cursor: pointer;
        position: relative;
        padding: 0.1em;

        &:hover {
          color: $very-dark-blue;

          &:before {
            content: "";
            border-bottom: 4px solid $orange;
            display: block;
            position: absolute;
            width: 100%;
            top: 3.85em;
            left: 0;
          }
        }
      }
    }
  }

  .close-menu {
    filter: grayscale(1);
  }

  .links {
    display: flex;
    gap: 2em;
    margin-left: 3.75em;
    color: $dark-grayish-blue;
  }

  &.is-mobile {
    position: absolute;
    background: white;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    padding: 1.5em;
    // todo: add open/close animation

    .links {
      flex-direction: column;
      font-weight: bold;
      color: $very-dark-blue;
      margin-left: 0;
      margin-top: 3em;
      font-size: 1.1em;
      gap: 1.5em;
    }

    &.is-visible {
      display: block;
      width: 65%;
    }
  }
}
</style>
