import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import User from "./user";
import NotFound from "./notFount";
import Login from "./login";
import Layout from "./layout"; 
 
export default function App(){
  return(
    <>

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route element={<Layout/>} >
          <Route path="/Home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/User/:userID" element={<User/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>

      </Routes>

    </>

  )

}