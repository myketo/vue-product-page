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
      <div class="cart"><img src="../assets/images/icon-cart.svg" /></div>
      <div class="profile"><img src="../assets/images/image-avatar.png" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

}
</script>

<style lang="scss">
.header {
  padding: 2.25em 0;
  border-bottom: 1px solid $grayish-blue;
  display: flex;

  .left-side {
    width: 100%;
    display: flex;
    align-items: center;

    .navigation {
      .links {
        display: flex;
        gap: 2.1em;
        margin-left: 4em;
        color: $dark-grayish-blue;
      }
    }
  }

  .user {
    display: flex;
    align-items: center;
    gap: 2.5em;

    .profile {
      display: flex;

      img {
        width: 2.5em;
      }
    }
  }
}
</style>
