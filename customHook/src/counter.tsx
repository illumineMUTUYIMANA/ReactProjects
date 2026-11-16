import { useState } from "react";


function useCounter(){
  const [count,setCount] = useState(0);
  const increment = ()=>setCount(count+1);
  const decrement = ()=>count!==0? setCount(count-1): setCount(0);
  const reset = ()=>setCount(0);
  return [count,increment,decrement,reset] as const;
}

export default function Counter(){
  const [count, increment, decrement,reset] =useCounter();

  return(
    <>
      <p>{count}</p>
      <button type="button" onClick={increment}>+</button>
      <button type="button" onClick={decrement}>-</button>
      <button type="button" onClick={reset}>reset</button>
    </>
  )
}
