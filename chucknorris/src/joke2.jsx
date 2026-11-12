import { useState, useEffect } from 'react';

function Joke2() {
  const [joke, setJoke] = useState('Loading first joke...');
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    // 1. Move the function INSIDE the effect to avoid dependency warnings
    const fetchJoke = async () => {
      try {
        let response = await fetch('https://chucknorris.io', {
          headers: { accept: "application/json" }
        });
        let data = await response.json();
        setJoke(data.value);
      } catch (error) {
        console.error("Failed to fetch joke:", error);
      }
    };

    // 2. Fetch the initial joke immediately
    fetchJoke();

    // 3. Stop here if the user turned off the ticker
    if (!isRunning) return;

    // 4. Set up the interval loop
    const intervalId = setInterval(() => {
      fetchJoke();
    }, 3000);

    // 5. Clean up everything when isRunning changes or component unmounts
    return () => clearInterval(intervalId);
    
  }, [isRunning]); // Safe dependency array

  return (
    <div>
      <h3>Chuck Norris Joke Ticker</h3>
      <p>{joke}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Stop Loading Jokes' : 'Start Loading Jokes'}
      </button>
    </div>
  );
}

export default J
