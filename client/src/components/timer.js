import React, { useState, useEffect } from 'react';

export default function Timer(props) {
  const [sec, setSec] = useState(0);
  const [start, setStart] = useState(false);

  // function callBack() {
  //   setSec(sec + 1);
  // }

  useEffect(() => {
    let interval = null;
    const callBack = () => setSec(sec + 1);
    if (start === true) {
      interval = setInterval(callBack, 1000)
    }


    return () => clearInterval(interval);
  }, [sec, start]
  );

  function handleClick(e) {
    setSec(sec + 1);
    setStart(true);
  }

  function handleStop(e) {
    setStart(false);
  }

  return (
    <div>
      <button onClick={handleClick}>Start</button>
      {sec}
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}
