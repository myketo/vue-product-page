<template>
  <div class="header">
    <div class="left-side">
      <div class="logo"><img src="../assets/images/logo.svg" /></div>

      <nav class="navigation">
        <ul class="links">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>

    <div class="user">
      <div class="cart-container">
        <div class="products-amount">{{ productAmountSum }}</div>
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
import Cart from "./Cart.vue";
export default {
  name: "Header",

  components: {
    Cart,
  },

  data() {
    return {
      showCart: false,
      productAmountSum: 0,
    };
  },
};
</script>

<style lang="scss">
.header {
  padding: 2.1em 0;
  border-bottom: 1px solid $grayish-blue;
  display: flex;

  .left-side {
    width: 100%;
    display: flex;
    align-items: center;

    .navigation {
      .links {
        display: flex;
        gap: 2em;
        margin-left: 3.75em;
        color: $dark-grayish-blue;

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
  }

  .user {
    display: flex;
    align-items: center;
    gap: 2.75em;

    .cart-container {
      cursor: pointer;
      position: relative;

      .products-amount {
        position: absolute;
        right: -0.8em;
        top: -0.5em;
        color: white;
        font-weight: $bold;
        background-color: $orange;
        font-size: 0.7em;
        padding: 0.1em 0.55em;
        border-radius: 1em;
        z-index: 1;
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
      }
    }
  }
}
</style>
