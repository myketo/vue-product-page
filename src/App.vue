<template>
  <div class="app-container">
    <Header></Header>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
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

b,
.bold {
  font-weight: 700;
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
