
import './App.css'
import { CreateUserPage } from './features/users/presentation/pages/CreateUserPage'
import { UsersPage } from './features/users/presentation/pages/UsersPage'
import { EditUserPage } from './features/users/presentation/pages/EditUserPage'
import useUserStore from './features/users/presentation/pages/store'

function App() {
  const {idname,username,email} = useUserStore((state) => state);
  return <>

      <EditUserPage userId={idname} initialName={username} initialEmail={email} />
      <CreateUserPage />
      <UsersPage />
  </>

}
export default App
