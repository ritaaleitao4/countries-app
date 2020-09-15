<template>
  <div
    class="list-item"
    @click="$router.push({name: 'details', params: {id: item.alpha3Code}})">
    <h3>{{item.name}}</h3>
    <seeMoreSvg/>
  </div>
</template>

<script>
  import seeMoreSvg from '@assets/images/view.svg'

  export default {
    name: 'countries-item',
    components: {
      seeMoreSvg,
    },
    props: {
      item: {
        required: true,
        type: Object,
      },
    },
  }
</script>

<style scoped lang="scss">
  .list-item {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    padding: $default-padding;
    cursor: pointer;

    h3 {
      @include list-title;
    }

    svg {
      display: block;
      width: 16px;
      height: auto;
      margin-left: 8px;
      fill: $color-list-title;
    }
  }
</style>
