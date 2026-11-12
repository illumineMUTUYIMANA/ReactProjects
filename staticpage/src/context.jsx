import { createContext, useContext } from "react";
let usercontext = createContext();
let user = "Magret";

function Context(){
  return(
  <usercontext.Provider value={user}>
    <h1 style={{color:"white", backgroundColor:"blue", padding:"12px", borderRadius:"5px", textAlign:"center"}}>The use of UseContext</h1>
    <h3>Hello {user}</h3>
    <Content/>
  </usercontext.Provider>
  );

}

function Content(){
  
  return(
    <>
    
      <h4>Hello content</h4>
      <Content2/>
    </>

  ) 
}

function Content2(){
  let user = useContext(usercontext)
  return(
    // useContext(user)
    <h1>Hello {user}</h1>
  );

}

export default Context;
// export default Content;
