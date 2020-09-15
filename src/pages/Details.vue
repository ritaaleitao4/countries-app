<template>
  <div class="container">
    <div>
      <button @click="$router.push({name: 'homepage'})">
        &#x3c; go back
      </button>

      <div class="details-content" v-if="country">
        <div>
          <img
            :src="country.flag"
            :alt="country.name + '-flag'"/>

          <template v-if="country.borders.length">
            <p>Borders:</p>
            <button
              v-for="(border, index) in country.borders"
              :key="index"
              @click="showNewCountry(border)">
                {{border}}
            </button>
          </template>
        </div>
        <ul>
          <li>
            Name:
            <p>{{country.name}}</p>
          </li>
          <li>
            Native name:
            <p>{{country.nativeName}}</p>
          </li>
          <li>
            Region:
            <p>{{country.region ? country.region : '-'}}</p>
          </li>
          <li>
            Subregion:
            <p>{{country.subregion ? country.subregion : '-'}}</p>
          </li>
          <li>
            Area:
            <p>{{country.area}}</p>
          </li>
          <li>
            Population:
            <p>{{country.population}}</p>
          </li>
          <li>
            Languages:
            <p>{{country.languages.map(lang => lang.name).join(', ')}}</p>
          </li>
          <li>
            Currencies:
            <p>{{country.currencies.map(curr => `${curr.name} ${curr.symbol}`).join(', ')}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'details',
    data() {
      return {
        country: null,
      }
    },
    computed: {
      ...mapState({
        countriesData: (state) => state.storeModules.countriesData,
      }),
    },
    methods: {
       ...mapActions([
        'actionGetCountriesData',
      ]),
      showNewCountry(country) {
        this.country = this.countriesData.find((elm) => elm.alpha3Code === country)
      },
    },
    created() {
      this.country = this.countriesData.find((elm) => elm.alpha3Code === this.$route.params.id)
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

    > div {
      width: 100%;
      max-width: $content-width;
      margin: $default-margin auto;
      padding: $default-padding;

      button {
        font-family: $font-OS;
        font-weight: 600;
        font-size: 16px;
        color: $color-header-title;
        margin-bottom: $default-margin;
      }

      .details-content {
        display: flex;
        position: relative;
        justify-content: flex-start;

        > div {
          img {
            max-height: 207px;
            height: 100%;
            width: auto;
          }

          p {
            @include list-text;
          }

          button {
            @include list-title;
            margin: 0;
            display: block;
            cursor: pointer;
          }
        }

        ul {
          margin-left: $default-margin;

          li {
            display: flex;
            @include list-text;

            p {
              @include list-title;
              margin: 0 0 $min-margin $min-margin;
            }
          }
        }
      }
    }
  }
</style>
