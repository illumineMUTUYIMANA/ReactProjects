// import React from "react";
import { useState } from "react";

function Form(){
  let [name,setName]= useState("");
  function getname(e){
    setName(e.target.value);
  }
  return (
    <form action="" method="post">
      <label htmlFor="">Username:</label>
      <input type="text" value={name} onChange={getname} />
      <h3>The name entere is:{name}</h3>
    </form>


  );
}

export default Form;