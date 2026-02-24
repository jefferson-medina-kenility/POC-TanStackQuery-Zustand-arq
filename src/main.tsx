import { createRoot } from 'react-dom/client'
import './index.css'
import {
AppProvider
}
  from './app/providers/AppProvider'
import './app/styles/global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UsersPage } from './features/users/presentation/pages/UsersPage.tsx'
import { CreateUserPage } from './features/users/presentation/pages/CreateUserPage.tsx'
import { EditUserPage } from './features/users/presentation/pages/EditUserPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersPage />,
  },
  {
    path: "/create",
    element: <CreateUserPage />,
  },
  {
    path: "/edit",
    element: <EditUserPage/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <AppProvider>
     <RouterProvider router={router} />
  </AppProvider>,
)
