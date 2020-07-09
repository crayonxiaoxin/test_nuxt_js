import axios from '@nuxtjs/axios'
export default () => {
  getCategories: () => {
    return axios.$get('/shop/discovery/categories')
  }
}
