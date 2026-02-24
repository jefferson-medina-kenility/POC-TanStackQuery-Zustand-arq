import { useNavigate } from 'react-router';
import { UserItem } from '../components/UserItem';
import { useUsersController } from '../controllers/useUsersController'

export const UsersPage =
  () => {
    const {
      users,
      isLoading,
      selectUser
    } = useUsersController()

    const navigate = useNavigate();

    if (isLoading)
      return <div>Loading...</div>


    return (
      <div className="flex flex-col">
        <button className="font-medium text-blue-600 hover:underline"  onClick={() => navigate('/create')}>
          Create user
        </button>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead
                  className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr>
                    <th scope="col" className="px-6 py-4">#</th>
                    <th scope="col" className="px-6 py-4">Id</th>
                    <th scope="col" className="px-6 py-4">Name</th>
                    <th scope="col" className="px-6 py-4">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                      key={user.id}
                      onClick={() =>
                        selectUser(user.id)
                      }
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                      <td className="whitespace-nowrap px-6 py-4">{user.id}</td>
                      <td className="whitespace-nowrap px-6 py-4">{user.name}</td>
                      <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4 text-center space-x-2">
                        <button className="font-medium text-blue-600 hover:underline" 
                          onClick={() => navigate('/edit', { state: { id: user.id, name:user.name, email:user.email  } })}>
                          Editar
                        </button>
                        <UserItem id={user.id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
