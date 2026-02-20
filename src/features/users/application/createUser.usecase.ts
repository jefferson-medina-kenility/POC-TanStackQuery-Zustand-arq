import type { CreateUserDTO, User } from '../domain/User'
import { usersApi } from '../infrastructure/users.api'

export const createUserUseCase = async (
  payload: CreateUserDTO
): Promise<User> => {
  // Aquí puedes validar reglas de negocio
  return usersApi.create(payload)
}