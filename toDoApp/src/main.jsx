import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faCirclePlus, faTrash, faCheck }from '@fortawesome/free-solid-svg-icons'
library.add(faCirclePlus, faTrash, faCheck)




import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
