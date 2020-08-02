import axios from 'axios'

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
const SEARCH_ENGINE_ID = process.env.REACT_APP_SEARCH_ENGINE_ID

export const services = {
  getImages: (product) => {
    const params = {
      key: GOOGLE_API_KEY,
      cx: SEARCH_ENGINE_ID,
      searchType: 'image',
      lr: 'lang_pt',
      num: 1,
      q: product,
    }
    return axios.get('https://customsearch.googleapis.com/customsearch/v1', { params })
      .then(resp => resp.data.items[0].link)
      .catch(err => err)
  }
}