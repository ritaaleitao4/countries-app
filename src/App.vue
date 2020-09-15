<template>
  <div id="app">
    <loading v-if="showLoading" spinColor="purple"/>
    <topBar />
    <router-view v-if="countriesData"/>
    <p v-if="errorMessage" class="app--error">{{errorMessage}}</p>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import topBar from '@/components/TopBar.vue'
  import loading from '@/components/Loading.vue'

  export default {
    name: 'app',
    components: {
      topBar,
      loading,
    },
    data() {
      return {
        showLoading: false,
      }
    },
    computed: {
      ...mapState({
        countriesData: (state) => state.storeModules.countriesData,
        errorMessage: (state) => state.storeModules.errorMessage,
      }),
    },
    methods: {
      ...mapActions([
        'actionGetCountriesData',
      ]),
    },
    created() {
      this.showLoading = true

      // call countries api
      this.actionGetCountriesData().then(() => {
        this.showLoading = false
      }).catch(() => {
        this.showLoading = false
      })
    },
  }
</script>

<style lang="scss">
  @import 'scss/_generic.scss';
  .app--error {
    text-align: center;
    margin: $default-margin;
    @include list-text;
  }
</style>
