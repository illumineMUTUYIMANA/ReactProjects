import {createRoot} from "react-dom/client"
import { Suspense, lazy } from "react";
import "./index.css";
import { useState } from "react";

import Header from "./header";
// import MainContent from "./maincontent";
const Maincontent = lazy(()=> import ('./maincontent'));
const Footer = lazy(()=> import ('./footer'))
// import Footer from "./footer";
// import Userinput from "./userinput";

function WorkWithObject(){
  let student = {
    names:"Ange",
    ID: "s002",
    Age: 67
  }
  return(
    <h3> Hell!, {student.names} you are {student.Age }years old  </h3>
  );

}

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    {/* < WorkWithObject/> */}
    <Suspense fallback={<h3>Loading...</h3>}>
      <Maincontent />
    <Footer />
    </Suspense>
    {/* <Userinput/> */}
  </>

);


// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))






// function Page() {
//     return (
//         <>
//             <Header />
//             <MainContent />
//             <Footer />
//         </>
//     )
// }

// root.render(
//     <Page />
// )



// function Addition(prop){
//     return(
//         <h2>The Sum Is: {prop.num1+ prop.num2}</h2>
//     )
// }

// createRoot(document.getElementById('root')).render(
//     <Addition num1={10} num2={20}/>
// );




