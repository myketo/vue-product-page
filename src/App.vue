<template>
  <div class="app-container"></div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");

$orange: hsl(26, 100%, 55%);
$pale-orange: hsl(25, 100%, 94%);

$very-dark-blue: hsl(220, 13%, 13%);
$dark-grayish-blue: hsl(219, 9%, 45%);
$grayish-blue: hsl(220, 14%, 75%);
$light-greyish-blue: hsl(223, 64%, 98%);
$white: hsl(0, 0%, 100%);
$black: hsla(0, 0%, 0%, 75%);

* {
  box-sizing: border-box;
  font-family: "Kumbh Sans", sans-serif !important;
  font-weight: 400;
}

b,
.bold {
  font-weight: 700;
}
</style>
