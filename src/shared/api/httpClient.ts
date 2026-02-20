import axios from 'axios'

export const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
})

httpClient.interceptors.response.use(
  res => res,
  error => {
    console.error(error)
    return Promise.reject(error)
  }
)
