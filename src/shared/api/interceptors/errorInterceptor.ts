import type { AxiosInstance, AxiosError } from 'axios'
import { HttpError } from '../HttpError'

export const setupErrorInterceptor = (client: AxiosInstance) => {
  client.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
      const status = error.response?.status
      const data = error.response?.data as any

      const normalizedError = new HttpError({
        message:
          data?.message ??
          error.message ??
          'Unexpected server error',
        status,
        code: data?.code,
        details: data,
      })

      return Promise.reject(normalizedError)
    }
  )
}