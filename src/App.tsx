import './App.css'
import { CreateUserPage } from './features/users/presentation/pages/CreateUserPage'
import { EditUserPage } from './features/users/presentation/pages/EditUserPage'
import { UsersPage } from './features/users/presentation/pages/UsersPage'

function App() {

  const userId = "1"
  const initialName = "Jefferson"
  const initialEmail = "jefferson.medina@tempo.com"

  return <>
    <EditUserPage 
      userId={userId} 
      initialName={initialName} 
      initialEmail={initialEmail} />
    <CreateUserPage />
    <UsersPage />
  </>

}
export default App
