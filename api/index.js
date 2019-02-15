import nativeAxios from 'axios'
import config from 'config'


export const axios = nativeAxios.create({
  baseURL: config.DOMAIN,
  withCredentials: true,
})

export const API_PREFIX = '/api/v1'

const getArticles = () => {
  return axios.get(`${API_PREFIX}/articles`)
}

const getArticle = (id) => {
  return axios.get(`${API_PREFIX}/articles/${id}`)
}

export default {
  getArticle,
  getArticles,
}
