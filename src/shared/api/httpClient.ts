import axios from 'axios'
import { httpConfig } from './http.config'

export const httpClient = axios.create({
  baseURL: httpConfig.baseURL,
})

httpClient.interceptors.response.use(
  res => res,
  error => {
    console.error(error)
    return Promise.reject(error)
  }
)
