import { apiClient } from '../../../shared/api/apiClient'
import type { CreateUserDTO, UpdateUserDTO, User } from '../domain/User'

export const usersApi = {
  create: async (payload: CreateUserDTO): Promise<User> => {
    const { data } = await apiClient.post<User>('/users', payload)
    return data
  },
  update: async (
    id: string,
    payload: UpdateUserDTO
  ): Promise<User> => {
    const { data } = await apiClient.put<User>(
      `/users/${id}`,
      payload
    )

    return data
  },
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/users/${id}`)
  },
}