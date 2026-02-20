import { apiClient } from '../../../shared/api/apiClient'
import type { CreateUserDTO, User } from '../domain/User'

export const usersApi = {
  create: async (payload: CreateUserDTO): Promise<User> => {
    const { data } = await apiClient.post<User>('/users', payload)
    return data
  },
}