import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  const [run, setRun] = useState<boolean>(true);

  useEffect(() => {
    let timer : number = 0;

    if (run) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 2000);
    }
    return () => clearInterval(timer);
  }, [run]);

  return (
    <>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setRun((prevRun) => !prevRun);
        }}
      >
        {run ? "Stop" : "Start"}
      </button>
    </>
  );
}

export default App;
