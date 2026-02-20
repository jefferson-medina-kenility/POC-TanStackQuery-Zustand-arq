import axios from 'axios'
import { httpConfig } from './http.config'
import { setupAuthInterceptor } from './interceptors/authInterceptor'
import { setupErrorInterceptor } from './interceptors/errorInterceptor'

export const apiClient = axios.create({
  baseURL: httpConfig.baseURL,
  timeout: httpConfig.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
})

setupAuthInterceptor(apiClient)
setupErrorInterceptor(apiClient)