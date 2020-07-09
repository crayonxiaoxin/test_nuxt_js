export default {
  getCategories(axios) {
    return axios.$get('/shop/discovery/categories1')
  },
}
