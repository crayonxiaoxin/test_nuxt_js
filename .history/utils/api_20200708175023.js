export default({ $axios })=> {
  getCategories() {
    return $axios.$get('/shop/discovery/categories')
  }
}
