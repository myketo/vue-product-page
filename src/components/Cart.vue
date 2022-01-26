<template>
  <div
    v-click-outside.visible="{
      handler: 'clickOutside',
      exclude: ['cart-icon'],
    }"
    class="cart"
  >
    <h3 class="cart-header">Cart</h3>
    <div class="cart-contents">
      <template v-if="products.length">
        <div v-for="product in products" :key="product.id" class="cart-item">
          <img :src="imgSrc(product.id)" class="product-thumbnail" />
          <div class="product-info">
            <p class="product-name">{{ product.name }}</p>
            <p class="product-price">
              ${{ product.sellPrice }} x {{ product.amount }}
              <b>${{ (product.sellPrice * product.amount).toFixed(2) }}</b>
            </p>
          </div>
          <img
            src="../assets/images/icon-delete.svg"
            class="remove-product"
            @click="removeProduct(product.id)"
          />
        </div>
        <button class="checkout-btn">Checkout</button>
      </template>
      <template v-else>
        <span class="empty-cart">Your cart is empty.</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",

  directives: {
    clickOutside: {
      beforeMount(el, binding) {
        const handleOutsideClick = (e) => {
          const { handler, exclude } = binding.value;

          let clickedOnExcludedEl = false;
          exclude.forEach((className) => {
            if (!clickedOnExcludedEl) {
              clickedOnExcludedEl = e.target.classList.contains(className);
            }
          });

          if (
            !clickedOnExcludedEl &&
            !el.contains(e.target) &&
            el !== e.target
          ) {
            if (binding.modifiers.visible) {
              if (el.style.display !== "none") {
                binding.instance[handler]();
              }
            } else {
              binding.instance[handler]();
            }
          }
        };
        el.__vueClickOutside__ = handleOutsideClick;

        document.addEventListener("click", handleOutsideClick);
      },

      unmounted(el) {
        document.removeEventListener("click", el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      },
    },
  },

  emits: ["updateAmountSum", "hideCart"],

  data() {
    return {
      products: [],
      excluded: [""],
    };
  },

  mounted() {
    this.emitter.on("addToCart", (data) => this.addToCart(data));
  },

  methods: {
    addToCart(data) {
      var productIndex = this.getProductIndex(data.product.id);
      if (productIndex !== -1) {
        this.products[productIndex].amount += data.productAmount;
      } else {
        this.products.push(data.product);
        this.products.at(-1).amount = data.productAmount;
        this.products.at(-1).sellPrice = data.sellPrice;
      }

      this.updateAmountSum();
    },

    getProductIndex(id) {
      return this.products.findIndex((product) => {
        return product.id === id;
      });
    },

    imgSrc(id) {
      var product = this.products.find((product) => product.id === id);
      var imgName = product.images[0].name;

      return require("../assets/images/" + imgName + "-thumbnail.jpg");
    },

    removeProduct(id) {
      var productIndex = this.getProductIndex(id);
      this.products.splice(productIndex, 1);

      this.updateAmountSum();
    },

    updateAmountSum() {
      var amountSum = this.products.reduce((sum, curr) => {
        return sum + curr.amount;
      }, 0);

      this.$emit("updateAmountSum", amountSum);
    },

    clickOutside() {
      this.$emit("hideCart");
    },
  },
};
</script>

<style lang="scss">
.cart {
  position: absolute;
  width: 25vw;
  margin-top: 1.75em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 20px 50px -20px rgba(66, 68, 90, 0.75);
  border-radius: 0.4em;
  background: $white;
  cursor: default;

  .cart-header {
    border-bottom: 1px solid $grayish-blue;
    padding: 1.5em 1.25em;
    font-weight: $bold;
  }

  .cart-contents {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    min-height: 11.5em;
    padding: 0.75em 1.25em;

    .cart-item {
      display: flex;
      gap: 1em;
      width: 100%;

      .product-thumbnail {
        height: 3em;
        border-radius: 0.25em;
      }

      .product-info {
        color: $dark-grayish-blue;

        p {
          line-height: 1.5em;
        }

        .product-price {
          b {
            color: $very-dark-blue;
          }
        }
      }

      .remove-product {
        cursor: pointer;
        align-self: center;

        &:hover {
          filter: brightness(0);
        }
      }
    }

    .checkout-btn {
      color: $white;
      background: $orange;
      border: none;
      border-radius: 1em;
      width: 100%;
      height: 3.5em;
      font-weight: $bold;
      font-size: 1em;
      cursor: pointer;

      &:hover {
        opacity: 0.65;
      }
    }

    .empty-cart {
      font-weight: $bold;
      color: $dark-grayish-blue;
    }
  }
}
</style>
