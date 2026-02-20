import { useGetUsersQuery }
from '../../application/queries/useGetUsersQuery'

import { useUserUIStore }
from '../../application/store/userUI.store'

export const useUsersController =
() => {

  const query =
    useGetUsersQuery()

  const selectUser =
    useUserUIStore(
      s => s.selectUser
    )

  return {

    users:
      query.data ?? [],

    isLoading:
      query.isLoading,

    selectUser,

  }

}
