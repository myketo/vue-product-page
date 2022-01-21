<template>
  <div class="app-container">
    <Header></Header>
    <Product></Product>
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
    }
  }
}
</style>
