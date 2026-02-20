import type { AxiosInstance } from 'axios'
import { tokenStorage } from '../tokenStorage'

export const setupAuthInterceptor = (client: AxiosInstance) => {
  client.interceptors.request.use(config => {
    const token = tokenStorage.getAccessToken()

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })
}