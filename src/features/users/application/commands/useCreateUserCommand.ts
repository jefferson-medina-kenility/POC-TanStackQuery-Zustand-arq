import { useMutation, useQueryClient }
from '@tanstack/react-query'

import { container }
from '@/app/di/container'

export const useCreateUserCommand =
() => {

  const queryClient =
    useQueryClient()

  return useMutation({

    mutationFn: (input) =>
      container
        .createUserCommand()
        .execute(input),

    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ['users'],
      })

    },

  })

}
