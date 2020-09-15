<template>
  <div class="container">
    <section>
      <div class="search-box">
        <input
          type="text"
          placeholder="Type to Filter by name..."
          v-model="search"
          @keyup="filterCountries()">
        <select
          name="region"
          @change="filterCountries()"
          v-model="selectedRegion">
          <option
            v-for="(region, index) in regions"
            :key="index"
            :value="region">{{region}}
          </option>
        </select>
      </div>
      <countriesList :list-data="countries"/>
    </section>
    <p v-if="!countries.length">
      No countries found :(
    </p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import countriesList from '@/components/CountriesList.vue'

  export default {
    name: 'homepage',
    components: {
      countriesList,
    },
    data() {
      return {
        countries: null,
        regions: null,
        search: '',
        selectedRegion: 'All regions',
      }
    },
    computed: {
      ...mapState({
        countriesData: (state) => state.storeModules.countriesData,
      }),
    },
    methods: {
      filterCountries() {
        if (this.selectedRegion === 'All regions') this.countries = this.countriesData.filter((country) => country.name.toLowerCase().includes(this.search.toLowerCase()))
        else this.countries = this.countriesData.filter((country) => country.name.toLowerCase().includes(this.search.toLowerCase()) && country.region === this.selectedRegion)
      },
    },
    created() {
      this.countries = this.countriesData
      this.regions = ['All regions', ...new Set(this.countriesData.map((item) => item.region))]
    },
  }
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    position: relative;
    min-height: calc(100vh - 69px);
    overflow: hidden;
    background-color: $color-bg;

    section {
      width: 100%;
      max-width: $content-width;
      margin: $default-margin auto;

      .search-box {
        display: flex;
        position: relative;
        margin: $default-margin;
        justify-content: center;
        align-items: flex-end;

        input, select{
          max-width: 200px;
          font-weight: 400;
          border-radius: 6px;
          padding: $default-padding/2 $default-padding ;
          color: $color-list-title;
          background-color: $color-white;
          background-clip: padding-box;
          outline: none;
          border: 1px solid $color-list-border;
        }

        input {
          margin-right: $default-margin;
        }
      }
    }

    p {
      text-align: center;
      margin: $default-margin;
    }
  }
</style>
