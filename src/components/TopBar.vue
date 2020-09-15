<template>
  <header>
    <div class="header-content">
      <router-link :to="{ name: 'homepage'}">Countries</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'top-bar',
  }
</script>

<style scoped lang="scss">
  header {
    background-color: #FFFFFF;
    width: 100%;
    height: $header-height;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.24), 0 1px 3px 0 rgba(0,0,0,0.12);
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    .header-content {
      width: 100%;
      max-width: $header-width;
      padding: 0 $default-padding;
      display: flex;
      align-items: center;

      a {
        @include header-title;
      }
    }
  }
</style>
