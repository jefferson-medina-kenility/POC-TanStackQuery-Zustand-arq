import './App.css'
import { UserItem } from './features/users/presentation/components/UserItem'
import { CreateUserPage } from './features/users/presentation/pages/CreateUserPage'
import { EditUserPage } from './features/users/presentation/pages/EditUserPage'
import { UsersPage } from './features/users/presentation/pages/UsersPage'

function App() {
  const userId = "2"
  const initialName = "manuela"
  const initialEmail = "manuela.medina@tempo.com"

  return <>
    <UserItem  id={userId}  name={initialName} />
    <EditUserPage 
      userId={userId} 
      initialName={initialName} 
      initialEmail={initialEmail} />
    <CreateUserPage />
    <UsersPage />
  </>

}
export default App
