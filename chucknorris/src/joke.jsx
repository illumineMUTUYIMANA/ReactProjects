import { useEffect } from "react";
import { useState } from "react";

function Joke(){
  let [joke, setJoke] = useState('');

  useEffect(()=>{
    const fetchData =async()=>{
    let response = await fetch('https://api.chucknorris.io/jokes/random',{
      headers: {
        accept:"application/json"
      }
    });
    let jokes = await response.json();
    setJoke(jokes.value);
    };
  fetchData();
  },[]

  );
  
  return(
    <div>
      <p>{joke}</p>
      <button onClick={()=>setJoke}>Load Jokes</button>
    </div>

  );
}

export default Joke;