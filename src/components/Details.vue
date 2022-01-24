<template>
  <div class="details">
    <p class="producer">{{ product.producer }}</p>
    <h1 class="name">{{ product.name }}</h1>
    <p class="description">{{ product.description }}</p>
    <div class="pricing">
      <div>
        <h2 class="sell-price">${{ sellPrice }}</h2>
        <span class="discount">{{ product.discountPercent }}%</span>
      </div>
      <h3 class="base-price">${{ product.basePrice }}</h3>
    </div>
    <div class="get-product">
      <div class="amount">
        <img
          src="../assets/images/icon-minus.svg"
          class="minus"
          @click="productAmount > 0 ? productAmount-- : ''"
        />
        <span class="product-amount">{{ productAmount }}</span>
        <img
          src="../assets/images/icon-plus.svg"
          class="plus"
          @click="productAmount++"
        />
      </div>
      <button class="add-to-cart" @click="addToCart">
        <img src="../assets/images/icon-cart.svg" class="cart-icon" />
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  emits: ["addToCart"],

  data() {
    return {
      productAmount: 0,
    };
  },

  computed: {
    sellPrice() {
      return (
        this.product.basePrice -
        (this.product.discountPercent / 100) * this.product.basePrice
      ).toFixed(2);
    },
  },

  methods: {
    addToCart() {
      if (this.productAmount === 0) {
        return;
      }

      this.emitter.emit("addToCart", {
        product: this.product,
        productAmount: this.productAmount,
        sellPrice: this.sellPrice,
      });

      this.productAmount = 0;
    },
  },
};
</script>

<style lang="scss">
.details {
  padding: 4em 0;

  .producer {
    color: $orange;
    text-transform: uppercase;
    font-weight: $bold;
  }

  .name {
    font-size: 2.75em;
    font-weight: $bold;
    margin-top: 0.5em;
    color: $very-dark-blue;
  }

  .description {
    margin-top: 2.5em;
    line-height: 1.75em;
    color: $dark-grayish-blue;
  }

  .pricing {
    margin-top: 1.75em;
    font-weight: $bold;

    div {
      display: flex;
      align-items: center;
      gap: 1.1em;
      margin-bottom: 1em;

      .sell-price {
        font-size: 2em;
        color: $very-dark-blue;
      }

      .discount {
        color: $orange;
        padding: 0.25em 0.5em;
        background-color: $pale-orange;
        border-radius: 0.25em;
        font-size: 1.15em;
      }
    }

    .base-price {
      color: $grayish-blue;
      font-size: 1.15em;
      text-decoration: line-through;
    }
  }

  .get-product {
    height: 3.25em;
    margin-top: 2.5em;
    display: flex;
    gap: 1em;

    .amount {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 35%;
      background-color: $light-grayish-blue;
      border-radius: 0.6em;
      padding: 0 0.75em;

      .product-amount {
        font-weight: $bold;
      }

      .plus,
      .minus {
        cursor: pointer;
        padding: 0.25em;

        &:hover {
          opacity: 0.5;
        }
      }
    }

    .add-to-cart {
      background-color: $orange;
      border: none;
      border-radius: 0.6em;
      color: $white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      height: 100%;
      width: 65%;
      font-size: 1em;
      cursor: pointer;
      box-shadow: 0px 10px 100px -15px hsla(25, 100%, 55%, 1);

      .cart-icon {
        filter: brightness(3);
        margin-right: 1em;
        height: 1.1em;
      }

      &:hover {
        opacity: 0.65;
      }
    }
  }
}
</style>
