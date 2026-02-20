import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createUserUseCase } from '../../application/createUser.usecase'
import type { CreateUserDTO } from '../../domain/User'

export const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: CreateUserDTO) =>
      createUserUseCase(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}