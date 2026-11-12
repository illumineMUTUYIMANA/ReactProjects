import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Joke from './joke'
// import Joke2 from './joke2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Joke/>
    {/* <Joke2/> */}
  </StrictMode>,
)
