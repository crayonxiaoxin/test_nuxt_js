const to = (promise) => {
  // try catch to avoid 404
  return promise.then((res) => [null, res]).catch((error) => [error])
}

function getApi(axios) {
  return {
    getCategories() {
      return to(axios.$get('/shop/discovery/categories'))
    },
  }
}

export default function ({ $axios, redirect }, inject) {
  const api = getApi($axios)
  // Inject to context as $api
  inject('api', api)
}
