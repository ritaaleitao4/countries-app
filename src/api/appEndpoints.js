import axios from 'axios'

export default {
  getCountries() {
    return axios.get('https://restcountries.eu/rest/v2/all')
  },
}
