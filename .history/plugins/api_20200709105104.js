const to = (promise) => {
  return promise.then((res) => [null, res]).catch((error) => [error])
}
export default function ({ $axios, redirect }, inject) {
  const api = {
    getCategories() {
      return to($axios.$get('/shop/discovery/categories'))
    },
  }
  inject('api', api)
}
