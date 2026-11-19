import {NavLink, Outlet } from "react-router";

 
export default function Layout(){
  let NavStyle = ({isActive})=>isActive?"text-blue-300 text":"hover:text-gray-400"
  return(
    <>
      <nav className="flex justify-end gap-12 p-12 ">
        
        <NavLink to='/Home' end className={NavStyle} >Home</NavLink>
        <NavLink to='/About' className={NavStyle}>About</NavLink>
        <NavLink to='/User/:1' className={NavStyle}>User1</NavLink>
        <NavLink to='/User/:2' className={NavStyle}>User2</NavLink>

      </nav>


      <Outlet/>


    </>

  )

}