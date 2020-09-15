<template>
  <div class="list-content">
    <ul>
      <li
        v-for="(item, index) in listData.slice(0, visibleItems)"
        :key="'li-' + index">
        <countriesItem :item="item"/>
      </li>
    </ul>
    <button
      v-if="visibleItems < listData.length"
      @click="viewMore()">
        Load more
    </button>
  </div>
</template>

<script>
  import countriesItem from '@/components/CountriesItem.vue'

  export default {
    name: 'countries-list',
    components: {
      countriesItem,
    },
    props: {
      listData: {
        required: true,
        type: Array,
      },
    },
    data() {
      return {
        visibleItems: 20,
      }
    },
    methods: {
      viewMore() {
        this.visibleItems = this.visibleItems + 20
      },
    },
  }
</script>

<style scoped lang="scss">
  .list-content {
    overflow: hidden;

    ul {
      list-style: none;
      margin: 0 0 $default-margin 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      li {
        position: relative;
        margin: 0;
        background-color: #FFFFFF;
        border: 1px solid $color-list-border;
        margin: $min-margin;
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.12);
        display: flex;

        &:last-child {
          border-bottom: 1px solid $color-list-border;
        }
      }
    }

    button {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      background-color: $color-blue;
      color: #fff;
      border-radius: 4px;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: 800;
      align-items: center;
      transition: box-shadow .15s ease-in-out;
      margin: 20px 0;

      &:hover {
        box-shadow: 0 3px 15px 4px rgba(68,68,68,0.16);
      }
    }
  }
</style>
