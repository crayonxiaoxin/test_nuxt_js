export default () => {
  getCategories: () => {
    return $axios.$get('/shop/discovery/categories')
  }
}