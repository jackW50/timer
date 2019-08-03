import React, { useState, useEffect } from 'react';

export default function Timer(props) {
  const [sec, setSec] = useState(0);
  const [active, setActive] = useState(false);

  function toggle() {
    setActive(!active);
  }

  function reset() {
    setSec(0);
    setActive(false);
  }

  useEffect(() => {
    let interval = null;
    const callBack = () => setSec(sec + 1);
    if (active) {
      interval = setInterval(callBack, 1000)
    } else if (!active && sec !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [sec, active]
  );

  function handleClick(e) {
    setSec(sec + 1);
    setStart(true);
    setActive(true);
  }

  function handleStop(e) {
    setStart(false);
    setActive(false);
  }

  return (
    <div>
      <button onClick={handleClick}>Start</button>
      <h3>{sec}</h3>
      <p>{active ? "Active" : "Not Active"}</p>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}
