import React, { useRef, useState } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [running, setRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const startRef = useRef(0);
  const intervalRef = useRef(null);

  const handleStartStop = (e) => {
    if(!running){
      // If hitting start
      startRef.current = Date.now();

      intervalRef.current = setInterval(() => {
        const newTimeElapsed = (Date.now() - startRef.current);
        if(newTimeElapsed >= 1){
          startRef.current = Date.now();
          setTimeElapsed(current => current + newTimeElapsed);
        }
      }, 0);
    } else {
      // If hitting stop
      clearInterval(intervalRef.current);
    }
    
    setRunning(!running);
  }

  const handleClear = (e) => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setTimeElapsed(0);
    startRef.current = 0;
    intervalRef.current = null;
  }

  const convertedTimeElapsed = Math.floor(timeElapsed / 1000);

  return (
    <div className="Stopwatch">
      {convertedTimeElapsed} <br />
      <button onClick={handleStartStop} >{(!running) ? "Start" : "Stop"}</button>
      <button onClick={handleClear} >Clear</button>
    </div>
  );
}

export default Stopwatch;