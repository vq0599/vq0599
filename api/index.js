import nativeAxios from 'axios'
import { message } from 'antd'
import config from 'config'


const isClient = typeof window !== undefined

export const axios = nativeAxios.create({
  baseURL: config.DOMAIN,
})

const HTTP_STATUS_TO_MESSAGE = (code) => {
  switch (code) {
    case 400:
      return '请求参数错误'
    case 401:
      return '鉴权失败，请重新登录'
    case 413:
      return '文件大小超出限制'
    default:
      return '服务器出错了~'
  }
}

const CUSTOM_CODE_TO_MESSAGE = ({ code, msg }) => {
  switch (code) {
    case 'ERROR_NOT_LOGGED':
      return '账户信息已过期，请重新登录'
    default:
      return msg
  }
}

axios.interceptors.response.use(
  response => {
    if (isClient && response.data.code !== 'SUCCESS') {
      message.warn(CUSTOM_CODE_TO_MESSAGE(response.data), 2)
    }

    return response
  },
  error => {
    if (isClient) {
      message.error(HTTP_STATUS_TO_MESSAGE(error.response.status), 2)
    }

    return Promise.reject(error)
  }
)

const login = ({ email, password }) => {
  return axios.post('/api/v1/login', { email, password })
}

const getLoginStatus = () => {
  return axios.get('/api/v1/login')
}

const getArticles = () => {
  return axios.get('/api/v1/articles')
}

const getArticle = (id) => {
  return axios.get(`/api/v1/articles/${id}`)
}

const addArticle = ({ title, content }) => {
  return axios.post('/api/v1/articles', { title, content })
}

const editArticle = ({ id, title, content }) => {
  return axios.patch(`/api/v1/articles/${id}`, { id, title, content })
}

const deleteArticle = id => {
  return axios.delete(`/api/v1/articles/${id}`)
}

export default {
  login,
  getLoginStatus,
  getArticle,
  getArticles,
  addArticle,
  editArticle,
  deleteArticle,
}
