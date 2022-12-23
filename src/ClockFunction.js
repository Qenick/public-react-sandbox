import React, {useEffect, useState} from 'react';

function ClockFunction() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  let intervalID

  useEffect(()=> {
    if (isRunning) {
      intervalID = setInterval(() =>{
        setTime(prevState => prevState + 0.01);
      }, 10)
    }

    return () => {
      clearInterval(intervalID);
    }

  }, [isRunning])

  const onClickStart = () => {
    setIsRunning(true);
  }

  const onClickStop = () => {
    setIsRunning(false);
  }
  const onClickReset = () => {
    setTime(0);
  }

  return (
    <div>
      <h1>{time.toFixed(2)}</h1>
      <h2>{isRunning ? "TAK" : "Nie"}</h2>
      <button onClick={onClickStart}>Start</button>
      <button onClick={onClickStop}>Stop</button>
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
}

export default ClockFunction;