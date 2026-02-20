import { useQuery }
from '@tanstack/react-query'
import { container }
from '../../../../app/di/container'

export const useGetUsersQuery =
() => {

  return useQuery({

    queryKey: ['users'],

    queryFn: () =>
      container
        .getUsersQuery()
        .execute(),

  })

}
