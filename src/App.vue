<template>
  <div class="app-container">
    <Header></Header>
    <Product :product="currentProduct"></Product>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Product from "./components/Product.vue";

export default {
  name: "App",

  components: {
    Header,
    Product,
  },

  data() {
    return {
      products: [
        {
          id: 1,
          producer: "Sneaker Company",
          name: "Fall Limited Edition Sneakers",
          description:
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
          basePrice: "250.00",
          discountPercent: 50,
          images: [
            { id: 1, name: "image-product-1" },
            { id: 2, name: "image-product-2" },
            { id: 3, name: "image-product-3" },
            { id: 4, name: "image-product-4" },
          ],
        },
      ],

      currentProductId: 1,
    };
  },

  computed: {
    currentProduct() {
      return this.products.find(
        (product) => product.id == this.currentProductId
      );
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");

* {
  box-sizing: border-box;
  font-family: "Kumbh Sans", sans-serif !important;
  font-weight: 400;
}

b {
  font-weight: $bold;
}

html {
  font-size: 16px;

  #app {
    background-color: white;

    .app-container {
      margin: 0 10%;

      @media (max-width: $mobile-max) {
        margin: 0;
      }
    }
  }
}
</style>
