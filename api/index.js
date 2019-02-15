import nativeAxios from 'axios'
import config from 'config'


export const axios = nativeAxios.create({
  baseURL: config.DOMAIN,
  withCredentials: true,
})

export const API_PREFIX = '/api/v1'

const getArticles = ({ page = 1, page_size = 10 }) => {
  return axios.get(`${API_PREFIX}/articles?page=${page}&page_size=${page_size}`)
}

const getArticle = (id) => {
  return axios.get(`${API_PREFIX}/articles/${id}`)
}

export default {
  getArticle,
  getArticles,
}
