import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateUserUseCase } from '../../application/updateUser.usecase'
import type { UpdateUserDTO } from '../../domain/User'

export const useUpdateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string
      payload: UpdateUserDTO
    }) => updateUserUseCase(id, payload),

    onSuccess: (updatedUser) => {
      // Invalida lista
      queryClient.invalidateQueries({ queryKey: ['users'] })

      // Actualiza cache individual
      queryClient.setQueryData(
        ['user', updatedUser.id],
        updatedUser
      )
    },
  })
}