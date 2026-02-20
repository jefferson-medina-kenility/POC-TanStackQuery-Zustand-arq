import {
  useUsersController
}
from '../controllers/useUsersController'

export const UsersPage =
() => {

  const {
    users,
    isLoading,
    selectUser
  } = useUsersController()

  if (isLoading)
    return <div>Loading...</div>

  return (
    <div>
      {users.map(user => (      
        <div
          key={user.id}
          onClick={() =>
            selectUser(user.id)
          }
        >
          <div>id: {user.id}</div>
          <div>name: {user.name}</div>
          <div>email: {user.email}</div>
        </div>
      ))}
    </div>
  )

}
