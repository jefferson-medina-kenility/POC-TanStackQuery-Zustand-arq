import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppProvider} from './app/providers/AppProvider'
import './app/styles/global.css'

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <App />
  </AppProvider>,
)
