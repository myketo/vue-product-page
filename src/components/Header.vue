<template>
  <div class="header">
    <div class="left-side">
      <img
        src="../assets/images/icon-menu.svg"
        class="menu-icon"
        @click="menuActive = true"
      />

      <div class="logo"><img src="../assets/images/logo.svg" /></div>
      <div v-show="menuActive" class="menu-background">
        <Navigation
          :menu-active="menuActive"
          @closeMenu="menuActive = false"
        ></Navigation>
      </div>
    </div>

    <div class="user">
      <div class="cart-container">
        <div class="products-amount" @click="showCart = !showCart">
          {{ productAmountSum }}
        </div>
        <img
          src="../assets/images/icon-cart.svg"
          class="cart-icon"
          @click="showCart = !showCart"
        />
        <Cart
          v-show="showCart"
          @updateAmountSum="(amountSum) => (productAmountSum = amountSum)"
          @hideCart="showCart = false"
        ></Cart>
      </div>
      <div class="profile"><img src="../assets/images/image-avatar.png" /></div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import Cart from "./Cart.vue";
export default {
  name: "Header",

  components: {
    Navigation,
    Cart,
  },

  data() {
    return {
      showCart: false,
      productAmountSum: 0,
      menuActive: false,
    };
  },
};
</script>

<style lang="scss">
.header {
  padding: 2.1em 0;
  border-bottom: 1px solid $grayish-blue;
  display: flex;

  @media (max-width: $mobile-max) {
    padding: 1.5em;
    border-bottom: none;
  }

  .left-side {
    width: 100%;
    display: flex;
    align-items: center;

    .menu-icon {
      display: none;
      margin-right: 1em;

      @media (max-width: $mobile-max) {
        display: block;
      }
    }

    .menu-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: $black;
      z-index: 2;
    }
  }

  .user {
    display: flex;
    align-items: center;
    gap: 2.75em;

    @media (max-width: $mobile-max) {
      gap: 1.25em;
    }

    .cart-container {
      cursor: pointer;
      position: relative;

      .products-amount {
        position: absolute;
        right: -0.65em;
        top: -0.5em;
        color: white;
        font-weight: $bold;
        background-color: $orange;
        font-size: 0.7em;
        padding: 0.1em 0.55em;
        border-radius: 1em;
        z-index: 1;

        @media (max-width: $mobile-max) {
          font-size: 0.6em;
          padding: 0.1em 0.55em;
        }
      }

      .cart-icon:hover,
      .products-amount:hover + .cart-icon {
        filter: brightness(0);
      }
    }

    .profile {
      display: flex;
      cursor: pointer;

      &:hover {
        img {
          box-shadow: 0px 0px 0px 2px $orange;
        }
      }

      img {
        width: 3em;
        border-radius: 100vw;

        @media (max-width: $mobile-max) {
          width: 1.5em;
        }
      }
    }
  }
}
</style>
