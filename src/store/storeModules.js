import appEndpoints from '@/api/appEndpoints'

export default {
  state: {
    countriesData: null,
    errorMessage: '',
  },
  mutations: {
    setDataList(state, payload) {
      state.countriesData = payload
    },
    displayError(state, payload) {
      state.errorMessage = payload
    },
  },
  actions: {
    async actionGetCountriesData(context) {
      await appEndpoints.getCountries()
        .then((response) => {
          context.commit('setDataList', response.data)
        })
        .catch(() => {
          context.commit('displayError', 'An error occurred while getting countries from the server. Please try again.')
        })
    },
  },
}
