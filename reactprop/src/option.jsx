import { useState } from "react";
function Option(){
  let [gender, setOption] = useState('');
  function handleChoice(e){
    setOption(e.target.value);
  }

  return(
    <form action="" value={gender} onChange={handleChoice} method="post">
      <select name="" id="">
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
    </form>
  );
}
export default Option;