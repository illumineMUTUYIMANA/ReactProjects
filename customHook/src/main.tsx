import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Counter from './counter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Counter/>
  </StrictMode>,
)
