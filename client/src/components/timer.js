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
    <div className="app">
      <h3 className="time" >{sec}</h3>
      <p>{active ? "Pause" : "Start"}</p>
      <button className={`button button-primary button-primary-${active ? 'active' : 'inactive'}`} onClick={toggle}>{active ? "Pause" : "Start"}<</button>
      <button className="button" onclick={reset}>
        Reset
      </button>
    </div>
  )
}
