import React, { useState } from "react";
// import { useState } from "react";
function Userinput(){
  let [name,setName] = useState('');

  function getName(e){
    setName (e.target.value);
  }

    return(
      <form action="" method="post">
        <label>
          UserName:
        </label>
          <input type="text" value={name} onChange={getName} />


        <p>the current name is: {name}</p>
      </form>
    );
}
export default Userinput