import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TouchTypingApp from './touch'
import Context from './context'
// import Header from './header'
// import Main from './maincontent'
// import App from './App.jsx'
// import Arraylist from './array'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Header/>
    <Main/>
    <Arraylist/> */}
    <TouchTypingApp/>
    <Context/>
  </StrictMode>,
)
