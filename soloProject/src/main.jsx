import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
// import Info from './info'
// import About from './about'
// import Interests from './intrests'
// import Footer from './footer'
// import App from './App'
import UseRefs from './useref'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Info/>
    <About/>
    <Interests/>
    <Footer/> */}
    {/* <App/> */}
    <UseRefs/>
  </StrictMode>,
)
