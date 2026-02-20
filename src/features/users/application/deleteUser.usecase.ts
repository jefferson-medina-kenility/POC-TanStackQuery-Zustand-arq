import { usersApi } from '../infrastructure/users.api'

export const deleteUserUseCase = async (
  id: string
): Promise<void> => {
  if (!id) {
    throw new Error('User id is required')
  }

  return usersApi.delete(id)
}