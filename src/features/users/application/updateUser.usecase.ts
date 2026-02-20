import type { UpdateUserDTO, User } from '../domain/User'
import { usersApi } from '../infrastructure/users.api'

export const updateUserUseCase = async (
  id: string,
  payload: UpdateUserDTO
): Promise<User> => {

  if (!id) {
    throw new Error('User id is required')
  }

  // Aquí puedes aplicar reglas de negocio
  return usersApi.update(id, payload)
}