import React, { useEffect, useState } from 'react'

const App = () => {

  const [initialTime, setInitialTime] = useState(30)

  const [timeLeft, setTimeLeft] = useState(30);

  const [isRunning, setIsRunnig] = useState(false);

  useEffect( () => {

    let timerId;
    if(isRunning && timeLeft > 0){
      timerId = setInterval(()=>{
        setTimeLeft((prev) => prev - 1);
      }, 1000)
    }

   return ()=> clearInterval(timerId);

  }, [isRunning, timeLeft]);

  const startButton = () => {
    if( timeLeft > 0){
    setIsRunnig(true)
    }
  }

  const stopButton = () => {
    setIsRunnig(false);
  }

  const resetButton = () => {
    setIsRunnig(false)
    setTimeLeft(initialTime)
  }

  const inputButtonChange =(e) => {
   const value = Number(e.target.value);
   setInitialTime(value);
   setTimeLeft(value);
   setIsRunnig(false);
  }




  return (
    <div>
      <h1>Count Down Timer Project</h1>
      <label>Settimeout(secounds): </label>
      <input type='number' value={initialTime} onChange={inputButtonChange}/><br/>
      <p>time left: {timeLeft} secounds</p> <br/>

      <button disabled={isRunning || timeLeft ===0} onClick={startButton}>Start</button>
      <button onClick={stopButton} disabled={!isRunning}>Stop</button>
      <button onClick={resetButton}>Reset</button>
      
    </div>
  )
}

export default App
