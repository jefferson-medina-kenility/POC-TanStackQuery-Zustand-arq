import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteUserUseCase } from '../../application/deleteUser.usecase'

export const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) =>
      deleteUserUseCase(id),

    onSuccess: (_, id) => {
      // 1️⃣ Invalida lista
      queryClient.invalidateQueries({
        queryKey: ['users'],
      })

      // 2️⃣ Limpia cache individual
      queryClient.removeQueries({
        queryKey: ['user', id],
      })
    },
  })
}