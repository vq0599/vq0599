import nativeAxios from 'axios'
import config from 'config'


export const axios = nativeAxios.create({
  baseURL: config.DOMAIN,
  withCredentials: true,
})

const getArticles = () => {
  return axios.get('/api/v1/articles')
}

const getArticle = (id) => {
  return axios.get(`/api/v1/articles/${id}`)
}

export default {
  getArticle,
  getArticles,
}
