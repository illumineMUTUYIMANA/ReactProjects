// import React from "react";
function Arraylist(){
  let arr = ['amazi','Umuriro','Imihanda','Amashuri','Amavuriro'];
 return(
  <ol>
    {arr.map((itera,index)=> <li key={index}> {itera}</li>)}
  </ol>
 );
}

export default Arraylist;