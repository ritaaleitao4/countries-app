<template>
  <div
    class="list-item"
    @click="$router.push({name: 'details', params: {id: item.alpha3Code}})">
    <img
      :src="item.flag"
      :alt="item.name + '-flag'"/>
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
    align-items: center;
    padding: $default-padding;
    cursor: pointer;

    img {
      max-height: 30px;
      margin-right: $default-margin/2;
    }
    h3 {
      @include list-title;
    }

    svg {
      display: block;
      width: 12px;
      height: auto;
      margin-left: $default-margin/2;
      fill: $color-list-title;
    }
  }
</style>
