export default function ({ $axios, redirect }, inject) {
  const api = {
    getCategories() {
      return $axios.$get('/shop/discovery/categories')
    },
  }
  inject('api', api)
}
