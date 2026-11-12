import { useEffect, useRef, useState } from "react";

function UseRefs(){
  let [id, setId] = useState(0);
  let timerId = useRef(0);
  let intervalRef = useRef(null); 

  useEffect(()=>{
    intervalRef.current = setInterval(()=>{
      timerId.current+=id;
    },2000);
    return function clear (){
      clearInterval(intervalRef.current);
    }
  },[id]);

  return (
    <>
    <p> {()=> timerId.current} </p>
    <button onClick={()=>setId(id+1)}>Start</button>
    <button onClick={()=>timerId.current=0}>reset</button>
    <button onClick={()=> clearInterval(intervalRef.current)}>stop</button>
    </>
  );
}

export default UseRefs;